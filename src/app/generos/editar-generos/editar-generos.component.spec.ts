import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGenerosComponent } from './editar-generos.component';

describe('EditarGenerosComponent', () => {
  let component: EditarGenerosComponent;
  let fixture: ComponentFixture<EditarGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarGenerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
