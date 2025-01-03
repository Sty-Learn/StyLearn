import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import Editor, { useMonaco } from "@monaco-editor/react";

const EditorUI = () => {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      console.log("here is the monaco instance:", monaco);
    }
  }, [monaco]);

  return (
    <div className="lg:w-[49%] md:w-[49%]">
    <Editor
      height="85vh"
      theme="vs-dark"
      defaultValue="// some comment"
      defaultLanguage="rust"
    />
    </div>
  );
};

export default EditorUI;
