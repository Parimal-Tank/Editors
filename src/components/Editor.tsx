import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// For the Setup : https://www.npmjs.com/package/@ckeditor/ckeditor5-react


// we can modified the config to get perticular icon.
const config = {
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'link',
    'bulletedList',
    'numberedList',
    'blockQuote',
    'exportPDF',
    'exportWord'
    // 'fontsize'
    // "uploadImage"
  ],
}

const Editor = () => {
  return (
    <>
      <h1>CKEditor</h1>
      <CKEditor
        editor={ClassicEditor}
        // config={config}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor: any) => {
          // You can store the "editor" and use when it is needed.
          console.log(
            'Editor is ready to use!',
            editor,
            Array.from(editor.ui.componentFactory.names()), // This is Use for Getting the Data from the Form
          )
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData()
          console.log({ event, editor, data })
        }}
        onBlur={(event: any, editor: any) => {
          console.log('Blur.', editor)
        }}
        onFocus={(event: any, editor: any) => {
          console.log('Focus.', editor)
        }}

      />
    </>
  );
}

export default Editor
