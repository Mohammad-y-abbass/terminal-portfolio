import Help from '@/components/Help';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Socials from '@/components/Socials';
import Projects from '@/components/Projects';

const useExeCmd = (cmd, setActiveProject, setCmdHistory, CmdHistory) => {
  console.log(setActiveProject);

  const command = cmd.trim().toLowerCase();
  const args = command.split(' ');
  const mainCommand = args[0];

  switch (mainCommand) {
    case 'help':
      setCmdHistory([...CmdHistory, { command: cmd, output: <Help /> }]);
      return { command: cmd, output: <Help /> };

    case 'about':
      setCmdHistory([...CmdHistory, { command: cmd, output: <About /> }]);
      return { command: cmd, output: <About /> };

    case 'skills':
      setCmdHistory([...CmdHistory, { command: cmd, output: <Skills /> }]);
      return { command: cmd, output: <Skills /> };

    case 'experience':
      setCmdHistory([...CmdHistory, { command: cmd, output: <Experience /> }]);
      return { command: cmd, output: <Experience /> };

    case 'education':
      setCmdHistory([...CmdHistory, { command: cmd, output: <Education /> }]);
      return { command: cmd, output: <Education /> };

    case 'contact':
      setCmdHistory([...CmdHistory, { command: cmd, output: <Contact /> }]);
      return { command: cmd, output: <Contact /> };

    case 'social':
      setCmdHistory([...CmdHistory, { command: cmd, output: <Socials /> }]);
      return { command: cmd, output: <Socials /> };

    case 'projects':
      setCmdHistory([
        ...CmdHistory,
        {
          command: cmd,
          output: <Projects setActiveProject={setActiveProject} />,
        },
      ]);
      return {
        command: cmd,
        output: <Projects setActiveProject={setActiveProject} />,
      };

    case 'clear':
      setCmdHistory([
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
      return {
        command: cmd,
        output: null,
      };

    case 'ls':
      setCmdHistory([
        ...CmdHistory,
        {
          command: cmd,
          output: (
            <div className='grid grid-cols-3 gap-2'>
              <span className='text-blue-400'>about</span>
              <span className='text-blue-400'>skills</span>
              <span className='text-blue-400'>projects</span>
              <span className='text-blue-400'>experience</span>
              <span className='text-blue-400'>education</span>
              <span className='text-blue-400'>contact</span>
              <span className='text-blue-400'>social</span>
            </div>
          ),
        },
      ]);
      return { command: cmd, output: null };
    default:
      setCmdHistory([
        ...CmdHistory,
        {
          command: cmd,
          output: (
            <p className='text-red-400'>
              Command not found: {cmd}. Type{' '}
              <span className='text-yellow-300'>help</span> to see available
              commands.
            </p>
          ),
        },
      ]);
      return { command: cmd, output: null };
  }
};

export default useExeCmd;
