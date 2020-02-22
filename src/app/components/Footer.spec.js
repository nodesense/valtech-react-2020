import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

import ThemeContext from './ThemeContext';

describe ("test for footer", () => {
    it("footer test", () => {
        const component = renderer
            .create(<React.Fragment >
                        <ThemeContext.Provider value='green'>
                            <Footer title="Product app"
                                    countries= { ['IN', 'USA'] }>

                            </Footer>
                        </ThemeContext.Provider>
                    </React.Fragment> 
                )

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})