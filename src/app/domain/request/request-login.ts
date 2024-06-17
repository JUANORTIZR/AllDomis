export class RequestLogin {
  nickname!: string;
  password!: string;
  email!: string;
}

export class RequestRegister {
  nickname!: string;
  password!: string;
  email!: string;
  name!: string;
  phone_number!: string;
}
export class RequestActivate {
  nickname!: string;
  code!: string;
}
