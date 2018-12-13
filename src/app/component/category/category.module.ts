import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {RouterModule, Routes} from "@angular/router";

import {CategoryComponent} from "./category.component";
import {PaginatorModule, TieredMenuModule} from "primeng/primeng";
import { BooklistComponent } from './booklist/booklist.component';

export const CGROUTES: Routes = [
  {
    path: 'category',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    TieredMenuModule,
    PaginatorModule,
    RouterModule.forChild(CGROUTES)
  ],
  exports: [],
  declarations: [
    CategoryComponent,
    BooklistComponent
  ],

  providers: [

  ],
})
export class CategoryModule { }
