<template>
  <nav>
    <ul>

      <li><router-link :to="{ name: 'Furry' }">Furry</router-link></li>
<!--      //sojuz-->
      <li><router-link :to="{ name: 'Lesbian' }">Lesbian</router-link></li>
<!--      //sojuz x iga-->
      <li><router-link :to="{ name: 'Gay' }">Gay</router-link></li>
<!--      //sojuz x tomaszek-->
      <li><router-link :to="{ name: 'Amateur' }">Amateur</router-link></li>
<!--      //sojuz x tomaszek-->
      <li><router-link :to="{ name: 'Gangbang' }">Gang bang</router-link></li>
<!--      //sojuz x tomaszek x iga-->
      <li><router-link :to="{ name: 'Natural' }">Natural</router-link></li>
      <!--      //wycieczki-->
<!--      <li><router-link :to="{ name: 'Hentai' }">Hentai</router-link></li>-->
<!--      //rysuneczki igi-->
    </ul>
  </nav>
</template>
<style scoped>
nav {
  @apply w-1/5 px-5;
}
ul li {
  @apply border-b border-gray-600 py-3;
}
a {
  @apply block w-full;
}
</style>
