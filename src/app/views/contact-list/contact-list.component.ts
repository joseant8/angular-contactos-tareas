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
  displayedColumns: string[] = ['nombre_completo', 'email', 'detalle'];

  // inyectamos el contact service
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((response) => {
      this.contactList = response.data;
    });
  }

  /*
  updateList(contact: Contact): Contact[]{
    this.contactList[contact.id] = contact
    return this.contactList
  }*/

}
