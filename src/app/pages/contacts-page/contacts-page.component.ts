import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  //id: number = 1

  //@Input() contact: Contact = new Contact(this.id,'', '', '', '')
  //contact: Contact = new Contact(this.id,'jose@email', 'Jose', 'm', 't')

  constructor() { }

  ngOnInit(): void {
  }

}
