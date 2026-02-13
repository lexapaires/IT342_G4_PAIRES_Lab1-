import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false); // New state for confirmation
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (isProfileOpen && username) {
            axios.get(`http://localhost:8080/api/user/me?username=${username}`)
                .then(res => setUserData(res.data))
                .catch(err => console.error("Error fetching profile", err));
        }
    }, [isProfileOpen, username]);

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <div style={containerStyle}>
            {/* 1. Navigation Bar */}
            <nav style={navStyle}>
                <div style={logoGroup}>minapp</div>
                <div style={centerLinksGroup}>
                    <span style={linkStyle}>SHOP</span>
                    <span style={linkStyle}>OUR STORY</span>
                    <span style={linkStyle}>CONTACT US</span>
                </div>
                <div style={profileGroup}>
                    <span 
                        onClick={() => setIsProfileOpen(true)} 
                        style={{...linkStyle, cursor: 'pointer'}}
                    >
                        USER PROFILE
                    </span>
                </div>
            </nav>

            {/* 2. Hero Section */}
            <div style={heroSectionStyle}>
                <div style={heroTextStyle}>
                    <h1 style={headlineStyle}>TASTE <br /> PURE INDULGENCE</h1>
                    <p style={subheadStyle}>
                        Premium pastries designed for comfort, celebration, and everything in between.
                    </p>
                    <button style={mainBtnStyle}>SHOP ALL PRODUCTS</button>
                </div>
                
                <div style={heroImageContainer}>
                    <div style={heroImageWrapper}>
                        <img src="/main1.jpg" style={imageStyle} alt="Boutique Products" />
                    </div>
                </div>
            </div>

            {/* 3. Feature Cards Section */}
            <div style={cardGridStyle}>
                <FeatureCard title="DRINKS" status="TOP PICK" color="#FDF6E3" imageUrl="/coffee.jpg" />
                <FeatureCard title="CAKES" status="TOP BAKES" color="#FDF6E3" imageUrl="/cake2.jpg" />
                <FeatureCard title="ICE CREAM" status="TOP FLAVORS" color="#FDF6E3" imageUrl="/sprinkle.jpg" />
            </div>

            {/* 4. Profile Pop-up Modal (Pastel Yellow) */}
            {isProfileOpen && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <div style={{ position: 'relative', marginBottom: '30px' }}>
                            <h2 style={{ fontSize: '48px', lineHeight: '0.8', margin: 0, fontWeight: '900' }}>
                                MY <br/> PROFILE
                            </h2>
                            <button onClick={() => setIsProfileOpen(false)} style={closeBtnStyle}>✕</button>
                        </div>

                        {userData ? (
                            <div style={infoContainerStyle}>
                                <div style={infoRowStyle}><span style={labelStyle}>NAME:</span> {userData.firstName.toUpperCase()} {userData.lastName.toUpperCase()}</div>
                                <div style={infoRowStyle}><span style={labelStyle}>EMAIL:</span> {userData.email.toUpperCase()}</div>
                                <div style={infoRowStyle}><span style={labelStyle}>USER:</span> {userData.username.toUpperCase()}</div>
                                <div style={infoRowStyle}><span style={labelStyle}>B-DAY:</span> {userData.birthdate}</div>
                            </div>
                        ) : (
                            <p style={{ fontWeight: 'bold' }}>LOADING USER DATA...</p>
                        )}

                        <button 
                            onClick={() => setIsLogoutConfirmOpen(true)} 
                            style={logoutBtnStyle}
                        >
                            LOGOUT ACCOUNT
                        </button>
                    </div>
                </div>
            )}

            {/* 5. Logout Confirmation Modal (Pastel Yellow) */}
            {isLogoutConfirmOpen && (
                <div style={modalOverlayStyle}>
                    <div style={{...modalContentStyle, maxWidth: '400px', textAlign: 'center'}}>
                        <h2 style={{ fontSize: '32px', marginBottom: '20px', fontWeight: '900' }}>ARE YOU SURE?</h2>
                        <p style={{ fontWeight: 'bold', marginBottom: '30px' }}>YOU ARE ABOUT TO LOG OUT OF YOUR ACCOUNT.</p>
                        
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <button 
                                onClick={handleLogout} 
                                style={{ ...confirmBtnBase, backgroundColor: '#000', color: '#fff' }}
                            >
                                YES, LOGOUT
                            </button>
                            <button 
                                onClick={() => setIsLogoutConfirmOpen(false)} 
                                style={{ ...confirmBtnBase, backgroundColor: '#fff', color: '#000' }}
                            >
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const FeatureCard = ({ title, status, color, imageUrl }) => (
    <div style={{ ...cardStyle, backgroundColor: color }}>
        <div style={topPickBadge}>{status}</div>
        <h2 style={cardTitleStyle}>{title}</h2>
        <div style={cardImagePlaceholder}>
            <img src={imageUrl} alt={title} style={cardImgStyle} />
        </div>
        <button style={cardBtnStyle}>CHECK IT OUT</button>
    </div>
);

/* --- Styles --- */
const containerStyle = { backgroundColor: '#FDF6E3', minHeight: '100vh', fontFamily: '"Arial Black", sans-serif', padding: '0 20px 40px 20px', color: '#000' };
const navStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '2px solid #000', marginBottom: '20px' };
const logoGroup = { flex: 1, fontSize: '28px', fontWeight: '900', fontStyle: 'italic', fontFamily: 'serif' };
const centerLinksGroup = { flex: 2, display: 'flex', justifyContent: 'center', gap: '50px' };
const profileGroup = { flex: 1, display: 'flex', justifyContent: 'flex-end', paddingRight: '40px' };
const linkStyle = { fontWeight: 'bold', fontSize: '14px', color: '#000', letterSpacing: '0.5px' };

const heroSectionStyle = { display: 'flex', backgroundColor: '#A7C080', borderRadius: '40px', border: '3px solid #000', overflow: 'hidden', height: '400px', marginBottom: '40px' };
const heroTextStyle = { flex: 1, padding: '40px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
const headlineStyle = { fontSize: '60px', lineHeight: '0.9', margin: '0 0 20px 0', fontWeight: '900' };
const subheadStyle = { fontSize: '16px', maxWidth: '300px', marginBottom: '30px', fontWeight: 'normal', fontFamily: 'sans-serif' };
const mainBtnStyle = { backgroundColor: '#000', color: '#fff', padding: '12px 30px', borderRadius: '30px', border: 'none', fontWeight: '900', cursor: 'pointer', width: 'fit-content' };
const heroImageContainer = { flex: 1, padding: '20px', boxSizing: 'border-box' };
const heroImageWrapper = { height: '100%', width: '100%', borderRadius: '30px', border: '3px solid #000', overflow: 'hidden' };
const imageStyle = { width: '100%', height: '100%', objectFit: 'cover' };

const cardGridStyle = { display: 'flex', gap: '30px', justifyContent: 'space-between' };
const cardStyle = { flex: 1, border: '2px solid #000', borderRadius: '40px', padding: '40px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', position: 'relative' };
const topPickBadge = { position: 'absolute', top: '-15px', right: '-15px', backgroundColor: '#F8C8DC', padding: '10px', borderRadius: '50%', fontSize: '10px', fontWeight: 'bold', border: '2px solid #000' };
const cardTitleStyle = { fontSize: '42px', fontWeight: '900', margin: 0 };
const cardImagePlaceholder = { width: '100%', height: '250px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '20px', border: '2px solid #000', overflow: 'hidden' };
const cardImgStyle = { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' };
const cardBtnStyle = { width: '100%', backgroundColor: '#000', color: '#fff', padding: '15px', borderRadius: '40px', fontWeight: '900', cursor: 'pointer', border: 'none' };

const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(253, 246, 227, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(8px)' };
const modalContentStyle = { backgroundColor: '#F3E5AB', padding: '50px 40px', borderRadius: '40px', border: '5px solid #000', width: '90%', maxWidth: '450px', boxShadow: '15px 15px 0px #000', position: 'relative' };
const infoContainerStyle = { display: 'flex', flexDirection: 'column', gap: '12px', margin: '20px 0' };
const infoRowStyle = { fontSize: '16px', fontWeight: '900', borderBottom: '2px solid rgba(0,0,0,0.1)', paddingBottom: '8px' };
const labelStyle = { opacity: 0.6, fontSize: '12px', marginRight: '10px' };
const closeBtnStyle = { position: 'absolute', top: '-10px', right: '-10px', backgroundColor: '#000', color: '#fff', border: 'none', width: '40px', height: '40px', borderRadius: '50%', fontSize: '20px', fontWeight: '900', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' };
const logoutBtnStyle = { marginTop: '20px', width: '100%', backgroundColor: '#000', color: '#fff', padding: '18px', borderRadius: '40px', fontWeight: '900', fontSize: '16px', border: 'none', cursor: 'pointer' };

const confirmBtnBase = { flex: 1, padding: '15px', borderRadius: '30px', border: '3px solid #000', fontWeight: '900', cursor: 'pointer', fontSize: '14px' };

export default Dashboard;