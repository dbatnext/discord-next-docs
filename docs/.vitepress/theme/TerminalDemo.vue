<template>
  <div class="terminal-demo-wrapper">
    <div class="terminal-window">
      <div class="terminal-header">
        <div class="terminal-buttons">
          <span class="btn close"></span>
          <span class="btn minimize"></span>
          <span class="btn maximize"></span>
        </div>
        <div class="terminal-title">bash - d-next</div>
      </div>
      <div class="terminal-body">
        <div class="line" v-for="(line, index) in visibleLines" :key="index" :class="line.type">
          <span v-if="line.type === 'command'" class="prompt">~$</span>
          <span class="content" v-html="line.text"></span>
          <span v-if="index === visibleLines.length - 1 && isTyping" class="cursor">_</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const lines = [
  { type: 'command', text: 'npx create-djs-next my-bot', delay: 1000, typingSpeed: 50 },
  { type: 'output', text: '🚀 Welcome to create-djs-next! Scaffolding your project...', delay: 800 },
  { type: 'output success', text: '✅ Created directory: src/commands', delay: 150 },
  { type: 'output success', text: '✅ Created directory: src/events', delay: 150 },
  { type: 'output success', text: '✅ Created directory: src/components', delay: 150 },
  { type: 'output success', text: '✅ Created .env file', delay: 150 },
  { type: 'output success', text: '✅ Created index.js', delay: 300 },
  { type: 'output', text: '🎉 Scaffolding complete! Run `npm install djs-next` and start coding!', delay: 600 },
  { type: 'command', text: 'npm run dev', delay: 1200, typingSpeed: 50 },
  { type: 'output', text: '<span style="color: #ffc107">[djs-next]</span> Loaded global middleware.', delay: 400 },
  { type: 'output', text: '<span style="color: #5b69f6">[djs-next]</span> Bot is ready and logged in as DevBot#0001!', delay: 300 },
  { type: 'output success', text: '🔥 Hot Module Replacement (HMR) Enabled!', delay: 200 }
];

const visibleLines = ref([]);
const isTyping = ref(false);

const typeLine = async (line) => {
  return new Promise((resolve) => {
    isTyping.value = true;
    let currentText = '';
    let charIndex = 0;
    
    visibleLines.value.push({ type: line.type, text: '' });
    const lineIndex = visibleLines.value.length - 1;

    const typeChar = () => {
      if (charIndex < line.text.length) {
        currentText += line.text.charAt(charIndex);
        visibleLines.value[lineIndex].text = currentText;
        charIndex++;
        setTimeout(typeChar, line.typingSpeed || 30);
      } else {
        isTyping.value = false;
        resolve();
      }
    };
    
    typeChar();
  });
};

const runSequence = async () => {
  for (const line of lines) {
    if (line.type === 'command') {
      await new Promise(r => setTimeout(r, 500));
      await typeLine(line);
      await new Promise(r => setTimeout(r, line.delay));
    } else {
      visibleLines.value.push({ type: line.type, text: line.text });
      await new Promise(r => setTimeout(r, line.delay));
    }
  }
};

onMounted(() => {
  setTimeout(() => {
    runSequence();
  }, 1000);
});
</script>

<style scoped>
.terminal-demo-wrapper {
  margin: 4rem auto;
  max-width: 700px;
  width: 90%;
  perspective: 1000px;
  animation: float 6s ease-in-out infinite;
}

.terminal-window {
  background: #000000;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 50px -12px rgba(91, 105, 246, 0.25), 0 0 0 1px rgba(91, 105, 246, 0.1);
  overflow: hidden;
  font-family: var(--vp-font-family-mono);
  font-size: 0.9rem;
}

.terminal-header {
  background: #111111;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.terminal-buttons {
  display: flex;
  gap: 8px;
}

.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.btn.close { background: #ff5f56; box-shadow: 0 0 8px rgba(255, 95, 86, 0.5); }
.btn.minimize { background: #ffbd2e; box-shadow: 0 0 8px rgba(255, 189, 46, 0.5); }
.btn.maximize { background: #27c93f; box-shadow: 0 0 8px rgba(39, 201, 63, 0.5); }

.terminal-title {
  margin: 0 auto;
  transform: translateX(-24px);
  color: #888;
  font-size: 0.85rem;
}

.terminal-body {
  padding: 24px;
  min-height: 300px;
  max-height: 400px;
  overflow-y: auto;
  color: #e2e8f0;
}

.line {
  margin-bottom: 8px;
  line-height: 1.5;
}

.prompt {
  color: #27c93f;
  margin-right: 12px;
  font-weight: 600;
}

.output {
  color: #a0aec0;
}

.output.success {
  color: #27c93f;
}

.cursor {
  display: inline-block;
  width: 8px;
  animation: blink 1s step-end infinite;
  color: #fff;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotateX(2deg); }
  50% { transform: translateY(-10px) rotateX(-2deg); }
}
</style>
