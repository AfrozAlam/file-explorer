import React from 'react';
import FileItem from './FileItem';

const FileExplorer = ({ data }) => {

  return (
    <ul>
      {data?.map(item => (
        <FileItem
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
};

export default FileExplorer;