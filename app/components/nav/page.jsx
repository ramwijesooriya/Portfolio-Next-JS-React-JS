import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className="p-4 bg-gray-200">
    <h1 className="text-xl font-bold">Navigation</h1>
    <Link href="/app/page.js" className="text-blue-500 hover:underline">
      Home
    </Link>
  </div>
  )
}

export default page
