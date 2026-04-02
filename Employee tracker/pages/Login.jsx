import { useState } from 'react';

function Login({ setUser }) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === '1234') {
      setUser({ name });
      setError('');
    } else {
      setError('Invalid password ❌');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #667eea, #764ba2)',
      fontFamily: 'Arial'
    }}>

      <div style={{
        width: '350px',
        background: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
      }}>

        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#111827'
        }}>
          Login
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />

        {error && (
          <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '12px',
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;
