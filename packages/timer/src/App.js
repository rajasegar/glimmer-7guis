import Component, { hbs, tracked } from '@glimmerx/component';
import './App.css';
import logo from './logo.svg';

export default class App extends Component {
  @tracked elapsed = 0;
  @tracked duration = 5000;

  @tracked last_time = window.performance.now();
  @tracked frame;

  constructor() {
    super(...arguments);
    this.interval = setInterval(this.tick.bind(this), 1000)
    this.logo = logo;
  }

  tick() {
    //this.elapsed += this.elapsed >= this.duration ? this.elapsed : Math.round(this.elapsed + 0.1, 1);
    if(this.elapsed >= this.duration) {
      this.elapsed = this.duration;
      clearInterval(this.interval);
    } else {

    this.elapsed += 1000;
    }

  }

  get elapsedTime() {
    return (this.elapsed / 1000).toFixed(1);
  }

  get progress() {
    return this.elapsed / this.duration;
  }

  static template = hbs`
   <div id="intro">
      <img src={{this.logo}}/>
      <h1>Timer</h1>
      <p>
      Elapsed Time:
      <progress value={{this.progress}}></progress>
      </p>
      <p>{{this.elapsedTime}}s</p>
      <p>
      Duration:
      <input type="range" value={{this.duration}} min="1" max="20000"/>
      </p>
      <p><button type="button">Reset</button></p>
   </div>`;
}
