import { useEffect } from 'react';

const useScrollToBottom = (terminalRef, commandHistory) => {
  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [commandHistory]);
};

export default useScrollToBottom;
