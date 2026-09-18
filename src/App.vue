<script setup>
import { ref, onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppLoader from './components/AppLoader.vue'
import SiteNav from './components/SiteNav.vue'
import SiteFooter from './components/SiteFooter.vue'

const route = useRoute()

// The loader only runs on a fresh page load, not on route changes.
const loading = ref(true)

const onLoaderFinished = () => {
  loading.value = false
  document.body.style.removeProperty('overflow')
}

onMounted(() => {
  // Hold the page still while the loader is up.
  document.body.style.overflow = 'hidden'
})
</script>

<template>
  <AppLoader v-if="loading" @finished="onLoaderFinished" />

  <div class="site" :class="{ 'is-revealed': !loading }">
    <SiteNav />

    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
/* The site fades up as the loader fades out. */
.site {
  opacity: 0;
  transition: opacity 0.9s var(--ease);
}

.site.is-revealed {
  opacity: 1;
}

/* Quiet cross-fade between routes */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s var(--ease);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>