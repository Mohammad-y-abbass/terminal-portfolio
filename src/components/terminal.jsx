'use client';
import React, { useState, useRef } from 'react';
import { Cursor } from './cursor';
import { CodeViewer } from './codeViewer';
import useScrollToBottom from '@/hooks/useScrollToBottom';
import useFocusInput from '@/hooks/useFocusInput';
import useSubmitCmd from '@/hooks/useSubmitCmd';
import { useCmdHistoryContext } from '@/context/CmdHistoryContext';

export function Terminal() {
  const { CmdHistory, setCmdHistory } = useCmdHistoryContext();
  const [input, setInput] = useState('');
  const [currentPath, setCurrentPath] = useState('~');

  const [commandIndex, setCommandIndex] = useState(-1);
  const [inputHistory, setInputHistory] = useState([]);
  const [activeProject, setActiveProject] = useState();

  const terminalRef = useRef(null);
  const inputRef = useRef(null);


  useScrollToBottom(terminalRef, CmdHistory);

  useFocusInput(inputRef);

  const handleSubmit = useSubmitCmd(
    input,
    setInput,
    inputHistory,
    setInputHistory,
    setCommandIndex,
    setActiveProject,
    setCmdHistory,
    CmdHistory
  );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandIndex < inputHistory.length - 1) {
        const newIndex = commandIndex + 1;
        setCommandIndex(newIndex);
        setInput(inputHistory[inputHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex > 0) {
        const newIndex = commandIndex - 1;
        setCommandIndex(newIndex);
        setInput(inputHistory[inputHistory.length - 1 - newIndex]);
      } else if (commandIndex === 0) {
        setCommandIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      handleTabCompletion();
    }
  };

  const handleTabCompletion = () => {
    const commands = [
      'help',
      'about',
      'skills',
      'projects',
      'contact',
      'clear',
      'social',
      'experience',
      'education',
      'ls',
      'cd',
      'ecommerce-code',
      'taskmanager-code',
      'weather-code',
    ];

    if (input) {
      const matchingCommands = commands.filter((cmd) => cmd.startsWith(input));
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      }
    }
  };

  const renderTerminal = () => {
    if (activeProject) {
      return (
        <CodeViewer
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      );
    }

    return (
      <div
        ref={terminalRef}
        className='bg-black text-green-500 font-mono p-4 h-[70vh] overflow-auto [&::-webkit-scrollbar]:hidden'
        onClick={() => inputRef.current?.focus()}
      >
        {CmdHistory.map((item, index) => (
          <div key={index} className='mb-2'>
            {item.command && (
              <div className='flex'>
                <span className='text-blue-400'>{currentPath}</span>
                <span className='text-white mx-1'>$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className='ml-2'>
              {React.isValidElement(item.output) ? (
                item.output
              ) : (
                <span>{item.output}</span>
              )}
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className='flex items-center'>
          <span className='text-blue-400'>{currentPath}</span>
          <span className='text-white mx-1'>$</span>
          <div className='flex-1 relative'>
            <input
              ref={inputRef}
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className='bg-transparent border-none outline-none text-green-500 font-mono w-full'
              autoFocus
              aria-label='Terminal input'
            />
            {!input && <Cursor />}
          </div>
        </form>
      </div>
    );
  };

  return renderTerminal();
}
