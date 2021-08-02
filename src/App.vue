<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Home from '@/views/Home.vue';

  export default {
    components: { Home }
  };
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px，10px / 16px = 62.5%

    @media only screen and (max-width: $bp-large) {
      font-size: 50%;
    }
  }

  body {
    // 从 Vue CLI 中拷贝
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-weight: 400;
    line-height: 1.6;
    color: $color-grey-dark-2;
    background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
    background-size: cover;
    background-repeat: no-repeat;

    min-height: 100vh;
  }
</style>
