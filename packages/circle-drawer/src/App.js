import Component, { hbs, tracked } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';

import './App.css';
import logo from './logo.svg';

export default class App extends Component {
  @tracked count = 0;
  @tracked undoStack = [[]];
  @tracked circles = [];
  @tracked selected;

  @action undo() {}

  @action redo() {}

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
    const newUndoStack = this.undoStack.slice(0, ++this.count);
    newUndoStack.push(this.clone(this.circles));
    this.undoStack = newUndoStack;
  }

  clone() {
    return this.circles.map(({ cx, cy, r }) => ({ cx, cy, r }));
  }

  @action selectCircle() {}
  static template = hbs`
   <div id="intro">
      <img src={{this.logo}}/>
      <h1>Circle Drawer</h1>
      <p>
        <button type="button" {{on "click" this.undo}}>undo</button>
        <button type="button" {{on "click" this.redo}}>redo</button>
      </p>
      <svg {{on "click" this.drawCircle}}>
      {{#each this.circles as |circle|}}
        <circle cx={{circle.cx}} cy={{circle.cy}} r={{circle.r}}
        {{on "click" this.selectCircle}}
        />
      {{/each}}
      </svg>
      <svg>
      <circle cx="100" cy="100" r="50"/>
      </svg>

   </div>`;
}
