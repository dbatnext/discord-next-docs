<template>
  <div class="badges-section">
    <a href="https://www.npmjs.com/package/djs-next" target="_blank" rel="noopener" class="badge badge-version">
      <img src="https://img.shields.io/npm/v/djs-next?style=flat-square&color=CB3837&logo=npm&logoColor=white&label=" alt="npm version" />
    </a>
    <a href="https://www.npmjs.com/package/djs-next" target="_blank" rel="noopener" class="badge badge-downloads">
      <img src="https://img.shields.io/npm/dt/djs-next?style=flat-square&color=gray&logo=npm&logoColor=white&label=total%20downloads" alt="npm total downloads" />
    </a>
    <a href="https://www.npmjs.com/package/djs-next" target="_blank" rel="noopener" class="badge badge-combined">
      <img src="https://img.shields.io/npm/dt/djs-next?style=flat-square&color=gray&logo=npm&logoColor=white&label=combined%20downloads" alt="combined total downloads" />
    </a>
  </div>
</template>

<style scoped>
.badges-section {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
}

@media (min-width: 640px) {
  .badges-section {
    justify-content: flex-start;
  }
}

.badge {
  transition: transform 0.2s ease, opacity 0.2s ease;
  display: inline-flex;
}

.badge:hover {
  transform: translateY(-2px);
  opacity: 0.85;
}

.badge img {
  height: 24px;
  border-radius: 4px;
}
</style>
