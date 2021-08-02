<template>
  <div class="content">
    <the-sidebar></the-sidebar>
    <hotel-view></hotel-view>
  </div>
</template>

<script>
  import TheSidebar from '@/components/layout/TheSidebar.vue';
  import HotelView from '@/components/hotel/HotelView.vue';

  export default {
    name: 'TheContent',
    components: { TheSidebar, HotelView }
  };
</script>

<style lang="scss" scoped>
  .content {
    display: flex;

    @media only screen and (max-width: $bp-medium) {
      flex-direction: column;
    }
  }
</style>
