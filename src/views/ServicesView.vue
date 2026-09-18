<script setup>
import { RouterLink } from 'vue-router'
import { menu, addOns, menuNote, spa } from '../data/spa.js'
</script>

<template>
  <div class="page">
    <header class="shell page__head">
      <h1 class="page__title">Services</h1>
      <p class="body-copy">
        Every treatment we offer, on one page. Prices are per person. To book, call
        <a :href="`tel:${spa.phoneBooking}`">{{ spa.phoneBooking }}</a> or send a request through
        the appointment page.
      </p>

      <!-- Jump links: the page is long, so give people a way through it -->
      <nav class="jump" aria-label="Treatment categories">
        <a v-for="group in menu" :key="group.id" class="jump__link" :href="`#${group.id}`">
          {{ group.name }}
        </a>
      </nav>
    </header>

    <section v-for="group in menu" :key="group.id" :id="group.id" class="shell group">
      <hr class="rule" />
      <div class="group__inner">
        <div class="group__intro">
          <h2 class="group__name">{{ group.name }}</h2>
          <p class="body-copy">{{ group.intro }}</p>
        </div>

        <ul class="group__list">
          <li v-for="item in group.treatments" :key="item.name" class="treatment">
            <div class="treatment__head">
              <h3 class="treatment__name">{{ item.name }}</h3>
              <span v-if="item.tag" class="treatment__tag">{{ item.tag }}</span>
            </div>

            <p class="treatment__blurb">{{ item.blurb }}</p>

            <ul class="options">
              <li v-for="opt in item.options" :key="opt.duration" class="option">
                <span class="option__duration">{{ opt.duration }}</span>
                <span class="option__price">
                  {{ opt.price }}
                  <span v-if="opt.was" class="option__was">was {{ opt.was }}</span>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <!-- Add-ons -->
    <section class="shell group">
      <hr class="rule" />
      <div class="group__inner">
        <div class="group__intro">
          <h2 class="group__name">Add-ons</h2>
          <p class="body-copy">Added to any massage when you book, or on the day.</p>
        </div>

        <ul class="group__list">
          <li v-for="item in addOns" :key="item.name" class="treatment treatment--compact">
            <div class="treatment__head">
              <h3 class="treatment__name">{{ item.name }}</h3>
              <span class="option__price">{{ item.price }}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <div class="shell page__foot">
      <p class="page__note">{{ menuNote }}</p>
      <RouterLink class="pill-button" to="/appointment">Schedule an Appointment</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding-top: calc(var(--nav-height) + clamp(4rem, 12vh, 8rem));
  padding-bottom: var(--section-space);
}

.page__head {
  margin-bottom: clamp(3rem, 8vh, 5.5rem);
}

.page__title {
  font-size: var(--step-5);
  margin-bottom: 1.75rem;
}

.page__head a {
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
}

/* Jump links ---------------------------------------------------------------- */

.jump {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2.5rem;
}

.jump__link {
  font-family: var(--font-ui);
  font-size: var(--step--1);
  letter-spacing: 0.05em;
  text-decoration: none;
  padding: 0.5rem 1.1rem;
  border: 1px solid var(--rule);
  border-radius: 999px;
  transition:
    background-color 0.3s var(--ease),
    border-color 0.3s var(--ease);
}

.jump__link:hover,
.jump__link:focus-visible {
  background-color: rgba(18, 17, 16, 0.06);
  border-color: var(--ink);
}

/* Groups -------------------------------------------------------------------- */

.group {
  padding-block: clamp(2.5rem, 5vh, 4rem);
  scroll-margin-top: calc(var(--nav-height) + 2rem);
}

.group__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.9fr);
  gap: clamp(2rem, 5vw, 5rem);
  padding-top: 2.5rem;
}

.group__name {
  font-size: var(--step-3);
  margin-bottom: 1rem;
}

.group__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Treatments ---------------------------------------------------------------- */

.treatment {
  padding-block: 2rem;
  border-bottom: 1px solid var(--rule-soft);
}

.treatment:first-child {
  padding-top: 0;
}

.treatment--compact {
  padding-block: 1.25rem;
}

.treatment__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem 1.5rem;
  margin-bottom: 0.75rem;
}

.treatment__name {
  font-size: var(--step-2);
}

.treatment__tag {
  font-family: var(--font-ui);
  font-size: var(--step--2);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  white-space: nowrap;
}

.treatment__blurb {
  color: var(--ink-soft);
  max-width: 54ch;
  margin-bottom: 1.25rem;
}

/* Durations and prices ------------------------------------------------------ */

.options {
  list-style: none;
  margin: 0;
  padding: 0;
}

.option {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  padding-block: 0.4rem;
}

.option__duration {
  font-family: var(--font-ui);
  font-size: var(--step--1);
  letter-spacing: 0.04em;
  color: var(--ink-soft);
}

.option__price {
  font-family: var(--font-ui);
  font-size: var(--step-0);
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.option__was {
  font-size: var(--step--2);
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  text-decoration: line-through;
  margin-left: 0.5rem;
}

/* Foot ---------------------------------------------------------------------- */

.page__foot {
  padding-top: clamp(3rem, 7vh, 5rem);
}

.page__note {
  font-family: var(--font-ui);
  font-size: var(--step--1);
  line-height: 1.8;
  color: var(--ink-soft);
  max-width: 52ch;
  margin-bottom: 2.5rem;
}

@media (max-width: 52rem) {
  .group__inner {
    grid-template-columns: 1fr;
  }
}
</style>
