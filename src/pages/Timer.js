import Component, { hbs, tracked } from "@glimmerx/component";
import { on, action } from "@glimmerx/modifier";

export default class Timer extends Component {
  @tracked elapsed = 0;
  @tracked duration = 5000;

  @tracked last_time = window.performance.now();
  @tracked frame;

  constructor() {
    super(...arguments);
    this.tick();
  }

  tick() {
    this.frame = requestAnimationFrame(this.tick.bind(this));

    const time = window.performance.now();
    this.elapsed += Math.min(
      time - this.last_time,
      this.duration - this.elapsed
    );

    this.last_time = time;
  }

  get elapsedTime() {
    return (this.elapsed / 1000).toFixed(1);
  }

  get progress() {
    return this.elapsed / this.duration;
  }

  @action reset() {
    this.elapsed = 0;
  }

  @action updateDuration(ev) {
    this.duration = ev.target.value;
  }

  willDestroy() {
    cancelAnimationFrame(this.frame);
  }

  static template = hbs`
   <div id="intro">
      <h1>Timer</h1>
      <p>
      Elapsed Time:
      <progress value={{this.progress}}></progress>
      </p>
      <p>{{this.elapsedTime}}s</p>
      <p>
      Duration:
      <input type="range" value={{this.duration}} min="1" max="20000" {{on "change" this.updateDuration}}/>
      </p>
      <p><button type="button" {{on "click" this.reset}}>Reset</button></p>
   </div>`;
}
