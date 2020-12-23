<template>
  <article class="wrapper">
    <figure :style="{ backgroundImage: `url(${url})` }" class="tile">
      <figcaption class="desc">
        <span class="block leading-none"><i class="material-icons">play_arrow</i></span>
        <span class="block text-right ">{{time}}</span>
      </figcaption>
    </figure>
    <header class="title" v-html="title"></header>
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
    search: {
      type: String,
      default: '',
    }
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
    const con0 = ['Fake', 'Innocent', 'White', 'Black', 'Latino', 'Big titty', 'Basic', 'My', 'Beautiful', 'Amazing',
      'Hot', 'Slutty', 'Sleeping', 'Horny', 'Sexy', 'Polish', 'Naughty', 'Homeless', 'Wet', 'Teen', 'Hentai', 'Pregnant'];
    const con = [
        'girls', 'guy', 'sweet sixteen', 'good boi', 'MILF', 'bitch', 'stepsister', 'mailman',
        'twin sisters', 'midget', 'sister', 'amateur', 'gamer girl', 'priest', 'streamer', 'pizza delivery guy', 'senpai',
        'blonde', 'waifu', 'firefighter', 'girlfriend', 'treesome', 'wet hole', 'girl next door', 'babysitter', 'schoolgirl',
      'tomboy', 'virgin', 'nurse', 'slave', 'colege student', 'cock', 'police officer', 'pimp'

    ];
    const con2 = [
        'hard fucks', 'is going wild with', 'licks off', 'is fisting', 'shags', 'gets it on with', 'bonks', 'bangs', 'titty-twists',
        'puts his big black cock in', 'cums on', 'masturbates', 'wanks off', 'watches', 'gives massage to', 'begs for',
      'creampies', 'gently makes love to', 'is peeking on', 'tries anal for first time with', 'deepthroats', 'takes full load of'

  ];
    const con4 = ['in fake taxi', 'on prom night', 'with midgets', 'in public', 'in the shower', 'next to sleeping sister', 'in dad`s car',
      'and one cup', 'on the internet', 'for money', 'on valentine`s day', 'in church', 'in oil', 'in the pool', 'at the party',
        'in missionary position', 'for the glory of satan', 'during orgy', 'for job interview',
      'with dildo', 'in forest', 'in school', 'without protection', 'in latex', 'on webcam', '[UCENSORED]', '[DRASTIC]', '[LIVE]']

    const useSearch = (text) => {
      if (!props.search.length) return text;
      return Math.random() < 0.5 ? text : '<span class="text-pink-200">'+props.search+'</span>';
    }
    const title = computed(() => {
      return randomItem(con0) +' '
          + useSearch(randomItem(con))+' '
          + randomItem(con2)+' '
          + randomItem(con0).toLowerCase() +' '
          + useSearch(randomItem(con))+' '
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
  @apply w-full md:w-1/3 p-3 border-pink-300 border-2 mb-5 md:mb-0;
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
