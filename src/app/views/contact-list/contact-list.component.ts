import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactList: Contact[] = [];

  // inyectamos el contact service
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactList = this.contactService.getAllContacts();

    // con Observable  sesion4 - 3:49:00
    /*
    this.contactService.getAllContacts().subscribe((response: Contact[]) => {
      this.contactList = response;
    });
    */
  }

}
