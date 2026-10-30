<script setup>
defineProps({
  experiencias: Array
})
</script>

<template>
  <section class="experience">

    <h2>Experiências Profissionais</h2>

    <article
      v-for="(experiencia, index) in experiencias"
      :key="index"
      class="timeline-item"
    >
      <h3>{{ experiencia.periodoEmpresa }}</h3>

      <h4>{{ experiencia.cargo }}</h4>

      <p>{{ experiencia.descricao }}</p>

    </article>

  </section>
</template>