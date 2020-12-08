import Component, { hbs, tracked } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';

import './App.css';

export default class App extends Component {
  @tracked count = 0;

  @action increment() {
    this.count++;
  }


  static template = hbs`
   <div id="intro">
   <h1>Counter</h1>
   <p><input type="text" value={{this.count}}/></p>
   <p><button type="button" {{on "click" this.increment}}>Count</button></p>
   </div>`;
}
