import React, { useState } from "react";
import Client from "../components/Client";
import CodeEditor from "../components/Editor";

const EditorPage = () => {
  // State to manage the list of connected clients
  // eslint-disable-next-line
  const [clients, setClients] = useState([ 
    { socketId: "1", userName: "Taha Iqbal" },
    { socketId: "2", userName: "Saif Iqbal" },
  ]);

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <h1>Code Sync</h1>
          <h5>Connected</h5>
          {/* Render the list of connected clients */}
          <div className="clientList">
            {clients.map((client) => (
              <Client key={client.socketId} userName={client.userName} />
            ))}
          </div>
        </div>
        <button className="btn">Copy Room ID</button>
        <button className="btn">Leave</button>
      </div>
      
      {/* Section for the code editor */}
      <div className="editorSection">
        <CodeEditor />
      </div>
    </div>
  );
};

export default EditorPage;
