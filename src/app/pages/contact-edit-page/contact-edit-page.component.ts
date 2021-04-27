import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Contact } from 'src/app/models/contact/contact.model';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  contact: any = new Contact(0,'', '', '', '');

  constructor(private location: Location) { }

  ngOnInit(): void {
    if(this.location.getState()){
      this.contact = this.location.getState();
    }
  }

}
