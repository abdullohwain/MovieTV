import React from 'react'
import { Link } from 'react-router-dom';
import { Sitenav } from './';

function Header() {
  return (
    <div className="bg-white shadow-lg py-6">
        <div className="container flex items-center justify-between">
             <Link className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-800 bg-clip-text text-transparent" to="/">MovieTV
             </Link>

             <Sitenav />
        </div>
    </div>
  )
}

export default Header;