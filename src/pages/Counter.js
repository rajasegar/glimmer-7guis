import Component, { hbs, tracked } from "@glimmerx/component";
import { on, action } from "@glimmerx/modifier";

export default class Counter extends Component {
  @tracked count = 0;

  @action increment() {
    this.count++;
  }

  static template = hbs`
   <div class="page-wrapper">
   <h2>Counter</h2>
   <p><input type="text" value={{this.count}}/></p>
   <p><button type="button" {{on "click" this.increment}}>Count</button></p>
   </div>`;
}
