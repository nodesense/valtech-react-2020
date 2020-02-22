import { mapStateToProps, 
         mapDispatchToProps,
        } from './ReduxCounter';

import * as actions from '../state/actions';

describe('test container mapstate/dispatch', () => {
    it('test mapStateToProps', () => {
        const prevState = {
            counter: 10,
            auth: {user: undefined, authenticated: false}
        }

        const props = mapStateToProps(prevState);
        expect(props).toEqual({
                                counter: 10
                            });
    })

    it ("test mapDispatchToProps", () => {
        const dispatch = jest.fn(); // create a mock function
        const props = mapDispatchToProps(dispatch); //where dispatch is mock
        props.increment();

        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toBeCalledWith(actions.increment(1));
    })
});