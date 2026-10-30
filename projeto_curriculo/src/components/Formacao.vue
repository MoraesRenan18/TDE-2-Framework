<script setup>
defineProps({
  formacoes: Array
})
</script>

<template>
  <section class="education">

    <h2>Educação</h2>

    <article
      v-for="(formacao, index) in formacoes"
      :key="index"
      class="education-item"
    >
      <span>{{ formacao.periodoInstituicao }}</span>

      <h3>{{ formacao.curso }}</h3>

      <p>{{ formacao.descricao }}</p>

    </article>

  </section>
</template>