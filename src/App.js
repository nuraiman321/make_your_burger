import './App.css';
import Burger from './Burger/Burger';
import CopyRight from './Burger/CopyRight/CopyRight';

function App() {



  // const handleCheese = () => {
  //   let newBurger = ['cheese', ...burger]
  //   setBurger(newBurger)
  // }

  // const handleBun = () => {

  //   // newBurger.push('bun')
  //   let newBurger = ['bun', ...burger]
  //   setBurger(newBurger)

  // }

  // const handleTomato = () => {

  //   setBurger(['tomato', ...burger])

  // }



  return (
    <div className="App">

      <header>
        <h1>Make your own burger</h1>
        <p>The original burger</p>
      </header>

      <Burger />

      <footer className='footer'>
        <CopyRight />
      </footer>

    </div>
  );
}

export default App;
