<script setup>
import { ref } from 'vue'
import LinkCard from '@/components/LinkCard.vue';

const profile = ref({
  name: 'Jacqueline Malacara Ortega',
  slogan: 'Program Developer and Student',
  image: 'https://imgur.com/BNuS0Vo.png',
});
</script>

<template>
  <main class="flex min-h-screen flex-col items-center px-4 py-8">
    <!-- Profile Header -->
    <div class="mb-8 flex flex-col items-center text-center">
      <div class="h-44 w-44 overflow-hidden rounded-full border-4 border-blue-400 shadow-lg shadow-blue-500/20">
        <img 
          :src="profile.image" 
          :alt="profile.name"
          class="h-full w-full object cover"
        />
      </div>  
      <h1 class="text-2xl font-bold mt-6 text-white sm:text-3xl">{{ profile.name }}</h1>
      <p class="max-w-xs text-gray-500 sm:text-lg">{{ profile.slogan }}</p>
    </div>

    <!-- Link List -->
    <div class="flex w-full max-w-md flex-col gap-4">
      <LinkCard 
        v-for="x of [1, 2, 3]"
        :key="x"
      />
    </div>

    <!-- Navigate to Info -->
     <RouterLink to="/info" class="mt-8 text-sm text-gray-400 underline-offset-4 hover:underline hover:text-purple-600 hover:underline transition-colors duration-200">About me ^.^</RouterLink>
  </main>
</template>
