import React from 'react'

export default function Login() {
    return (
        <div>
            <h2>Sign in</h2>
            <form>
                <div style={{ marginBottom: 8 }}>
                    <label>
                        Email
                        <input name="email" type="email" style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }} />
                    </label>
                </div>
                <div style={{ marginBottom: 8 }}>
                    <label>
                        Password
                        <input name="password" type="password" style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }} />
                    </label>
                </div>
                <button type="submit" style={{ padding: '8px 12px' }}>Sign in</button>
            </form>
        </div>
    )
}
