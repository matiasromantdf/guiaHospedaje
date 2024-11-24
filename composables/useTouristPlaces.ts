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
      categoria: 'Aventura',
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
      nombre: 'Canal Beagle',
      descripcion: 'El Canal Beagle es un paso marítimo que separa las islas del archipiélago de Tierra del Fuego. Los paseos en barco permiten observar fauna marina, pingüinos, lobos marinos y aves, además de las icónicas vistas del Faro Les Eclaireurs.',
      categoria: 'Marítimo',
      imagenes: [
        'https://images.unsplash.com/photo-1619999191685-4379e991d7e3',
        'https://images.unsplash.com/photo-1619999191685-4379e991d7e2',
        'https://images.unsplash.com/photo-1619999191685-4379e991d7e1'
      ],
      ubicacion: {
        lat: -54.8302,
        lng: -68.3158
      }
    },
    {
      id: 4,
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
      id: 5,
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