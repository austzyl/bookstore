import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserService} from "./services/userService";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {RouterModule, Routes} from "@angular/router";
import { FgpasswordComponent } from './fgpassword/fgpassword.component';
import {UserComponent} from "./user.component";
import { DragulaModule } from 'ng2-dragula';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'fgpassword',
    component: FgpasswordComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    RouterModule.forChild(ROUTES),
    DragulaModule.forRoot()
  ],
  exports: [],
  declarations: [
    LoginComponent,
    SignupComponent,
    FgpasswordComponent,
    UserComponent
  ],

  providers: [
    UserService
  ],
})
export class UserModule { }
