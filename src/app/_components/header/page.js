'use client';

import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-9999">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 p-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center">
          <p className='text-5xl text-orange-600 font-[Oswald]'>S<sup className="text-2xl font-[Montserrat] text-black">tartrends</sup></p>
          <small className='text-amber-900'>Stay Ahead. Stay Trending</small>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-16">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="hover:text-orange-600">Category</MenuButton>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                {[{name: 'Social Media', category: "socialmedia"}, {name: 'IT Trends', category: "ittrends"}, {name:'Food', category: "food"}, {name: 'Bollywood', category: "bollywood"}, {name: 'Cyber Trends', category: "cybertrends"}, {name:'Sports', category: "sports"}, {name:'Programming', category: "programming"}].map((item) => (
                  <MenuItem key={item}>
                    {({ active }) => (
                      <Link href={`/blogs/${item.category}`} className={`block px-4 py-2 ${active ? 'bg-gray-200' : ''}`}>{item.name}</Link>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
          <Link href="/blogs" className="hover:text-orange-600">Blogs</Link>
          <Link href="/about" className="hover:text-orange-600">About</Link>
          <Link href="/contact" className="hover:text-orange-600">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-4 space-y-4 shadow-lg">
          <Link href="/" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="hover:text-orange-600">Category</MenuButton>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                {['Social Media', 'IT Trends', 'Food', 'Bollywood', 'Cyber Trends', 'Sports', 'Programming'].map((item) => (
                  <MenuItem key={item}>
                    {({ active }) => (
                      <Link href={`/blogs/${item.toLowerCase().replace(' ', '-')}`} className={`block px-4 py-2 ${active ? 'bg-gray-200' : ''}`}>{item}</Link>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
          <Link href="/blogs" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link href="/about" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
