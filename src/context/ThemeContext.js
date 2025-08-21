// src/context/ThemeContext.js
"use client";

import { createContext, useContext } from 'react';

// Membuat context dengan nilai default
const ThemeContext = createContext({
  theme: 'retro', // tema default
  setTheme: () => {}, // fungsi placeholder
});

// Membuat custom hook untuk mempermudah penggunaan context
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;