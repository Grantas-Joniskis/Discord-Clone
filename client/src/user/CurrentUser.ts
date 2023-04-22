class CurrentUser {
  private static token: string;

  private static id: number;

  private static username: string;

  public static create(token: string, id: number, username: string): void {
    console.log(CurrentUser.token);
    CurrentUser.token = token;
    CurrentUser.id = id;
    CurrentUser.username = username;
  }

  public static getToken(): string {
    console.log(CurrentUser.token);
    return CurrentUser.token;
  }

  public static getId(): number {
    return CurrentUser.id;
  }

  public static getUsername(): string {
    return CurrentUser.username;
  }
}

export default CurrentUser;