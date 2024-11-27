<template>
  <section :id="props.id">
    {{ props.data.title }}
  </section>
</template>

<script setup>
const props = defineProps({
  id: String,
  data: Object,
});
</script>

<style></style>
