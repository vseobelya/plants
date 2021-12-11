import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

const routes: Routes = [
   { path: '', children: [
     { path: 'create', component: UserEditComponent },
     { path: ':id/edit', component: UserEditComponent },
     { path: ':id/delete', component: UserDeleteComponent },
     { path: '', component: UserListComponent }
   ]}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
