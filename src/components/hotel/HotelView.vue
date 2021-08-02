<template>
  <main class="hotel-view">
    <div class="gallery">
      <figure class="gallery__item">
        <img src="../../assets/img/hotel-1.jpg" alt="" class="gallery__photo">
      </figure>
      <figure class="gallery__item">
        <img src="../../assets/img/hotel-2.jpg" alt="" class="gallery__photo">
      </figure>
      <figure class="gallery__item">
        <img src="../../assets/img/hotel-3.jpg" alt="" class="gallery__photo">
      </figure>
    </div>

    <the-overview></the-overview>
    <the-detail></the-detail>
    <call-to-action></call-to-action>
  </main>
</template>

<script>
  import TheOverview from '@/components/hotel/HotelOverview.vue';
  import TheDetail from '@/components/hotel/HotelDetail.vue';
  import CallToAction from '@/components/hotel/CallToAction.vue';

  export default {
    components: { TheDetail, TheOverview, CallToAction }
  };
</script>

<style lang="scss" scoped>
  .hotel-view {
    flex: 1;
  }

  .gallery {
    display: flex;

    &__photo {
      width: 100%;
      display: block;
    }
  }
</style>
