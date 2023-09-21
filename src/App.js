import logo from './logo.svg';
import './App.css';
import Form from './components/form';

function App() {
  const data = [
    {message: "hejsa", color: "green"},
    {message: "hejsa", color: "green"},
    {message: "hejsa", color: "green"},
    {message: "hejsa", color: "green"},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      {data.map((x)=> {
        return <Form message = {x.message} color={x.color}/>
      })}
    </div>
    
  );
}

export default App;
