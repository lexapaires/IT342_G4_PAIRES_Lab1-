import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (!username) { navigate('/'); return; }

        axios.get(`http://localhost:8080/api/user/me?username=${username}`)
            .then(res => setUser(res.data))
            .catch(() => navigate('/'));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };

    if (!user) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;

    return (
        <div style={{ backgroundColor: '#FDF6E3', minHeight: '100vh', padding: '40px 20px', fontFamily: '"Arial Black", sans-serif' }}>
            <div style={{ 
                maxWidth: '600px', margin: 'auto', backgroundColor: '#F3E5AB', 
                border: '3px solid #000', borderRadius: '24px', padding: '40px' 
            }}>
                <h2 style={{ fontSize: '42px', margin: '0 0 20px 0', borderBottom: '3px solid #000', paddingBottom: '10px' }}>
                    USER PROFILE
                </h2>
                
                <div style={{ fontSize: '18px', lineHeight: '2', fontWeight: 'bold' }}>
                    <p>FIRST NAME: {user.firstName.toUpperCase()}</p>
                    <p>LAST NAME: {user.lastName.toUpperCase()}</p>
                    <p>EMAIL: {user.email.toUpperCase()}</p>
                    <p>USERNAME: {user.username.toUpperCase()}</p>
                    <p>BIRTHDAY: {user.birthdate}</p>
                </div>

                <div style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
                    <button 
                        onClick={() => navigate('/dashboard')} 
                        style={{ ...btnBase, backgroundColor: '#fff' }}
                    >
                        BACK TO DASHBOARD
                    </button>
                    <button 
                        onClick={handleLogout} 
                        style={{ ...btnBase, backgroundColor: '#000', color: '#fff' }}
                    >
                        LOGOUT ACCOUNT
                    </button>
                </div>
            </div>
        </div>
    );
};

const btnBase = {
    flex: 1, padding: '15px', borderRadius: '30px', border: '3px solid #000', 
    fontWeight: '900', cursor: 'pointer', fontSize: '14px'
};

export default Profile;