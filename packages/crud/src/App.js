import Component, { hbs, tracked } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';
import './App.css';
import logo from './logo.svg';

export default class App extends Component {
  @tracked people = [
    { first: 'Hans', last: 'Emil' },
    { first: 'Max', last: 'Mustermann' },
    { first: 'Roman', last: 'Tisch' },
  ];

  @tracked query = '';
  @tracked firstName = '';
  @tracked lastName = '';

  get filteredPeople() {
    return this.people.filter(
      (p) =>
        p.first.toLowerCase().includes(this.query) ||
        p.last.toLowerCase().includes(this.query),
    );
  }

  @action updateQuery(ev) {
    this.query = ev.target.value;
  }

  @action updateFirstName(ev) {
    this.firstName = ev.target.value;
  }

  @action updateLastName(ev) {
    this.lastName = ev.target.value;
  }

  @action addPeople() {
    this.people = [
      ...this.people,
      {
        first: this.firstName,
        last: this.lastName,
      },
    ];
  }

  static template = hbs`
   <div id="intro">
      <img src={{this.logo}}/>
      <h1>GlimmerX - CRUD!</h1>
      <p><input type="text" {{on "input" this.updateQuery }}/></p>
      <p>
      <select size="5">
      {{#each this.filteredPeople as |p|}}
      <option>{{p.first}}, {{p.last}}</option>
      {{/each}}
      </select>
      </p>
      <p><input type="text" {{on "input" this.updateFirstName}}/></p>
      <p><input type="text" {{on "input" this.updateLastName}} /></p>
      <p>
      <button type="button" {{on "click" this.addPeople}}>create</button>
      <button type="button" {{on "click" this.updatePeople}}>update</button>
      <button type="button" {{on "click" this.deletePeople}}>delete</button>
      </p>
   </div>`;
}
