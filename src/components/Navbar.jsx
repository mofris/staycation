import Link from '@/elements/Link'

export default function Navbar() {
    return (
        <div className="bg-gray-100 shadow-md">
            <div className="container mx-auto px-8">
                <div className="flex items-center justify-between py-6">

                    <Link to="#" style="text-blue-600 text-2xl font-bold hover:text-gray-900 transition-all duration-500 hover:-translate-y-1">Stay<span className="text-gray-900 hover:text-blue-600 transition-all duration-500">cation.</span></Link>

                    <nav className="flex space-x-6">
                        <Link to="#" style="font-semibold text-blue-600 py-0.5">Home</Link>
                        <Link to="#" style="text-gray-600 hover:text-blue-600 py-0.5">Browse by</Link>
                        <Link to="#" style="text-gray-600 hover:text-blue-600 py-0.5">Stories</Link>
                        <Link to="#" style="text-gray-600 hover:text-blue-600 py-0.5">Agents</Link>
                        <Link to="/login" style="bg-blue-600 text-white py-0.5 px-4 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-500">Login</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}