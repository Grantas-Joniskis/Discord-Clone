import User from 'types/user';

class CurrentUser {
  private static token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgyMTc1NjAyLCJleHAiOjE2ODIxODY0MDJ9.KVIfzw1Tm1AQ2gauSgMAo1SA_Q_ck9lNmR79u-gN2nE';

  private static id: number = 1;

  private static username: string = 'Test';

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
