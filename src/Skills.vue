<template>
  <section :id="props.id">
    <h2>{{ props.data.title }}</h2>
    <div class="card-grid">
      <article v-for="skill in props.data.skills" :key="skill">
        <strong>{{ skill.main_skill }}</strong>
        <ul>
          <li v-for="subskill in skill.sub_skills" :key="subskill">
            {{ subskill }}
          </li>
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
