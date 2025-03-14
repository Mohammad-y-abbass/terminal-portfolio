import { AppProvider } from '@/context/CmdHistoryContext';

import React from 'react';

const ContextProvider = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default ContextProvider;
