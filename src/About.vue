<template>
  <section :id="props.id">
    <div class="grid-about">
      <div>
        <h2>{{ props.data.title }}</h2>
        <p v-for="line in props.data.text" :key="line">{{ line }}</p>
      </div>
      <div>
        <article>
          <div class="grid-about__card">
            <div class="flex-container">
              <img
                class="image image--picture"
                :src="props.data.picture"
                alt="Photo"
                @click="openFullscreen(props.data.picture)"
              />
            </div>
            <div>
              <p
                v-for="small_skill in props.data.small_skills"
                :key="small_skill"
              >
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

// image zoom
import { useImageInteractions } from "./composables/useImageInteractions";
const { openFullscreen } = useImageInteractions();
</script>

<style>
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
.grid-about__card {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 1fr;
  gap: 1rem;
}
.image--picture {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
</style>
