import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewcajeroPage } from './newcajero.page';

describe('NewcajeroPage', () => {
  let component: NewcajeroPage;
  let fixture: ComponentFixture<NewcajeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcajeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewcajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
