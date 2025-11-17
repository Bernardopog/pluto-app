'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { GoSidebarCollapse } from 'react-icons/go';
import { MdMenu } from 'react-icons/md';
import Inert from '@/components/Inert';
import NavbarLinkList from './NavbarLinkList';

export default function Navbar() {
  const [isSiderbarOpen, setIsSiderbarOpen] = useState<boolean>(false);

  const handleSidebar = () => {
    setIsSiderbarOpen(!isSiderbarOpen);
  };

  const url = usePathname();

  const publicRoutes = ['/login', '/register'];
  const blockedRoutes = ['/logout'];

  return (
    <>
      {blockedRoutes.includes(url) ? null : (
        <button
          type='button'
          className={`flex items-center justify-center absolute z-50 size-8 rounded-full text-2xl bg-chetwode-blue-800 text-star-dust-50 cursor-pointer duration-300 ease-in-out ${
            isSiderbarOpen ? 'top-4 left-[calc(16rem-3rem)]' : 'top-2 left-2'
          }`}
          aria-label={isSiderbarOpen ? 'Fechar Menu' : 'Abrir Menu'}
          title={isSiderbarOpen ? 'Fechar Menu' : 'Abrir Menu'}
          onClick={handleSidebar}
        >
          {isSiderbarOpen ? (
            <GoSidebarCollapse className='rotate-180' />
          ) : (
            <MdMenu />
          )}
        </button>
      )}
      <Inert
        isVisible={isSiderbarOpen}
        className={`absolute z-40 h-dvh duration-300 ease-in-out overflow-clip ${
          isSiderbarOpen ? 'w-full' : 'w-0'
        }`}
      >
        <button
          type='button'
          className='size-full bg-black/25 backdrop-blur-xs'
          onClick={handleSidebar}
          aria-label='Fechar barra de navegação'
        >
          {/* //biome-ignore lint/a11y/noStaticElementInteractions: <Used for stop propagation> */}
          {/** biome-ignore lint/a11y/useKeyWithClickEvents: <Used for stop propagation> */}
          <nav
            className='w-64 h-full py-4 bg-chetwode-blue-800 text-star-dust-50'
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className='ml-4 text-3xl font-bold'>Pluto</h1>
            <NavbarLinkList
              type={publicRoutes.includes(url) ? 'public' : 'private'}
              handleSidebar={handleSidebar}
            />
          </nav>
        </button>
      </Inert>
    </>
  );
}
