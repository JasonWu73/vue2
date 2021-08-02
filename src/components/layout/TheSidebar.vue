<template>
  <nav class="sidebar">
    <ul class="side-nav">
      <li class="side-nav__item side-nav__item--active">
        <a href="#" class="side-nav__link">
          <img src="../../assets/img/home.svg" alt="" class="side-nav__icon">
          <span>Hotel</span>
        </a>
      </li>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <img src="../../assets/img/aircraft-take-off.svg" alt="" class="side-nav__icon">
          <span>Flight</span>
        </a>
      </li>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <img src="../../assets/img/key.svg" alt="" class="side-nav__icon">
          <span>Car rental</span>
        </a>
      </li>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <img src="../../assets/img/map.svg" alt="" class="side-nav__icon">
          <span>Tours</span>
        </a>
      </li>
    </ul>

    <div class="legal">
      &copy; 2017 by trillo. All rights reserved.
    </div>
  </nav>
</template>

<script>
  export default {

  };
</script>

<style lang="scss" scoped>
  .sidebar {
    background-color: $color-grey-dark-1;

    flex: 0 0 18%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .side-nav {
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;

    @media only screen and (max-width: $bp-medium) {
      display: flex;
      margin-top: 0;
    }

    &__item {
      position: relative;

      &:not(:last-child) {
        margin-bottom: .5rem;

        @media only screen and (max-width: $bp-medium) {
          margin-bottom: 0;
        }
      }

      @media only screen and (max-width: $bp-medium) {
        flex: 1;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background-color: $color-primary;
        transform: scaleY(0);
        //transform-origin: bottom;
        transition: transform .2s,
                    width .4s cubic-bezier(1,0,0,1) .2s,
                    background-color .1s;
      }

      &:hover::before,
      &--active::before {
        transform: scaleY(1);
        width: 100%;
      }

      &:active::before {
        background-color: $color-primary-light;
      }
    }

    &__link:link,
    &__link:visited {
      color: $color-grey-light-1;
      text-decoration: none;
      text-transform: uppercase;
      padding: 1.5rem 3rem;
      position: relative;
      z-index: 10;

      display: flex;
      align-items: center;

      @media only screen and (max-width: $bp-medium) {
        justify-content: center;
        padding: 2rem;
      }

      @media only screen and (max-width: $bp-small) {
        flex-direction: column;
        padding: 1rem;
      }
    }

    &__icon {
      width: 1.75rem;
      height: 1.75rem;
      margin-right: 2rem;
      filter: invert(100%) sepia(0%) saturate(7445%) hue-rotate(59deg) brightness(134%) contrast(95%);

      @media only screen and (max-width: $bp-small) {
        margin-right: 0;
        margin-bottom: .7rem;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  .legal {
    font-size: 1.2rem;
    color: $color-grey-light-4;
    text-align: center;
    padding: 2.5rem;

    @media only screen and (max-width: $bp-medium) {
      display: none;
    }
  }
</style>
