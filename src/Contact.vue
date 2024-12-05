<template>
  <nav :id="props.id" class="navbar navbar--footer">
    <ul class="navbar__link-list">
      <li class="navbar__link-list__item navbar__link-list__item--title">
        <h2 class="navbar__link-list__item__title">{{ props.data.title }}</h2>
      </li>
      <li
        class="navbar__link-list__item"
        v-for="link in props.data.links"
        :key="link"
      >
        <a :href="link.url">
          <i :class="link.icon"></i>
          {{ link.text }}
        </a>
      </li>
    </ul>
    <div
      class="navbar__right-element flex-container flex-container--padding-left navbar__link-list__item"
    >
      <a :href="props.data.url_repo" target="_blank">
        <i class="ri-code-s-slash-line"></i>
        Voir le code source
      </a>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  id: String,
  data: Object,
});
</script>

<style>
@media (max-width: 1024px) {
  .navbar--footer {
    display: block !important;
  }
  .navbar__link-list {
    display: block;
  }
  .navbar__link-list__item {
    display: block;
    padding: 6px 16px;
  }
  .navbar__right-element {
    display: block !important;
    padding: 0 !important;
  }
  .navbar__link-list__item--title {
    padding: 0px 8px 16px 8px !important;
  }
  .navbar__link-list__item__title {
    margin-bottom: 16px !important; /* reset to default */
  }
}
</style>
