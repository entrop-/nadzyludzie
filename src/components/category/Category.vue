<template>
  <heading />
  <navigation />
  <h1>{{category}}</h1>
  <one-image v-for="image in images" :key="image" :src="image.src" class="images" />
</template>

<script>
import oneImage     from '@/components/OneImage/OneImage';
import navigation from "@/components/navigation/Nav";
import heading from "@/components/navigation/Heading";
import { useRoute } from 'vue-router';
import fileList          from '@/assets/images';
import { computed } from '@vue/reactivity';

export default {
  async beforeRouteEnter(to, from, next) {
    next();
  },
  setup() {
    const route = useRoute();
    const category = computed(()=> { return route.name.toLowerCase() });
    const fileNames = computed(()=> { return fileList[category.value] });
    const images = computed(()=> {
      return fileNames.value.map((name) => {
        return {src: category.value +'/'+ name};
      });
    });

    return {
      oneImage,
      images,
      category,
      navigation,
      heading
    }
  }
}
</script>

<style lang="scss">
.images {
  @apply block;
}
</style>
