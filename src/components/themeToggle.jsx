"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../lib/features/theme/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <button onClick={handleToggle}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;