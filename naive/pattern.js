export default class Editor {
  constructor() {
    // using array as data structure
    this._content = [];
  }

  getContent = () => {
    return this._content;
  };

  setContent = (newContent) => {
    this._content.push(newContent); //+= ` ${newContent}`;
  };

  undo = () => {
    this._content.pop();
  };

  size = () => {
    return this._content.length;
  };

  printContent = () => {
    console.log(this._content.join(" "));
  };

  printSize = () => {
    console.log(this.size());
  };
}
