'use client';

import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useThemeStore } from '@/stores/useThemeStore';

export default function ThemeToggler({
  themeIsDark,
}: {
  themeIsDark: boolean;
}) {
  const setTheme = useThemeStore((s) => s.setTheme);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(themeIsDark);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.cookie = `theme=${isDarkMode ? 'light' : 'dark'}; path=/`;
    document.documentElement.classList.toggle('dark');

    setTheme(isDarkMode ? 'light' : 'dark');
  };

  useEffect(() => {
    setTheme(themeIsDark ? 'dark' : 'light');
  }, [setTheme, themeIsDark]);

  return (
    <button
      type='button'
      onClick={handleToggle}
      className={`fixed top-2 right-2 z-50 w-16 min-h-7 rounded-full  text-chetwode-blue-950 duration-300 ease-in-out ${
        isDarkMode ? 'bg-chetwode-blue-800' : 'bg-chetwode-blue-600'
      }`}
    >
      <div
        className={`absolute z-10 top-1/2 size-6 rounded-full -translate-y-1/2 ease-in-out duration-300 bg-chetwode-blue-50 ${
          isDarkMode ? 'translate-x-0.5' : 'translate-x-[155%]'
        }`}
      ></div>
      <span
        className={`absolute top-1/2 text-2xl -translate-1/2 ease-in-out duration-300 text-chetwode-blue-50 ${
          isDarkMode ? 'translate-x-0' : '-translate-x-6'
        }`}
      >
        {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
      </span>
    </button>
  );
}
