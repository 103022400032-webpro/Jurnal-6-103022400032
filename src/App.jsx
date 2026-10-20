import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './components/*'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const harga = 1000;
  const jam = 9;

  return (
    <>
      <h1 className = "judul">Kantin zoovasoup</h1>
      <p>Selamat {jam < 12 ? "pagi" : "siang"}</p>
      <p>Saldo awal kartu kantin: {harga*1000} </p>
      <button>Bayar</button>
      <Panel judul = "Menu hari ini">
        <KartuMenu></KartuMenu>
      </Panel>
    </>
  )
}

export default App
