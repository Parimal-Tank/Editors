import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect, useState } from "react";
import { convertToHTML } from 'draft-convert';
import DOMPurify from "dompurify";


const DraftJsExample = () => {

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null || String);

  // For Converting the HTML text into A Text along with their applied tag properties
  function createMarkup(html: any) {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  useEffect(() => {
    // Convert Text to HTML 
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  console.log(convertedContent);

  return (
    <div className="draft-demo">
      <h1>Draft Js Editor</h1>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />

      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}>
      </div>
    </div>
  );
};

export default DraftJsExample;
