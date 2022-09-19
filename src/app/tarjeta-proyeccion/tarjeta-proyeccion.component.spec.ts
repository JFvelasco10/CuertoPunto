import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaProyeccionComponent } from './tarjeta-proyeccion.component';

describe('TargetaProyeccionComponent', () => {
  let component: TargetaProyeccionComponent;
  let fixture: ComponentFixture<TargetaProyeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetaProyeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetaProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});