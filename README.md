Cart - Page - Component
    Add Item, Delete all - Component 
    List items [table] - Component
    CartItem - row
    Cart Summary {how many items in the cart, total amount} - Component
    

## Day 1 Recap

React 
    Component
        tiny UI
        Virtual DOM
        Props - Properties
            Functional -- function parameter
            class - this.props , constructor(props)
        Types of Component
            Functional
                stateless
            Class
                state
                cons - this.state = {}
                update the state
                    setState - async
                     to resolve dependent state update issue,
                        setState({new-state}, function callback() => {
                            called after render

                        })

                    functional setstate

                    function setStatecallback1(state ) {
                        return new state;
                    }

                    function setStatecallback2(state ) {
                        return new state;
                    }

                    setState(setStatecallback1)
                    setState(setStatecallback2)



    Lightweight
    Faster 
        rendering 
            virtual dom
                before updating real dom,
                    compare two snapshot of virtual dom
                        deep comparision
                        find the diff
                        path the real dom

                        