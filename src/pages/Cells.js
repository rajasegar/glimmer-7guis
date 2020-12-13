import Component, { hbs, tracked } from "@glimmerx/component";

export default class Cells extends Component {
  @tracked cols = ["A", "B", "C", "D", "E"];
  @tracked rows = new Array(10);

  constructor() {
    super(...arguments);
  }

  static template = hbs`
   <div class="page-wrapper">
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
