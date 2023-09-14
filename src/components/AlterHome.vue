<template>
    <div class="container mx-auto text-center py-8">
      <section class="logo-section mb-4">
        <img src="path/to/logo.png" alt="Logo de Sierras Calientes" class="mb-4 logo" />
      </section>
  
      <section class="intro-section mb-4">
        <p class="text-xl mb-2">INGRESA A LA WEB SI SOS MAYOR DE 18 AÑOS, SI SOS MENOS NO ENTRES</p>
        <button class="bg-blue-500 text-white py-2 px-4 rounded mb-4">Acepto las CONDICIONES legales</button>
      </section>
  
      <section class="link-section mb-4">
        <div>
          <a href="#" class="text-blue-500">Ingresar a ESCORT GUIA</a>
          <p>Independientes SIERRAS CALIENTES</p>
        </div>
      </section>
  
      <section class="description-section mb-4 text-left">
        <p>
          Portal Online, sobre Acompañantes Escorts organizados por barrios: En el Centro,
          Tribunales, Alta Córdoba, Nuevo Centro, Patio Olmos y Alberdi, etc.
        </p>
        <p>[...]</p>
      </section>
  
      <section class="categories-section mb-4">
        <p>ELEGÍ TU CATEGORIA:</p>
        <ul class="list-none categories-list">
          <li>MUJERES</li>
          <li>MADURAS</li>
          <li>MASAJES</li>
          <li>HOMBRES</li>
          <li>TRANS</li>
        </ul>
      </section>
  
      <section class="image-section mb-4">
        <img src="path/to/imagen_mujer.jpg" alt="Imagen Mujer Escort Cordoba" class="escort-image" />
      </section>
  
      <section class="benefits-section mb-4 text-left">
        <!-- Sección de beneficios -->
      </section>
  
      <section class="contact-section text-left">
        <!-- Sección de participación y contacto -->
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SierrasCalientesComponent',
  };
  </script>
  
  <style scoped>
  .logo {
    max-width: 200px;
    margin: 0 auto;
  }
  
  .intro-section p {
    margin-bottom: 1rem;
  }
  
  .link-section p {
    margin-bottom: 1rem;
  }
  
  .description-section p {
    margin-bottom: 1rem;
  }
  
  .categories-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding: 0;
  }
  
  .categories-list li {
    list-style: none;
    margin-bottom: 0.5rem;
  }
  
  .escort-image {
    max-width: 100%;
    height: auto;
  }
  </style>
  