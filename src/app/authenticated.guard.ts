

import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {UserService} from "./components/user/services/userService";
import {Observable} from "rxjs/index";

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private _router: Router,
              private _userService: UserService) {}

  canActivate(): Observable<boolean> | boolean {
    console.log("page changed to ", this._router.url);
    if (this._userService.authenticated()) {
      return true;
    } else {
      this._router.navigateByUrl('/user/login');
      return false;
    }
  }

}
