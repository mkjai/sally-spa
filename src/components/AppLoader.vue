<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['finished'])

const progress = ref(0)
const leaving = ref(false)

// Total time the bar takes to fill, in ms.
const DURATION = 2000

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const duration = reduced ? 400 : DURATION
  const start = performance.now()

  const tick = (now) => {
    const elapsed = now - start
    // Ease-out so the line slows as it completes, rather than stopping dead.
    const t = Math.min(elapsed / duration, 1)
    progress.value = 1 - Math.pow(1 - t, 2)

    if (t < 1) {
      requestAnimationFrame(tick)
    } else {
      // Hold on the full line for a beat, then fade out.
      setTimeout(() => {
        leaving.value = true
        setTimeout(() => emit('finished'), 900)
      }, 260)
    }
  }

  requestAnimationFrame(tick)
})
</script>

<template>
  <div class="loader" :class="{ 'is-leaving': leaving }" role="status" aria-live="polite">
    <div class="loader__inner">
      <p class="loader__wordmark">Sally Spa</p>
      <div class="loader__track">
        <span class="loader__bar" :style="{ transform: `scaleX(${progress})` }"></span>
      </div>
      <span class="visually-hidden">Loading</span>
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  background-color: var(--ink);
  transition: opacity 0.9s var(--ease);
}

.loader.is-leaving {
  opacity: 0;
  pointer-events: none;
}

.loader__inner {
  width: min(26rem, 72vw);
  text-align: center;
}

.loader__wordmark {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2rem, 6vw, 3.25rem);
  letter-spacing: 0.34em;
  text-indent: 0.34em; /* balances the trailing letter-space */
  text-transform: uppercase;
  color: var(--white);
  margin: 0 0 2.4rem;
  max-width: none;
}

.loader__track {
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.28);
  overflow: hidden;
}

.loader__bar {
  display: block;
  height: 100%;
  width: 100%;
  background-color: var(--white);
  transform: scaleX(0);
  transform-origin: left center;
}
</style>
