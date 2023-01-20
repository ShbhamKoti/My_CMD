import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditPtComponent } from './edit-pt.component';

describe('EditPtComponent', () => {
  let component: EditPtComponent;
  let fixture: ComponentFixture<EditPtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports:[HttpClientModule,RouterTestingModule],
      declarations: [ EditPtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('lowde ke baal', () => {
    expect(component).toBeTruthy();
  });
  
});
