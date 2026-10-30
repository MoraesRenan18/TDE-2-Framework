<script setup>
defineProps({
  contatos: Array
})
</script>

<template>
  <section class="contact">

    <h2>CONTATO</h2>

    <div
      v-for="(contato, index) in contatos"
      :key="index"
      class="contact-item"
    >
      <p>
        <strong>{{ contato.tipo }}:</strong>
        {{ contato.valor }}
      </p>
    </div>

  </section>
</template>
