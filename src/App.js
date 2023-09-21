import './App.css';
import Form from './components/form';

function App() {
  const data = [

  ];
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
      </header>
      {data.map((x)=> {
        return <Form message = {x.message} color={x.color}/>
      })}
    </div>

  );
}

export default App;
