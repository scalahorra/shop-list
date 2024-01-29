import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

export interface RegisterData {
  email: string;
  password: string;
  newPassword: string;
}

@Component({
  selector: 'app-registration-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatInputModule
  ],
  templateUrl: './registration-dialog.component.html',
  styleUrl: './registration-dialog.component.scss'
})
export class RegistrationDialogComponent {

  registerData: RegisterData = {
    email: '',
    password: '',
    newPassword: ''
  }


  constructor(
    public dialogRef: MatDialogRef<RegistrationDialogComponent>,
  ) {}

  register(): void {
    console.log(this.registerData);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close()
  }

}
