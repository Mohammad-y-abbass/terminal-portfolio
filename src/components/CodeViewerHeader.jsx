import { Maximize2, Minimize2, X } from 'lucide-react';

const CodeViewerHeader = ({
  project,
  onClose,
  setIsFullScreen,
  isFullScreen,
}) => {
  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };
  return (
    <div className=' border-b-2 border-gray-600 py-2 px-4 flex justify-between items-center'>
      <h1 className='text-gray-400'>{project}</h1>
      <div className='flex gap-2'>
        {isFullScreen ? (
          <Minimize2
            onClick={toggleFullScreen}
            className='cursor-pointer text-gray-400 text-sm'
          />
        ) : (
          <Maximize2
            onClick={toggleFullScreen}
            className='cursor-pointer text-gray-400 text-sm'
          />
        )}
        <X onClick={onClose} className='cursor-pointer text-gray-400 text-sm' />
      </div>
    </div>
  );
};

export default CodeViewerHeader;
