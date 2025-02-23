import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', values);
            dispatch(setCredentials({ token: response.data.access, user: values.username }));
            message.success('登录成功');
            navigate('/');
        } catch (error) {
            message.error('登录失败，请检查用户名或密码');
            console.error('Login error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <Form onFinish={onFinish} style={{ maxWidth: 300, margin: '50px auto' }}>
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">登录</Button>
            </Form.Item>
        </Form>
    );
};

export default Login;