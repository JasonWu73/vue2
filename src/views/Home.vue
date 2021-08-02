<template>
  <div class="container">
    <the-header></the-header>
    <the-content></the-content>
  </div>
</template>

<script>
  import TheHeader from '@/components/layout/TheHeader.vue';
  import TheContent from '@/components/layout/TheContent.vue';

  export default {
    components: { TheHeader, TheContent }
  };
</script>

<style lang="scss" scoped>
  .container {
    max-width: 120rem;
    margin: 8rem auto;
    background-color: $color-grey-light-1;
    box-shadow: $shadow-dark;

    min-height: 50rem;

    @media only screen and (max-width: $bp-largest) {
      margin: 0;
      max-width: 100%;
    }
  }
</style>
