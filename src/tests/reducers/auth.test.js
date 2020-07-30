import authReducer from '../../reducers/auth';

test('Should test the login reducer', () => {
    const uid = 'sdaadas34543v13d';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action)
    expect(state).toEqual({
        uid
    });
});

test('Should test the logout reducer', () => {
    const action = {
        type: 'LOGOUT',
    };
    const state = authReducer({}, action)
    expect(state).toEqual({});
});