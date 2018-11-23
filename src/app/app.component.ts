import { Component, OnInit } from '@angular/core';
import {SessionStorageService} from "./common/services/session-storage.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {  filter } from 'rxjs/operators';
import {UserService} from "./component/user/services/userService";
import {map} from "rxjs/internal/operators";
import {HttpClient} from "@angular/common/http";

declare var hookAjax;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bookstore';
  isLogin: boolean = false;

  constructor(private sessionStorageService: SessionStorageService,
              private router: Router,
              private userService: UserService,private http:HttpClient){}

  ngOnInit() {
    hookAjax({
      open:function(arg){
        console.log("open called: method:%s,url:%s,async:%s",arg[0],arg[1],arg[2])
        try{
          if (top && top.postMessage){
            console.log("message send success!");
            top.postMessage('heartBeat','*');
          }
        }catch(e){
        }
      }
    })
    this.http.get(window['baseUrl']).subscribe(conf => console.log("conf",conf));

    //判断是否为登录注册找回密码页面，是的话不显示nav导航
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      //.map(()=>this.activatedRoute)
      .subscribe(e => {
        let url: string = e['urlAfterRedirects'];
        console.log("this.isLoginPage:", this.isLogin);
        console.log("NavigationEnd", e)
        if (/\/login|\/signup|\/fgpassword/.test(url)) {
          this.isLogin = false;
        } else {
          this.isLogin = true;
        }
      });
    //记录前一次访问记录,若有记录，登录后可直接跳转到此页面
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(e => {

        console.log("NavigationStart", e);
        if (!/\/login|\/signup|\/fgpassword/.test(e['url'])) {
          this.sessionStorageService.setLastVisitUrl(e['url']);
        }
      });

    console.log("auth:",this.sessionStorageService.getAuth());
    console.log("lasturl:",this.sessionStorageService.getLastVisitUrl());
    if (this.userService.authenticated()) {
      this.isLogin = true;
    }
  }
 /* forLogout(data) {
    this.isLogin = !data.isLogout;
  }
  show(data) {
    this.isLogin = data.isLogin;
  }*/

}
