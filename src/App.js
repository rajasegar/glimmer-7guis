import Component, { hbs, tracked } from "@glimmerx/component";
import { on, action } from "@glimmerx/modifier";
import { Router, Route, Link } from "./GlimmerRouter.js";

import "./App.css";

export default class App extends Component {

  static template = hbs`
        <nav>
          <ul>
            <li><Link @to="/">Home</Link></li>
            <li><Link @to="/counter">Counter</Link></li>
            <li><Link @to="/temperature-converter">Temperature Converter</Link></li>
            <li><Link @to="/flight-booker">Flight Booker</Link></li>
            <li><Link @to="/timer">Timer</Link></li>
            <li><Link @to="/crud">CRUD</Link></li>
            <li><Link @to="/circle-drawer">Circle Drawer</Link></li>
            <li><Link @to="/cells">Cells</Link></li>
          </ul>
        </nav>

   <main>
      <Router>
        <Route @path="/" @component="Home"/>
        <Route @path="/counter" @component="Counter"/>
        <Route @path="/temperature-converter" @component="TemperatureConverter"/>
        <Route @path="/flight-booker" @component="FlightBooker"/>
        <Route @path="/timer" @component="Timer"/>
        <Route @path="/crud" @component="CRUD"/>
        <Route @path="/circle-drawer" @component="CircleDrawer"/>
        <Route @path="/cells" @component="Cells"/>
</Router>
   </main>
   <footer>
   <a href="https://github.com/rajasegar/glimmer-7guis">Github</a>
   </footer>
    `;
}
