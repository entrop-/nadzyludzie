<template>
  <h1>Nadzy ludzie</h1>
  <navigation />
</template>

<script>
import navigation from "@/components/navigation/Nav";
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
      category
    }
  }
}
</script>
