import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSingleComponent } from './items-single.component';

describe('ItemsSingleComponent', () => {
  let component: ItemsSingleComponent;
  let fixture: ComponentFixture<ItemsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
