
import LabelHarga from "./LabelHarga.jsx"
import { useState } from 'react'


function KartuMenu({nama, harga, kategori = "Makanan"}){
    const [jumlah, setJumlah] = useState(0)
    const [catatan, setCatatan] = useState("")

    function handleCatatan(e) {
        setCatatan(e.target.value);
    }


    return (
      <div className="kartu">
        <h3>{nama}</h3>
        <p>{kategori}</p>
        <LabelHarga nilai={harga}></LabelHarga>
        <div>
          <button onClick={() => {setJumlah((jumlah) => jumlah + 1)}}>+</button> <p>{jumlah}</p> <button onClick={() => {setJumlah((jumlah) => jumlah - 1)}}>-</button>
        </div>
        <p>Subtotal Rp {jumlah > 0 ? jumlah*harga : "..."}</p>
        <div>
            <span>catatan pesanan</span>
            <input type="text"  value={catatan} onChange={handleCatatan()}> </input>
        </div>
        <p>catatan: {catatan == "" ? "" : {catatan} }</p>
      </div>
    );
}

export default KartuMenu