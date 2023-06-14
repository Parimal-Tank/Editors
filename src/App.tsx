import './App.css';
import "./Draft.css";
import Editor from "../src/components/Editor"
import DraftJsExample from './components/DraftJsExample';
import QuillEditor from './components/QuillEditor';

function App() {
  return (
    <div className="App">
      <Editor />
      <DraftJsExample />
      <QuillEditor />
    </div>
  );
}

export default App;
