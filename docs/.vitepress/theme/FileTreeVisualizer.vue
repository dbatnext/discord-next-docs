<template>
  <div class="file-tree-showcase">
    <div class="showcase-header">
      <h2>File-Based Magic</h2>
      <p>Drop a file. Get a command. No massive switch statements required.</p>
    </div>
    
    <div class="showcase-grid">
      <!-- Left: VS Code File Explorer -->
      <div class="editor-window">
        <div class="window-header">
          <div class="mac-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="window-title">EXPLORER</div>
        </div>
        <div class="file-tree">
          <div class="tree-folder">
            <span class="folder-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></span> src
          </div>
          <div class="tree-contents">
            <!-- Commands -->
            <div class="tree-folder"><span class="folder-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></span> commands</div>
            <div class="tree-file" :class="{ active: activeFile === 'ping' }" @click="activeFile = 'ping'">
              <span class="file-icon js">JS</span> ping.js
            </div>
            
            <!-- Events -->
            <div class="tree-folder mt-2"><span class="folder-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></span> events</div>
            <div class="tree-file" :class="{ active: activeFile === 'ready' }" @click="activeFile = 'ready'">
              <span class="file-icon js">JS</span> ready.js
            </div>
            
            <!-- Components -->
            <div class="tree-folder mt-2"><span class="folder-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></span> components</div>
            <div class="tree-file" :class="{ active: activeFile === 'ban_user' }" @click="activeFile = 'ban_user'">
              <span class="file-icon js">JS</span> ban_user.js
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Discord Result -->
      <div class="discord-window">
        <div class="discord-header">
          <div class="discord-server-name">Live Preview</div>
        </div>
        
        <div class="discord-body">
          <transition name="fade" mode="out-in">
            
            <!-- Ping Command -->
            <div v-if="activeFile === 'ping'" class="discord-mock command-mock" key="ping">
              <div class="interaction-badge">maps to /ping</div>
              <div class="slash-command">
                <span class="slash">/</span><span class="cmd-name">ping</span>
              </div>
              <div class="bot-reply mt-3">
                <img src="/logo.png" class="bot-avatar" />
                <div class="reply-content">
                  <span class="bot-name">DiscordJS Next <span class="bot-tag">BOT</span></span>
                  <p>Pong! Latency is 14ms.</p>
                </div>
              </div>
            </div>
            
            <!-- Ready Event -->
            <div v-else-if="activeFile === 'ready'" class="discord-mock event-mock" key="ready">
              <div class="interaction-badge">maps to client.on('ready')</div>
              <div class="terminal-mock">
                <code>[DJS-Next] Autoloading 1 commands...</code><br/>
                <code>[DJS-Next] Autoloading 1 events...</code><br/>
                <code>[DJS-Next] Autoloading 1 components...</code><br/>
                <code class="success">> Connected to Discord Gateway!</code>
              </div>
            </div>
            
            <!-- Ban Button Component -->
            <div v-else-if="activeFile === 'ban_user'" class="discord-mock component-mock" key="ban_user">
              <div class="interaction-badge">maps to customId: 'ban_user'</div>
              <div class="bot-reply">
                <img src="/logo.png" class="bot-avatar" />
                <div class="reply-content">
                  <span class="bot-name">DiscordJS Next <span class="bot-tag">BOT</span></span>
                  <p>Are you sure you want to ban this user?</p>
                  <div class="discord-buttons">
                    <button class="d-btn danger">Ban User</button>
                    <button class="d-btn secondary">Cancel</button>
                  </div>
                  <div class="interaction-pulse mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline; vertical-align:text-bottom; margin-right:4px;"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg> Clicking this runs <code>ban_user.js</code> instantly.
                  </div>
                </div>
              </div>
            </div>
            
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeFile = ref('ping')
</script>

<style scoped>
.file-tree-showcase {
  max-width: 1000px;
  margin: 64px auto;
  padding: 0 24px;
}

.showcase-header {
  text-align: center;
  margin-bottom: 40px;
}

.showcase-header h2 {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #5b69f6, #ffc107);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 8px;
}

.showcase-header p {
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
}

.showcase-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

/* Left Window (Editor) */
.editor-window {
  background: #1e1e1e;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

.window-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #252526;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.mac-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.window-title {
  margin-left: auto;
  margin-right: auto;
  font-size: 0.75rem;
  color: #858585;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.file-tree {
  padding: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
}

.tree-folder {
  color: #cccccc;
  padding: 4px 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.tree-contents {
  padding-left: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  margin-left: 8px;
  margin-top: 4px;
}

.mt-2 { margin-top: 12px; }
.mt-3 { margin-top: 16px; }

.tree-file {
  color: #cccccc;
  padding: 6px 12px;
  margin: 2px 0 2px -12px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s, color 0.2s;
}

.tree-file:hover {
  background: rgba(255, 255, 255, 0.05);
}

.tree-file.active {
  background: rgba(91, 105, 246, 0.2);
  color: #5b69f6;
  font-weight: 500;
}

.file-icon.js {
  color: #ffc107;
  font-size: 0.75rem;
  font-weight: bold;
}

/* Right Window (Discord) */
.discord-window {
  background: #313338;
  display: flex;
  flex-direction: column;
}

.discord-header {
  padding: 12px 20px;
  background: #2b2d31;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 600;
  color: #f2f3f5;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.discord-body {
  flex: 1;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.discord-mock {
  width: 100%;
  max-width: 450px;
  background: #2b2d31;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.02);
}

.interaction-badge {
  position: absolute;
  top: -12px;
  right: -12px;
  background: linear-gradient(135deg, #5b69f6, #4752c4);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(91, 105, 246, 0.3);
  font-family: monospace;
}

.slash-command {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(88, 101, 242, 0.1);
  padding: 6px 12px;
  border-radius: 4px;
  width: max-content;
}

.slash { color: #5865F2; font-weight: 700; }
.cmd-name { color: #dbdee1; font-weight: 500; }

.bot-reply {
  display: flex;
  gap: 16px;
}

.bot-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1e1f22;
}

.bot-name {
  color: #f2f3f5;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

.bot-tag {
  background: #5865F2;
  color: white;
  font-size: 0.65rem;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 600;
}

.reply-content p {
  color: #dbdee1;
  margin: 4px 0 0;
  font-size: 0.95rem;
}

.discord-buttons {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.d-btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  color: white;
}

.d-btn.danger { background: #da373c; }
.d-btn.secondary { background: #4e5058; }

.terminal-mock {
  background: #1e1e1e;
  padding: 16px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.85rem;
  color: #cccccc;
  line-height: 1.6;
}

.terminal-mock .success {
  color: #4ade80;
  font-weight: bold;
}

.interaction-pulse {
  font-size: 0.8rem;
  color: #5b69f6;
  font-weight: 500;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile */
@media (max-width: 768px) {
  .file-tree-showcase {
    padding: 32px 16px;
    margin: 32px auto;
  }
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .editor-window {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .discord-body {
    padding: 24px 16px;
  }
  .discord-mock {
    padding: 16px;
  }
  .interaction-badge {
    right: 0;
    top: -14px;
    font-size: 0.65rem;
  }
  .bot-reply {
    gap: 12px;
  }
  .bot-avatar {
    width: 32px;
    height: 32px;
  }
  .reply-content p {
    font-size: 0.85rem;
  }
  .d-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
  .slash-command {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .terminal-mock {
    font-size: 0.75rem;
    padding: 12px;
    overflow-x: auto;
  }
}
</style>
