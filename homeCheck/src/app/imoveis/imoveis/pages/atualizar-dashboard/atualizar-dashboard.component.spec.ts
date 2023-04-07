import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarDashboardComponent } from './atualizar-dashboard.component';

describe('AtualizarDashboardComponent', () => {
  let component: AtualizarDashboardComponent;
  let fixture: ComponentFixture<AtualizarDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
