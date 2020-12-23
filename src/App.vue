<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  @apply w-full flex flex-wrap;
}
body {
  @apply bg-black text-gray-200 flex flex-wrap;
}
main {
  @apply w-full md:w-4/5;
}
</style>
