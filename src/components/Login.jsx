import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Loginn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('http://localhost:8080/login.php', {
            username: username,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            if (response.data.status === 'success') {
                setMessage(response.data.message);
                navigate(`/${response.data.redirect}`); // Chuyển hướng đến trang theo phản hồi
            } else {
                setMessage(response.data.message);
            }
        }).catch(error => {
            console.error('Đã xảy ra lỗi!', error);
            setMessage('Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.');
        });
    };

    return (
        <div className='container'>
            <Navbar />
            <div className='row'>
                <div className='login-form-container'>
                    <div className='login-form'>
                        <h2>Đăng nhập</h2>
                        <input
                            type="text"
                            placeholder="Tên đăng nhập"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin}>Đăng nhập</button>
                        <p>{message}</p>
                    </div>
                    <div className="signup-question">
                        <p>Bạn có tài khoản chưa?</p>
                        <button className="btn-register">Đăng ký</button>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    );
}

export default Loginn;
