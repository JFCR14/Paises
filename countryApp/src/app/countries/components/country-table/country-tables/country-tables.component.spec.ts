import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTablesComponent } from './country-tables.component';

describe('CountryTablesComponent', () => {
  let component: CountryTablesComponent;
  let fixture: ComponentFixture<CountryTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
