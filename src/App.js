
import { BrowserRouter as Router,Switch,Link,Route } from 'react-router-dom'


//Pages and Wrappers
import PageWrapper from "./components/PageWrapper";
import Home from './components/pages/Home'
import About from './components/pages/About'


function App() {
        {/* We are wrapping Home in Pagewrapper, which renders them as though it were a prop */}
  return (
    <div className="App">
    <Router>
      <PageWrapper>    
        <Route path="/" component={Home} exact={true}/> 
        <Route path="/about" component={About}/>       
      </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
