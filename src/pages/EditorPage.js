import React , {useState} from "react";
import Avatar from 'react-avatar';

const EditorPage = () => {
  return (
     
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <h1>Code Sync</h1>
          <h5>Connected</h5>
          <Avatar name="Wim Mostmans" size="40"  />
          </div>
        <button className="btn">Copy Room ID</button>
        <button className="btn">Leave</button>
      </div>
      <div className="editorSection">
        editor goes here ...
      </div>
    </div>
  );
};

export default EditorPage;
