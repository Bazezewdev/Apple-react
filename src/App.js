import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './componente/Header/Nav';
import Main from './componente/Main/Main';
import Footer from './componente/Footer/Footer';
// function App() {
//   return (
//     <div >
//       <Main/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
// Pages
import Iphone from './componente/pages/Iphone/Iphone';
import Mac from './componente/pages/Mac/Mac'
import Four04 from "./componente/pages/Four04/Four04";
import Productpage from "./componente/pages/Productpage/Productpage";

// import general css
import './common/css/styles.css';
import './common/css/bootstrap.css';
function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <br/>
        <br/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/" component={Four04} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

