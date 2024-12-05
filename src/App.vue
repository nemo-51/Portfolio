<template>
  <Navbar id="menu" :data="data" />
  <div class="container">
    <About id="about" :data="data.sections.about" />
    <Timeline id="timeline" :data="data.sections.timeline" />
    <Skills id="skills" :data="data.sections.skills" />
    <Projects id="projects" :data="data.sections.projects" />
    <Contact id="contact" :data="data.sections.contact" />
  </div>

  <!-- fullscreen viewer -->
  <div
    v-if="fullscreenImage !== null"
    class="fullscreen"
    @click="closeFullscreen"
  >
    <img :src="fullscreenImage" class="fullscreen__image" />
    <div class="button--close" @click.stop="closeFullscreen">
      <i class="ri-close-line"></i>
    </div>
  </div>
</template>

<script setup>
// read portfolio data
import data from "./assets/data.json";

// import components
import Navbar from "./Navbar.vue";
import About from "./About.vue";
import Timeline from "./Timeline.vue";
import Skills from "./Skills.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

// image zoom
import { useImageInteractions } from "./composables/useImageInteractions";
const { fullscreenImage, closeFullscreen } = useImageInteractions();
</script>

<style>
/* fonts */
body {
  font-family: "Noto Sans", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Oswald, sans-serif;
}
/* card / grid system */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;
}
.card {
  display: flex;
  flex-direction: column;
}
.card__main {
  flex: 1;
}
/* badge */
.text__badge {
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: var(--pico-color-slate-600);
  color: #fff;
  margin-right: 0.65rem;
}
/* align center */
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* align item right to navbar */
.navbar {
  display: flex;
  justify-content: space-between;
}
.flex-container--padding-left {
  padding-left: 0.5rem;
}
/* Fullscreen Viewer */
.image {
  transition: transform 0.3s;
}
.image:hover {
  transform: scale(1.05);
  opacity: 0.8;
}
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
.fullscreen__image {
  max-width: 90%;
  max-height: 90%;
  border: 2px solid white;
  border-radius: 8px;
}
.button--close {
  position: absolute;
  top: 13px;
  right: 20px;
  font-size: 3rem;
  text-shadow: 0 0 5px rgba(0, 0, 0, 1);
  color: white;
  cursor: pointer;
  z-index: 4;
}
/* navbars */
.navbar__link-list__item {
  display: flex;
  align-items: center;
}
.navbar__link-list__item__title {
  margin-bottom: 0 !important;
}
</style>
