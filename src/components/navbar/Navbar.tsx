import React from 'react'
import Image from '../../../node_modules/next/image'
import Link from '../../../node_modules/next/link'

const Navbar = () => {
    return (<nav className="flex items-center justify-between py-6">
        <Link href='/'>
            <div className="flex items-center cursor-pointer">
                <Image src="/logo2.jpg" alt="logo" width={150} height={125} />
                {/* <span className="font-bold ml-2 text-primary">
                    Mindful Life Path
                </span> */}
            </div>
        </Link>
        {/* <ul className="flex items-center">
            <li className="mr-6 font-medium text-gray-600">
                <a href="#">Products</a>
            </li>
            <li className="mr-6 font-medium text-gray-600">
                <a href="#">Pricing</a>
            </li>
            <li className="mr-6 font-medium text-gray-600">
                <a href="#">Docs</a>
            </li>
            <li className="mr-6 font-medium text-gray-600">
                <a href="#">Company</a>
            </li>
        </ul> */}
        <ul className="flex items-center">
            <li className="mr-6 font-medium text-gray-600">
                <a href="#" className="hover:text-gray-400">Login</a>
            </li>
            <li className="mr-6 font-medium text-gray-600">
                <a href="#" className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all">Sign Up</a>
            </li>
        </ul>
    </nav>)
}

export default Navbar;