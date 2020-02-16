import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './pages/Counter';

import Cart from './cart/components/Cart';
import ThemeContext from './components/ThemeContext';

import Home from './components/Home';
import NotFound from './components/NotFound';
import {Route, Switch} from 'react-router-dom';


// Component names should be CamelCase
// functional component
// returns virtual dom
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'warning'
        }
    } 

    
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}  >
                    <button onClick={ () => this.setState({theme: 'success'}) }>
                        Green
                    </button>
                    <button onClick={ () => this.setState({theme: 'warning'}) }>
                        Orange
                    </button>
                    
                    <Header  title="Product App" >
                        <h6>shopping cart</h6>
                    </Header>
                     
                     <Switch>
                        <Route path="/" exact component={Home} />
                        
                        <Route path="/counter"  
                                render= { (props) => <Counter start={100}  {...props} />}  />
    
                        <Route path="/cart" component={Cart} />
                        <Route path="/about" 
                                render={ () => (
                                       <div>
                                           <h2>About page</h2>
                                       </div> 
                                    )} />

                        <Route path='*' component={NotFound} />
                     </Switch>

                    <Footer title="Product App"
                            countries = { ['IN', 'USA', 'EU']  }
                    >
                       <p>Contact time: 9:00 AM to 5:00 PM, Monday to Friday</p>     
                        <p>Phone: 080-44445555</p>
                    </Footer>

                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;