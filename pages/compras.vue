<template>
  <div class="container py-5">
    <h1 class="text-center mb-5">Comprar alimentos cerca del hospedaje</h1>

    <div class="row g-4">
      <div v-for="lugar in lugaresCompras" :key="lugar.id" class="col-12 mb-5">
        <TouristPlace :lugar="lugar" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { lugares } = useTouristPlaces()
const lugaresCompras = computed(() => lugares.value.filter(lugar => lugar.categoria === 'Compras'))
</script>