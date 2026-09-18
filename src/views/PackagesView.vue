<script setup>
import { RouterLink } from 'vue-router'
import { spa } from '../data/spa.js'

const series = [
  {
    name: 'Facial care series',
    items: [
      'Swiss Valmont luxury facial treatment',
      'French LPG anti-aging facial sculpting',
      'Deep hydration and brightening facial',
      'Deep cleansing facial',
    ],
  },
  {
    name: 'Body massage and wellness',
    items: [
      'Royal Thai signature massage',
      'doTERRA aromatherapy massage',
      'Herbal hot compress meridian therapy',
      'Fresh ginger scalp and head therapy',
      'LPG body contouring and sculpting',
      'Detox and relaxation therapy',
    ],
  },
]

const bundle = {
  name: 'Three-treatment bundle',
  price: '$499',
  was: '$998',
  items: [
    '60 min Swedish Massage or doTERRA Aromatherapy Massage',
    '60 min Hydration Facial or Ginger Scalp Treatment',
    '30 min LPG Body or Facial Contouring',
  ],
}
</script>

<template>
  <div class="page">
    <header class="shell page__head">
      <h1 class="page__title">Packages</h1>
      <p class="page__lede">Buy treatments in bundles and pay less for each one.</p>
      <p class="body-copy">
        Every package includes a Spa Day Pass with each treatment. Call
        <a :href="`tel:${spa.phoneBooking}`">{{ spa.phoneBooking }}</a> and we'll put together the
        combination that suits you.
      </p>
    </header>

    <!-- Featured bundle -->
    <section class="shell bundle">
      <div class="bundle__inner">
        <div>
          <p class="eyebrow">Best value</p>
          <h2 class="bundle__name">{{ bundle.name }}</h2>
          <ul class="bundle__items">
            <li v-for="item in bundle.items" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="bundle__price">
          <p class="bundle__figure">{{ bundle.price }}</p>
          <p class="bundle__was">Regular price {{ bundle.was }}</p>
          <RouterLink class="pill-button" to="/appointment">Reserve this package</RouterLink>
        </div>
      </div>
    </section>

    <!-- Annual plan -->
    <section class="section section--warm">
      <div class="shell plan">
        <h2 class="plan__title">Annual Wellness Plan</h2>
        <p class="body-copy plan__intro">
          For guests who come in regularly through the year. The same discount applies across
          facials, massage, scalp therapy and body contouring, so you're not choosing between them.
        </p>

        <div class="plan__cols">
          <div v-for="group in series" :key="group.name" class="plan__col">
            <h3 class="plan__heading">{{ group.name }}</h3>
            <ul class="plan__list">
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>

        <p class="body-copy plan__foot">
          Ask about the plan when you call — we'll work out which tier matches how often you visit.
        </p>
      </div>
    </section>

    <div class="shell page__cta">
      <RouterLink class="pill-button" to="/appointment">Schedule an Appointment</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding-top: calc(var(--nav-height) + clamp(4rem, 12vh, 8rem));
}

.page__head {
  margin-bottom: clamp(3rem, 7vh, 4.5rem);
}

.page__title {
  font-size: var(--step-5);
  margin-bottom: 1.5rem;
}

.page__lede {
  font-family: var(--font-display);
  font-size: var(--step-3);
  font-weight: 300;
  line-height: 1.25;
  max-width: 24ch;
  margin-bottom: 1.75rem;
}

.page__head a {
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
}

/* Featured bundle ----------------------------------------------------------- */

.bundle {
  padding-bottom: var(--section-space);
}

.bundle__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
  border-top: 1px solid var(--rule);
  padding-top: 2.5rem;
}

.bundle__name {
  font-size: var(--step-3);
  margin-bottom: 1.5rem;
}

.bundle__items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bundle__items li {
  color: var(--ink-soft);
  padding-block: 0.5rem;
  border-bottom: 1px solid var(--rule-soft);
  max-width: 44ch;
}

.bundle__figure {
  font-family: var(--font-display);
  font-size: var(--step-4);
  font-weight: 300;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.bundle__was {
  font-family: var(--font-ui);
  font-size: var(--step--1);
  letter-spacing: 0.05em;
  color: var(--ink-soft);
  margin-bottom: 2rem;
}

/* Annual plan --------------------------------------------------------------- */

.plan__title {
  font-size: var(--step-3);
  margin-bottom: 1.5rem;
}

.plan__intro {
  margin-bottom: 3.5rem;
}

.plan__cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: clamp(2.5rem, 4vw, 4rem);
  margin-bottom: 3rem;
}

.plan__heading {
  font-family: var(--font-ui);
  font-size: var(--step--2);
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 1.25rem;
}

.plan__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.plan__list li {
  padding-block: 0.6rem;
  border-bottom: 1px solid var(--rule-soft);
}

.page__cta {
  padding-block: var(--section-space);
}

@media (max-width: 52rem) {
  .bundle__inner {
    grid-template-columns: 1fr;
  }
}
</style>
