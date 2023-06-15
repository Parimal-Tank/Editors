import './App.css';
import "./Draft.css";
import Editor from "../src/components/Editor"
import DraftJsExample from './components/DraftJsExample';
import QuillEditor from './components/QuillEditor';
import MyCkEditor from './components/MyCkEditor';

function App() {
  return (
    <div className="App">
      <Editor />
      <DraftJsExample />
      <QuillEditor />
      <MyCkEditor />
    </div>
  );
}

export default App;
