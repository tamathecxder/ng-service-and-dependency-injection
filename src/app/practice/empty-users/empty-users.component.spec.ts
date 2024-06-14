import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyUsersComponent } from './empty-users.component';

describe('EmptyUsersComponent', () => {
  let component: EmptyUsersComponent;
  let fixture: ComponentFixture<EmptyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
