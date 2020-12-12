import Component, { hbs, tracked } from "@glimmerx/component";
import { on, action } from "@glimmerx/modifier";

export default class CircleDrawer extends Component {
  @tracked count = 0;
  @tracked undoStack = [[]];
  @tracked circles = [];
  @tracked selected;

  @action undo() {
    this.travel(-1);
  }

  @action redo() {
    this.travel(+1);
  }

  travel(n) {
    this.count += n;
    this.circles = this.undoStack[this.count];
  }

  @action drawCircle(ev) {
    const circle = {
      cx: ev.clientX,
      cy: ev.clientY,
      r: 50,
    };

    this.circles = this.circles.concat(circle);
    this.selected = circle;

    this.push();
  }

  push() {
    this.count += 1;
    const newUndoStack = this.undoStack.slice(0, this.count);
    newUndoStack.push(this.clone(this.circles));
    this.undoStack = newUndoStack;
  }

  clone() {
    return this.circles.map(({ cx, cy, r }) => ({ cx, cy, r }));
  }

  get disableUndo() {
    return this.count === 0;
  }
  get disableRedo() {
    return this.count === this.undoStack.length - 1;
  }

  @action selectCircle(ev) {
    ev.stopPropagation();
    document
      .querySelectorAll("circle")
      .forEach((c) => c.setAttribute("fill", "white"));
    ev.target.setAttribute("fill", "#ccc");
  }

  static template = hbs`
      <div class="controls">
        <h1>Circle Drawer</h1>
        <button type="button" {{on "click" this.undo}} disabled={{this.disableUndo}}>undo</button>
        <button type="button" {{on "click" this.redo}} disabled={{this.disableRedo}}>redo</button>
      </div>
      <svg {{on "click" this.drawCircle}}>
      {{#each this.circles as |c|}}
        <circle cx={{c.cx}} cy={{c.cy}} r={{c.r}} 
        data-circle={{c}}
        fill="white"
        {{on "click" this.selectCircle}}></circle>
      {{/each}}
      </svg>`;
}
