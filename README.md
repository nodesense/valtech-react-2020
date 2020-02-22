# Day 2 Recap

    Life Cycle [only for class component]
        creation/mouting
            constructor - optional
            UNSAFE_componnetWillMount 
            render()
            componentDidMount() - DOM is ready

            -- new life cycle method
            getDerivedStateFromProps
        updation
            UNSAFE_componentWillReceiveProps(nextProps)
                this.props == nextProps

            shouldComponentUpdate(nextProps, nextState)
                -- to decide whether to render or not
                -- called when parent render called
                -- called when this.setState called

            UNSAFE_componentWillUpdate

            render()

            componentDidUpdate()
            
        destruction
            componentWillUnmount()
                clear the resources
                    timer
                    api calls

    parent to child -- props
    Child to parent -- callback

    React.createRef
            -- to access real dom 
    Context
        React.createContext("success") - Create

        Consume in the component
            Class Component
                static contextType = ThemeContext
                this.context to use the value

            Functional Component
                Consumer

    Forms
        Uni-directional flow
        Virtula dom to Real dom

        User works with Real DOM 
            Inputs are entered
            React diff virtual and real
            push virtual dom to real dom
            onChange event, setState


    Routing
        BrowserRouter
        HashRouter

        NavLink/Link
            -- create href, ensure inpage navigation
            -- activeClassName [only for NavLink]

        Route
            -- to define path to component mapping
                <Route path="/" component={Home}>
                -- render props
        Switch
            -- picks the first match




How to share data between siblings
    not directly possible

how to share data between two routed page [not possible]
    product-list page
        want to add to shopping cart
        but not in memory
    cart page

Retaining state after component destroyed??
    state is wihtin component











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

    
DAY-3

REDUX 
    why redux?
        state management
        sharing state amoung component easier

    what are the elements of redux?
        store
            dispatch
            getState
            subscribe    
                notification for components/listeners
            unsubscribe [componentWillunmount]
                stop the subscription 
        reducers
            implementation/logic
            pure function/immutable
            function reducer(state, action) {
                return a new state
                switch/case, default
            }

                    
        combineReducers
            -- combine multiple reducers


        actions
            {
                type: // mandatory                
            }

        action-types
            -- constants
     
        middleware
            what is?
                middleware comes between dispatch and calling reducers

        applyMiddlewares
        
    
    React-Redux
        Why we need react-redux?
            decouple presentation and business/data logics
        
        elements of react-redux
            mapStateToprops
            mapDispatchToProps
            connect
            Provider
            bindActionCreators

        how it works?
            wraps the component into a container
                then it passes the props from redux state /mapStateToprops
            container passes the action methods to the component as props
                the actions shall contain dispatch