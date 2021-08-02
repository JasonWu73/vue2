<template>
  <div class="cta">
    <h2 class="cta__book-now">
      Good News! We have 4 free rooms for your selected dates!
    </h2>
    <button class="btn">
      <span class="btn__visible">Book now</span>
      <span class="btn__invisible">Only 4 rooms left</span>
    </button>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="scss" scoped>
  .cta {
    padding: 3.5rem 0;
    text-align: center;

    @media only screen and (max-width: $bp-medium) {
      padding: 2.5rem 0;
    }

    &__book-now {
      font-size: 2rem;
      font-weight: 300;
      text-transform: uppercase;
      margin-bottom: 2.5rem;
    }
  }
</style>
