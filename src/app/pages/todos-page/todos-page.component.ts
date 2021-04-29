import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

}
