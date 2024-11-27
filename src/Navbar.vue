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
  </nav>
</template>

<script setup>
const props = defineProps({
  id: String,
  data: Object,
});
</script>

<style></style>
