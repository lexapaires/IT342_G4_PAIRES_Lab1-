import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: '', passwordHash: '' });
    const [isSuccessOpen, setIsSuccessOpen] = useState(false); // State for custom modal

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', credentials);
            if (response.status === 200) {
                localStorage.setItem('username', credentials.username);
                setIsSuccessOpen(true); // Open custom modal instead of browser alert
                setTimeout(() => navigate('/dashboard'), 2000); // Auto-redirect after 2 seconds
            }
        } catch (error) {
            alert(error.response?.data || "Login failed");
        }
    };

    return (
        <div style={pageContainer}>
            <div style={loginCard}>
                <div style={sparkleIcon}>✦</div>
                <h2 style={titleStyle}>WELCOME! <br/></h2>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <input 
                        type="text" name="username" placeholder="USERNAME" 
                        onChange={handleChange} required style={inputStyle} 
                    />
                    <input 
                        type="password" name="passwordHash" placeholder="PASSWORD" 
                        onChange={handleChange} required style={inputStyle} 
                    />
                    <button type="submit" style={buttonStyle}>LOGIN</button>
                </form>
                <p style={footerText}>
                    I DONT HAVE AN ACCOUNT <span onClick={() => navigate('/register')} style={linkStyle}>REGISTER HERE</span>
                </p>
            </div>

            {/* Custom Success Pop-up */}
            {isSuccessOpen && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <div style={{ fontSize: '50px', marginBottom: '10px' }}>✦</div>
                        <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '0 0 10px 0' }}>LOGIN SUCCESS!</h2>
                        <p style={{ fontWeight: 'bold' }}>GET YOUR SWEET TOOTH READY...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

/* --- Styles --- */
const pageContainer = { backgroundColor: '#FDF6E3', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Arial Black", sans-serif', width: '100vw' };
const loginCard = { backgroundColor: '#A7C080', border: '5px solid #000', borderRadius: '40px', padding: '60px 40px', width: '100%', maxWidth: '400px', position: 'relative', boxShadow: '15px 15px 0px #000', textAlign: 'center' };
const sparkleIcon = { position: 'absolute', top: '10px', right: '15px', fontSize: '40px', color: '#FDF6E3' };
const titleStyle = { fontSize: '56px', lineHeight: '0.8', marginBottom: '40px', fontWeight: '900', textAlign: 'left', color: '#000' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '20px' };
const inputStyle = { padding: '18px', border: '3px solid #000', borderRadius: '20px', fontSize: '16px', fontWeight: 'bold', outline: 'none', width: '100%', boxSizing: 'border-box' };
const buttonStyle = { backgroundColor: '#000', color: '#fff', padding: '18px', borderRadius: '40px', border: 'none', fontWeight: '900', fontSize: '18px', cursor: 'pointer', marginTop: '10px' };
const footerText = { marginTop: '25px', fontSize: '14px', fontWeight: 'bold', color: '#000' };
const linkStyle = { textDecoration: 'underline', cursor: 'pointer' };

const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(253, 246, 227, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(8px)' };
const modalContentStyle = { backgroundColor: '#F3E5AB', padding: '50px', borderRadius: '40px', border: '5px solid #000', textAlign: 'center', boxShadow: '15px 15px 0px #000', maxWidth: '400px' };

export default Login;