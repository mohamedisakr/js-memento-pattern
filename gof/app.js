import Editor from "./editor.js";
import EditorHistory from "./history.js";

const editor = new Editor();
const history = new EditorHistory();

editor.setContent("1st line");
history.push(editor.createState());

editor.setContent("2nd line");
history.push(editor.createState());

editor.setContent("3rd line");
editor.restore(history.pop());
editor.restore(history.pop());

console.log(editor.getContent());
