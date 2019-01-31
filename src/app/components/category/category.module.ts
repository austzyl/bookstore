import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {RouterModule, Routes} from "@angular/router";

import {CategoryComponent} from "./category.component";
import {PaginatorModule, SplitButtonModule, TieredMenuModule} from "primeng/primeng";
import { BooklistComponent } from './booklist/booklist.component';
import {PanelModule} from "primeng/panel";
import { DragulaModule } from 'ng2-dragula';

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
    PanelModule,
    SplitButtonModule,
    RouterModule.forChild(CGROUTES),
    DragulaModule.forRoot()
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
