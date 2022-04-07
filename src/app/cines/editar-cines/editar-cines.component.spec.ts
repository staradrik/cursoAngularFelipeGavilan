import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCinesComponent } from './editar-cines.component';

describe('EditarCinesComponent', () => {
  let component: EditarCinesComponent;
  let fixture: ComponentFixture<EditarCinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
