import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', birthdate: '', email: '', username: '', passwordHash: ''
    });
    const [isSuccessOpen, setIsSuccessOpen] = useState(false); // State for custom modal

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/auth/register', formData);
            setIsSuccessOpen(true); // Open custom modal
            setTimeout(() => navigate('/'), 2500); // Redirect back to login after 2.5 seconds
        } catch (error) {
            alert(error.response?.data || "Registration failed");
        }
    };

    return (
        <div style={pageContainer}>
            <div style={registerCard}>
                <h2 style={titleStyle}>REGISTER TO<br/> OUR CLUB</h2>
                <form onSubmit={handleSubmit} style={formGrid}>
                    <input type="text" name="firstName" placeholder="FIRST NAME" onChange={handleChange} required style={inputStyle} />
                    <input type="text" name="lastName" placeholder="LAST NAME" onChange={handleChange} required style={inputStyle} />
                    
                    <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <label style={labelStyle}>BIRTH DATE</label>
                        <input type="date" name="birthdate" onChange={handleChange} required style={inputStyle} />
                    </div>

                    <input type="email" name="email" placeholder="EMAIL" onChange={handleChange} required style={inputStyle} />
                    <input type="text" name="username" placeholder="USERNAME" onChange={handleChange} required style={inputStyle} />
                    <input type="password" name="passwordHash" placeholder="PASSWORD" onChange={handleChange} required style={{...inputStyle, gridColumn: 'span 2'}} />
                    
                    <button type="submit" style={buttonStyle}>CREATE ACCOUNT</button>
                </form>
                <p style={footerText}>
                    I HAVE AN ACCOUNT <span onClick={() => navigate('/')} style={linkStyle}>LOGIN</span>
                </p>
            </div>

            {/* Custom Success Pop-up */}
            {isSuccessOpen && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <div style={{ fontSize: '50px', marginBottom: '10px' }}>✦</div>
                        <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '0 0 10px 0' }}>WELCOME!</h2>
                        <p style={{ fontWeight: 'bold' }}>YOUR ACCOUNT HAS BEEN CREATED SUCCESSFULLY.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

/* --- Styles --- */
const pageContainer = { backgroundColor: '#FDF6E3', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: '"Arial Black", sans-serif', padding: '20px' };
const registerCard = { backgroundColor: '#F8C8DC', border: '5px solid #000', borderRadius: '40px', padding: '40px', width: '100%', maxWidth: '500px', boxShadow: '15px 15px 0px #000' };
const titleStyle = { fontSize: '56px', lineHeight: '0.8', marginBottom: '30px', fontWeight: '900', color: '#2D334A' };
const formGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' };
const inputStyle = { padding: '15px', border: '3px solid #000', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', width: '100%', boxSizing: 'border-box' };
const labelStyle = { fontSize: '12px', fontWeight: '900', marginLeft: '5px', color: '#2D334A' };
const buttonStyle = { gridColumn: 'span 2', backgroundColor: '#000', color: '#fff', padding: '18px', borderRadius: '40px', border: 'none', fontWeight: '900', fontSize: '18px', cursor: 'pointer', marginTop: '10px' };
const footerText = { textAlign: 'center', marginTop: '20px', fontSize: '14px', fontWeight: 'bold', gridColumn: 'span 2' };
const linkStyle = { color: '#000', cursor: 'pointer', textDecoration: 'underline' };

const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(253, 246, 227, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(8px)' };
const modalContentStyle = { backgroundColor: '#F3E5AB', padding: '50px', borderRadius: '40px', border: '5px solid #000', textAlign: 'center', boxShadow: '15px 15px 0px #000', maxWidth: '400px' };

export default Register;