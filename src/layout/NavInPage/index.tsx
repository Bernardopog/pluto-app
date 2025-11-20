'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import Inert from '@/components/Inert';
import { NavInPageLink } from '@/components/NavInPage';

interface INavLinkData {
  href: string;
  label: string;
}
type PagesType = 'budget' | 'transaction' | 'vault' | 'dashboard';

export default function NavInPage() {
  const currentPage = usePathname().replace('/', '');
  const allowedPages = ['budget', 'transaction', 'vault', 'dashboard'];

  const linksMap: Record<PagesType, INavLinkData[]> = {
    budget: [
      { href: '#budget-overview', label: 'Resumo' },
      { href: '#budget-action', label: 'Ações' },
      { href: '#budget-budgets', label: 'Orçamentos' },
      { href: '#budget-chart', label: 'Gráfico' },
    ],
    vault: [
      { href: '#vault-overview', label: 'Resumo' },
      { href: '#vault-action', label: 'Ações' },
      { href: '#vault-vaults', label: 'Cofres' },
      { href: '#vault-chart', label: 'Gráfico' },
    ],
    transaction: [
      { href: '#transaction-overview', label: 'Resumo' },
      { href: '#transaction-action', label: 'Ações' },
      { href: '#transaction-filter', label: 'Filtro' },
      { href: '#transaction-moves', label: 'Transações' },
    ],
    dashboard: [
      { href: '#dashboard-overview', label: 'Resumo' },
      { href: '#dashboard-vault', label: 'Cofres' },
      { href: '#dashboard-goals', label: 'Objetivo' },
      { href: '#dashboard-budget', label: 'Orçamentos' },
      { href: '#dashboard-transaction', label: 'Transações' },
      { href: '#dashboard-stats', label: 'Estatísticas' },
    ],
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!allowedPages.includes(currentPage as PagesType)) return null;

  return (
    <>
      <button
        type='button'
        className='fixed top-10 right-2 z-50 rounded-full bg-chetwode-blue-700 text-chetwode-blue-50 duration-300 ease-in-out lg:hidden'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-label={`${isDropdownOpen ? 'Fechar Navegação pela Página' : 'Abrir Navegação pela Página'}`}
        title={`${isDropdownOpen ? 'Fechar Navegação pela Página' : 'Abrir Navegação pela Página'}`}
      >
        <MdArrowDropDown
          className={`text-3xl duration-300 ease-in-out ${isDropdownOpen && 'rotate-180'}`}
        />
      </button>
      <Inert isVisible={isDropdownOpen}>
        <nav
          className={`fixed top-18 right-2 z-60 bg-chetwode-blue-200 rounded-lg shadow-lg duration-300 ease-in-out overflow-hidden dark:bg-chetwode-blue-800 lg:hidden ${isDropdownOpen ? 'min-h-36 p-2' : 'min-h-0 h-0 p-0'}`}
        >
          <ul>
            {linksMap[currentPage as PagesType].map((item, index) => (
              <NavInPageLink
                // biome-ignore lint/suspicious/noArrayIndexKey: <static list>
                key={index}
                href={item.href}
                label={item.label}
              />
            ))}
          </ul>
        </nav>
      </Inert>
    </>
  );
}
