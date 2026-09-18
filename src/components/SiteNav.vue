<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const leftLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Gift Cards', to: '/gift-cards' },
]

const rightLinks = [
  { label: 'Contact', to: '/contact' },
  { label: 'Schedule an Appointment', to: '/appointment' },
]

const allLinks = [...leftLinks, ...rightLinks]

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

const onKeydown = (e) => {
  if (e.key === 'Escape') menuOpen.value = false
}

// Hold the page still while the full-screen menu is open.
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

// Close the menu whenever the route changes.
watch(
  () => route.path,
  () => {
    menuOpen.value = false
  },
)

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="nav" :class="{ 'is-scrolled': scrolled, 'is-open': menuOpen }">
    <!-- One surface. Closed it's a pill; open it fills the screen. -->
    <div class="nav__surface">
      <nav class="nav__bar" aria-label="Primary">
        <!-- Left: links on wide screens, the menu toggle on narrow ones -->
        <div class="nav__side nav__side--left">
          <ul class="nav__group">
            <li v-for="link in leftLinks" :key="link.to">
              <RouterLink class="nav__link" :to="link.to">{{ link.label }}</RouterLink>
            </li>
          </ul>

          <button
            class="nav__link nav__toggle"
            type="button"
            :aria-expanded="menuOpen"
            aria-controls="nav-menu"
            @click="menuOpen = !menuOpen"
          >
            {{ menuOpen ? 'Close' : 'Menu' }}
          </button>
        </div>

        <!-- Centre: wordmark, in the same place at every width -->
        <RouterLink class="nav__wordmark" to="/">
          Sally Spa
          <span class="nav__wordmark-sub">Pacific Palms Resort</span>
        </RouterLink>

        <!-- Right: links on wide screens, a single short action on narrow ones -->
        <div class="nav__side nav__side--right">
          <ul class="nav__group">
            <li v-for="link in rightLinks" :key="link.to">
              <RouterLink class="nav__link" :to="link.to">{{ link.label }}</RouterLink>
            </li>
          </ul>

          <RouterLink class="nav__link nav__book" to="/appointment">Book</RouterLink>
        </div>
      </nav>

      <!-- Full-screen menu, inside the same surface -->
      <div id="nav-menu" class="nav__menu" :aria-hidden="!menuOpen">
        <ul class="nav__menu-list">
          <li v-for="link in allLinks" :key="link.to">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>

        <div class="nav__menu-foot">
          <a href="tel:626-993-5765">626-993-5765</a>
          <p>10am – 6pm, Monday through Sunday</p>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0.75rem clamp(0.75rem, 2vw, 1.25rem);
  transition: padding 0.5s var(--ease);
}

.nav.is-open {
  padding: 0;
  height: 100dvh;
}

/* The surface ---------------------------------------------------------------
   Closed: a pill. Open: the same element grown to fill the viewport, so the
   menu reads as the navigation bar expanding rather than a panel appearing. */

.nav__surface {
  display: flex;
  flex-direction: column;
  border-radius: 999px;
  background-color: rgba(231, 229, 224, 0.48);
  backdrop-filter: blur(20px) saturate(120%);
  -webkit-backdrop-filter: blur(20px) saturate(120%);
  /* No `overflow: hidden` here. Safari stops painting an element that has both
     a backdrop-filter and a clipped overflow. Nothing needs clipping anyway:
     the menu is hidden while closed, and the surface has no radius once open. */
  isolation: isolate;
  /* Closed, the surface is capped just past the bar's own height. Opening
     animates that cap down the screen, so the menu unrolls out of the bar
     rather than appearing all at once. */
  max-height: 6rem;
  transition:
    max-height 0.55s var(--ease),
    border-radius 0.55s var(--ease),
    background-color 0.5s var(--ease);
}

.nav.is-scrolled .nav__surface {
  background-color: rgba(231, 229, 224, 0.82);
}

.nav.is-open .nav__surface {
  height: 100%;
  max-height: 100dvh;
  border-radius: 0;
  background-color: rgba(231, 229, 224, 0.96);
}

/* The bar row --------------------------------------------------------------- */

.nav__bar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0.75rem;
  flex: 0 0 auto;
  transition: padding 0.5s var(--ease);
}

