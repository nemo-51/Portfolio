<template>
  <section :id="props.id">
    <h2>{{ props.data.title }}</h2>
    <div class="card-grid">
      <div
        class="card-container"
        v-for="skill in props.data.skills"
        :key="skill"
      >
        <article>
          <p>
            <strong>{{ skill.main_skill }}</strong>
          </p>
          <ul>
            <li v-for="subskill in skill.sub_skills" :key="subskill">
              {{ subskill }}
            </li>
          </ul>
        </article>
      </div>
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
