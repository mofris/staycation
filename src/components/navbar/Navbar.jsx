export default function Navbar() {
    return (
        <div className="bg-gray-100 shadow-md">
            <div className="container mx-auto px-8">
                <div className="flex items-center justify-between py-6">

                    <a href="#" className="text-blue-600 text-2xl font-bold hover:text-gray-900 transition-all duration-500 hover:-translate-y-1">Stay<span className="text-gray-900 hover:text-blue-600 transition-all duration-500">cation.</span></a>

                    <nav className="flex space-x-6">
                        <a href="#" className="font-medium text-blue-600">Home</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Browse by</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Stories</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600">Agents</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}