<script setup>
import { RouterLink } from 'vue-router'
import { spa, featured } from '../data/spa.js'
</script>

<template>
  <div class="home">
    <!-- Hero: video only, nothing over it but the navigation bar -->
    <section class="hero">
      <video
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        poster="/media/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/media/sally-spa-hero.mp4" type="video/mp4" />
      </video>
      <h1 class="visually-hidden">Sally's Spa at Pacific Palms Resort</h1>
    </section>

    <!-- Opening statement -->
    <section class="section shell statement">
      <p class="statement__lede">
        A spa inside the resort, built for the hours you give back to yourself.
      </p>

      <div class="statement__aside">
        <p class="body-copy">
          Sally's Spa sits in {{ spa.location }}, beside the Golf Club and Red Restaurant. Facials,
          massage, scalp therapy and body contouring, delivered by licensed therapists and
          estheticians who work to what your body and skin need that day.
        </p>
        <RouterLink class="link-underline" to="/services">See the full menu</RouterLink>
      </div>
    </section>

    <!-- Netflix credit -->
    <section class="section section--warm">
      <div class="shell netflix">
        <p class="eyebrow">As seen on screen</p>
        <h2 class="netflix__title">The spa from Netflix's Emmy-winning series <em>Beef</em></h2>
        <p class="body-copy">
          Scenes were filmed in our treatment rooms and lounge. The rooms are still here, and still
          open for booking.
        </p>
        <RouterLink class="link-underline netflix__link" to="/appointment">
          Schedule an appointment
        </RouterLink>
      </div>
    </section>

    <!-- Two-panel feature block -->
    <section class="section shell features">
      <article class="feature">
        <img class="feature__image" src="/media/feature-treatments.jpg" alt="" />
        <p class="eyebrow">Treatments</p>
        <h2 class="feature__title">Massage, facials and contouring</h2>
        <p class="body-copy">
          The full menu in one place — Swedish through deep tissue, Valmont and LPG facials, ginger
          scalp therapy and body contouring, with every duration and price listed.
        </p>
        <RouterLink class="link-underline" to="/services">Discover more</RouterLink>
      </article>

      <article class="feature">
        <img class="feature__image" src="/media/feature-daypass.jpg" alt="" />
        <p class="eyebrow">Spa day pass</p>
        <h2 class="feature__title">Two hours in the facilities</h2>
        <p class="body-copy">
          Robes and slippers, a personal locker, the lounge, the jacuzzi, and tea and coffee
          throughout. $69, or included with the Luxury Spa Day Experience.
        </p>
        <RouterLink class="link-underline" to="/services#spa-day">Discover more</RouterLink>
      </article>
    </section>

    <!-- Signature treatments -->
    <section class="section shell signatures">
      <h2 class="signatures__title">Most booked</h2>

      <ul class="signatures__list">
        <li v-for="item in featured" :key="item.name" class="signature">
          <h3 class="signature__name">{{ item.name }}</h3>
          <p class="signature__meta">{{ item.meta }}</p>
          <p class="signature__note">{{ item.blurb }}</p>
        </li>
      </ul>

      <RouterLink class="pill-button signatures__cta" to="/services">See all treatments</RouterLink>
    </section>

    <!-- Visiting -->
    <section class="section section--warm">
      <div class="shell visit">
        <h2 class="visit__title">Planning your visit</h2>
        <div class="visit__cols">
          <div>
            <h3 class="visit__heading">Where to find us</h3>
            <p class="body-copy">
              {{ spa.address }}, inside {{ spa.location }} — next to the Golf Club and Red
              Restaurant.
            </p>
          </div>
          <div>
            <h3 class="visit__heading">Opening hours</h3>
            <p class="body-copy">
              {{ spa.hours }}. Arrive fifteen minutes early so you can change and settle before your
              treatment begins.
            </p>
          </div>
          <div>
            <h3 class="visit__heading">Booking</h3>
            <p class="body-copy">
              Call <a :href="`tel:${spa.phoneBooking}`">{{ spa.phoneBooking }}</a> to reserve, or
              send a request through the appointment page and we'll confirm your time.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flow-root;
}

/* Hero ---------------------------------------------------------------------- */

.hero {
  position: relative;
  height: 100svh;
  min-height: 34rem;
  background-color: var(--paper-deep);
  overflow: hidden;
}

.hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Opening statement --------------------------------------------------------- */

.statement {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: clamp(2rem, 6vw, 6rem);
  align-items: end;
}

.statement__lede {
  font-family: var(--font-display);
  font-size: var(--step-4);
  font-weight: 300;
  line-height: 1.22;
  max-width: 20ch;
}

.statement__aside {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
  padding-bottom: 0.5rem;
}

/* Netflix ------------------------------------------------------------------- */

.netflix__title {
  font-size: var(--step-3);
  max-width: 24ch;
  margin-bottom: 1.5rem;
}

.netflix__title em {
  font-style: italic;
}

.netflix__link {
  margin-top: 2rem;
}

/* Feature panels ------------------------------------------------------------ */

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: clamp(2.5rem, 5vw, 4.5rem);
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.feature__image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background-color: var(--paper-warm);
  margin-bottom: 2.25rem;
}

.feature__title {
  font-size: var(--step-2);
  margin-bottom: 1rem;
}

.feature .link-underline {
  margin-top: 1.75rem;
}

/* Signatures ---------------------------------------------------------------- */

.signatures__title {
  font-size: var(--step-3);
  margin-bottom: 3rem;
}

.signatures__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: clamp(2.5rem, 4vw, 4rem);
  list-style: none;
  margin: 0 0 3.5rem;
  padding: 0;
}

.signature {
  border-top: 1px solid var(--rule);
  padding-top: 1.75rem;
}

.signature__name {
  font-size: var(--step-2);
  margin-bottom: 0.6rem;
}

.signature__meta {
  font-family: var(--font-ui);
  font-size: var(--step--1);
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  margin-bottom: 1.1rem;
}

.signature__note {
  color: var(--ink-soft);
}

/* Visiting ------------------------------------------------------------------ */

.visit__title {
  font-size: var(--step-3);
  margin-bottom: 3rem;
}

.visit__cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: clamp(2.5rem, 4vw, 4rem);
}

.visit__heading {
  font-family: var(--font-ui);
  font-size: var(--step--2);
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 1rem;
}

.visit__cols a {
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
}

@media (max-width: 52rem) {
  .statement {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .statement__aside {
    padding-bottom: 0;
  }
}
</style>
