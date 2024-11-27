<template>
  <section :id="props.id">
    <h2>{{ props.data.title }}</h2>
    <div class="card-grid">
      <article v-for="project in props.data.projects" :key="project">
          <strong>{{ project.title }}</strong>
          <ul>
            <li v-for="line in project.details" :key="line">{{ line }}</li>
          </ul>
      </article>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  id: String,
  data: Object,
});
</script>

<style></style>
