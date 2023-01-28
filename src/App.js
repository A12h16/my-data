import { BrowserRouter as Routes, Route,Switch} from 'react-router-dom';
import './App.css';
import FromPage from './routes/FormPage';
import GridPage from './routes/GridPage';

function App() {
  return (
    <Routes>
    <div className="App">
    
      <h1>New Application</h1>
    
        <Route exact path="/" />
        <FromPage/>
        <Route exact path="/grid" />
        <GridPage/>
        
    
    </div>
    </Routes>
  );
}

export default App;
