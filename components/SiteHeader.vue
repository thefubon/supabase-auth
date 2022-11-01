<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
</script>

<template>
  <header class="container flex justify-between items-center w-full h-16 py-8">
    <a href="/" class="flex items-center hover:opacity-80">
      <img src="/logo-dark.svg" class="h-[24px] mr-2" />
      <span class="text-lg font-extrabold text-white"> Fubon</span>
      <span class="mr-2 text-lg font-extrabold text-green">Auth</span>
    </a>
    <nav class="ml-4 text-sm font-medium">
      <NuxtLink to="/blog" class="px-2 py-1 mr-1 text-sm font-medium rounded hover:bg-charcoal-600 hover:text-white">Блог</NuxtLink>
    </nav>
    <div class="flex gap-2 items-center">
      <div v-if="user">
        Привет <span class="flex w-6 h-6 rounded-full bg-white justify-center items-center uppercase font-bold text-black">{{ user?.email[0] }}</span>
      </div>

      <button @click="client.auth.signOut()" class="px-2 py-1 text-sm font-medium rounded hover:bg-charcoal-600">Выйти</button>
    </div>
    
  </header>
</template>
