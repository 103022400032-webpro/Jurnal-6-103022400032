import { useState } from 'react'
import Panel from './components/Panel.jsx'
import KartuMenu from './components/KartuMenu.jsx'
// import './App.css'

function App() {

  const harga = 1000;
  const jam = 9;

  return (
    <>
      <h1 className = "judul">Kantin zoovasoup</h1>
      <p>Selamat {jam < 12 ? "pagi" : "siang"}</p>
      <p>Saldo awal kartu kantin: {harga*1000} </p>
      <button>Bayar</button>

      <Panel judul={"Menu Hari Ini"}>
        <KartuMenu nama="Nasi Atam Goreng" harga = {13700}></KartuMenu>
        <KartuMenu nama="Es Teh Lemon" harga = {6000} kategori="Minuman" LabelHarga="1"></KartuMenu>
        <KartuMenu nama="Mie Goreng Telur" harga = {6000}></KartuMenu>
      </Panel>
    </>
  )
}

export default App
