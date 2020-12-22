<template>
  <heading />
  <navigation />
</template>

<script>
import navigation from "@/components/navigation/Nav";
import heading from "@/components/navigation/Heading";
import category   from "@/components/category/Category";
import { ref }    from '@vue/reactivity';

export default {
  beforeRouteEnter(to, from, next) {


    next();
  },
  setup() {
    const name = ref(name);

    return {
      navigation,
      category,
      heading
    }
  }
}
</script>
<style>

body {
  @apply bg-black text-gray-200;
}
</style>
