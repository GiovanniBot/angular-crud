import { Injectable } from '@angular/core';
import { EmpAddEditComponent } from '../components/view/emp-add-edit/emp-add-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class OpenAddEditEmpFormService {
  constructor(private _dialog: MatDialog) {}

  openAddEditEmployeeForm() {
    this._dialog.open(EmpAddEditComponent)
  }
}
