import "./LabelHarga.jsx"

function KartuMenu({nama, harga, kategori = "Makanan"}){
    return
    <div className="kartu">
        <h3>{nama}</h3>
        <p>{kategori}</p>
        <LabelHarga nilai = {harga}></LabelHarga>
    </div>
}

export default KartuMenu