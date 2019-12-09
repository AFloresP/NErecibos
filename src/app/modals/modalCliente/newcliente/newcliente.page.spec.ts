import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewclientePage } from './newcliente.page';

describe('NewclientePage', () => {
  let component: NewclientePage;
  let fixture: ComponentFixture<NewclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
