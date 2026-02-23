<script setup>
import { ref } from 'vue';

const bio = ref({
  name: 'Jacqueline Malacara Ortega',
  image: 'https://imgur.com/BNuS0Vo.png',
  about: `I'm a passionate program developer and student with a love for creating innovative solutions. With experience building modern web applications, I enjoy tackling complex problems and continuously learning new technologies.`,
  skills: ['Vue.js', 'React', 'Typescript', 'Node.js', 'Tailwind CSS'],
  email: 'jmalaca1@stu.southtexascollege.edu',
  location: 'Dallas, TX',

})
</script>

<template>
  <main class="flex min-h-screen flex-col items-center px-4 py-8 sm:py-12">
    <RouterLink
      to="/"
      class="my-8 self-start text-sm text-gray-400 underline-offset-4 transition-colors duration-200 hover:text-purple-600 hover:underline"
    >
      ^.^ Back to Links
    </RouterLink>

  <!-- Profile Card -->
  <div 
    class="rounded-2xl w-full max-w-lg border-gray-700 bg-purple-300 p-6 shadow-xl shadow-purple-500/50 sm:p-8"
  >
    <!-- Header Card -->
    <div class="mb-6 flex flex-col items-center text-center sm:flex-row sm:text-left"> 
      <div class="mb-4 h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-blue-400 sm:mb-0 sm:mr-6">
        <img
          :src="bio.image"
          :alt="bio.name"
          class="h-full w-full object-cover"
      </div>
      <div>
        <h1 class="mb-1 font-display mb-1 text-xl font-bold text-white">{{ bio.name }}</h1>
        <p class="text-sm text-gray-500">🌎 {{ bio.location }}</p>
      </div>
    </div>

    <!-- About Section -->
     <div class="mb-6">
      <h2 class="mb=3 text-lg font-semibold text-white">About</h2>
      <p class="leading-relaxed text-gray-500">❣️ {{ bio.about }}</p>
     </div>

    <!-- Skills Section -->
     <div class="mb-6">
      <h2 class="mb-3 text-lg font-semibold text-white">Skills</h2>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in bio.skills" :key="skill" class="bg-pink-400/50 px-3 py-1 text-sm text-pink-600 rounded-full">{{ skill }}</span>
        </div>
     </div>

    <!-- Contact Section -->
     <div>
      <h2 class="mb-3 text-lg font-semibold text-white">Get in Touch</h2>
      <a :href="`mailto:${bio.email}`" 
      class="text-blue-400 hover:underline h-5 w-5 px-6 py-3 font-medium text-white shadow-lg shadow-purple-700/50 transition-all duration-200 hover:scale-105 hover:bg-pink-400 hover:shadow-xl hover:shadow-pink-500">📧 Send Email</a>

     </div>
  </div>
  </main>
</template>
