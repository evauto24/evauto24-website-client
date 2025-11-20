import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const linkStyle: React.CSSProperties = { marginRight: 12, textDecoration: 'none', color: '#0b5cff' }

export default function Navbar() {
    const params = useParams()
    const section = params.section || 'home'

    return (
        <nav style={{ display: 'flex', alignItems: 'center', padding: '12px 24px', background: '#fff', borderBottom: '1px solid #e6e9ef' }}>
            <div style={{ fontWeight: 700, marginRight: 24 }}>evauto24</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/home" style={linkStyle} end>
                    Home
                </NavLink>
                <NavLink to="/dashboard" style={linkStyle}>
                    Dashboard
                </NavLink>
                <NavLink to="/profile" style={linkStyle}>
                    Profile
                </NavLink>
            </div>
            <div style={{ marginLeft: 'auto', color: '#666' }}>Section: {section}</div>
        </nav>
    )
}
