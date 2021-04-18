import { IContact } from "./icontact.interface";
import { ContactService } from "src/app/services/contact/contact.service"

export class Contact implements IContact{
  id: number = 0;
  email: string = '';
  first_name: string = '';
  last_name: string = '';
  avatar: string = '';

  constructor(id: number, email: string, first_name: string, last_name: string, avatar: string){
    this.id= id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.avatar = avatar;
  }
}
