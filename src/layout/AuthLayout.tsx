import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#f5f7fb' }}>
            <div style={{ width: 360, padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.08)' }}>
                <Outlet />
            </div>
        </div>
    )
}
