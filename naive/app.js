import Editor from "./pattern.js";

let editor = new Editor();
editor.setContent("1st line");
editor.printContent();

editor.setContent("2nd line");
editor.printContent();

editor.setContent("3rd line");
editor.printContent();

editor.undo();
editor.printContent();

editor.undo();
editor.printContent();

editor.printSize();
