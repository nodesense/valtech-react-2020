import React from 'react';
// for prop validation
import PropTypes from 'prop-types';

import ThemeContext from './ThemeContext';

// functional component
// destructure in the function declaration
// title = props.title
// countries = props.countries
// statements cannot be written inside JSX
const Footer = ( {title, countries, company, children} ) => (
    <div>
        <hr />
        <p>Copyrights @2020, {title}, {company} </p>

        <div>
            {
                countries.map ( (name, i) => (
                    <span key={name} >{i}.{name} </span>
                ))
            }
        </div>

        {children}

        <ThemeContext.Consumer>
            {
                (value) => {
                    console.log('theme value in func', value);
                    return (
                        <button className={value}>
                            Contact Us
                        </button>
                    )
                }
            }
        </ThemeContext.Consumer>

    </div>
)

// keyword
Footer.propTypes = {
    title: PropTypes.string.isRequired,
    countries: PropTypes.array.isRequired,
    company: PropTypes.string // optional
}

//keyword
Footer.defaultProps = {
    company: 'Valtech'
}

 
export default Footer;