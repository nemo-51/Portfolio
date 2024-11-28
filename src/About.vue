<template>
  <section :id="props.id">
    <div class="grid-about">
      <div>
        <h2>{{ props.data.title }}</h2>
        <p v-for="line in props.data.text" :key="line">{{ line }}</p>
      </div>
      <div>
        <article>
          <div class="grid">
            <div>
              <img :src="props.data.picture" alt="Photo" />
            </div>
            <div>
              <p v-for="small_skill in props.data.small_skills" :key="small_skill">
                <i :class="small_skill.icon"></i> {{ small_skill.title }}
              </p>
            </div>
          </div>
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

<style scoped>
.grid-about {
  display: grid;
  grid-template-columns: 1fr 469px;
  gap: 1rem;
}
img {
  border-radius: 50%;
}
</style>
