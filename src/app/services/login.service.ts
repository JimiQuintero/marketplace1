import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user_model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'https://tumotochina.herokuapp.com';

  private userToken: string;

  constructor(private http: HttpClient) {
    console.log('Servicio Login Funcionando correctamente');
    this.getToken();
  }

  userLogin(user: User): Observable<any> {

    const authData = {
      ...user
    };

    return this.http.post<any>(`${this.url}/login-user`, authData).pipe(
      map(response => {
        // Guardar Token
        this.guardarToken(response['token']);
        return response;
      })
    );
  }

  //  Implementando el Token
  private guardarToken(token: string) {
    this.userToken = token;
    localStorage.setItem('ACCESS_TOKEN', token);

    const hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('EXPIRA_IN', hoy.getTime().toString());
  }

  private getToken() {

    if (localStorage.getItem('ACCESS_TOKEN')) {
      this.userToken = localStorage.getItem('ACCESS_TOKEN');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }
}
