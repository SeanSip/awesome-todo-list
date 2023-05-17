import React, { useState, useEffect } from 'react';

const ToggleLightDarkMode = ({ className }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={className}>
      <button
        onClick={handleThemeSwitch}
        className={`${
          theme === 'dark' ? 'bg-blue-700 text-black' : 'bg-black text-white'
        } px-3 py-2 rounded-full text-3xl`}
      >
        {`${theme === 'dark' ? '☀️' : '🌙'}`}
      </button>
    </div>
  );
};

export default ToggleLightDarkMode;
