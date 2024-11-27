<template>
  <nav :id="props.id">
    <ul>
    <li><h2>{{ props.data.title }}</h2></li>
    <li v-for="link in props.data.links" :key="link">
      <a :href="link.url">
        <i :class="link.icon"></i>
        {{ link.text }}
      </a>
    </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  id: String,
  data: Object,
});
</script>

<style></style>
