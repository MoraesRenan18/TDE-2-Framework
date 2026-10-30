<script setup>
defineProps({
  nome: String,
  subtitulo: String
})
</script>

<template>
  <header class="resume-header">

    <img
      src="../assets/logo.svg"
      alt="Logo MM"
      class="resume-header__logo"
    />

    <div class="resume-header__info">
      <h1>{{ nome }}</h1>
      <p>{{ subtitulo }}</p>
    </div>

  </header>
</template>