.nav.is-open .nav__bar {
  padding: 1.1rem clamp(1rem, 3vw, 1.5rem);
}

.nav__side {
  display: flex;
  align-items: center;
  min-width: 0;
}

.nav__side--right {
  justify-content: flex-end;
}

.nav__group {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Links --------------------------------------------------------------------- */

.nav__link {
  display: inline-block;
  font-family: var(--font-ui);
  font-size: var(--step--1);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: var(--ink);
  background: transparent;
  border: 0;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s var(--ease);
}

.nav__link:hover,
.nav__link:focus-visible {
  background-color: rgba(18, 17, 16, 0.08);
}

.nav__link.router-link-active {
  background-color: rgba(18, 17, 16, 0.05);
}

/* The short action on narrow screens is just a link like any other */
.nav__book.router-link-active {
  background-color: transparent;
}

/* Toggle and the short action are hidden until the bar runs out of room */
.nav__toggle,
.nav__book {
  display: none;
}

/* Wordmark ------------------------------------------------------------------ */

.nav__wordmark {
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2.2vw, 1.55rem);
  font-weight: 400;
  letter-spacing: 0.2em;
  text-indent: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink);
  text-align: center;
  line-height: 1.1;
  white-space: nowrap;
}

.nav__wordmark-sub {
  display: block;
  font-family: var(--font-ui);
  font-size: var(--step--2);
  font-weight: 300;
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  color: var(--ink-soft);
  margin-top: 0.15rem;
}

/* Full-screen menu ---------------------------------------------------------- */

.nav__menu {
  /* Closed, this must take up no space at all — otherwise the surface grows
     tall and the 999px radius renders it as a circle. `visibility: hidden`
     alone keeps the box, so collapse the height too. Overflow clipping is safe
     here: this element has no backdrop-filter of its own. */
  flex: 0 0 0;
  height: 0;
  min-height: 0;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 clamp(1rem, 3vw, 1.5rem);
  transition: opacity 0.35s var(--ease);
}

.nav.is-open .nav__menu {
  flex: 1 1 auto;
  height: auto;
  overflow-y: auto;
  opacity: 1;
  pointer-events: auto;
  padding-bottom: clamp(1.5rem, 4vh, 2.25rem);
  transition-delay: 0.2s;
}

.nav__menu-list {
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
}

.nav__menu-list a {
  display: block;
  font-family: var(--font-ui);
  font-size: var(--step-1);
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.4;
  text-decoration: none;
  padding-block: 0.9rem;
  border-bottom: 1px solid var(--rule-soft);
  transition: opacity 0.3s var(--ease);
}

.nav__menu-list li:last-child a {
  border-bottom: 0;
}

.nav__menu-list a:hover,
.nav__menu-list a:focus-visible {
  opacity: 0.55;
}

.nav__menu-foot {
  padding-top: 1.75rem;
  border-top: 1px solid var(--rule);
}

.nav__menu-foot a {
  font-family: var(--font-ui);
  font-size: var(--step-0);
  letter-spacing: 0.04em;
  text-decoration: none;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 0.15rem;
}

.nav__menu-foot p {
  font-family: var(--font-ui);
  font-size: var(--step--1);
  letter-spacing: 0.04em;
  color: var(--ink-soft);
  margin-top: 0.75rem;
}

/* Narrow screens ------------------------------------------------------------
   The three-part layout is kept: an item left, the wordmark centred, an item
   right. Only the contents of the two sides change. */

@media (max-width: 64rem) {
  .nav__side .nav__group {
    display: none;
  }

  .nav__toggle,
  .nav__book {
    display: inline-block;
  }
}

@media (max-width: 30rem) {
  .nav__link {
    padding: 0.55rem 0.8rem;
  }

  .nav__wordmark-sub {
    display: none;
  }
}

/* The menu is only ever reachable at narrow widths */
@media (min-width: 64.0625rem) {
  .nav.is-open {
    padding: 0.75rem clamp(0.75rem, 2vw, 1.25rem);
    height: auto;
  }

  .nav.is-open .nav__surface {
    height: auto;
    max-height: 6rem;
    border-radius: 999px;
  }

  .nav__menu {
    display: none;
  }

  .nav.is-open .nav__menu {
    display: none;
  }
}
</style>
