<template>
  <h1>{{category}}</h1>
  <one-image v-for="image in images" :key="image" :src="image.src" class="images"></one-image>
</template>

<script>
import oneImage     from '@/components/OneImage/OneImage';
import { useRoute } from 'vue-router';
import fileList     from '@/assets/images';
import { ref }      from '@vue/reactivity';

export default {
  setup() {
    const route = useRoute();
    const category = route.name.toLowerCase();
    const imageDir = "/assets/images/" + category;
    const fileNames = ref(fileList[category]);
    const images = fileNames.value.map((name) => {
      return {src: imageDir +'/'+ name};
      }
    )

    return {
      oneImage,
      images,
      category
    }
  }
}
</script>

<style lang="scss">
.images {
  @apply block;
}
</style>
