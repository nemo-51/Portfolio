<template>
  <nav :id="props.id" class="navbar overflow-auto">
    <ul>
      <li>
        <a href="#menu"
          ><h1>{{ props.data.title }}</h1></a
        >
      </li>
      <li class="navbar__link-item--maskable">
        <a href="#about">{{ props.data.sections.about.title }}</a>
      </li>
      <li class="navbar__link-item--maskable">
        <a href="#timeline">{{ props.data.sections.timeline.title }}</a>
      </li>
      <li class="navbar__link-item--maskable">
        <a href="#skills">{{ props.data.sections.skills.title }}</a>
      </li>
      <li class="navbar__link-item--maskable">
        <a href="#projects">{{ props.data.sections.projects.title }}</a>
      </li>
      <li class="navbar__link-item--maskable">
        <a href="#contact">{{ props.data.sections.contact.title }}</a>
      </li>
    </ul>
    <div class="flex-container flex-container--padding-left">
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
@media (max-width: 1024px) {
  .navbar__link-item--maskable {
    display: none;
  }
}
</style>
