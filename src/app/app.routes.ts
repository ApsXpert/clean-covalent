import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from "./auth/register/register.component";
import {UsersComponent} from "./users/users.component";
import {UsersFormComponent} from "./users/form/form.component";

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'users', children: [
    {path: '', component: UsersComponent},
    {path: 'add', component: UsersFormComponent},
    {path: ':id/delete', component: UsersFormComponent},
    {path: ':id/edit', component: UsersFormComponent},
  ]
  }
];

export const appRoutingProviders: any[] = [];

export const appRoutes: any = RouterModule.forRoot(routes, {useHash: true});
