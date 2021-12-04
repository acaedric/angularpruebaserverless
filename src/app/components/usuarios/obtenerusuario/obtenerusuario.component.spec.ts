import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerusuarioComponent } from './obtenerusuario.component';

describe('ObtenerusuarioComponent', () => {
  let component: ObtenerusuarioComponent;
  let fixture: ComponentFixture<ObtenerusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtenerusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
