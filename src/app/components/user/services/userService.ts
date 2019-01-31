import {Injectable} from "@angular/core";
import {SessionStorageService} from "../../../common/services/session-storage.service";

@Injectable()
export class UserService {

  constructor (private _localStorageService: SessionStorageService) {}

  authenticated() {
    return true === this._localStorageService.getAuth('isAuthenticated');
  }

  login(user) {

  }
  logout() {
    // localStorage.removeItem('access_token');
    // localStorage.removeItem('refresh_token');
    // localStorage.removeItem('username');
    // localStorage.removeItem('isAuthenticated');
    this._localStorageService.clearAuth();
    return true;
  }
  register(user) {

  }
}
