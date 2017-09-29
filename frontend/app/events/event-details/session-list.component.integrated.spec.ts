import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SessionListComponent} from './session-list.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';
import {DurationPipe} from '../share/duration.pipe';
import {By} from '@angular/platform-browser';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {userName: 'Joe'}
    };
    let mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports : [],
      declarations: [
        SessionListComponent,
        DurationPipe,
      ],
      providers: [
        {provide: AuthService, useValue: mockAuthService},
        {provide: VoterService, useValue: mockVoterService},
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
    // compileComponents not needed with webpack
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {

    it('should have the correct session title', () => {
      component.sessions = [{id: '3', name: 'Session 1', presenter: 'Joe', duration : 1
        , level: 'beginner', detail: 'detail', voters: ['john, bob']}];
      component.filterBy = 'all';
      component.sortBy = 'name';

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[weel-title]').textContent).toContain('Session 1');
      expect(debugEl.query(By.css('[weel-title]')).nativeElement.textContent).toContain('Session 1');
    });
  });
});
