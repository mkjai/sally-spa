<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { spa } from '../data/spa.js'

const name = ref('')
const email = ref('')
const submitted = ref(false)

const subscribe = () => {
  // Wire this to your mailing-list provider when you have one.
  submitted.value = true
}

const footerLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Gift Cards', to: '/gift-cards' },
  { label: 'Contact', to: '/contact' },
  { label: 'Schedule an Appointment', to: '/appointment' },
]
</script>

<template>
  <footer class="footer">
    <div class="shell">
      <div class="footer__top">
        <RouterLink class="footer__mark" to="/">Sally Spa</RouterLink>

        <ul class="footer__links">
          <li v-for="link in footerLinks" :key="link.to">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <hr class="rule" />

      <div class="footer__grid">
        <div class="footer__col">
          <h3 class="footer__heading">Find us</h3>
          <p class="footer__text">
            {{ spa.location }}<br />
            {{ spa.address }}
          </p>
        </div>

        <div class="footer__col">
          <h3 class="footer__heading">Hours</h3>
          <p class="footer__text">{{ spa.hours }}</p>
        </div>

        <div class="footer__col">
          <h3 class="footer__heading">Reach us</h3>
          <p class="footer__text">
            <a :href="`tel:${spa.phoneHours}`">{{ spa.phoneHours }}</a
            ><br />
            <a :href="`tel:${spa.phoneAfterHours}`">{{ spa.phoneAfterHours }}</a> after hours
          </p>
        </div>

        <div class="footer__col footer__col--wide">
          <h3 class="footer__heading">Offers and new treatments</h3>

          <p v-if="submitted" class="footer__text">
            Thank you — you're on the list. Look out for a note from us before the next season.
          </p>

          <div v-else class="footer__form">
            <label class="footer__field">
              <span>Full name</span>
              <input v-model="name" type="text" autocomplete="name" />
            </label>
            <label class="footer__field">
              <span>Email address</span>
              <input v-model="email" type="email" autocomplete="email" />
            </label>
            <button class="pill-button" type="button" @click="subscribe">Subscribe</button>
          </div>
        </div>
      </div>

      <p class="footer__fine">
        © {{ new Date().getFullYear() }} {{ spa.legalName }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--paper-warm);
  padding-block: clamp(4rem, 9vh, 7rem) 3rem;
}

.footer__top {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.footer__mark {
  font-family: var(--font-display);
  font-size: var(--step-3);
  font-weight: 300;
  letter-spacing: 0.22em;
  text-indent: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer__links a {
  font-family: var(--font-ui);
  font-size: var(--step--1);
  letter-spacing: 0.06em;
  text-decoration: none;
  color: var(--ink-soft);
  transition: color 0.3s var(--ease);
}

.footer__links a:hover,
.footer__links a:focus-visible {
  color: var(--ink);
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: 3rem 2.5rem;
  padding-block: 3rem;
}

.footer__col--wide {
  grid-column: span 2;
  min-width: 0;
}

.footer__heading {
  font-family: var(--font-ui);
  font-size: var(--step--2);
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 1.1rem;
}

.footer__text {
  font-size: var(--step--1);
  line-height: 2;
}

.footer__text a {
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s var(--ease);
}

.footer__text a:hover {
  border-color: var(--ink-soft);
}

.footer__form {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1.25rem;
}

.footer__field {
  flex: 1 1 12rem;
  display: block;
}

.footer__field span {
  display: block;
  font-family: var(--font-ui);
  font-size: var(--step--2);
  letter-spacing: 0.08em;
  color: var(--ink-soft);
  margin-bottom: 0.4rem;
}

.footer__field input {
  width: 100%;
  font-family: var(--font-ui);
  font-size: var(--step-0);
  color: var(--ink);
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--rule);
  padding: 0.4rem 0;
}

.footer__field input:focus {
  outline: none;
  border-bottom-color: var(--ink);
}

.footer__fine {
  font-family: var(--font-ui);
  font-size: var(--step--2);
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  padding-top: 2.5rem;
}

@media (max-width: 48rem) {
  .footer__col--wide {
    grid-column: span 1;
  }
}
</style>
