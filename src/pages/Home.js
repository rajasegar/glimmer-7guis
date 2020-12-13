import Component, { hbs } from "@glimmerx/component";

export default class Counter extends Component {
  static template = hbs`
  <div class="home-page">
  <h1>7GUIs: A GUI Programming Benchmark in Glimmer.js</h1>
  <p>
  There are countless GUI toolkits in different languages and with diverse approaches to GUI development. 
  Yet, diligent comparisons between them are rare. Whereas in a traditional benchmark competing implementations are compared in terms of their resource consumption, here implementations are compared in terms of their notation. 
  To that end, <a href="https://eugenkiss.github.io/7guis/" target="_blank">7GUIs</a> defines <a href="https://eugenkiss.github.io/7guis/tasks" targe="_blank">seven tasks</a> that represent typical challenges in GUI programming. In addition, 7GUIs provides a recommended set of evaluation dimensions.
  </p>
</div>
  `;
}
