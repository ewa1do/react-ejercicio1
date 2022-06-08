import { useState } from 'react';
import './App.css';
import ContactListComponent from './components/contactList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <ContactListComponent />
      </header>
    </div>
  );
}

export default App;
