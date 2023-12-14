import { useState } from "react";
import ProductCard from "./ProductCard";

const Destinos = () => {

    const [Destino, setDestino] = useState([
            {
                "id": 1,
                "title": "Viaje a París",
                "stay": 7,
                "price": 1000,
                "img": "https://elpachinko.com/wp-content/uploads/2019/03/10-lugares-imprescindibles-que-visitar-en-Par%C3%ADs.jpg",
                "desc": "Disfruta de la ciudad del amor con este viaje de 7 días a París. Visita la Torre Eiffel, el Museo del Louvre y otros monumentos emblemáticos.",
                "disp": 20,
                "cat": "Paquete"
            },
            {
                "id": 2,
                "title": "Vuelo a Londres",
                "stay": 3,
                "price": 500,
                "img": "https://www.iese.edu/es/insight/wp-content/uploads/sites/4/2022/11/Londres-Cities-in-motion-1024-alto.jpg",
                "desc": "Descubre la capital británica en este vuelo de 3 días a Londres. Visita el Big Ben, el Palacio de Buckingham y otros lugares de interés.",
                "disp": 15,
                "cat": "Vuelo"
            },
            {
                "id": 3,
                "title": "Vacaciones en Roma",
                "stay": 10,
                "price": 2000,
                "img": "https://static.nationalgeographic.es/files/styles/image_3200/public/colosseum-daylight-rome-italy.jpg?w=1600&h=900",
                "desc": "Disfruta de una escapada a Roma con este viaje de 10 días. Visita el Coliseo, el Foro Romano y otros monumentos históricos.",
                "disp": 25,
                "cat": "Paquete"
            },
            {
                "id": 4,
                "title": "Vuelo a Barcelona",
                "stay": 2,
                "price": 300,
                "img": "https://estaticos-cdn.prensaiberica.es/clip/54c5acf5-7c48-4c55-b37c-8603d9556e3f_alta-aspect-ratio_default_0.jpg",
                "desc": "Relájate en la ciudad condal con este fin de semana en Barcelona. Visita la Sagrada Familia, la Pedrera y otros lugares emblemáticos.",
                "disp": 10,
                "cat": "Vuelo"
            },
            {
                "id": 5,
                "title": "Hotel en Playa de Cancún",
                "stay": 7,
                "price": 1500,
                "img": "https://blog.vivaaerobus.com/wp-content/uploads/2019/12/Mejores-Playas-de-Canc%C3%BAn.jpg",
                "desc": "Disfruta del sol y la playa en este viaje de 7 días a Cancún. Relájate en las hermosas playas de Cancún y Tulum.",
                "disp": 20,
                "cat": "Hoteles"
            },
            {
                "id": 6,
                "title": "Hospedaje en Nueva York",
                "stay": 7,
                "price": 2000,
                "img": "https://media.staticontent.com/media/pictures/bfb80462-7604-4711-8bfb-576e01508817",
                "desc": "Disfruta de la bulliciosa ciudad de Nueva York en este viaje de 7 días. Visita el Empire State Building, Times Square y otros lugares emblemáticos.",
                "disp": 15,
                "cat": "Hoteles"
            },
            {
                "id": 7,
                "title": "Vacaciones en Bali",
                "stay": 10,
                "price": 3000,
                "img": "https://imageio.forbes.com/specials-images/imageserve/650bbc48bd9d2cd2f2da346e/pura-ulun-danu-bratan-temple-in-Bali-/0x0.jpg?format=jpg&height=1256&width=1888",
                "desc": "Relájate en las hermosas playas de Bali en este viaje de 10 días. Visita los templos de Uluwatu y Tanah Lot y disfruta de la cultura balinesa.",
                "disp": 25,
                "cat": "Paquetes"
            },
            {
                "id": 8,
                "title": "Safari en Tanzania",
                "stay": 5,
                "price": 5000,
                "img": "https://www.state.gov/wp-content/uploads/2018/11/Tanzania-e1555938157355-2501x1406.jpg",
                "desc": "Observa la vida salvaje africana en este safari de 5 días a Tanzania. Disfruta de la oportunidad de ver leones, elefantes, jirafas y otros animales en su hábitat natural.",
                "disp": 10,
                "cat": "Paquetes"
            },
            {
                "id": 9,
                "title": "Crucero por el Caribe",
                "stay": 7,
                "price": 4000,
                "img": "https://mejorepocapara.net/wp-content/uploads/2018/03/cual-es-la-mejor-epoca-para-hacer-un-crucero-por-el-caribe.jpg",
                "desc": "Relájate en las hermosas playas del Caribe en este crucero de 7 días. Visita las islas de Cozumel, Roatán y otros destinos turísticos.",
                "disp": 20,
                "cat": "Paquetes"
            },
            {
                "id": 10,
                "title": "Vacaciones en Japón",
                "stay": 10,
                "price": 3500,
                "img": "https://humanidades.com/wp-content/uploads/2017/07/japon-7-e1571188423405-800x415.jpg",
                "desc": "Descubre la cultura única de Japón en este viaje de 10 días. Visita Tokio, Kioto y otros lugares emblemáticos.",
                "disp": 20,
                "cat": "Paquetes"
            }
        ]);

    return (
        <div className='row p-4'>
            {Destino.map((d) => 
                <div className='col-lg-3 col-md-4 col-sm-6 mb-4' key={d.id}>
                    <ProductCard destino={d} />
                </div>
                )}
        </div>
    )
}

export default Destinos;