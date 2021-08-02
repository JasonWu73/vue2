<template>
  <div class="detail">
    <div class="description">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p class="paragraph">
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <ul class="list">
        <li class="list__item">Close to the beach</li>
        <li class="list__item">Breakfast included</li>
        <li class="list__item">Free airport shuttle</li>
        <li class="list__item">Free wifi in all rooms</li>
        <li class="list__item">Air conditioning and heating</li>
        <li class="list__item">Pets allowed</li>
        <li class="list__item">We speak all languages</li>
        <li class="list__item">Perfect for families</li>
      </ul>
      <div class="recommend">
        <p class="recommend__count">
          Lucy and 3 other friends recommend this hotel.
        </p>
        <div class="recommend__friends">
          <img src="../../assets/img/user-3.jpg" alt="" class="recommend__photo">
          <img src="../../assets/img/user-4.jpg" alt="" class="recommend__photo">
          <img src="../../assets/img/user-5.jpg" alt="" class="recommend__photo">
          <img src="../../assets/img/user-6.jpg" alt="" class="recommend__photo">
        </div>
      </div>
    </div>

    <div class="user-reviews">
      <figure class="review">
        <blockquote class="review__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
        </blockquote>
        <figcaption class="review__user">
          <img src="../../assets/img/user-1.jpg" alt="" class="review__photo">
          <div class="review__user-box">
            <p class="review__user-name">Nick Smith</p>
            <p class="review__user-date">Feb 23rd, 2007</p>
          </div>
          <div class="review__rating">7.8</div>
        </figcaption>
      </figure>

      <figure class="review">
        <blockquote class="review__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
        </blockquote>
        <figcaption class="review__user">
          <img src="../../assets/img/user-2.jpg" alt="" class="review__photo">
          <div class="review__user-box">
            <p class="review__user-name">Mary Thomas</p>
            <p class="review__user-date">Sept 13th, 2017</p>
          </div>
          <div class="review__rating">9.3</div>
        </figcaption>
      </figure>

      <button class="btn-inline">Show all <span>→</span></button>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style lang="scss" scoped>
  .detail {
    font-size: 1.4rem;
    display: flex;
    padding: 4.5rem;
    background-color: $color-grey-light-1;
    border-bottom: $line;

    @media only screen and (max-width: $bp-medium) {
      padding: 3rem;
    }

    @media only screen and (max-width: $bp-small) {
      flex-direction: column;
    }
  }

  .description {
    background-color: white;
    box-shadow: $shadow-light;
    padding: 3rem;
    flex: 0 0 60%;
    margin-right: 4.5rem;

    @media only screen and (max-width: $bp-medium) {
      padding: 2rem;
      margin-right: 3rem;
    }

    @media only screen and (max-width: $bp-small) {
      margin-right: 0;
      margin-bottom: 3rem;
    }
  }

  .paragraph:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  .user-reviews {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list {
    list-style: none;
    margin: 3rem 0;
    padding: 3rem 0;
    border-top: $line;
    border-bottom: $line;

    display: flex;
    flex-wrap: wrap;

    &__item {
      flex: 0 0 50%;
      margin-bottom: .7rem;

      &::before {
        content: "";
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-right: .7rem;

        // Old browsers
        background-image: url("../../assets/img/chevron-thin-right.svg");
        background-size: cover;
        //filter: invert(31%) sepia(33%) saturate(3587%) hue-rotate(316deg) brightness(94%) contrast(102%);

        // Newer browsers - masks
        @supports (-webkit-mask-image: url()) or (mask-image: url()) {
          background-color: $color-primary;
          mask-image: url("../../assets/img/chevron-thin-right.svg");
          mask-size: cover;
          background-image: none;
        }
      }
    }
  }

  .recommend {
    font-size: 1.3rem;
    color: $color-grey-dark-3;

    display: flex;
    align-items: center;

    &__count {
      margin-right: auto;
    }

    &__friends {
      display: flex;
    }

    &__photo {
      box-sizing: content-box;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 3px solid white;

      &:not(:last-of-type) {
        margin-right: -1.5rem;
      }
    }
  }

  .review {
    background-color: white;
    box-shadow: $shadow-light;
    padding: 3rem;
    margin-bottom: 3.5rem;
    position: relative;
    overflow: hidden;

    @media only screen and (max-width: $bp-medium) {
      padding: 2rem;
      margin-bottom: 3rem;
    }

  &__text {
    margin-bottom: 2rem;
    position: relative;
    z-index: 10;
  }

  &__user {
     display: flex;
     align-items: center;
   }

  &__photo {
     width: 4.5rem;
     height: 4.5rem;
     border-radius: 50%;
   }

  &__user-box {
     margin-left: 1.5rem;
     margin-right: auto;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: flex-start;
   }

  &__user-name {
     font-size: 1.1rem;
     font-weight: 600;
     text-transform: uppercase;
     margin-bottom: .4rem;
   }

  &__user-date {
     font-size: 1rem;
     color: $color-grey-dark-3;
   }

  &__rating {
     font-size: 2.2rem;
     color: $color-primary;
     font-weight: 300;
   }

  &::before {
     content: "“";
     position: absolute;
     top: -1.75rem;
     left: -2.5rem;
     line-height: 1;
     font-size: 20rem;
     color: $color-grey-light-2;
     font-family: sans-serif;
     z-index: 1;
   }
  }
</style>
