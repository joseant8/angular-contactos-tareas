import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  id: number = 1

  contact: Contact = new Contact(1,'Jose', 'email', 'm', 't')

  constructor() { }

  ngOnInit(): void {
  }

}
