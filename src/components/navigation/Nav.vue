<template>
  <nav :class="showme ? 'fixed' : 'hidden'">
    <ul>

      <li><router-link :to="{ name: 'Furry' }" @click="handleClick">Furry</router-link></li>
<!--      //sojuz-->
      <li><router-link :to="{ name: 'Lesbian' }" @click="handleClick" >Lesbian</router-link></li>
<!--      //sojuz x iga-->
      <li><router-link :to="{ name: 'Gay' }" @click="handleClick">Gay</router-link></li>
<!--      //sojuz x tomaszek-->
      <li><router-link :to="{ name: 'Amateur' }" @click="handleClick">Amateur</router-link></li>
<!--      //sojuz x tomaszek-->
      <li><router-link :to="{ name: 'Gangbang' }" @click="handleClick">Gang bang</router-link></li>
<!--      //sojuz x tomaszek x iga-->
      <li><router-link :to="{ name: 'Natural' }" @click="handleClick">Natural</router-link></li>
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
  setup(props, context) {
    const showme = computed(() => { return props.show });
    const handleClick = function() {
      context.emit('handle-click');
    }
    return {
      showme,
      handleClick
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
