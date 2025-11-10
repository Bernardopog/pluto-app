import type { Metadata } from 'next';
import Link from 'next/link';
import LoginForm from '@/layout/Login/LoginForm';
import Divider from '@/ui/Divider';

export const metadata: Metadata = {
  title: 'Pluto | Login',
};

export default function LoginPage() {
  return (
    <main className='flex flex-col items-center justify-center h-screen max-h-[calc(100dvh)] p-0 bg-gradient-to-t from-chetwode-blue-100 to-chetwode-blue-400 dark:from-chetwode-blue-800 dark:to-chetwode-blue-950'>
      <section className='flex flex-col gap-2 rounded-lg'>
        <h2 className='subtitle text-center'>Login</h2>
        <LoginForm />
        <Divider direction='horizontal' />
        <div className='flex flex-col items-end p-2 rounded-lg text-chetwode-blue-950 bg-chetwode-blue-50 shadow-md'>
          <p>
            Ainda não possui uma conta no{' '}
            <span className='text-chetwode-blue-700 font-bold'>Pluto</span>?
          </p>
          <Link href='/register' className='underline text-chetwode-blue-900'>
            Criar uma agora mesmo
          </Link>
        </div>
      </section>
    </main>
  );
}
