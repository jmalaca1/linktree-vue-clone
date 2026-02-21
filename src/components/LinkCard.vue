<template>
  <a 
  href="#" 
  target="_blank" 
  rel="noopener noreferrer" 
  class="flex w-full items-center gap-4 rounded-xl border border-gray-700 bg-gray-300 p-4 shadow-md shadow-gray-500/50 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500 hover:shadow-blue-400/50 transition-all"
  >
  <!-- Icon Container -->
    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-pink-400 text-purple-600">
      <svg viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      class="h-6 w-6"
      >
      <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2"
      d="M12 20c-2.205-.48-9-4.24-9-11a5 5 0 0 1 9-3a5 5 0 0 1 9 3c0 6.76-6.795 10.52-9 11"
       />
      </svg>
    </div>

    <!-- Text Content -->
    <div class="min-w-0 flex-1">
      <h3 class="font-display truncate font-semibold text-gray-600">Link Title</h3>
      <p class="truncate text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>      
    </div>
  </a>
</template>