import { TestBed } from '@angular/core/testing';
import { MetricsComponent } from './metrics.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [MetricsComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MetricsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'metrics-page'`, () => {
    const fixture = TestBed.createComponent(MetricsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('metrics-page');
  });

});
