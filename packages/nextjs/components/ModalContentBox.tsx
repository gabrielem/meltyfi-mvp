// ModalContentBox
import React from 'react';
import { IoCloseCircleSharp } from 'react-icons/io5';

const ModalContentBox: React.FC<any> = ({
  children,
  overlayClassName = 'bg-black bg-opacity-50',
  modalClassName = 'p-0 pt-2',
  handleShow
}) => {
  const { show, setShow } = handleShow

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${overlayClassName} backdrop-grayscale backdrop-blur-sm`} onClick={() => setShow(false)}>
      <div 
        className={`relative w-full max-w-md md:max-w-lg lg:max-w-xl ${modalClassName} max-h-[calc(100vh-2rem)] flex flex-col`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-white hover:text-gray-200 bg-primary bg-opacity-100 rounded-full p-1 z-10"
          aria-label="Close modal"
        >
          <IoCloseCircleSharp className='text-3xl' />
        </button>
        <div className="p-6 overflow-y-auto flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalContentBox;