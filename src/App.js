import logo from './logo.svg';
import './App.css';
import Form from './components/form';

function App() {
  const data = [
    
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form/>
      </header>
      {data.map((x)=> {
        return <Form message = {x.message} color={x.color}/>
      })}
    </div>

  );
}

export default App;
