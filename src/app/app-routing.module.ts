import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './components/forms/todo-form/todo-form.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TodoCreatePageComponent } from './pages/todo-create-page/todo-create-page.component';
import { TodoDetailPageComponent } from './pages/todo-detail-page/todo-detail-page.component';
import { TodoEditPageComponent } from './pages/todo-edit-page/todo-edit-page.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';

// rutas de la app para nuestras páginas
const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'home', // http:localhost:4200/home
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', // http:localhost:4200/login
    component: LoginPageComponent
  },
  {
    path: 'register', // http:localhost:4200/register
    component: RegisterPageComponent
  },
  {
    path: 'contacts',  // http:localhost:4200/contacts
    component: ContactsPageComponent,
    canActivate: [AuthGuard],   // se pueden aplicar varios guards, por eso se ponen en una lista
  },
  {
    path: 'contacts/:id', // http:localhost:4200/contacts/1
    component: ContactDetailPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/edit/:id', // http:localhost:4200/contacts/update/1
    component: ContactEditPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'todos', // http:localhost:4200/todos
    component: TodosPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'todos/create', // http:localhost:4200/todos/create
    component: TodoCreatePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'todos/edit/:id', // http:localhost:4200/todos/create
    component: TodoEditPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'todos/:id', // http:localhost:4200/todos/1
    component: TodoDetailPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
