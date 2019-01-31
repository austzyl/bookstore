import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {BookDetailComponent} from "./book-detail.component";

export const CGROUTES: Routes = [
  {
    path: 'detail/:bookname',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CGROUTES),

  ],
  exports: [],
  declarations: [
    BookDetailComponent
  ],

  providers: [

  ],
})
export class BookDetailModule { }
