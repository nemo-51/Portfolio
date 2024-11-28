<template>
  <section :id="props.id">
    <h2>{{ props.data.title }}</h2>
    <div class="card-grid">
      <div
        class="card-container"
        v-for="event in props.data.events"
        :key="event"
      >
        <article>
          <header>
            <span class="margin-right"
              ><time
                ><i class="ri-calendar-line"></i> {{ event.year }}</time
              ></span
            >
            <span class="margin-right" v-if="event.structure">
              <i
                class="ri-graduation-cap-line"
                v-if="event.type === 'study'"
              ></i
              ><i class="ri-briefcase-line" v-else></i>
              {{ event.structure }}</span
            >
            <span class="margin-right" v-if="event.location"
              ><i class="ri-map-pin-line"></i> {{ event.location }}</span
            >
          </header>
          <p>
            <span class="badge" v-if="event.type === 'study'">Diplôme</span>
            <span class="badge" v-else-if="event.type === 'work'">Travail</span>
            <span class="badge" v-else-if="event.type === 'internship'"
              >Stage</span
            >
          </p>
          <p>
            <strong>{{ event.title }}</strong>
          </p>
          <p v-if="event.description">{{ event.description }}</p>
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
.margin-right {
  margin-right: 0.5rem;
}
</style>
