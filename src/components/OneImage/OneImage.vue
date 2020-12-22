<template>
  <div>
    {{src}}
  <img :src="src" alt=""/>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';

export default {
  props: {
    src: {
      type: String,
    },
  },
  setup() {
    const images = ref([]);
    const con = [
        'Two girls', 'Old guy', 'Sweet sixteen', 'Good boi', 'MILF', 'Innocent white bitch', 'My stepsister', 'Mailman',
        'Twin sisters', 'Black guy', 'Midget', 'Sleeping sister', 'Hot amateur',
    ];
    const con2 = [
        'hard fucks', 'is going wild with', 'licks', 'smashes', 'shags', 'gets it on with', 'bonks', 'bangs', 'titty twists'
    ];
    const con3 = ['on', 'over', 'for', 'while', 'next to', 'in']
    const con4 = ['fake taxi', 'prom night', 'midgets', 'public', 'the shower', 'sleeping sister', 'dad`s car', 'one cup' ]

    const title = computed(() => {
      return randomItem(con) +' '+ randomItem(con2)+' ' + randomItem(con).toLowerCase()+' '  +randomItem(con3)+' ' +randomItem(con4);
    });
    function randomItem(items) { return items[Math.floor(Math.random() * items.length)]; }
    return {
      images,
      title
    }
  }
}
</script>

<style lang="scss">
.images {
  @apply block;
}
</style>
