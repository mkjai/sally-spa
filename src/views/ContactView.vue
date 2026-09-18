<script setup>
import { RouterLink } from 'vue-router'
import { spa } from '../data/spa.js'
</script>

<template>
  <div class="page">
    <header class="shell page__head">
      <h1 class="page__title">Contact</h1>
      <p class="body-copy">
        We're inside {{ spa.location }}, next to the Golf Club and Red Restaurant. Parking is at the
        resort.
      </p>
    </header>

    <section class="shell contact">
      <div class="contact__cols">
        <div>
          <h2 class="contact__heading">Address</h2>
          <p class="contact__text">
            {{ spa.legalName }}<br />
            {{ spa.address }}
          </p>
        </div>

        <div>
          <h2 class="contact__heading">Hours</h2>
          <p class="contact__text">{{ spa.hours }}</p>
        </div>

        <div>
          <h2 class="contact__heading">Telephone</h2>
          <p class="contact__text">
            <a :href="`tel:${spa.phoneHours}`">{{ spa.phoneHours }}</a> — during opening hours<br />
            <a :href="`tel:${spa.phoneAfterHours}`">{{ spa.phoneAfterHours }}</a> — after hours<br />
            <a :href="`tel:${spa.phoneBooking}`">{{ spa.phoneBooking }}</a> — bookings and packages
          </p>
        </div>
      </div>

      <hr class="rule" />

      <div class="contact__cols contact__cols--lower">
        <div>
          <h2 class="contact__heading">Follow along</h2>
          <ul class="socials">
            <li v-for="item in spa.socials" :key="item.label">
              <a :href="item.url" target="_blank" rel="noopener">
                {{ item.label }}
                <span class="socials__handle">{{ item.handle }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="contact__heading">WeChat 微信</h2>
          <p class="body-copy">
            Add us on WeChat for bookings, offers and news. 歡迎透過微信聯繫我們預約與查詢最新優惠。
          </p>
        </div>

        <div>
          <h2 class="contact__heading">Policies</h2>
          <p class="contact__text">
            <a :href="spa.policiesPdf" target="_blank" rel="noopener">
              Spa policies and guidelines (PDF)
            </a>
          </p>
        </div>
      </div>

      <RouterLink class="pill-button contact__cta" to="/appointment">
        Schedule an Appointment
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.page {
  padding-top: calc(var(--nav-height) + clamp(4rem, 12vh, 8rem));
  padding-bottom: var(--section-space);
}

.page__head {
  margin-bottom: clamp(3rem, 7vh, 4.5rem);
}

.page__title {
  font-size: var(--step-5);
  margin-bottom: 1.5rem;
}

.contact__cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: clamp(2.5rem, 4vw, 4rem);
  padding-bottom: 3.5rem;
}

.contact__cols--lower {
  padding-top: 3.5rem;
}

.contact__heading {
  font-family: var(--font-ui);
  font-size: var(--step--2);
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 1rem;
}

.contact__text {
  line-height: 2;
}

.contact__text a {
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
  transition: border-color 0.3s var(--ease);
}

.contact__text a:hover {
  border-color: var(--ink);
}

.socials {
  list-style: none;
  margin: 0;
  padding: 0;
}

.socials a {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  text-decoration: none;
  padding-block: 0.7rem;
  border-bottom: 1px solid var(--rule-soft);
  transition: color 0.3s var(--ease);
}

.socials a:hover {
  border-bottom-color: var(--ink);
}

.socials__handle {
  font-family: var(--font-ui);
  font-size: var(--step--1);
  color: var(--ink-soft);
}

.contact__cta {
  margin-top: 1rem;
}
</style>
