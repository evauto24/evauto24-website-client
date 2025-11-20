import { useParams } from 'react-router-dom'

export default function DynamicPage() {
    const { section } = useParams()
    return (
        <div>
            <h2>Dynamic page: {section}</h2>
            <p>This page is rendered for the dynamic route <code>/:section</code>.</p>
        </div>
    )
}
