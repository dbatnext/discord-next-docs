<template>
  <button 
    class="scroll-progress-btn" 
    :class="{ 'is-visible': isVisible }" 
    @click="scrollToTop"
    aria-label="Scroll to top"
  >
    <svg class="progress-ring" width="44" height="44">
      <circle
        class="progress-ring__background"
        stroke="var(--vp-c-border)"
        stroke-width="3"
        fill="transparent"
        r="20"
        cx="22"
        cy="22"
      />
      <circle
        class="progress-ring__circle"
        stroke="var(--vp-c-brand-1)"
        stroke-width="3"
        fill="transparent"
        r="20"
        cx="22"
        cy="22"
        :style="{ strokeDasharray: circumference, strokeDashoffset: dashoffset }"
      />
    </svg>
    <div class="arrow-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </div>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const isVisible = ref(false);
const scrollProgress = ref(0);
const radius = 20;
const circumference = radius * 2 * Math.PI;

const dashoffset = computed(() => {
  return circumference - (scrollProgress.value / 100) * circumference;
});

const calculateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  if (docHeight > 0) {
    scrollProgress.value = (scrollTop / docHeight) * 100;
  } else {
    scrollProgress.value = 0;
  }

  // Show button only when user has scrolled down a bit (e.g., 100px)
  isVisible.value = scrollTop > 100;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', calculateProgress, { passive: true });
  window.addEventListener('resize', calculateProgress, { passive: true });
  calculateProgress();
});

onUnmounted(() => {
  window.removeEventListener('scroll', calculateProgress);
  window.removeEventListener('resize', calculateProgress);
});
</script>

<style scoped>
.scroll-progress-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--vp-c-bg-elv);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.scroll-progress-btn.is-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.scroll-progress-btn:hover {
  box-shadow: 0 6px 16px rgba(91, 105, 246, 0.3);
}

.progress-ring {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg); /* Start at 12 o'clock */
}

.progress-ring__circle {
  transition: stroke-dashoffset 0.1s linear;
  stroke-linecap: round;
}

.arrow-icon {
  position: absolute;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease, transform 0.3s ease;
}

.scroll-progress-btn:hover .arrow-icon {
  color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .scroll-progress-btn {
    bottom: 1.5rem;
    right: 1.5rem;
  }
}
</style>
