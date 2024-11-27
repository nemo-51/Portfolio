<template>
  <nav :id="props.id">
    {{ props.data.title }}
  </nav>
</template>

<script setup>
const props = defineProps({
  id: String,
  data: Object,
});
</script>

<style></style>
