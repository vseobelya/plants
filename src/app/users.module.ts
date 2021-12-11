import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing/users-routing.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UsersService } from './users.service';


@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserDeleteComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
