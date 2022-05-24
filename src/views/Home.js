import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    state = {
        jenis: [
            {
                id: 1,
                nama: 'Mie Ayam Original',
                deskripsi: "Kalo suka yang polos, pilih yang ini",
                gambar: require("../images/mie-ayam-original.png")
            },
            {
                id: 2,
                nama: 'Mie Ayam Hijau',
                deskripsi: "Mienya hijau, pakai bahan sayuran",
                gambar: require("../images/mie-ayam-hijau.png")
            },
            {
                id: 3,
                nama: 'Mie Ayam Lada Hitam',
                deskripsi: "lada hitam sebagai bumbu ayam, so yummy",
                gambar: require("../images/mie-ayam-ladahitam.png")
            },
            {
                id: 4,
                nama: 'Mie Ayam Setan',
                deskripsi: "jangan coba, menyebabkan kesurupan",
                gambar: require("../images/mie-ayam-setan.png")
            }
        ]
    }
    render() {
        const { jenis } = this.state
        return(
            <MainLayout>
                <h4 style={{paddingLeft: "6rem"}}>Menu Kami</h4>
                <div style={container}>
                    { jenis.map(item => //looping menampilkan semua gambar
                    <div key={ item.id } style={card}>
                        <Link to={`/detail/${item.id}` /*link dengan id, perhatikan penulisan `petik` menggunakan template literal*/ }>
                            <img src={item.gambar} alt={item.nama} style={img}/>
                            <h6>{ item.nama }</h6>
                        </Link>
                    </div>    
                    )}
                </div>
            </MainLayout>
        )
    }
}

export default Home

const container = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between"
}

const card = {
    width: "20%",
    height: "15rem"

}

const img = {
    width: "100px",
    height: "100px"
}