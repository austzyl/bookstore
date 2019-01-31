import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./common/home/home.component";
import {HistoryComponent} from "./common/home/lishijunshi/history/history.component";

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
            loadChildren:'./components/user/user.module#UserModule'
          },
          {
            path:'category',
            loadChildren:'./components/category/category.module#CategoryModule'
          },
          {
            path:'detail',
            loadChildren:'./components/book-detail/book-detail.module#BookDetailModule'
          },
          {path: '**',component: HomeComponent}
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
