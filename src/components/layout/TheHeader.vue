<template>
  <header class="header">
    <img src="../../assets/img/logo.png" alt="trillo logo" class="logo">

    <form class="search">
      <input type="text" class="search__input" placeholder="Search hotels">
      <button class="search__button">
        <img src="../../assets/img/magnifying-glass.svg" alt="" class="search__icon">
      </button>
    </form>

    <nav class="user-nav">
      <div class="user-nav__icon-box">
        <img src="../../assets/img/bookmark.svg" alt="" class="user-nav__icon">
        <span class="user-nav__notification">7</span>
      </div>
      <div class="user-nav__icon-box">
        <img src="../../assets/img/chat.svg" alt="" class="user-nav__icon">
        <span class="user-nav__notification">13</span>
      </div>
      <div class="user-nav__user">
        <img src="../../assets/img/user.jpg" alt="User photo" class="user-nav__user-photo">
        <span class="user-nav__user-name">Jonas</span>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .header {
    font-size: 1.4rem;
    height: 7rem;
    background-color: white;
    border-bottom: 1px solid $color-grey-light-2;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: $bp-smallest) {
      flex-wrap: wrap;
      align-content: space-around;
      height: 11rem;
    }
  }

  .logo {
    height: 3.25rem;
    margin-left: 2rem;
  }

  .search {
    flex: 0 0 40%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: $bp-smallest) {
      order: 1;
      flex: 0 0 100%;
      background-color: $color-grey-light-2;
    }

    &__input {
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: $color-grey-light-2;
      border: none;
      padding: .7rem 2rem;
      border-radius: 10rem;
      width: 90%;
      transition: all .2s;
      margin-right: -3.25rem;

      &:focus {
        outline: none;
        width: 100%;
        background-color: $color-grey-light-3;
      }

      @mixin placeholder {
        font-weight: 100;
        color: $color-grey-light-4;
      }

      &::-webkit-input-placeholder {
        @include placeholder;
      }
      &::-moz-placeholder {
        @include placeholder;
      }
      &:-ms-input-placeholder {
        @include placeholder;
      }
    }

    &__input:focus + &__button {
      background-color: $color-grey-light-3;
    }

    &__button {
      border: none;
      background-color: $color-grey-light-2;

      &:focus {
        outline: none;
      }

      &:active {
        transform: translateY(.2rem);
      }
    }

    &__icon {
      height: 2rem;
      width: 2rem;
      filter: invert(77%) sepia(0%) saturate(7270%) hue-rotate(165deg) brightness(82%) contrast(74%);
    }
  }

  .user-nav {
    align-self: stretch;

    display: flex;
    align-items: center;

    & > * {
      padding: 0 2rem;
      cursor: pointer;
      height: 100%;

      display: flex;
      align-items: center;
    }

    & > *:hover {
      background-color: $color-grey-light-2;
    }

    &__icon-box {
      position: relative;
    }

    &__icon {
      height: 2.25rem;
      width: 2.25rem;
      filter: invert(77%) sepia(0%) saturate(7270%) hue-rotate(165deg) brightness(82%) contrast(74%);
    }

    &__notification {
      font-size: .8rem;
      height: 1.75rem;
      width: 1.75rem;
      border-radius: 50%;
      background-color: $color-primary;
      color: white;
      position: absolute;
      top: 1.5rem;
      right: 1.1rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__user {

    }

    &__user-photo {
      height: 3.75rem;
      border-radius: 50%;
      margin-right: 1rem;
    }

    &__user-name {

    }
  }
</style>
