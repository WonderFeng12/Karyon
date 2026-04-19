import React from 'react';

const LogoTest: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#111921', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#111921', padding: '40px', borderRadius: '10px' }}>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>Logo Test</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '100px', height: '100px', backgroundColor: 'transparent', border: '2px solid white' }}>
            <img src="/image/logo.png" alt="Logo Test" style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'transparent' }} />
          </div>
          
          <div style={{ width: '100px', height: '100px', backgroundColor: 'transparent' }}>
            <img src="/image/logo.png" alt="Logo Test 2" style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'transparent' }} />
          </div>
          
          <div style={{ width: '40px', height: '40px', backgroundColor: 'transparent' }}>
            <img src="/image/logo.png" alt="Logo Test 3" style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'transparent' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTest;