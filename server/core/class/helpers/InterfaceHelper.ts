
class InterfaceHelper {
    /**
     * Get if the class implement a method from an interface (TS can't check through "instanceof")
     * @param obj
     * @param keys
     */
    public static implementsTKeys<T>(obj: any, keys: (keyof T)[]): obj is T {
        if (!obj || !Array.isArray(keys)) {
            return false;
        }
        return keys.reduce((impl, key) => impl && key in obj, true);
    }
}

export default InterfaceHelper;