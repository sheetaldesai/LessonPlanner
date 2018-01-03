import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTopicDialogComponent } from './edit-topic-dialog.component';

describe('EditTopicDialogComponent', () => {
  let component: EditTopicDialogComponent;
  let fixture: ComponentFixture<EditTopicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTopicDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTopicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
