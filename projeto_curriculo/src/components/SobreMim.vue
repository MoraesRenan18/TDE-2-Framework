<script setup>
defineProps({
  texto: String
})
</script>

<template>
  <section class="about">
    <p>{{ texto }}</p>
  </section>
</template>