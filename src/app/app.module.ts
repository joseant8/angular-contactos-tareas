import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// Angular Material modules
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './views/todo-list/todo-list.component';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { TodoDetailPageComponent } from './pages/todo-detail-page/todo-detail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { NavComponent } from './components/nav/nav.component';
import { EditContactFormComponent } from './components/forms/edit-contact-form/edit-contact-form.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { TodoFormComponent } from './components/forms/todo-form/todo-form.component';
import { TodoCreatePageComponent } from './pages/todo-create-page/todo-create-page.component';
import { TodoEditPageComponent } from './pages/todo-edit-page/todo-edit-page.component';
import { EditTodoFormComponent } from './components/forms/edit-todo-form/edit-todo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    TodoComponent,
    TodoListComponent,
    ContactListComponent,
    LoginFormComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    TodosPageComponent,
    ContactDetailPageComponent,
    TodoDetailPageComponent,
    RegisterFormComponent,
    NavComponent,
    EditContactFormComponent,
    ContactEditPageComponent,
    TodoFormComponent,
    TodoCreatePageComponent,
    TodoEditPageComponent,
    EditTodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
