import { Terminal } from '@/components/terminal';

export default function Home() {
  return (
      <div className='min-h-screen bg-black p-4 md:p-8 flex items-center justify-center text-xs sm:text-base'>
        <div className='w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-gray-800 shadow-2xl'>
          <div className='bg-gray-900 p-2 flex items-center gap-2'>
            <div className='flex gap-1.5'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>
            <div className='text-center flex-1 text-sm text-gray-400 font-mono'>
              portfolio.terminal
            </div>
          </div>
          <Terminal />
        </div>
      </div>
  );
}
