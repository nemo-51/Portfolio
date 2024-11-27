<template>
  <section :id="props.id">
    <h2>{{ props.data.title }}</h2>
    <p v-for="line in props.data.text" :key="line">{{ line }}</p>
  </section>
</template>

<script setup>
const props = defineProps({
  id: String,
  data: Object,
});
</script>

<style></style>
