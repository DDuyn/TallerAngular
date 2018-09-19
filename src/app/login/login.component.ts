import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string
  password: string

  constructor(private auth: AuthService, private router: Router) {
 
   }

  ngOnInit() {
  }

  checkLogin(){
    console.log(this.username, this.password);
    this.auth.login(this.username, this.password).subscribe(x => {
      if (x) this.router.navigate(['/home'])
    }
    )
  }

}
