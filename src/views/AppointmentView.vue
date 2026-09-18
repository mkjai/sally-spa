<script setup>
import { reactive, ref } from 'vue'
import { spa, menu } from '../data/spa.js'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  treatment: '',
  date: '',
  time: '',
  guests: '1',
  notes: '',
})

const sent = ref(false)
const error = ref('')

const submit = () => {
  if (!form.name || !form.email || !form.date) {
    error.value = 'Add your name, email and a preferred date so we can hold a time for you.'
    return
  }
  error.value = ''
  // Connect this to your booking system or a form endpoint when you have one.
  sent.value = true
}
</script>

<template>
  <div class="page">
    <header class="shell page__head">
      <h1 class="page__title">Schedule an Appointment</h1>
      <p class="body-copy">
        The fastest way to book is by phone — someone at the desk can check the day's availability
        with you. Or send a request below and we'll confirm by email.
      </p>
    </header>

    <!-- Phone -->
    <section class="shell call">
      <div class="call__cols">
        <div>
          <h2 class="call__heading">During opening hours</h2>
          <p class="call__hours">{{ spa.hours }}</p>
          <a class="call__number" :href="`tel:${spa.phoneHours}`">{{ spa.phoneHours }}</a>
        </div>
        <div>
          <h2 class="call__heading">Outside opening hours</h2>
          <p class="call__hours">Leave a message and we'll return it</p>
          <a class="call__number" :href="`tel:${spa.phoneAfterHours}`">{{ spa.phoneAfterHours }}</a>
        </div>
        <div>
          <h2 class="call__heading">Bookings and packages</h2>
          <p class="call__hours">For gift cards and bundles</p>
          <a class="call__number" :href="`tel:${spa.phoneBooking}`">{{ spa.phoneBooking }}</a>
        </div>
      </div>
    </section>

    <!-- Request form -->
    <section class="section shell">
      <hr class="rule" />
      <div class="booking">
        <h2 class="booking__title">Request a time</h2>

        <div v-if="sent" class="booking__done">
          <h3 class="booking__done-title">Request received</h3>
          <p class="body-copy">
            Thank you, {{ form.name }}. We'll confirm your time by email at {{ form.email }}. If you
            need us sooner, call {{ spa.phoneHours }} during opening hours.
          </p>
        </div>

        <div v-else class="booking__form">
          <div class="field">
            <label for="f-name">Full name</label>
            <input id="f-name" v-model="form.name" type="text" autocomplete="name" />
          </div>

          <div class="field">
            <label for="f-email">Email address</label>
            <input id="f-email" v-model="form.email" type="email" autocomplete="email" />
          </div>

          <div class="field">
            <label for="f-phone">Phone (optional)</label>
            <input id="f-phone" v-model="form.phone" type="tel" autocomplete="tel" />
          </div>

          <div class="field">
            <label for="f-guests">Number of guests</label>
            <select id="f-guests" v-model="form.guests">
              <option v-for="n in 8" :key="n" :value="String(n)">{{ n }}</option>
            </select>
          </div>

          <div class="field field--wide">
            <label for="f-treatment">Treatment</label>
            <select id="f-treatment" v-model="form.treatment">
              <option value="" disabled>Choose a treatment</option>
              <optgroup v-for="group in menu" :key="group.id" :label="group.name">
                <option v-for="item in group.treatments" :key="item.name" :value="item.name">
                  {{ item.name }}
                </option>
              </optgroup>
              <option value="Not sure yet">Not sure yet — please advise</option>
            </select>
          </div>

          <div class="field">
            <label for="f-date">Preferred date</label>
            <input id="f-date" v-model="form.date" type="date" />
          </div>

          <div class="field">
            <label for="f-time">Preferred time</label>
            <input id="f-time" v-model="form.time" type="time" />
          </div>

          <div class="field field--wide">
            <label for="f-notes">Anything we should know</label>
            <textarea
              id="f-notes"
              v-model="form.notes"
              rows="4"
              placeholder="Injuries, allergies, pregnancy, pressure preference, or an occasion we should mark."
            ></textarea>
          </div>

          <p v-if="error" class="booking__error">{{ error }}</p>

          <button class="pill-button booking__submit" type="button" @click="submit">
            Send request
          </button>
        </div>
      </div>
    </section>

    <!-- Policies -->
    <section class="section section--warm">
      <div class="shell policies">
        <h2 class="policies__title">Spa policies</h2>
        <div class="policies__cols">
          <div>
            <h3 class="policies__heading">Arrival</h3>
            <p class="body-copy">
              Come fifteen minutes before your treatment so you can change and settle. Late arrivals
              may have their treatment shortened to protect the next booking.
            </p>
          </div>
          <div>
            <h3 class="policies__heading">Health</h3>
            <p class="body-copy">
              Tell us about injuries, allergies, pregnancy or medical conditions when you book, so
              we can match you with the right therapist and treatment.
            </p>
          </div>
          <div>
            <h3 class="policies__heading">Full guidelines</h3>
            <p class="body-copy">
              <a :href="spa.policiesPdf" target="_blank" rel="noopener">
                Download the spa policies and guidelines (PDF)
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
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
  font-size: var(--step-4);
  margin-bottom: 1.5rem;
}

/* Phone numbers ------------------------------------------------------------- */

.call__cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: clamp(2rem, 4vw, 3.5rem);
}

.call__heading {
  font-family: var(--font-ui);
  font-size: var(--step--2);
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 0.75rem;
}

.call__hours {
  font-size: var(--step--1);
  color: var(--ink-soft);
  margin-bottom: 0.75rem;
}

.call__number {
  display: inline-block;
  font-family: var(--font-display);
  font-size: var(--step-2);
  font-weight: 400;
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 0.2rem;
  transition: border-color 0.3s var(--ease);
}

.call__number:hover {
  border-color: var(--ink);
}

/* Form ---------------------------------------------------------------------- */

.booking {
  max-width: 48rem;
  padding-top: 3rem;
}

.booking__title {
  font-size: var(--step-3);
  margin-bottom: 2.5rem;
}

.booking__form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem 2.5rem;
}

.field--wide {
  grid-column: 1 / -1;
}

.field label {
  display: block;
  font-family: var(--font-ui);
  font-size: var(--step--2);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 0.55rem;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  font-family: var(--font-ui);
  font-size: var(--step-0);
  color: var(--ink);
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--rule);
  border-radius: 0;
  padding: 0.5rem 0;
}

.field textarea {
  border: 1px solid var(--rule);
  padding: 0.85rem 1rem;
  resize: vertical;
  line-height: 1.7;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--ink);
}

.field textarea::placeholder {
  color: var(--ink-soft);
  opacity: 0.7;
}

.booking__error {
  grid-column: 1 / -1;
  font-family: var(--font-ui);
  font-size: var(--step--1);
  color: #8c3a24;
}

.booking__submit {
  grid-column: 1 / -1;
  justify-self: start;
}

.booking__done-title {
  font-size: var(--step-2);
  margin-bottom: 1.25rem;
}

/* Policies ------------------------------------------------------------------ */

.policies__title {
  font-size: var(--step-3);
  margin-bottom: 3rem;
}

.policies__cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: clamp(2.5rem, 4vw, 4rem);
}

.policies__heading {
  font-family: var(--font-ui);
  font-size: var(--step--2);
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 1rem;
}

.policies__cols a {
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
}

@media (max-width: 40rem) {
  .booking__form {
    grid-template-columns: 1fr;
  }
}
</style>
