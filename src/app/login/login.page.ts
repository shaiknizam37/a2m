import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HTTP) { }
  usrmsg={
    valid:true,
    msg:'Enter Username',
  };
  pwdmsg={
    valid:true,
    msg:'Enter Password',
  };
  ngOnInit() {
//https://api.github.com/users
  }
  onClickSubmit(data) {
    console.log(data);
    this.usrmsg.valid=this.pwdmsg.valid=false;
    this.http.get('https://api.github.com/users', {}, {})
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
      });
  }
  onFocus(){
    this.usrmsg.valid=this.pwdmsg.valid=true;
  }
}
