import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerclientePage } from './vercliente.page';

describe('VerclientePage', () => {
  let component: VerclientePage;
  let fixture: ComponentFixture<VerclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
