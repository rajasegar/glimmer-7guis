import Component, { hbs, tracked } from "@glimmerx/component";
import { on, action } from "@glimmerx/modifier";
import { Router, Route, Link } from "./GlimmerRouter.js";

import Counter from "./pages/Counter.js";
import TemperatureConverter from "./pages/TemperatureConverter.js";
import FlightBooker from "./pages/FlightBooker.js";
import Timer from "./pages/Timer.js";
import CRUD from "./pages/CRUD.js";
import CircleDrawer from "./pages/CircleDrawer.js";
import Cells from "./pages/Cells.js";

import "./App.css";

export default class App extends Component {
  Counter = Counter;
  TemperatureConverter = TemperatureConverter;
  FlightBooker = FlightBooker;
  Timer = Timer;
  CRUD = CRUD;
  CircleDrawer = CircleDrawer;
  Cells = Cells;

  static template = hbs`
   <div id="intro">
   <Router>
        <nav>
          <ul>
            <li><Link @to="/counter">Counter</Link></li>
            <li><Link @to="/temperature-converter">Temperature Converter</Link></li>
            <li><Link @to="/flight-booker">Flight Booker</Link></li>
            <li><Link @to="/timer">Timer</Link></li>
            <li><Link @to="/crud">CRUD</Link></li>
            <li><Link @to="/circle-drawer">Circle Drawer</Link></li>
            <li><Link @to="/cells">Cells</Link></li>
          </ul>
        </nav>
        <h1>7GUIs - GlimmerX</h1>
        <Route @path="/counter" @component={{this.Counter}}/>
        <Route @path="/temperature-converter" @component={{this.TemperatureConverter}}/>
        <Route @path="/flight-booker" @component={{this.FlightBooker}}/>
        <Route @path="/timer" @component={{this.Timer}}/>
        <Route @path="/crud" @component={{this.CRUD}}/>
        <Route @path="/circle-drawer" @component={{this.CircleDrawer}}/>
        <Route @path="/cells" @component={{this.Cells}}/>
      </Router>
   </div>`;
}
