<template>
  <div class="container py-5">
    <h1 class="text-center mb-5" id="nombre-hospedaje">Betel</h1>
    <h4 class="text-center mb-5">Lugares cerca de nuestro hospedaje</h4>

    <div class="row g-4">
      <div class="col-md-4" v-for="categoria in categorias" :key="categoria.ruta">
        <NuxtLink :to="categoria.ruta" class="text-decoration-none">
          <div class="card h-100 shadow hover-card">
            <img :src="categoria.imagen" class="card-img-top" :alt="categoria.titulo"
              style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <h2 class="card-title h4">{{ categoria.titulo }}</h2>
              <p class="card-text">{{ categoria.descripcion }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const categorias = [
  {
    titulo: 'Qué Visitar',
    descripcion: 'Descubre los lugares más emblemáticos y hermosos de Ushuaia.',
    imagen: 'https://turismoushuaia.com/wp-content/uploads/2018/02/ABP_3381-1024x684.jpg',
    ruta: '/que-visitar'
  },
  {
    titulo: 'Compras',
    descripcion: 'Las mejores tiendas y centros comerciales para tu shopping.',
    imagen: 'https://caur.coop.ar/archivos/headers/supermercado1.jpg',
    ruta: '/compras'
  },
  {
    titulo: 'Transporte',
    descripcion: 'Información sobre cómo moverte por la ciudad.',
    imagen: 'https://www.airelibre.com.ar/wp-content/uploads/2023/05/colect-1-scaled.jpg',
    ruta: '/transporte'
  }
]
</script>

<style scoped>
.hover-card {
  transition: transform 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
}

#nombre-hospedaje {
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  color: rgb(185, 156, 77);
  font-style: italic;
  font-size: 3rem;


}
</style>