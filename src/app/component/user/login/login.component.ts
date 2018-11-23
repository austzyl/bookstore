import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {MessageService} from "primeng/api";
import {SessionStorageService} from "../../../common/services/session-storage.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onShow: EventEmitter<any> = new EventEmitter();

  username: string = "";
  password: string = "";

  lastVisitUrl = "";

  constructor(private router: Router,
              private loginService: LoginService,
              private messageService: MessageService,
              private sessionStorageService: SessionStorageService,private http:HttpClient) { }

  ngOnInit() {
    this.http.get(window['baseUrl']).subscribe(conf => console.log("conf",conf));

    this.loginService.username = 'admin';
    this.username = this.loginService.username;
    this.lastVisitUrl = this.sessionStorageService.getLastVisitUrl();

    //用户已登录 跳转到前一个访问的URL
    if (this.sessionStorageService.getAuth()) {
      this.redirectLastUrl();
    }
  }

  /**
   * 登录
   */
  login() {
    //TODO 调用userService登录方法，发送后台登录验证请求
    console.log("username:",this.username);
    console.log("password:",this.password);
    if (this.username == 'admin' && this.password =='') {
      //请求成功保存本地登录成功信息
      this.sessionStorageService.setAuth({isAuthenticated: true});

      console.log("lastVisitUrl1:",this.lastVisitUrl);
      this.redirectLastUrl();
    } else {
      this.messageService.add({severity:'warn', summary:'Tip', detail:'Invalid username or password!'});
    }
  }

  /**
   * 重定向到前一个访问的URL
   */
  redirectLastUrl() {
    //最后一次访问的URL不存在或者登录页面\者注册页面\找回密码页面是前一个访问的URL，直接跳转到首页
    if (!this.lastVisitUrl
      || '/user/login' === this.lastVisitUrl
      || '/user/gignup' === this.lastVisitUrl
      || '/user/fgpassword' === this.lastVisitUrl) {
      console.log("lastVisitUrl2:",this.lastVisitUrl);
      this.lastVisitUrl = '/';
    }
    this.router.navigate([this.lastVisitUrl]);
  }

}
