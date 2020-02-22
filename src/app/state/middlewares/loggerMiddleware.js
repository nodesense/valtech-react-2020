
// loggerMiddleware.js
// placed between dispatch call and reducers
// every action dispatched goes via middleware
// middleware can intercept/change/forward the request

export function loggerMiddleware(store) {
    return function (next) {
        return function(action) {
            // custom logic
            // called every time when dispatch called
            console.log('LOGGER Middleware Action', action);
            // forward the action to next middleware
            // if no next middleware, it goes to reducers
            const result = next(action);

            return result;
        }
    }
}