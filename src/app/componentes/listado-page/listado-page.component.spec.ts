import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPageComponent } from './listado-page.component';

describe('ListadoPageComponent', () => {
  let component: ListadoPageComponent;
  let fixture: ComponentFixture<ListadoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
