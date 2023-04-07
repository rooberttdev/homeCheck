import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ImoveisComponent } from './ImoveisComponent';



describe('ImoveisComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ImoveisComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ImoveisComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-responsive-sidebar'`, () => {
    const fixture = TestBed.createComponent(ImoveisComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-responsive-sidebar');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ImoveisComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-responsive-sidebar app is running!');
  });
});
