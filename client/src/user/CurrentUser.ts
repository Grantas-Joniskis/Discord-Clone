class CurrentUser {
  private static token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsImlhdCI6MTY4MjE3MTU0NCwiZXhwIjoxNjgyMTgyMzQ0fQ.aSmp_Oi1uTjAU8weqPLvrgsCqZQdy4uQrfmO3xmMQhE';

  private static id: number = 18;

  private static username: string = 'Test';

  public static create(token: string, id: number, username: string): void {
    CurrentUser.token = token;
    CurrentUser.id = id;
    CurrentUser.username = username;
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
}

export default CurrentUser;
