import Component, { hbs, tracked } from "@glimmerx/component";
import { on, action } from "@glimmerx/modifier";
import "./Cells.css";

export default class Cells extends Component {
  @tracked cols = ["A", "B", "C", "D", "E"];
  @tracked rows = new Array(10);
  @tracked grid = new Array(5);

  constructor() {
    super(...arguments);
    this.grid = new Array(10);
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array(5);
    }
  }

  @action onInput(row, col, value) {
    let result = value;
    const str = value.toUpperCase();
    if (str.startsWith("=")) {
      const regex = /=SUM\(([A-Z]\d+):([A-Z]\d+)\)/gm;
      let m;

      while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        const [fromCol, fromRow] = [...m[1]];
        const [toCol, toRow] = [...m[2]];
        const col = this.cols.indexOf(fromCol);
        const _fromRow = Number(fromRow) - 1;
        const _toRow = Number(toRow) - 1;
        const sum =
          Number(this.grid[_fromRow][col]) + Number(this.grid[_toRow][col]);
        this.grid[row][col] = sum;
        result = sum;
      }
    } else {
      this.grid[row][col] = value;
    }
    return result;
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
      {{#each this.rows as |r rowIndex|}}
      <tr>
      {{#each this.cols as |c colIndex|}}
      <td><Cell @row={{rowIndex}} @col={{colIndex}} @onInput={{this.onInput}} /></td>
      {{/each}}
      </tr>
      {{/each}}
      </tbody>
      </table>
   </div>`;
}

class Cell extends Component {
  @tracked value;
  @action notify(ev) {
    const result = this.args.onInput(
      this.args.row,
      this.args.col,
      ev.target.value
    );
    this.value = result;
  }
  static template = hbs`
  <input type="text" value={{this.value}} class="cell" {{on "input" this.notify}}/>
  `;
}
