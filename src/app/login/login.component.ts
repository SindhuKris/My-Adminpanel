import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  public loginform!: FormGroup;

  constructor(
    public fc: FormBuilder,
    public router: Router,
    public userSer: UserService,
  ) {}

  ngOnInit(): void {
    this.loginform = this.fc.group({
      username: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  login() {
    console.log(this.loginform.value);
    this.userSer.login().subscribe(() => {
      this.router.navigate(['/home']);
    })
    
    
  }

}