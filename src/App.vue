<template>
  <div class="container">
    <Navbar id="menu" :data="data" />
    <About id="about" :data="data.sections.about" />
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
import Skills from "./Skills.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";
</script>

<style></style>
