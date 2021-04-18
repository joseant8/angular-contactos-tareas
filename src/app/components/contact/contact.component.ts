import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact = new Contact(0, '', '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
