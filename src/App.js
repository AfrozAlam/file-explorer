import React from 'react';
import FileExplorer from './FileExplorer';
import data from './data.json';

const App = () => {

  const folderStructureData = data?.filter((item) => !item?.parent ? true : false);

  const insertChildren = (parent, children) => {
    for(const data of parent) {
      if(data.id === children.parent) {
       if(data?.children) {
        data.children.push(children);
       } else {
        data.children = [children]
       }
       return
      } else if(data?.children) insertChildren(data?.children, children);
    }
  }

  for(const item of data) {
    if(item?.parent) {
      insertChildren(folderStructureData, item);
    }
  }
  
  return (
    <div>
      <h1>File Explorer</h1>
      <FileExplorer data={folderStructureData} />
    </div>
  );
};

export default App;