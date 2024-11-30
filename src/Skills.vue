<template>
  <section :id="props.id">
    <h2>{{ props.data.title }}</h2>
    <div class="card-grid">
      <article class="card" v-for="skill in props.data.skills" :key="skill">
        <div class="card__main">
          <p>
            <strong>{{ skill.main_skill }}</strong>
          </p>
          <ul>
            <li v-for="subskill in skill.sub_skills" :key="subskill">
              {{ subskill }}
            </li>
          </ul>
        </div>
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

<style scoped></style>
