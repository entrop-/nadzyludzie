<template>
  <article class="wrapper">
    <figure :style="{ backgroundImage: `url(${url})` }" class="tile">
      <figcaption class="desc">
        <span class="block leading-none"><i class="material-icons">play_arrow</i></span>
        <span class="block text-right ">{{time}}</span>
      </figcaption>
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
    const con0 = ['Fake', 'Innocent', 'White', 'Black', 'Latino', 'Big titty', 'Basic', 'My',
      'Hot', 'Slutty', 'Sleeping', 'Horny'];
    const con = [
        'girls', 'guy', 'sweet sixteen', 'good boi', 'MILF', 'bitch', 'stepsister', 'mailman',
        'twin sisters', 'midget', 'sister', 'amateur', 'gamer girl', 'priest', 'streamer', 'pizza guy', 'senpai'
    ];
    const con2 = [
        'hard fucks', 'is going wild with', 'licks off', 'is powerfisting', 'shags', 'gets it on with', 'bonks', 'bangs', 'titty twists',
        'puts his big black cock in', 'cums on', 'masturbates', 'wanks off'
    ];
    const con3 = ['on', 'for', 'next to', 'in']
    const con4 = ['fake taxi', 'prom night', 'midgets', 'public', 'the shower', 'sleeping sister', 'dad`s car',
      'one cup', 'internet', 'money', 'valentine`s day' ]

    const title = computed(() => {
      return randomItem(con0) +' '
          + randomItem(con)+' '
          + randomItem(con2)+' '
          + randomItem(con0).toLowerCase() +' '
          + randomItem(con)+' '
          + randomItem(con3)+' '
          + randomItem(con4);
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
  @apply w-full md:w-1/3 p-3 border-pink-300 border-2;
}
.tile {
  height: 280px;
  @apply w-full bg-cover bg-no-repeat bg-center relative;
}
.title {
  @apply font-bold mt-2;
}
.desc {
  @apply absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-3 flex flex-row justify-between;
}
</style>
