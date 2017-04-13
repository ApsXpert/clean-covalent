import {Address} from "./address";
import {User} from "./user";
export class Message {
  id: number;
  address: Address;
  user: User;
  sentOn: Date;
  subject: string;
  emailBody: string;
  isUnread: boolean;
  isStar: boolean;s
  priority: string;
}
