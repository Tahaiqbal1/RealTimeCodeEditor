import React, { useEffect } from "react";

import Codemirror from "codemirror-5.65.17";
import 'codemirror-5.65.17/mode/javascript/javascript'
import 'codemirror-5.65.17/theme/dracula.css'
import 'codemirror-5.65.17/addon/edit/closetag'
import 'codemirror-5.65.17/addon/edit/closebrackets'
import 'codemirror-5.65.17/lib/codemirror.css'

const CodeEditor = () => {
  useEffect(() => {
    console.log('CodeEditor mounted');
    async function init() {
      Codemirror.fromTextArea(document.getElementById("realTimeEditor"), {
        mode: {name: 'javascript', json: true},
        theme: 'dracula',
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });
    }
    init();
  }, []);

  return <textarea id="realTimeEditor"></textarea>;
};

export default CodeEditor;
