<template>
  <div class="card shadow">
    <PlaceCarousel :imagenes="lugar.imagenes" :nombre="lugar.nombre" :id="lugar.id" />

    <div class="card-body">
      <h2 class="card-title">{{ lugar.nombre }}</h2>
      <p class="card-text">{{ lugar.descripcion }}</p>

      <div class="d-flex justify-content-center align-items-center mb-3">
        <a :href="googleMapsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="bi bi-geo-alt-fill me-2"></i>
          Ver en el mapa
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  lugar: {
    type: Object,
    required: true
  }
})

const googleMapsUrl = computed(() => {
  const { lat, lng } = props.lugar.ubicacion
  return `https://www.google.com/maps?q=${lat},${lng}`
})
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>