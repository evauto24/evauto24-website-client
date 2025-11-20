import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function HomeLayout() {
    return (
        <div>
            <Navbar />
            <main style={{ padding: 24 }}>
                <Outlet />
            </main>
        </div>
    )
}
