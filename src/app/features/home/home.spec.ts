import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the hero title', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Tu estudio de derecho');
  });

  it('should render 8 cards with 1 featured', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-legal-area-card').length).toBe(8);
    expect(compiled.querySelectorAll('.featured-card').length).toBe(1);
  });
});
