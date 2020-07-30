import {login, logout} from '../../actions/auth';

test('Should execute the login function correctly', () => {
    const action = login('12dqdqe23ldlk');
    expect(action).toEqual({
        type: 'LOGIN', 
        uid: '12dqdqe23ldlk'
        
    });
});

test('Should execute the login function correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});