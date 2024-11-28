<template>
  <nav :id="props.id">
    <ul>
      <li>
        <a href="#menu"
          ><h1>{{ props.data.title }}</h1></a
        >
      </li>
      <li>
        <a href="#about">{{ props.data.sections.about.title }}</a>
      </li>
      <li>
        <a href="#skills">{{ props.data.sections.skills.title }}</a>
      </li>
      <li>
        <a href="#projects">{{ props.data.sections.projects.title }}</a>
      </li>
      <li>
        <a href="#contact">{{ props.data.sections.contact.title }}</a>
      </li>
    </ul>
    <div class="button-container">
      <a :href="props.data.url_cv" target="_blank">
        <button class="pico-background-red-500">
          <i class="ri-file-pdf-2-line"></i>
          Voir CV
        </button></a
      >
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  id: String,
  data: Object,
});
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}
.button-container {
  display: flex;
  align-items: center;
}
</style>
