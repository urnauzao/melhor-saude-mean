import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClinicasComponent } from './list-clinicas.component';

describe('ListClinicasComponent', () => {
  let component: ListClinicasComponent;
  let fixture: ComponentFixture<ListClinicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClinicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
