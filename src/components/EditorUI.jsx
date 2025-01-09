import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import files from '../Data/files'

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
      path={files["main.rs"].name}
      defaultLanguage={files["main.rs"].language}
      value={files["main.rs"].value}
    />
    </div>
  );
};

export default EditorUI;
