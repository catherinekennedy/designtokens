import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTitleComponent } from './my-title.component';
import { MyTitleModule } from './my-title.module';

describe('MyButtonComponent', () => {
  let component: MyTitleComponent;
  let fixture: ComponentFixture<MyTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MyTitleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
