// care taker
export default class EditorHistory {
  constructor() {
    /** @type {any[]} */
    this.states = [];
  }

  push = (state) => {
    this.states.push(state);
  };

  pop = () => {
    return this.states.pop();
  };
}
