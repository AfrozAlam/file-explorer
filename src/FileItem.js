import React, { useState } from 'react';
import FileExplorer from './FileExplorer';

const FileItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if(item.isDir) {
      setExpanded(!expanded);
    }
  }

  return (
    <li>
      <div className={`${item.isDir && 'dir'}`} onClick={handleClick}>
        {item.isDir && <span>{expanded ? '- ' : '+ '}</span>}
        <span>{item.name}</span>
      </div>
      {expanded && <FileExplorer data={item?.children} />}
    </li>
  );
};

export default FileItem;