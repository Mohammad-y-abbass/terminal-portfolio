'use client';
import { createContext, useContext, useState } from 'react';

// Create the context
const CmdHistoryContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [CmdHistory, setCmdHistory] = useState([
    {
      command: '',
      output: (
        <div className='text-green-400'>
          <p>
            Welcome to my terminal portfolio! Type{' '}
            <span className='text-yellow-300'>help</span> to see available
            commands.
          </p>
        </div>
      ),
    },
  ]);
  return (
    <CmdHistoryContext.Provider value={{ CmdHistory, setCmdHistory }}>
      {children}
    </CmdHistoryContext.Provider>
  );
};

// Custom hook to use the context
export const useCmdHistoryContext = () => {
  const context = useContext(CmdHistoryContext);
  if (!context) {
    throw new Error('Error in the context');
  }
  return context;
};
