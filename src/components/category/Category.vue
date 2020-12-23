<template>
  <heading />
  <navigation :show="show" @handleClick="closeMenu" />
  <main>
    <div class="container relative flex flex-no-wrap justify-between mb-5">
      <h2 v-if="!search">Kategoria: <strong>{{category}}</strong></h2>
      <h2 v-else>Wyniki dla: <strong>{{search}}</strong></h2>
      <button class="hamburger" @click.prevent="handleMenu"><i class="material-icons">menu</i></button>
      <button class="close" @click.prevent="handleMenu" v-if="show"><i class="material-icons">cancel</i></button>
    </div>
    <one-image v-for="image in images" :key="image" :src="image.src" :search="search" class="images" />
  </main>
</template>

<script>
import oneImage     from '@/components/OneImage/OneImage';
import navigation from "@/components/navigation/Nav";
import heading from "@/components/navigation/Heading";
import { useRoute } from 'vue-router';
import fileList          from '@/assets/images';
import { computed, ref } from '@vue/reactivity';

export default {
  beforeRouteEnter(to, from, next) {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('adult='))) {
      next();
    }else{
      next({name: 'Home'});
    }
  },
  setup() {
    const route = useRoute();
    const show = ref(false);
    const search = computed(()=> { return route.params.kink });
    const category = computed(()=> { return route.name.toLowerCase() });
    const fileNames = computed(()=> { return fileList[category.value] });
    const images = computed(()=> {
      if (category.value !== 'search') {
        return fileNames.value.map((name) => {
          return {src: category.value +'/'+ name};
        });
      } else {
        // random results
        const categories = ['gay', 'natural', 'lesbian', 'gangbang', 'amateur', 'furry'];
        let flat = []
        categories.map((cat) => {
          flat.push( ...fileList[cat].map((file)=>{
            return cat + '/' + file;
          }));
        })
        const shuffled = flat.sort(() => 0.5 - Math.random());

        return shuffled.slice(0, Math.floor(Math.random() * flat.length / 5)).map((name) => {
          return {src: name};
        });
      }

    });
    const handleMenu = function() {
        show.value = !show.value;
    }
    const closeMenu = function() {
      show.value= false;
    }
    return {
      oneImage,
      images,
      category,
      navigation,
      heading,
      search,
      show,
      handleMenu,
      closeMenu
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  @apply w-full block text-xl ;
}
main {
  @apply flex flex-wrap px-5 md:px-3;
}
.hamburger {
  @apply md:hidden text-pink-300 leading-none;
  i {
    font-size: 2rem;
  }
}
.close {
  @apply fixed z-20 top-0 right-0 mt-3 mr-5 text-pink-300;
  i {
    font-size: 2rem;
  }
}
</style>
