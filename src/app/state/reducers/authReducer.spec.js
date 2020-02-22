import {authReducer} from './authReducer';
import {LoggedIn, LoggedOut} from   '../actions';

describe("Test Auth Reducer", () => {
    it("should have default state", () => {
        expect(authReducer(undefined, {type: 'TEST'}))
            .toEqual({
                authenticated: false,
                user: undefined
            })
    })

    it ("check user logged in", () => {
        const prevState = {
            authenticated: false,
            user: undefined
        }

        const action = LoggedIn({name: 'valtech'});
        expect(authReducer(prevState, action))
            .toEqual({
                authenticated: true,
                user: {name: 'valtech'}
            })
    })
})