<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">Ushuaia</NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/que-visitar">Qué Visitar</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/compras">Compras</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/transporte">Transporte</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <NuxtPage />
    </main>
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p>© 2024 Ushuaia Turismo - Descubre el fin del mundo</p>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  font-family: 'Lato', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', sans-serif;
}

.nav-link.router-link-active {
  color: white !important;
  font-weight: bold;
}
</style>