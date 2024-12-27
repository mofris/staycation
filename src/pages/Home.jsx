import Navbar from '@/components/navbar/Navbar'
import Buttom from '@/elements/buttom/Buttom'

export default function Home() {
    return (
        <>
            <Navbar />
            <Buttom style="bg-blue-600 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300">Show me now</Buttom>
        </>
    )
}