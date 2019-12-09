import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewreciboPage } from './newrecibo.page';

describe('NewreciboPage', () => {
  let component: NewreciboPage;
  let fixture: ComponentFixture<NewreciboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewreciboPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewreciboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
