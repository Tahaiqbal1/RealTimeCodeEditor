import React, { useEffect } from "react";

import Codemirror from "codemirror-5.65.17";
import 'codemirror-5.65.17/mode/javascript/javascript'
import 'codemirror-5.65.17/theme/dracula.css'
import 'codemirror-5.65.17/addon/edit/closetag'
import 'codemirror-5.65.17/addon/edit/closebrackets'
import 'codemirror-5.65.17/lib/codemirror.css'

const CodeEditor = () => {
  //use-effect for mounting code mirror 
  useEffect(() => {
    // Initializes the CodeMirror editor
    async function init() {
      // Creates a CodeMirror instance from a textarea element with the ID "realTimeEditor"
      Codemirror.fromTextArea(document.getElementById("realTimeEditor"), {
        mode: {name: 'javascript', json: true}, 
        theme: 'dracula', 
        autoCloseTags: true, 
        autoCloseBrackets: true, 
        lineNumbers: true, 
      });
    }

    // Calls the init function to set up the editor
    init();
  }, []);

  return <textarea id="realTimeEditor"></textarea>;
};

export default CodeEditor;
