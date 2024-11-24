<template>
  <div class="container py-5">
    <h1 class="text-center mb-5">Lugares para Visitar</h1>

    <div class="row g-4">
      <div v-for="lugar in lugaresParaVisitar" :key="lugar.id" class="col-12 mb-5">
        <TouristPlace :lugar="lugar" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { lugares } = useTouristPlaces()
const lugaresParaVisitar = computed(() =>
  lugares.value.filter(lugar => lugar.categoria === 'Naturaleza' || lugar.categoria === 'Aventura' || lugar.categoria === 'Marítimo')
)
</script>