import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Mini_nav = () => {
  return (
    <nav className='bg-gray-200 p-4'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center'>
        <div className='flex items-center mb-2 md:mb-0'>
          <FaPhoneAlt className='text-lg mr-2' />
          <span className='mr-4'>+91 8884 242 825 | +91 9902 989 055 | +91 9482 736 693</span>
          <IoMdMail className='text-lg mr-2' />
          <span>alwynpackers@gmail.com</span>
        </div>
        <div className='flex items-center justify-center'>
          {/* Add your social icons or any other components here */}
        </div>
      </div>
    </nav>
  );
};

export default Mini_nav;
