import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Panel from './components/Panel.jsx'
import LabelHarga from './components/LabelHarga.jsx'
import KartuMenu from './components/KartuMenu.jsx'
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

      <Panel judul={"Menu Hari Ini"}>
        <KartuMenu nama="Nasi Atam Goreng" harga = "13.700"></KartuMenu>
        <KartuMenu nama="Es Teh Lemon" harga = "6.000" kategori="Minuman" LabelHarga="1"></KartuMenu>
        <KartuMenu nama="Mie Goreng Telur" harga = "6.000"></KartuMenu>
      </Panel>
    </>
  )
}

export default App
