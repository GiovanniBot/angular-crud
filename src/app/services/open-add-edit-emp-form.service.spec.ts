import { TestBed } from '@angular/core/testing';

import { OpenAddEditEmpFormService } from './open-add-edit-emp-form.service';

describe('OpenAddEditEmpFormService', () => {
  let service: OpenAddEditEmpFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAddEditEmpFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
