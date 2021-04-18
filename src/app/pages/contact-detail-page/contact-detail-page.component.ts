import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact/contact.model';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  idContact: string = '';
  contact: any = new Contact(1,'Jose', 'email', 'm', 't');

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      if(params.id){
        this.idContact = params.id
      }else{
        alert('Contacto no enocontrado');
        this.returnBack();
      }
    })

    // obtenemos el contacto que se pasa por la ruta desde 'contact-page'
    if(this.location.getState()){
      this.contact = this.location.getState();
    }
  }

  returnBack() {
    // this.router.navigate(['/contacts'])
    this.location.back();
  }

}
