<template>
  <article class="wrapper">
    <figure :style="{ backgroundImage: `url(${url})` }" class="tile">
      <figcaption class="desc">{{time}}</figcaption>
    </figure>
    <header class="title">{{ title }}</header>
  </article>
</template>

<script>
import { computed } from '@vue/reactivity';

export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const url = computed(()=>{
      return require("@/assets/images/" + props.src);
    });
    const time = computed(()=>{
      let t1 = Math.floor(Math.random() * 60) ;
      let t2 = Math.floor(Math.random() * 60) ;


      t1 = t1 <=9 ? '0'+t1 : t1;
      t2 = t2 <=9 ? '0'+t2 : t2;

      return t1+':'+t2;
    })

    const con = [
        'Two girls', 'Old guy', 'Sweet sixteen', 'Good boi', 'MILF', 'Innocent white bitch', 'My stepsister', 'Mailman',
        'Twin sisters', 'Black guy', 'Midget', 'Sleeping sister', 'Hot amateur', 'Gamer girl', 'Fake priest', 'Streamer'
    ];
    const con2 = [
        'hard fucks', 'is going wild with', 'licks off', 'is powerfisting', 'shags', 'gets it on with', 'bonks', 'bangs', 'titty twists',
        'puts his big black cock in', 'cums on'
    ];
    const con3 = ['on', 'over', 'for', 'while', 'next to', 'in']
    const con4 = ['fake taxi', 'prom night', 'midgets', 'public', 'the shower', 'sleeping sister', 'dad`s car', 'one cup', 'internet' ]

    const title = computed(() => {
      return randomItem(con) +' '+ randomItem(con2)+' ' + randomItem(con).toLowerCase()+' '  +randomItem(con3)+' ' +randomItem(con4);
    });
    function randomItem(items) { return items[Math.floor(Math.random() * items.length)]; }

    return {
      url,
      title,
      time
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  @apply w-full md:w-1/3 p-3 border-red-500 border-2;
}
.tile {
  height: 320px;
  @apply w-full bg-cover bg-no-repeat bg-center relative;
}
.title {
  @apply font-bold mt-2;
}
.desc {
  @apply absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-3 text-right;
}
</style>
