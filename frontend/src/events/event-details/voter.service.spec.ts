import {VoterService} from './voter.service';
import {ISession} from '../share/event.model';
import {Observable} from 'rxjs/Rx';

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters', () => {
      const session = {id: '6', voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(Observable.of(false));

      voterService.deleteVoter(<ISession> session, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with the right URL', () => {
      const session = {id: '6', voters: ['joe', 'john']};
      mockHttp.delete.and.returnValue(Observable.of(false));

      voterService.deleteVoter(<ISession> session, 'joe');

      expect(mockHttp.delete).toHaveBeenCalledWith(`http://localhost:8090
      /event/session/voters/3/joe`);
    });

  });

  describe('addVoter', () => {
    it('should call http.post with the right URL', () => {
      const session = {id: '6', voters: ['john']};
      mockHttp.post.and.returnValue(Observable.of(false));

      voterService.addVoter(<ISession> session, 'joe');

      expect(mockHttp.post).toHaveBeenCalledWith(`http://localhost:8090
      /event/session/voters/3/joe`, '{}', jasmine.any(Object));
    });
  });
});
