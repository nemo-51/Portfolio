<template>
  <div class="container">
    <Navbar id="menu" :data="data" />
    <About id="about" :data="data.sections.about" />
    <Timeline id="timeline" :data="data.sections.timeline" />
    <Skills id="skills" :data="data.sections.skills" />
    <Projects id="projects" :data="data.sections.projects" />
    <Contact id="contact" :data="data.sections.contact" />
  </div>

  <!-- fullscreen viewer -->
  <div v-if="fullscreenImage !== null" class="fullscreen" @click="closeFullscreen">
    <img :src="fullscreenImage" class="fullscreen-image" />
    <div class="close-btn" @click.stop="closeFullscreen">
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
/* card / grid system */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;
}
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: top;
}
/* badge */
.badge {
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
nav {
  display: flex;
  justify-content: space-between;
}
.margin-left {
  margin-left: 1rem;
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
  z-index: 1000;
}
.fullscreen-image {
  max-width: 90%;
  max-height: 90%;
  border: 2px solid white;
  border-radius: 8px;
}
.close-btn {
  position: absolute;
  top: 13px;
  right: 20px;
  font-size: 3rem;
  text-shadow: 0 0 5px rgba(0, 0, 0, 1);
  color: white;
  cursor: pointer;
  z-index: 1001;
}
</style>
