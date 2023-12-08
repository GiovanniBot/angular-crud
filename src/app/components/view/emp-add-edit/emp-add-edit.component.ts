import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

interface EmpFormProps {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: string;
  education: string;
  company: string;
  experience: string;
  package: string;
}

@Component({
  selector: 'app-emp-add-edit',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.scss',
})
export class EmpAddEditComponent {
  constructor(private formBuilder: FormBuilder) {}

  empForm = this.formBuilder.group<EmpFormProps>({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    gender: '',
    education: '',
    company: '',
    experience: '',
    package: '',
  })

  education: string[] = [
    'High School', 'Bachelor', 'Master', 'PhD'
  ];

  onFormSubmit() {
    if(this.empForm.valid) {
      console.log(this.empForm.value)
    }
  }
}
