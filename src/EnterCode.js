import React, { useState } from 'react';
import './forgot.css'; // Ensure the same CSS file if needed

const EnterCode = ({ onCodeVerified }) => {
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle verifying the reset code here
        setMessage('Code verified. You can now set your new password.');
        onCodeVerified(); // Notify parent component that code is verified
    };

    return (
        <div className='code'>
            <p>Enter the code you received in your email:</p>
            <form onSubmit={handleCodeSubmit}>
                <label htmlFor='code'>Enter Code:</label>
                <input
                    type="text"
                    id="code"
                    name="code"
                    placeholder='Code received in your email...'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <button type="submit">Verify Code</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default EnterCode;
