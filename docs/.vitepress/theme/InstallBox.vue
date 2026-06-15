<template>
  <div class="install-box">
    <div class="install-label">Get started in seconds:</div>
    <div class="install-container">
      <div class="pm-tabs">
        <button 
          v-for="pm in packageManagers" 
          :key="pm.name" 
          class="pm-tab" 
          :class="{ active: activePm.name === pm.name }"
          @click="activePm = pm"
        >
          <span class="pm-icon-wrapper" v-html="pm.icon"></span>
          {{ pm.name }}
        </button>
      </div>
      <div class="install-command" @click="copy" title="Copy to clipboard">
        <code><span class="cmd-prefix">$</span> {{ activePm.command }}</code>
        <span class="copy-icon" :class="{ copied }">
          <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="check-svg"><polyline points="20 6 9 17 4 12"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const packageManagers = [
  { name: 'npm', command: 'npx djs-next init', icon: '<svg viewBox="0 0 24 24" fill="#CB3837"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>' },
  { name: 'pnpm', command: 'pnpm dlx djs-next init', icon: '<svg viewBox="0 0 24 24" fill="#F69220"><path d="M0 0h7.5v7.5H0zm8.25 0h7.5v7.5h-7.5zm8.25 0H24v7.5h-7.5zM0 8.25h7.5v7.5H0zm8.25 0h7.5v7.5h-7.5zm8.25 0H24v7.5h-7.5zM0 16.5h7.5V24H0zm8.25 0h7.5V24h-7.5zm8.25 0H24V24h-7.5z"/></svg>' },
  { name: 'yarn', command: 'yarn dlx djs-next init', icon: '<svg viewBox="0 0 24 24" fill="#2C8EBB"><path d="M22.06 16.33c-1.39.75-3.69 2.1-6.19 3.51-2.31 1.3-3.85 2.15-3.85 2.15s-1.55-.85-3.87-2.15c-2.49-1.41-4.79-2.76-6.18-3.51 0 0 0 0-.02-.01-.83-.43-1.47-1.12-1.78-1.99-.19-.51-.25-1.14-.15-1.78.32-2.3 3.65-8.52 3.65-8.52s1.29-2.32 3.32-4.02h.01a6.6 6.6 0 0 1 4.3-1h.02c.03 0 .06.01.08.01.21.02.4.05.6.09h.02a6.47 6.47 0 0 1 4.29 1.83c2.01 1.69 3.29 4.02 3.29 4.02s3.23 6.05 3.58 8.36c.1.66.03 1.31-.17 1.84-.3.86-.94 1.54-1.76 1.96-.05.02-.12.06-.18.09zM12 21.08s1.39-.76 3.51-1.95c2.32-1.3 4.54-2.58 5.92-3.33.4-.2.7-.56.84-.96.11-.27.12-.57.06-.87-.24-1.57-2.8-6.33-3.23-7.15l-.02-.04c-.05-.09-.09-.16-.14-.23-1.44-1.63-3.64-2.22-3.64-2.22l-.15-.03-1.32-.23c-1.28-.24-2.21-.35-2.25-.35s-.96.11-2.23.35l-1.33.24c-.03 0-.08.01-.13.02 0 0-2.2.59-3.64 2.22-.05.06-.09.12-.13.2 0 0-.01.02-.02.04-.44.83-2.99 5.58-3.23 7.15-.06.31-.05.61.05.88.13.39.43.74.83.94 1.37.73 3.59 2.01 5.9 3.32 2.09 1.18 3.34 1.85 4.11 2.27z"/></svg>' },
  { name: 'bun', command: 'bunx djs-next init', icon: '<svg viewBox="0 0 24 24" fill="#FBF0DF"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>' }
]

const activePm = ref(packageManagers[0])
const copied = ref(false)

function copy() {
  navigator.clipboard.writeText(activePm.value.command)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<style scoped>
.install-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px 0;
}

.install-label {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
  font-weight: 500;
}

.install-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
  width: 100%;
  max-width: 400px;
}

.install-container:hover {
  border-color: rgba(91, 105, 246, 0.5);
}

.pm-tabs {
  display: flex;
  width: 100%;
  background: var(--vp-c-bg-elv);
  border-bottom: 1px solid var(--vp-c-divider);
}

.pm-tab {
  flex: 1;
  padding: 8px 0;
  background: transparent;
  border: none;
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent;
}

.pm-icon-wrapper {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 6px;
}

.pm-icon-wrapper :deep(svg) {
  width: 100%;
  height: 100%;
}

.pm-tab:hover {
  color: var(--vp-c-text-1);
  background: rgba(255, 255, 255, 0.02);
}

.pm-tab.active {
  color: #5b69f6;
  border-bottom-color: #5b69f6;
  background: rgba(91, 105, 246, 0.05);
}

.install-command {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px;
  cursor: pointer;
  user-select: none;
  background: transparent;
  box-sizing: border-box;
}

.install-command code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  color: #d4d4d4;
  font-weight: 500;
  background: transparent;
  padding: 0;
}

.cmd-prefix {
  color: #5b69f6;
  margin-right: 8px;
  user-select: none;
}

.copy-icon {
  color: var(--vp-c-text-3);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
}

.install-command:hover .copy-icon {
  color: var(--vp-c-text-1);
}

.copy-icon.copied {
  color: #22c55e;
}

.check-svg {
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popIn {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
