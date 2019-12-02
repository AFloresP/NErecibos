import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecibosPage } from './recibos.page';

describe('RecibosPage', () => {
  let component: RecibosPage;
  let fixture: ComponentFixture<RecibosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecibosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
