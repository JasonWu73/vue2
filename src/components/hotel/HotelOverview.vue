<template>
  <div class="overview">
    <div class="overview__heading">
      Hotel Las Palmas
    </div>
    <div class="overview__stars">
      <img src="../../assets/img/star.svg" alt="" class="overview__icon-star">
      <img src="../../assets/img/star.svg" alt="" class="overview__icon-star">
      <img src="../../assets/img/star.svg" alt="" class="overview__icon-star">
      <img src="../../assets/img/star.svg" alt="" class="overview__icon-star">
      <img src="../../assets/img/star.svg" alt="" class="overview__icon-star">
    </div>

    <div class="overview__location">
      <img src="../../assets/img/location-pin.svg" alt="" class="overview__icon-location">
      <button class="btn-inline">Albufeira, Portugal</button>
    </div>

    <div class="overview__rating">
      <div class="overview__rating-average">8.6</div>
      <div class="overview__rating-count">429 votes</div>
    </div>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="scss" scoped>
  .overview {
    border-bottom: $line;

    display: flex;
    align-items: center;

    &__heading {
      font-size: 2.25rem;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 1.5rem 3rem;

      @media only screen and (max-width: $bp-small) {
        font-size: 1.8rem;
        padding: 1.25rem 2rem;
      }
    }

    &__stars {
      margin-right: auto;

      display: flex;
    }

    &__icon-star,
    &__icon-location {
      width: 1.75rem;
      height: 1.75rem;
      filter: invert(30%) sepia(38%) saturate(3739%) hue-rotate(320deg) brightness(93%) contrast(98%);
    }

    &__location {
      font-size: 1.2rem;

      display: flex;
      align-items: center;
    }

    &__icon-location {
      margin-right: .5rem;
    }

    &__rating {
      background-color: $color-primary;
      color: white;
      margin-left: 3rem;
      padding: 0 2.25rem;
      align-self: stretch;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__rating-average {
      font-size: 2.25rem;
      font-weight: 300;
      margin-bottom: -3px;

      @media only screen and (max-width: $bp-small) {
        font-size: 1.8rem;
      }
    }

    &__rating-count {
      font-size: .8rem;
      text-transform: uppercase;

      @media only screen and (max-width: $bp-small) {
        font-size: .5rem;
      }
    }
  }
</style>
