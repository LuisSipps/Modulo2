import { useState } from 'react'
import { Card } from './components/index'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import hospImg from './assets/images/hospedaje.png';

function App() {
  const [count, setCount] = useState(0);
  const hosts = [
    { id: 1, name: "Cabaña en Quatro Barras, Brasil", price: "$480,260", isSuperHost: true, imageUrl: hospImg },
    { id: 2, name: "Cabaña en Quatro Barras, Peru", price: "$490,260", isSuperHost: false, imageUrl: hospImg  },
    { id: 3, name: "Cabaña en Quatro Barras, Brasil", price: "$480,260", isSuperHost: false, imageUrl: hospImg  },
    { id: 4, name: "Cabaña en Quatro Barras, Peru", price: "$490,260", isSuperHost: true, imageUrl: hospImg  },
    { id: 5, name: "Cabaña en Quatro Barras, Brasil", price: "$480,260", isSuperHost: false,  },
    { id: 6, name: "Cabaña en Quatro Barras, Peru", price: "$490,260", isSuperHost: true, imageUrl: hospImg  },
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Hola soy Luis Sepulveda
      </p>
      <><Card texto="Hola"></Card></>

      <div className="container">
        {hosts.map((host) => (
          <Card
            texto={host.name}
            key={host.id}
            isSuperHost={host.isSuperHost}
            imageUrl={host.imageUrl}
          >
          </Card>
        ))
        }
      </div>
    </>
  )
}

export default App
