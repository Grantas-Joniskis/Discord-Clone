class InterfaceHelper {
    public static implementsTKeys<T>(obj: any, keys: (keyof T)[]): obj is T {
        if (!obj || !Array.isArray(keys)) {
            return false;
        }
        return keys.reduce((impl, key) => impl && key in obj, true);
    }
}

export default InterfaceHelper;