import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./common/home/home.component";
import {NotFoundComponent} from "./common/not-found/not-found.component";
import {HistoryComponent} from "./common/home/lishijunshi/history/history.component";
import {AuthenticatedGuard} from "./authenticated.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
          {
            path: '',
            component: HomeComponent,
            children: [
              { path: 'history', component: HistoryComponent }
            ],
            //canActivate: [AuthenticatedGuard]
          },
          {
            path:'user',
            loadChildren:'./component/user/user.module#UserModule'
          },
          {
            path:'category',
            loadChildren:'./component/category/category.module#CategoryModule'
          },
          {path: '**',component: HomeComponent}
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
