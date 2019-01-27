import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattDialogExampleComponent } from './matt-dialog-example.component';

describe('MattDialogExampleComponent', () => {
  let component: MattDialogExampleComponent;
  let fixture: ComponentFixture<MattDialogExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattDialogExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattDialogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
