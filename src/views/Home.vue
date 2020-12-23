<template>
  <h1><i class="material-icons">run_circle</i><span class="font-bold">Nadzy</span><span class="italic">ludzie</span></h1>
  <div class="login">
    <p><strong>Uwaga! Na tej stronie znajdują się treści wyłącznie dla pełnoletnich!</strong></p>
    <p>Udowodnij, że ukończyłeś 18. rok życia, wpisując jedno z trudnych słów znane tylko dorosłym:</p>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="password">
      <button type="submit" class="text-pink-300"><i class="material-icons">send</i></button>
    </form>
    <p class="text-red-500 text-sm" v-if="showError">To nie jest odpowiednio dorosłe słowo.</p>
  </div>
</template>

<script>
import heading    from "@/components/navigation/Heading";
import { ref }    from '@vue/reactivity';
import router     from '@/router';

export default {
  beforeRouteEnter(to, from, next) {


    next();
  },
  setup() {
    const password = ref(null);
    let showError = ref(false);
    const words = ['ekonomia', 'polityka', 'odpowiedzialność', 'podatki']
    const onSubmit = function () {
      if (words.includes(password.value)) {
        document.cookie = "adult=true";
        router.push({name: 'Amateur'})
      } else {
        showError.value = true;
      }
    }
    return {
      password,
      onSubmit,
      heading,
      showError
    }
  }
}
</script>
<style lang="scss" scoped>

.login {
  @screen md {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  @apply md:absolute w-full md:w-1/4 h-auto border-8 border-pink-300 p-5 mt-8 md:mt-0;
}
p {
  @apply mb-3 text-xl;
}
h1 {
  font-size: 3rem;
  line-height: 3rem;
  @apply text-pink-300 uppercase  w-full m-5 text-center;
  i {
    font-size: 2.7rem;
    top: 4px;
    position: relative;
  }
}
form {
  @apply relative w-full mt-5;
}
input {
  @apply w-full py-1 px-3 bg-gray-600 border-b-2 border-pink-300;
}
button {
  top: 4px;
  right: 5px;
  @apply absolute;
}
</style>
