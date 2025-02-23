import { useSelector, useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlice';

const TestRedux = () => {
    const dispatch = useDispatch();
    const { token, user } = useSelector((state) => state.auth);

    const handleTest = () => {
        dispatch(setCredentials({ token: 'test-token', user: 'test-user' }));
    };

    return (
        <div>
            <p>Token: {token || 'None'}</p>
            <p>User: {user || 'None'}</p>
            <button onClick={handleTest}>Set Test Credentials</button>
        </div>
    );
};

export default TestRedux;