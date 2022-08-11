import { useState } from 'react';
import './App.css';
import Button from './Component/Button';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className="App">
      <h2> Theme is {theme}</h2>
      <Button 
      colorScheme={"red"} 
      variant={"outline"}
      onClick={()=>{
        setTheme(theme ==="light" ? "dark": "light");
      }}
      >
        Click me
        </Button>
    </div>
  );
}

export default App;
