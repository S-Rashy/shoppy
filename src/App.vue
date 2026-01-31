<script>

export default {
  name: 'App',
   data() {
    return {
      isMobile: false
    }
  },
  methods: {
    checkScreen() {
      this.isMobile = window.innerWidth < 1024
    }
  },
   mounted() {
    this.checkScreen()
    window.addEventListener('resize', this.checkScreen)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen)
  }
 
};

</script>

<template>
    <div id="app">
    <div v-if="isMobile" class="desktop-only-overlay">
      <div class="overlay-card">
        <h2>Desktop only!!!</h2>
        <p>
          This demo is optimized for desktop screens.
          Please open it on a laptop or desktop.
        </p>
      </div>
    </div>
  <RouterView v-else />
    </div>

</template>


<style scoped>
.desktop-only-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.overlay-card {
  background: #ffffff;
  padding: 24px 20px;
  border-radius: 14px;
  text-align: center;
  max-width: 320px;
}

.overlay-card h2 {
  margin-bottom: 8px;
}

.overlay-card p {
  font-size: 14px;
  line-height: 1.4;
}
</style>