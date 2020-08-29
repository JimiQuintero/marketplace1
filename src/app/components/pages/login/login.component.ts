import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user_model';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

// SweetAlert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    // console.log(loginForm);

    if (loginForm.invalid) {
      Object.values(loginForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      // title: 'Error!',
      text: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'Ok'
    });

    Swal.showLoading();
    // console.log( loginForm.value );
    console.log(loginForm.value);
    this.loginService.userLogin(this.user).subscribe(resp => {
      console.log(resp);

      Swal.close();

    }, (err) => {
      console.log(err.error.error.msg);

      Swal.fire({
        allowOutsideClick: false,
        title: 'Error! al autenticar',
        text: err.error.error.msg,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    });

    loginForm.reset();
  }

}
