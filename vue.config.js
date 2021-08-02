module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/sass/variables.scss";
          @import "~@/sass/mixins.scss";
          @import "~@/sass/components.scss";
        `
      }
    }
  }
};
