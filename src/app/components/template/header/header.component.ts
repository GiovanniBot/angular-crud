import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OpenAddEditEmpFormService } from '../../../services/open-add-edit-emp-form.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private openAddEditEmpForm: OpenAddEditEmpFormService) {}

  openAddEditEmployeeForm(): void {
    this.openAddEditEmpForm.openAddEditEmployeeForm();
  }
}
