import Component, { hbs, tracked } from '@glimmerx/component';
import './App.css';
import logo from './logo.svg';

export default class App extends Component {
  @tracked cols = ['A','B','C','D','E'];
  @tracked rows = new Array(10);

  constructor() {
    super(...arguments);
    this.logo = logo;
  }

  static template = hbs`
   <div id="intro">
      <img src={{this.logo}}/>
      <h1>Cells</h1>
      <table>
      <thead>
      {{#each this.cols as |c|}}
      <th>{{c}}</th>
      {{/each}}
      </thead>
      <tbody>
      {{#each this.rows as |r index|}}
      <tr>
      {{#each this.cols as |c|}}
      <td>{{index}}</td>
      {{/each}}
      </tr>
      {{/each}}
      </tbody>
      </table>
   </div>`;
}
