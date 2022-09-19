import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsarProyeccionComponent } from './usar-proyeccion.component';

describe('UsarProyeccionComponent', () => {
  let component: UsarProyeccionComponent;
  let fixture: ComponentFixture<UsarProyeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsarProyeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsarProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
