import React from 'react';
import Link from 'next/link';

const Socials = () => {
  return (
    <div className='space-y-2'>
      <p className='text-yellow-300 font-bold'>Social Media</p>
      <Link
        target='_blank'
        href='https://github.com/Mohammad-y-abbass'
        className='text-blue-400 underline mr-4'
      >
        Github
      </Link>
      <Link
        target='_blank'
        href='https://www.linkedin.com/in/mohammad-abbass/'
        className='text-blue-400 underline'
      >
        LinkedIn
      </Link>
    </div>
  );
};

export default Socials;
