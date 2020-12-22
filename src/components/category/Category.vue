<template>
  <heading />
  <navigation />
  <main>
    <h2>Kategoria: <strong>{{category}}</strong></h2>
    <one-image v-for="image in images" :key="image" :src="image.src" class="images" />
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
