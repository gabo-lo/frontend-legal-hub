import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatbotJuridicoComponent } from './chatbot-juridico';

describe('ChatbotJuridico', () => {
  let component: ChatbotJuridicoComponent;
  let fixture: ComponentFixture<ChatbotJuridicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotJuridicoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbotJuridicoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
