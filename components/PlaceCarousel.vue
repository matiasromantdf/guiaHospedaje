<template>
  <div :id="`carousel-${id}`" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(imagen, index) in imagenes" :key="index" class="carousel-item text-center"
        :class="{ active: index === 0 }">
        <img :src="imagen" class="" :alt="`${nombre} - imagen ${index + 1}`" style="height: 400px; object-fit: cover;">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="`#carousel-${id}`" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="`#carousel-${id}`" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  imagenes: {
    type: Array,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})
</script>
<style>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: black;
}
</style>