import * as actions from './actions';
import * as ActionTypes from './action-types';

describe ("Actions Test Suite", () => {
    it ("test login action", () => {
        const testUser = {name: 'joe'}
        expect(actions.LoggedIn(testUser))
                    .toEqual({
                        type: ActionTypes.LOGGED_IN,
                        payload: {
                            user: testUser
                        }
                    })
    })
})