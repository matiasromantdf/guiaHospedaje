<template>
  <div class="container py-5">
    <h1 class="text-center mb-5">Transporte en Ushuaia</h1>

    <div class="row g-4">
      <div v-for="medio in mediosTransporte" :key="medio.id" class="col-md-6 mb-4">
        <div class="card h-100 shadow">
          <img :src="medio.imagen" class="card-img-top" :alt="medio.nombre" style="height: 250px; object-fit: cover;">
          <div class="card-body">
            <h2 class="card-title h4">{{ medio.nombre }}</h2>
            <p class="card-text">{{ medio.descripcion }}</p>
            <div class="mt-3">
              <h3 class="h5">Horarios:</h3>
              <p>{{ medio.horarios }}</p>
              <h3 class="h5">Tarifas:</h3>
              <p>{{ medio.tarifas }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const mediosTransporte = ref([
  {
    id: 1,
    nombre: 'Autobuses Urbanos',
    descripcion: 'Red de autobuses que conecta los principales puntos de la ciudad.',
    horarios: 'Lunes a Domingo de 6:00 a 22:00',
    tarifas: 'Tarifa única: $200 ARS',
    imagen: 'https://images.unsplash.com/photo-1619999191685-4379e991d7e5'
  },
  {
    id: 2,
    nombre: 'Taxis y Remises',
    descripcion: 'Servicio disponible las 24 horas para traslados dentro de la ciudad.',
    horarios: '24 horas',
    tarifas: 'Bajada de bandera: $300 ARS\nPor kilómetro: $100 ARS',
    imagen: 'https://images.unsplash.com/photo-1619999191685-4379e991d7e4'
  }
])
</script>