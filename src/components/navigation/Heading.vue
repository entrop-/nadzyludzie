<template>
  <div class="top">
    <h1><i class="material-icons">run_circle</i><span class="font-bold">Nadzy</span><span class="italic">ludzie</span></h1>
  </div>

</template>

<script>

</script>
<style lang="scss" scoped>
.top {
  @apply w-full flex flex-row p-3;
}
h1 {
  font-size: 3rem;
  line-height: 3rem;
  @apply text-pink-300 uppercase border-b-2 border-pink-300 w-full pb-5 mb-5;
  i {
    font-size: 2.7rem;
    top: 4px;
    position: relative;
  }
}
</style>
