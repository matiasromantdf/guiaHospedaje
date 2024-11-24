export const useTouristPlaces = () => {
  const lugares = ref([
    {
      id: 1,
      nombre: 'Parque Nacional Tierra del Fuego',
      descripcion: 'El Parque Nacional Tierra del Fuego es el único parque nacional costero de Argentina. Ubicado a menos de 5km de nuestro Hospedaje, ofrece paisajes impresionantes que combinan montañas, bosques y mar. Es hogar de una rica biodiversidad y cuenta con senderos para todas las dificultades.',
      categoria: 'Naturaleza',
      imagenes: [
        'https://turismoushuaia.com/wp-content/uploads/2018/02/QYY4543-768x513.jpg',
        'https://turismoushuaia.com/wp-content/uploads/2018/02/QYY4588-768x513.jpg',
        'https://turismoushuaia.com/wp-content/uploads/2018/02/QYY4603-768x513.jpg',
        'https://turismoushuaia.com/wp-content/uploads/2018/02/ABP_1002-768x512.jpg'
      ],
      ubicacion: {
        lat: -54.83490572497766,        
        lng: -68.44612589984447
      }
    },
    {
      id: 2,
      nombre: 'Cascada Nahiara',
      descripcion: 'Ubicada a pocos metros de nuestro hospedaje, puedes realizar este sendero de baja dificultad que te llevará a una hermosa cascada en medio del bosque.',
      categoria: 'Naturaleza',
      imagenes: [
        'https://s2.wklcdn.com/image_98/2953368/86054904/55572206.700x525.jpg',
        'https://conocerushuaia.com/wp-content/uploads/2020/06/lateral-cascada-nahiara.jpg',
      ],
      ubicacion: {
        lat: -54.822402,
        lng: -68.385365
      }
    },
    {
      id: 3,
      nombre: 'Sendero de los presos',
      descripcion: 'Este icónico sendero te invita a recorrer los pasos de los prisioneros que, a principios del siglo XX, desempeñaron un papel crucial en la construcción de la ciudad más austral del mundo.',
      categoria: 'Naturaleza',
      imagenes: [
        'https://informatetdf.com.ar/download/multimedia.normal.be8838f99c880ae8.494d475f32303232303132305f3139343135375f3838335f6e6f726d616c2e6a7067.jpg',
        'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjkyNTkxMjMvNjE1NjBhMGRlMWU5OTc4MmQ5NDNhZmEyYmI5NGE2NGEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
        'https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjkyNTkxMjcvMzcyYThhYmVmZjc0MjY2NDhhNTE4ZWRmNmMyYTZjZDguanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
        'https://scontent.fush1-1.fna.fbcdn.net/v/t1.6435-9/148545148_2169277916539395_570600586181654206_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGh-g3K1RvIo2MlpK3h7UPych0LcRS5F55yHQtxFLkXniepUO3wKGAwn8j13KagLdw&_nc_ohc=1n94P_OSn8gQ7kNvgHnLF2E&_nc_zt=23&_nc_ht=scontent.fush1-1.fna&_nc_gid=A37f9BDAzdsENHWyYg1hPor&oh=00_AYA62ctIMmWVu1Xzqhwlm85Bg40fsL5gyp8c4ZMsxNFmMg&oe=676AB3E7'
      ],
      ubicacion: {
        lat: -54.8302,
        lng: -68.3158
      }
    },
    {
      id: 100,
      nombre: 'Shopping Paseo del Fuego',
      descripcion: 'El centro comercial más grande de Ushuaia, con tiendas libres de impuestos, restaurantes y entretenimiento.',
      categoria: 'Compras',
      imagenes: [
        'https://images.unsplash.com/photo-1619999191685-4379e991d7e0',
        'https://images.unsplash.com/photo-1619999191685-4379e991d7e2',
        'https://images.unsplash.com/photo-1619999191685-4379e991d7e1'
      ],
      ubicacion: {
        lat: -54.8105,
        lng: -68.3247
      }
    },
    {
      id: 101,
      nombre: 'Calle San Martín',
      descripcion: 'La principal calle comercial de Ushuaia, con tiendas de artesanías, chocolates, ropa de montaña y souvenirs.',
      categoria: 'Compras',
      imagenes: [
        'https://images.unsplash.com/photo-1619999191685-4379e991d7e3',
        'https://images.unsplash.com/photo-1619999191685-4379e991d7e4',
        'https://images.unsplash.com/photo-1619999191685-4379e991d7e5'
      ],
      ubicacion: {
        lat: -54.8019,
        lng: -68.3029
      }
    }
  ])

  return {
    lugares
  }
}