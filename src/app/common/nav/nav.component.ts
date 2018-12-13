import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {SessionStorageService} from "../services/session-storage.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: MenuItem[];

  @Output()
  logoutEvent: EventEmitter<any> = new EventEmitter();
  isLogin: boolean = false;

  constructor(private router: Router,
               private sessionStorageService:SessionStorageService) { }


  toRegister() {
    console.log("auth:",this.sessionStorageService.getAuth());

    this.router.navigate(['/user/signup']);
  }
  toLogin() {
    console.log("auth:",this.sessionStorageService.getAuth());

    this.router.navigate(['/user/login']);
  }

  logout() {
    this.sessionStorageService.clearAll();
    console.log("auth:",this.sessionStorageService.getAuth());
    this.router.navigate(['/user/login']);
  }

  ngOnInit() {
    this.items =  [
      {
        label: '首页',
        icon: 'pi pi-fw pi-file',
        routerLink:['/']
      },
      {
        label: '分类',
        icon: 'pi pi-fw pi-pencil',
        routerLink:['/category/category']
      },
      {
        label: '榜单',
        icon: 'pi pi-fw pi-question',
        items: []
      },
      {
        label: '我的书架',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {label: 'Save', icon: 'pi pi-fw pi-save'},
              {label: 'Update', icon: 'pi pi-fw pi-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              {label: 'Delete', icon: 'pi pi-fw pi-minus'}
            ]
          }
        ]
      }

    ];
    if (this.sessionStorageService.getAuth()) {
      this.isLogin = true;
    }
  }

}
