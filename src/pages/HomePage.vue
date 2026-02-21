<script>
import { ref } from 'vue'
import LinkCard from '@/components/LinkCard.vue';

const profile = ref({
  name: 'Jacqueline Malacara Ortega',
  description: 'Program Developer and Student',
  image: '"C:\\Users\\adan\\Downloads\\IMG_0024.jpg"',
});
</script>

<template>
  <main class="flex min-h-screen flex-col items-center px-4 py-8">
    <!--Profile Header-->
    <div>
      <img :src="profile.image" :alt="profile.name">
      <h1>{{ profile.name }}</h1>
      <p>{{ profile.description }}</p>
    </div>
  </main>
</template>
