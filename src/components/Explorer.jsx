'use client';

import { useState } from 'react';
import {
  Folder,
  FolderOpen,
  FileText,
  FileCode,
  FileImage,
  FileJson,
} from 'lucide-react';
import 'prismjs';
import 'prismjs/themes/prism.css';

export default function CodeExplorer({
  files,
  loading,
  setActiveFile,
  project,
}) {
  const [expandedFolders, setExpandedFolders] = useState({});

  const toggleFolder = (name) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();

    switch (extension) {
      case 'js':
      case 'jsx':
      case 'ts':
      case 'tsx':
        return <FileCode className='h-4 w-4 text-yellow-400' />;
      case 'json':
        return <FileJson className='h-4 w-4 text-yellow-300' />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'svg':
      case 'gif':
        return <FileImage className='h-4 w-4 text-blue-400' />;
      default:
        return <FileText className='h-4 w-4 text-gray-400' />;
    }
  };

  const fetchFileContent = async (file) => {
    console.log(file);
    const res = await fetch(
      `https://api.github.com/repos/Mohammad-y-abbass/${project}/contents/${file}`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );
    const content = await res.json();
    const decodedContent = decodeURIComponent(escape(atob(content.content)));
    const highlightedContent = Prism.highlight(
      decodedContent,
      Prism.languages.javascript,
      'javascript'
    );
    setActiveFile(highlightedContent);
  };

  const renderTree = (nodes, level = 0) => {
    return (
      <ul
        className={`space-y-1 ${
          level > 0 ? 'ml-3 pl-2 border-l border-gray-700' : ''
        }`}
      >
        {nodes.map((node) => (
          <li
            key={node.name}
            className='text-gray-300 text-sm'
            onClick={() => node.type === 'file' && fetchFileContent(node.path)}
          >
            {node.type === 'dir' ? (
              <div>
                <div
                  className='flex items-center gap-2 cursor-pointer py-1 px-2 hover:bg-gray-800 rounded transition-colors duration-150'
                  onClick={() => toggleFolder(node.name)}
                >
                  {expandedFolders[node.name] ? (
                    <FolderOpen className='h-4 w-4 text-blue-400' />
                  ) : (
                    <Folder className='h-4 w-4 text-blue-400' />
                  )}
                  <span className='truncate'>{node.name}</span>
                </div>
                {expandedFolders[node.name] && (
                  <div className='animate-fadeIn text-xs'>
                    {renderTree(node.children, level + 1)}
                  </div>
                )}
              </div>
            ) : (
              <div className='flex items-center gap-2 py-1 px-2 hover:bg-gray-800 rounded transition-colors duration-150 cursor-pointer'>
                {getFileIcon(node.name)}
                <span className='truncate text-xs'>{node.name}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className='w-[30%] h-full bg-gray-900 border-r border-gray-700 flex flex-col text-xs'>
      <div className='p-3 border-b border-gray-800 '>
        <h2 className='text-gray-400 font-medium text-xs uppercase tracking-wider'>
          Explorer
        </h2>
      </div>
      <div className='flex-1 overflow-auto p-2 scrollbar-thin scrollbar-thumb-gray-700 [&::-webkit-scrollbar]:hidden'>
        {loading ? (
          <div className='text-gray-400 text-center mt-4'>Loading files...</div>
        ) : files && files.length > 0 ? ( // Ensure files is not empty
          renderTree(files)
        ) : (
          <div className='text-red-400 text-center mt-4'>
            Something went wrong
          </div>
        )}
      </div>
    </div>
  );
}
