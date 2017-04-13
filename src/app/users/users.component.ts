import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MdSnackBar } from '@angular/material';

import { TdLoadingService, TdDialogService, TdMediaService } from '@covalent/core';

import {UsersService} from "./users.service";
import {User} from "./user";

@Component({
  selector: 'qs-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  viewProviders: [ UsersService ],
})
export class UsersComponent implements AfterViewInit {

  users: User[];
  filteredUsers: User[];

  constructor(private _titleService: Title,
              private _router: Router,
              private _loadingService: TdLoadingService,
              private _dialogService: TdDialogService,
              private _snackBarService: MdSnackBar,
              private _usersService: UsersService,
              public media: TdMediaService) {

    this.users = this._usersService.users;
  }

  goBack(route: string): void {
    this._router.navigate(['/']);
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();

    this._titleService.setTitle( 'Covalent Users' );
    this.loadUsers();
  }

  filterUsers(displayName: string = ''): void {
    this.filteredUsers = this.users.filter((user: User) => {
      return user.displayName.toLowerCase().indexOf(displayName.toLowerCase()) > -1;
    });
  }

  loadUsers(): void {
    this._loadingService.register('users.list');
    this._usersService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        this.filteredUsers = users;
        this._loadingService.resolve('users.list');
      },
      (error: Error) => {
        console.log(error);
        this._loadingService.resolve('users.list');
      }
    )
  }

  deleteUser(id: string): void {
    this._snackBarService.open('User deleted', 'Ok');
  }

}
