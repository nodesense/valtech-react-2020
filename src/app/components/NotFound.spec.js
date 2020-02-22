import renderer from 'react-test-renderer';
import React from 'react';

import NotFound from './NotFound';

describe("not found test suite", () => {
    it("not found default values", () => {
        const tree = renderer
            .create(<NotFound />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
})