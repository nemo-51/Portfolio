<template>
  <div class="container navbar--main">
    <nav :id="props.id" class="navbar">
      <ul>
        <li class="navbar__link-list__item">
          <a href="#menu"
            ><h1 class="navbar__link-list__item__title">
              {{ props.data.title }}
            </h1></a
          >
        </li>
        <li class="navbar__link-list__item navbar__link-list__item--maskable">
          <a href="#about">{{ props.data.sections.about.title }}</a>
        </li>
        <li class="navbar__link-list__item navbar__link-list__item--maskable">
          <a href="#timeline">{{ props.data.sections.timeline.title }}</a>
        </li>
        <li class="navbar__link-list__item navbar__link-list__item--maskable">
          <a href="#skills">{{ props.data.sections.skills.title }}</a>
        </li>
        <li class="navbar__link-list__item navbar__link-list__item--maskable">
          <a href="#projects">{{ props.data.sections.projects.title }}</a>
        </li>
        <li class="navbar__link-list__item navbar__link-list__item--maskable">
          <a href="#contact">{{ props.data.sections.contact.title }}</a>
        </li>
      </ul>
      <div
        class="navbar__link-list__item flex-container flex-container--padding-left"
      >
        <a :href="props.data.url_cv" target="_blank">
          <button class="pico-background-red-500">
            <i class="ri-file-pdf-2-line"></i>
            Voir CV
          </button></a
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  data: Object,
});
</script>

<style>
.navbar--main {
  position: sticky;
  top: 0;
  background-color: var(--pico-background-color);
  z-index: 2;
  padding-bottom: 8px;
}
@media (max-width: 1024px) {
  .navbar__link-list__item--maskable {
    display: none !important;
  }
  .navbar__link-list__item a {
    padding: 0 !important;
  }
  .flex-container--padding-left {
    padding: 0 !important;
  }
}
</style>
