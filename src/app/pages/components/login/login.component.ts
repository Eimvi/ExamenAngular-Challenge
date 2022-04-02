import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

// Component
import { AlertComponent } from 'src/app/shared/alert/alert.component';
// Interfaces
import { User, UserData } from 'src/app/interfaces/frontend';
// Services
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  private destroy = new Subject<void>();

  showPassword: boolean = true;
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.initForm();
    this.getCredentialsData();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  initForm(): void {
    this.formLogin = this.fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]],
      rememberPassword: [false],
    });
  }

  getCredentialsData(): void {
    const credentials: string | null = localStorage.getItem('credentials');
    if (credentials !== null) {
      this.formLogin.patchValue({
        user: JSON.parse(credentials).user,
        password: JSON.parse(credentials).password,
        rememberPassword: true,
      });
    }
  }

  login(): void {
    const user: User = {
      user: this.formLogin.value.user,
      password: this.formLogin.value.password
    }
    this.authService.loginUser(user).pipe(takeUntil(this.destroy)).subscribe(
      (resp) => {
        if(resp.success){
          const usuario: UserData = {
            nombre: 'Cristopher Emmanuel',
            apellidoPaterno: 'Gallegos',
            apellidoMaterno: 'Modesto',
            fechaNacimiento: '14/03/1997',
            correoElectronico: 'cristopher.emodesto@gmail.com',
            telefono: '961 376 96 79',
            ciudad: 'Juchitán de Zaragoza',
            delegacion: '',
            fechaRegistro: '29/03/2022'
          };

          this.verifyCheckPassword();
          this.authService.setProfileInfo(usuario);

          this.modalAlert(undefined, usuario);
          this.router.navigate(['/welcome/home']);
        }else{
          this.modalAlert(resp.msg)
        }
      }
    )

  }

  verifyCheckPassword(): void{
    if (this.formLogin.value.rememberPassword) {
      localStorage.setItem('credentials', JSON.stringify({user: this.formLogin.value.user, password: this.formLogin.value.password}));
    } else {
      localStorage.removeItem('credentials');
    }
  }

  modalAlert(message?: string, usuario?: UserData  ): void{
    this.dialog.open(AlertComponent, {
      width: '450px',
      data: {title: message ? 'Hay un problema' : 'Bienvenido', message: message ? message : `${usuario!.nombre} ${usuario!.apellidoPaterno}`}
    });
  }
}
