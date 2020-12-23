<template>
  <nav :class="showme ? 'fixed' : 'hidden'">
    <div class="close"></div>
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
<script>
import { computed } from '@vue/reactivity';

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const showme = computed(() => { return props.show });
    return {
      showme
    }
  }
}
</script>
<style scoped>
nav {
  @apply md:w-1/5 px-5 md:block z-10 bg-black w-full;
}
ul li {
  @apply border-b border-gray-600 py-3;
}
a {
  @apply block w-full;
}
</style>
