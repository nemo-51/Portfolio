<template>
  <section :id="props.id">
    <h2>{{ props.data.title }}</h2>
    <div class="card-grid">
      <article
        class="card"
        v-for="project in props.data.projects"
        :key="project"
      >
        <header v-if="project.image">
          <img class="image" :src="project.image" :alt="project.title"
          @click="openFullscreen(project.image)"
        </header>
        <div class="card__main">
          <p>
            <strong>{{ project.title }}</strong>
          </p>
          <p>{{ project.description }}</p>
          <span
            class="text__badge"
            v-for="line in project.skills"
            :key="line"
            >{{ line }}</span
          >
        </div>
        <footer class="grid" v-if="project.url_repo || project.url_site">
          <div>
            <a v-if="project.url_repo" :href="project.url_repo" target="_blank"
              ><i class="ri-code-s-slash-line"></i> Dépôt
            </a>
          </div>
          <div>
            <a v-if="project.url_site" :href="project.url_site" target="_blank"
              ><i class="ri-links-line"></i> Site
            </a>
          </div>
        </footer>
      </article>
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
