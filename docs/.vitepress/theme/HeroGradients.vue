<template>
  <div class="hero-background">
    <div class="orb orb-blurple"></div>
    <div class="orb orb-golden"></div>
  </div>
</template>

<style scoped>
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
  animation: float 20s infinite ease-in-out alternate;
}

.orb-blurple {
  background: var(--vp-c-brand-1);
  width: 60vw;
  height: 60vw;
  max-width: 600px;
  max-height: 600px;
  top: -10%;
  left: -10%;
}

.orb-golden {
  background: var(--vp-c-brand-2);
  width: 50vw;
  height: 50vw;
  max-width: 500px;
  max-height: 500px;
  top: 40%;
  right: -10%;
  animation-delay: -10s;
  animation-direction: alternate-reverse;
}

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, 80px) scale(1.1); }
  66% { transform: translate(-30px, 40px) scale(0.95); }
  100% { transform: translate(20px, -30px) scale(1.05); }
}
</style>
