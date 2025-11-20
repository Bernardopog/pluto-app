import { MdArrowDropDown } from 'react-icons/md';

interface INavInPageLinkProps {
  href: string;
  label: string;
}

export default function NavInPageLink({ href, label }: INavInPageLinkProps) {
  return (
    <div>
      <li className='w-full'>
        <a
          href={href}
          className='group inline-flex items-center justify-between relative w-full gap-1 p-1 cursor-pointer h-full duration-300 ease-in-out text-chetwode-blue-950 hover:text-chetwode-blue-600 dark:text-chetwode-blue-100 dark:hover:text-chetwode-blue-300'
        >
          <span>{label}</span>
          <MdArrowDropDown className='rotate-270 text-2xl' />
          <div className='absolute bottom-1 w-0 h-0.5 duration-300 ease-in-out group-hover:w-[85%] bg-chetwode-blue-600 dark:bg-chetwode-blue-50'></div>
        </a>
      </li>
    </div>
  );
}
