'use client';
import { usePathname } from 'next/navigation';
import { BsPiggyBank } from 'react-icons/bs';
import { FaDoorOpen } from 'react-icons/fa';
import {
  MdAttachMoney,
  MdDashboard,
  MdDoorFront,
  MdFileCopy,
  MdOutlineTableChart,
} from 'react-icons/md';
import Divider from '@/ui/Divider';
import LinkListItem from './LinkListItem';

export default function NavbarLinkList({
  handleSidebar,
  type,
}: {
  handleSidebar: () => void;
  type: 'public' | 'private';
}) {
  const path = usePathname();

  return (
    <ul className='flex flex-col mt-8 pr-4 gap-y-2'>
      {type === 'private' && (
        <>
          <LinkListItem
            href='/dashboard'
            label='Dashboard'
            isActive={path === '/dashboard'}
            icon={<MdDashboard />}
            handleSidebar={handleSidebar}
          />
          <LinkListItem
            href='/budget'
            label='Orçamento'
            isActive={path === '/budget'}
            icon={<MdAttachMoney />}
            handleSidebar={handleSidebar}
          />
          <LinkListItem
            href='/vault'
            label='Cofre'
            isActive={path === '/vault'}
            icon={<BsPiggyBank className='scale-x-[-1]' />}
            handleSidebar={handleSidebar}
          />
          <LinkListItem
            href='/transaction'
            label='Transações'
            isActive={path === '/transaction'}
            icon={<MdOutlineTableChart />}
            handleSidebar={handleSidebar}
          />
          <Divider direction='horizontal' className='my-2' />
          <LinkListItem
            href='/logout'
            label='Sair'
            isActive={false}
            icon={<FaDoorOpen />}
            handleSidebar={handleSidebar}
          />
        </>
      )}
      {type === 'public' && (
        <>
          <LinkListItem
            href='/login'
            label='Login'
            isActive={path === '/login'}
            icon={<MdDoorFront />}
            handleSidebar={handleSidebar}
          />
          <LinkListItem
            href='/register'
            label='Cadastro'
            isActive={path === '/register'}
            icon={<MdFileCopy />}
            handleSidebar={handleSidebar}
          />
        </>
      )}
    </ul>
  );
}
