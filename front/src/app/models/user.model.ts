export class User {
  public _id?: string;
  public userName: string;
  public firstName: string;
  public lastName: string;
  public phoneNumber: string;
  public identification: string;
  public email: string;
  public password: string;
  public userId?: string;

  constructor(dataUser?: any) {
    this._id = dataUser ? dataUser._id : null;
    this.userName = dataUser ? dataUser.userName : null;
    this.firstName = dataUser ? dataUser.firstName : null;
    this.lastName = dataUser ? dataUser.lastName : null;
    this.phoneNumber = dataUser ? dataUser.phoneNumber : null;
    this.identification = dataUser ? dataUser.identification : null;
    this.email = dataUser ? dataUser.email : null;
    this.password = dataUser ? dataUser.password : null;
    this.userId = dataUser ? dataUser.userId : null;
  }
}
