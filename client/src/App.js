import { GlobalProvider } from './context/GlobalProvider';
import Header from './components/Header';
import Homepage from './components/Homepage';


import "./index.css";


function App() {
  return (
    <GlobalProvider>
    <div className="container">
      <Header />
      <Homepage />
    </div>
    </GlobalProvider>
  );
}

export default App;
