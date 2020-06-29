import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({setBy = 1} = {}) => ({
    type: 'SET',
    setBy
})
const store = createStore((state = {count: 0}, action) => {    
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return{
                count: action.setBy 
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
        default: 
            return state;
    }
    
});

const unsubscribe = (store.subscribe(() => {
    console.log(store.getState())
}));

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount());

store.dispatch (resetCount());

store.dispatch (setCount({setBy: 15}))
 
store.dispatch(decrementCount({decrementBy: 5}));

