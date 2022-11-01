<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
</script>
<template>
  <main class="landscape:hidden">
    <div v-if="user">
      <h1 class="text-3xl font-black text-white">Fubon Demo</h1>
      <p class="mt-4">Welcome to the Fubon demo area.</p>
      <p class="mt-4">
        The demos are separated by type. Nuxt-specific tutorials have their own
        live Nuxt site demo, while other components are in an Astro app!
      </p>
    </div>

    <div v-else >
      Hello
    </div>
   
    <div class="flex gap-4 mt-8">
      <NuxtLink
        to="/login"
        class="px-4 py-2 rounded bg-charcoal-600 hover:bg-charcoal-500"
        >Nuxt demo</NuxtLink
      >
    </div>
  </main>
</template>
