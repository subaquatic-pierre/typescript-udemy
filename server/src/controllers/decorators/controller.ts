import { AppRouter } from '../../AppRouter';

const router = AppRouter.getInstance()

/**
 * @decorator
 * Decorator from route controller class
 * Applies the path, middleware and route handler to each route
 * after looping through all routes with a path
 */

export function controller () {
    return function (target: Function) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key]

            const path = Reflect.getMetadata('path', target.prototype, key)
            const method = Reflect.getMetadata('method', target.prototype, key)
            // const middleware = Reflect.getMetadata('middleware', target.prototype, key)

            // Only apply handlers to methods with path metadata
            if (path) {
                // Check method metadata
                switch(method) {
                    case('get') : {
                        router.get(path, routeHandler)
                    }
                }
            }
        }
    }
}

export {router} 
