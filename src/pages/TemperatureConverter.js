import Component, { hbs, tracked } from "@glimmerx/component";
import { on, action } from "@glimmerx/modifier";

export default class TemperatureConverter extends Component {
  @tracked celcius = 0;
  @tracked fahrenheit = 32;

  @action setBothFromC(ev) {
    this.celcius = Number(ev.target.value);
    this.fahrenheit = +(32 + (9 / 5) * this.celcius).toFixed(1);
  }

  @action setBothFromF(ev) {
    this.fahrenheit = Number(ev.target.value);
    this.celcius = +((5 / 9) * (this.fahrenheit - 32)).toFixed(1);
  }

  static template = hbs`
   <div class="page-wrapper">
      <h1>Temperature Converter</h1>
      <p>
        <input type="number" value={{this.celcius}} {{on "input" this.setBothFromC}}/>
        Celcius = 
        <input type="number" value={{this.fahrenheit}} {{on "input" this.setBothFromF}}/>
        Fahrenheit
      </p>
   </div>`;
}
