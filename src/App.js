import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
    let item = 4
    let greetings = 'visitante.'

    return (
        <div className='App'>
            <NavBar item={item}/>
            <ItemListContainer greetings={greetings}/>
        </div>
    );
}

export default App;
