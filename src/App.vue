<template>
  <div class="container">
    <Navbar id="menu" :data="data" />
    <About id="about" :data="data.sections.about" />
    <Timeline id="timeline" :data="data.sections.timeline" />
    <Skills id="skills" :data="data.sections.skills" />
    <Projects id="projects" :data="data.sections.projects" />
    <Contact id="contact" :data="data.sections.contact" />
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

nav {
  display: flex;
  justify-content: space-between;
}
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
