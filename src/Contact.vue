<template>
  <nav :id="props.id" class="navbar overflow-auto">
    <ul>
      <li>
        <h2>{{ props.data.title }}</h2>
      </li>
      <li v-for="link in props.data.links" :key="link">
        <a :href="link.url">
          <i :class="link.icon"></i>
          {{ link.text }}
        </a>
      </li>
    </ul>
    <div class="flex-container flex-container--padding-left">
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

<style scoped>
.flex-container--padding-left {
  padding-left: 0.5rem;
}
</style>
