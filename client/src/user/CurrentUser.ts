class CurrentUser {
  private static token: string;

  private static id: number;

  private static username: string;

  private static receiver: User | undefined;

  public static create(token: string, id: number, username: string): void {
    CurrentUser.receiver = undefined;
    CurrentUser.token = token;
    CurrentUser.id = id;
    CurrentUser.username = username;
  }

  public static setReceiver(receiver: User) {
    CurrentUser.receiver = receiver;
  }

  public static getToken(): string {
    return CurrentUser.token;
  }

  public static getId(): number {
    return CurrentUser.id;
  }

  public static getUsername(): string {
    return CurrentUser.username;
  }

  public static getReceiver(): User | undefined {
    return CurrentUser.receiver;
  }
}

export default CurrentUser;
