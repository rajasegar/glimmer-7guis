import Component, { hbs, tracked } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';

import './App.css';
import logo from './logo.svg';

export default class App extends Component {
  @tracked from;
  @tracked to;
  @tracked flight = "one-way flight";

  @action updateFrom(ev) {
    this.from = new Date(ev.target.value).toDateString();
  }

  @action updateTo(ev) {
    this.to = new Date(ev.target.value).toDateString();
  }

  @action updateFlight(ev) {
    this.flight = ev.target.value;
  }

  @action printReceipt() {
    let msg = '';
    if(this.isOneWayFlight) {
      msg = `You booked a ${this.flight} on ${this.from}`;
    } else {
    msg = `You booked a ${this.flight} from ${this.from} to ${this.to}`;
    }
    alert(msg);
  }

  get isOneWayFlight() {
    return this.flight === 'one-way flight';
  }
  
  static template = hbs`
   <div id="intro">
      <img src={{this.logo}}/>
      <h1>Flight Booker</h1>
      <p>
        <select {{on "change" this.updateFlight}}>
          <option value="one-way flight">one-way flight</option>
          <option value="return flight">return flight</option>
        </select>
      </p>
      <p><input type="date" {{on "input" this.updateFrom}}/></p>
      <p><input type="date" {{on "input" this.updateTo}} disabled={{this.isOneWayFlight}}/></p>
      <p><button type="button" {{on "click" this.printReceipt}}>Book</button></p>
   </div>`;
}
