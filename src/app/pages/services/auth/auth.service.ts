import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Interface
import { User, UserData } from 'src/app/interfaces/frontend';

// Interface used only here.
interface LoginResponse {
  success: boolean;
  msg?: string;
}

@Injectable()
export class AuthService {

  statusUserLog: boolean = false;
  private profile!: UserData;

  constructor() { }

  loginUser(userData: User): Observable<LoginResponse>{
    let response: LoginResponse;
    if(userData.user === 'user' && userData.password === 'root'){
      response = { success: true };
    }else if(userData.user === 'user' && userData.password !== 'root'){
      response = { success: false, msg: 'Contraseña incorrecta.' };
    } else if(userData.user !== 'user'){
      response = { success: false, msg: 'Usuario incorrecto.' }
    } else {
      response = { success: false, msg: 'Ha ocurrido un error, intentalo nuevamente.' }
    }

    return of(response!);
  }

  setProfileInfo(profile: UserData){
    this.statusUserLog = true;
    this.profile = profile;
  }

  get profileInfo(){
    return this.profile;
  }
}
