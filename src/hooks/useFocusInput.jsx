import { useEffect } from 'react';

const useFocusInput = (inputRef) => {
  useEffect(() => {
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Add event listener to focus the input when clicking anywhere in the terminal
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useFocusInput;
