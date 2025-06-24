import React from 'react'

import Link from 'next/link'

const Header = () => {


  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Components', href: '/components' },
    { name: 'About', href: '#link' },
    { name: 'Testing', href: '/testing'}
]


  return (
    <>
      <main className="px-15 py-5 mx-5 mt-2 mb-3 sticky top-3 left-0 right-0 z-99 bg-white/50 shadow-lg rounded-4xl backdrop-blur-xl">
        <nav className="flex justify-between ">
          <section>
            <Link href={"/"}>Logo</Link>
          </section>
          {/* menuItems */}
          <section>
            <ul className='flex gap-10  '>
              {menuItems.map((item, index) => (
                <li className='font-semibold hover:underline transition-all duration-1000 hover:translate-y-1' key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </main>
    </>
  );
}

export default Header