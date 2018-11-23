import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private _username: string;

  get username() {
    return this._username;
  }

  set username(value) {

    this._username = value;
  }

}
