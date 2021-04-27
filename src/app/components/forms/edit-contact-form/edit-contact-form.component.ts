import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact/contact.model';

@Component({
  selector: 'app-edit-contact-form',
  templateUrl: './edit-contact-form.component.html',
  styleUrls: ['./edit-contact-form.component.scss']
})
export class EditContactFormComponent implements OnInit {

  @Input() contact: Contact = new Contact(0,'','','','',)

  updateForm: FormGroup = new FormGroup({});

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      email: [this.contact.email, Validators.email],
      name: this.contact.first_name,
      last_name: this.contact.last_name
    });
  }

  update(): void {
    let contact: Contact = this.contact
    if(this.updateForm.valid){
      if(this.updateForm.value.email){
        contact.email = this.updateForm.value.email
      }
      if(this.updateForm.value.name){
        contact.first_name = this.updateForm.value.name
      }
      if(this.updateForm.value.last_name){
        contact.last_name = this.updateForm.value.last_name
      }
    }
    this.router.navigate(['/contacts/' + contact.id], { state: contact });
  }

}
