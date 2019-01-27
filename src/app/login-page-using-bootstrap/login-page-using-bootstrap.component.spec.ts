import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageUsingBootstrapComponent } from './login-page-using-bootstrap.component';

describe('LoginPageUsingBootstrapComponent', () => {
  let component: LoginPageUsingBootstrapComponent;
  let fixture: ComponentFixture<LoginPageUsingBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageUsingBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageUsingBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
