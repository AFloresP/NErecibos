import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CajerosPage } from './cajeros.page';

describe('CajerosPage', () => {
  let component: CajerosPage;
  let fixture: ComponentFixture<CajerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajerosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CajerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
