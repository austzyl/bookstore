import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavComponent} from "./common/nav/nav.component";
import {MenubarModule} from "primeng/menubar";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./common/home/home.component";
import {FormsModule} from "@angular/forms";
import {NotFoundComponent} from "./common/not-found/not-found.component";
import {ButtonModule} from "primeng/button";
import {LightboxModule} from "primeng/lightbox";
import {ToolbarModule} from "primeng/primeng";
import {GalleriaModule} from "primeng/galleria";
import {PanelModule} from "primeng/panel";
import {HistoryComponent} from "./common/home/lishijunshi/history/history.component";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {SessionStorageService} from "./common/services/session-storage.service";
import {UserService} from "./components/user/services/userService";
import {AuthenticatedGuard} from "./authenticated.guard";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    LightboxModule,
    ToolbarModule,
    GalleriaModule,
    PanelModule,
    ToastModule,
    HttpClientModule

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MessageService,
    SessionStorageService,
    UserService,
    AuthenticatedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
