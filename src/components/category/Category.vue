<template>
  <heading />
  <navigation />
  <h1>{{category}}</h1>
  <one-image v-for="image in images" :key="image" :src="image.src" class="images"></one-image>
</template>

<script>
import oneImage     from '@/components/OneImage/OneImage';
import navigation from "@/components/navigation/Nav";
import heading from "@/components/navigation/Heading";
import { useRoute } from 'vue-router';
import fileList     from '@/assets/images';
import { ref }      from '@vue/reactivity';

export default {
  setup() {
    const route = useRoute();
    const category = route.name.toLowerCase();
    const fileNames = ref(fileList[category]);
    const images = fileNames.value.map((name) => {
      return {src: category +'/'+ name};
      }
    )

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
