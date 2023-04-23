export default class UserManager {
  private static users = new Array<{ username: string, id: number }>();

  public static fromAxiosResponse(responseData: any) {
    responseData.forEach((data: any) => {
      UserManager.users.push({
        username: data.username,
        id: data.id,
      });
    });
  }

  public static getUserFromId(id: number) {
    return UserManager.users.find((u) => u.id === id);
  }
}
