import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerreciboPage } from './verrecibo.page';

describe('VerreciboPage', () => {
  let component: VerreciboPage;
  let fixture: ComponentFixture<VerreciboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerreciboPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerreciboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
