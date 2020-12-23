<template>
  <div class="top">
    <div class="top__container">
      <h1><i class="material-icons">run_circle</i><span class="font-bold">Nadzy</span><span class="italic">ludzie</span></h1>
      <form class="search" @submit.prevent="onSearch">
        <div class="relative">
          <input type="text" placeholder="Szukaj seksownych wideo..." v-model="kink" class="focus:appearance-none">
          <button type="submit" class="text-pink-300"><i class="material-icons">search</i></button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import router  from '@/router';
import { ref } from '@vue/reactivity';

export default {
  setup() {
    const kink = ref(null);
    const onSearch = function() {
      router.push({name: 'Search', params: { 'kink': kink.value, 'aa': 'bb' }})
    }

    return {
      onSearch,
      kink
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  box-sizing: border-box;
  @apply w-full py-3 px-5 md:mb-5 mb-0;
  &__container {
    @apply md:border-b-2 border-pink-300 w-full md:flex flex-row;
  }
}
h1 {
  font-size: 2rem;
  @screen md {
    font-size: 3rem;
  }
  line-height: 3rem;
  @apply text-pink-300 uppercase w-full mb-2 md:mb-5 whitespace-nowrap;
  i {
    font-size: 2rem;
    @screen md {
      font-size: 2.7rem;
    }
    top: 4px;
    position: relative;
  }
}
form {
  @apply relative w-full md:w-1/4 pt-4;
}
input {
  @apply w-full py-1 px-3 bg-gray-600 border-b-2 border-pink-300;
}
button {
  top: 4px;
  right: 5px;
  @apply absolute ;
}
</style>
