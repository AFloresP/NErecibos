import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VercajeroPage } from './vercajero.page';

describe('VercajeroPage', () => {
  let component: VercajeroPage;
  let fixture: ComponentFixture<VercajeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VercajeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VercajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
