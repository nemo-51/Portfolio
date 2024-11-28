<template>
  <section :id="props.id">
    <div class="grid-about">
      <div>
        <h2>{{ props.data.title }}</h2>
        <p v-for="line in props.data.text" :key="line">{{ line }}</p>
      </div>
      <div>
        <article>
          <div class="grid-about-card">
            <div class="flex-container">
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
  grid-template-columns: 2fr minmax(350px, 1fr);
  gap: 1rem;
}
@media (max-width: 1024px) {
  .grid-about {
    grid-template-columns: 1fr;
  }
}
.grid-about-card {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 1fr;
  gap: 1rem;
}
img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
