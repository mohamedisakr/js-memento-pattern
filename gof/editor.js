import EditorState from "./editor-state.js";

// originator
export default class Editor {
  constructor() {
    this.content = "";
  }

  createState = () => {
    return new EditorState(this.content);
  };

  restore = (state) => {
    this.content = state.getContent();
  };

  getContent = () => {
    return this.content;
  };

  setContent = (content) => {
    this.content = content;
  };
}
