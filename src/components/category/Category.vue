<template>
  <heading />
  <navigation />
  <main>
    <h2 v-if="!search">Kategoria: <strong>{{category}}</strong></h2>
    <h2 v-else>Wyniki dla: <strong>{{search}}</strong></h2>
    <one-image v-for="image in images" :key="image" :src="image.src" :search="search" class="images" />
  </main>
</template>

<script>
import oneImage     from '@/components/OneImage/OneImage';
import navigation from "@/components/navigation/Nav";
import heading from "@/components/navigation/Heading";
import { useRoute } from 'vue-router';
import fileList          from '@/assets/images';
import { computed } from '@vue/reactivity';

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

    return {
      oneImage,
      images,
      category,
      navigation,
      heading,
      search
    }
  }
}
</script>

<style lang="scss" scoped>
.images {
  @apply block;
}
h2 {
  @apply w-full block text-xl mb-5;
}
main {
  @apply flex flex-wrap p-3;
}
</style>
