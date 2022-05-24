import React from "react"
import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

class Detail extends React.Component {
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
        ],
        data: ""
    }
//setelah komponen dirender dia akan memanggil function dibawah ini
    componentDidMount(){ //lifcycle method
        const id = this.props.match.params.id //id sesuai dengan route
        const data = this.state.jenis.find(item => item.id === parseInt(id)) //mengambil data berdasarkan id nya. parsInt = mengubah string jd integer
        this.setState({ data })

        console.log(id, "ini kok ga muncul sih haduh")
    }

    render () {
        const { data } = this.state //jangan lupa diambil dulu datanya dr state
        return (
            <div>
                <MainLayout>
                    <h1>{data.nama}</h1>
                    <div>
                        <img src={data.gambar} alt={data.gambar} />
                        <div>
                            <p>{data.deskripsi}</p>
                            <Link to="/">Back Home</Link>
                        </div>
                    </div>
                </MainLayout>
            </div>
        )
    }
}

export default Detail
