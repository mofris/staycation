import Navbar from '@/components/Navbar'
import Buttom from '@/elements/buttom/Buttom'

export default function Home() {
    return (
        <>
            <Navbar />
            <Buttom style="bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-500">Show me now</Buttom>
        </>
    )
}