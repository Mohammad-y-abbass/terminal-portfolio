'use client';

import { useState, useEffect } from 'react';

export function Cursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => !v);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className='absolute inline-block h-5 w-2 bg-green-500'
      style={{ opacity: visible ? 1 : 0 }}
    ></span>
  );
}
