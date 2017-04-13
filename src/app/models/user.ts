import {Message} from "./message";
import {Address} from "./address";
import {Role} from "./role";
export class User {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  messages: Message[];
  addresses: Address[];
  roles: Role[];
}
