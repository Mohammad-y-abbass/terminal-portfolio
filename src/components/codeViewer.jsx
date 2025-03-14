'use client';
import { useState, useEffect } from 'react';
import CodeViewerHeader from './CodeViewerHeader';
import CodeExplorer from './Explorer';

export function CodeViewer({ project, onClose }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [files, setFiles] = useState([]);
  const [explorerLoading, setExplorerLoading] = useState(false);
  const [activeFile, setActiveFile] = useState(null);

  useEffect(() => {
    const fetchDirContentsRecursive = async (url) => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
          },
        });
        const data = await response.json();
        const allContents = [];

        for (let item of data) {
          if (item.type === 'dir') {
            // Fetch contents of subdirectory recursively
            const children = await fetchDirContentsRecursive(item.url, {
              headers: {
                Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
              },
            });
            allContents.push({
              name: item.name,
              type: 'dir',
              path: item.path,
              children,
            });
          } else {
            // Fetch file content
            const fileResponse = await fetch(item.url, {
              headers: {
                Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
              },
            });
            const fileData = await fileResponse.text(); // Fetch file content as text

            allContents.push({
              name: item.name,
              type: 'file',
              path: item.path,
              code: fileData,
            });
          }
        }
        return allContents;
      } catch (error) {
        console.error('Error fetching directory contents:', error);
        return [];
      }
    };

    async function fetchFiles() {
      setExplorerLoading(true);
      const directoryStructure = await fetchDirContentsRecursive(
        `https://api.github.com/repos/Mohammad-y-abbass/${project}/contents`,
        {
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
      setFiles(directoryStructure);
      setExplorerLoading(false);
    }
    fetchFiles();
  }, [project]);

  return (
    <div
      className={`fixed inset-0 bg-gray-900 text-white z-50 flex flex-col 
  ${isFullScreen ? '' : 'm-16'} rounded-md border border-gray-600`}
    >
      <CodeViewerHeader
        project={project}
        onClose={onClose}
        setIsFullScreen={setIsFullScreen}
        isFullScreen={isFullScreen}
      />
      <div className='sm:p-4 sm:pr-0 sm:pb-0 overflow-auto h-full flex gap-4 text-xs'>
        <CodeExplorer
          files={files}
          loading={explorerLoading}
          setActiveFile={setActiveFile}
          project={project}
        />
        <div className='overflow-auto custom-scrollbar w-full'>
          <pre>
            <code dangerouslySetInnerHTML={{ __html: activeFile }}></code>
          </pre>
        </div>
      </div>
    </div>
  );
}
