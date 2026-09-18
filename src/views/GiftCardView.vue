<script setup>
import { RouterLink } from 'vue-router'
import { spa } from '../data/spa.js'

// Seasonal promotion — edit or clear this block when the offer changes.
// Set `active: false` to hide the promotion section entirely.
const promotion = {
  active: true,
  name: 'Seasonal gift card offer',
  headline: '$249 gift card for $200',
  redeemableFor: ['60-minute Swedish Massage', '60-minute Hydration Facial'],
  tiers: [
    { label: 'Buy 3, get 1 free', detail: 'Pay $600, receive 4 cards — $996 value' },
    { label: 'Buy 5, get 2 free', detail: 'Pay $1,000, receive 7 cards — $1,743 value' },
  ],
  validUntil: 'Ask about current dates when you call',
}
</script>

<template>
  <div class="page">
    <header class="shell page__head">
      <h1 class="page__title">Gift Cards</h1>
      <p class="page__lede">An hour of quiet is a better present than most objects.</p>
      <p class="body-copy">
        Gift cards can be put toward any treatment on the menu and don't expire. Buy one by phone on
        <a :href="`tel:${spa.phoneBooking}`">{{ spa.phoneBooking }}</a> or in person at the spa
        desk.
      </p>
    </header>

    <!-- Seasonal offer -->
    <section v-if="promotion.active" class="section section--warm">
      <div class="shell promo">
        <p class="eyebrow">{{ promotion.name }}</p>
        <h2 class="promo__headline">{{ promotion.headline }}</h2>

        <p class="body-copy promo__intro">
          Each card can be redeemed for a
          {{ promotion.redeemableFor.join(' or a ') }}.
        </p>

        <ul class="promo__tiers">
          <li v-for="tier in promotion.tiers" :key="tier.label" class="tier">
            <h3 class="tier__label">{{ tier.label }}</h3>
            <p class="tier__detail">{{ tier.detail }}</p>
          </li>
        </ul>

        <p class="promo__fine">{{ promotion.validUntil }}</p>
      </div>
    </section>

    <!-- How it works -->
    <section class="section shell how">
      <h2 class="how__title">How it works</h2>
      <div class="how__cols">
        <div>
          <h3 class="how__heading">Buying</h3>
          <p class="body-copy">
            Call the spa or come to the desk. Cards can be issued for any amount, or for a specific
            treatment.
          </p>
        </div>
        <div>
          <h3 class="how__heading">Using</h3>
          <p class="body-copy">
            Mention the card when booking and bring it with you. It covers treatments, the Spa Day
            Pass, and add-ons.
          </p>
        </div>
        <div>
          <h3 class="how__heading">One limit</h3>
          <p class="body-copy">
            Gift cards can't be combined with the discounted menu pricing or with package offers.
          </p>
        </div>
      </div>
    </section>

    <div class="shell page__cta">
      <a class="pill-button" :href="`tel:${spa.phoneBooking}`">Call {{ spa.phoneBooking }}</a>
      <RouterLink class="link-underline page__alt" to="/services"
        >See the treatment menu</RouterLink
      >
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

/* Promotion ----------------------------------------------------------------- */

.promo__headline {
  font-size: var(--step-4);
  margin-bottom: 1.5rem;
}

.promo__intro {
  margin-bottom: 3rem;
}

.promo__tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: clamp(2rem, 4vw, 3.5rem);
  list-style: none;
  margin: 0 0 2.5rem;
  padding: 0;
}

.tier {
  border-top: 1px solid var(--rule);
  padding-top: 1.5rem;
}

.tier__label {
  font-size: var(--step-2);
  margin-bottom: 0.6rem;
}

.tier__detail {
  font-family: var(--font-ui);
  font-size: var(--step--1);
  letter-spacing: 0.04em;
  color: var(--ink-soft);
}

.promo__fine {
  font-family: var(--font-ui);
  font-size: var(--step--2);
  letter-spacing: 0.06em;
  color: var(--ink-soft);
}

/* How it works -------------------------------------------------------------- */

.how__title {
  font-size: var(--step-3);
  margin-bottom: 3rem;
}

.how__cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: clamp(2.5rem, 4vw, 4rem);
}

.how__heading {
  font-family: var(--font-ui);
  font-size: var(--step--2);
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 1rem;
}

.page__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding-bottom: var(--section-space);
}
</style>
