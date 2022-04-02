import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

// Component
import { AlertComponent } from 'src/app/shared/alert/alert.component';
// Interfaces
import { UserData } from 'src/app/interfaces/frontend';
// Services
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile!: UserData;
  msg: string = '';

  constructor(private router: Router, private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.initProfileInfo();
  }

  initProfileInfo(): void {
    this.profile = this.authService.profileInfo;
  }

  logout(): void {
    let date = new Date();
    let hora = date.getHours();

    if (hora <= 12) {
      this.msg = '¡Buen Día!';
    } else if (hora > 12 && hora <= 18) {
      this.msg = '¡Buena Tarde!';
    } else if (hora > 18 && hora <= 24) {
      this.msg = '¡Buena Noche!';

    }
    this.modalAlert(this.profile);
  }

  modalAlert(usuario: UserData): void {
    this.router.navigate(['/welcome/login']);
    this.dialog.open(AlertComponent, {
      width: '450px',
      data: {
        title: 'Hasta luego.',
        message: `${usuario.nombre} ${usuario.apellidoPaterno} ${this.msg}`,
      },
    });
  }
}
