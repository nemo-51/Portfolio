<template>
  <section :id="props.id">
    <h2>{{ props.data.title }}</h2>
    <ul>
      <li v-for="project in props.data.projects" :key="project">
        <strong>{{ project.title }}</strong>
        <p v-for="line in project.details" :key="line">{{ line }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  id: String,
  data: Object,
});
</script>

<style></style>
