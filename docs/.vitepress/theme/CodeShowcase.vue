<template>
  <div class="code-showcase">
    <div class="code-showcase-inner">
      <h2 class="code-showcase-title">Write Less. Do More.</h2>
      <p class="code-showcase-subtitle">See the difference between Vanilla Discord.js and djs-next.</p>
      
      <div class="compact-editor">
        <!-- Editor Header with Tabs -->
        <div class="editor-header">
          <div class="mac-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          
          <div class="editor-tabs">
            <button 
              class="tab-btn vanilla-tab" 
              :class="{ active: activeTab === 'vanilla' }"
              @click="activeTab = 'vanilla'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tab-icon vanilla-icon"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              Vanilla Discord.js
            </button>
            
            <button 
              class="tab-btn djsnext-tab" 
              :class="{ active: activeTab === 'djsnext' }"
              @click="activeTab = 'djsnext'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tab-icon djsnext-icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              djs-next
            </button>
          </div>
        </div>

        <!-- Editor Body -->
        <div class="editor-body">
          <transition name="fade" mode="out-in">
            <!-- Vanilla Code -->
            <div v-if="activeTab === 'vanilla'" class="code-pane vanilla-pane" key="vanilla">
              <pre><code><span class="keyword">const</span> <span class="punctuation">{</span> <span class="class-name">Client</span> <span class="punctuation">}</span> <span class="operator">=</span> <span class="function">require</span>(<span class="string">'discord.js'</span>);
<span class="keyword">const</span> <span class="variable">fs</span> <span class="operator">=</span> <span class="function">require</span>(<span class="string">'fs'</span>);

<span class="keyword">const</span> <span class="variable">client</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">Client</span>(<span class="punctuation">{</span> <span class="property">intents</span>: [...] <span class="punctuation">}</span>);

<span class="comment">// Manual command loading</span>
<span class="keyword">const</span> <span class="variable">commandFiles</span> <span class="operator">=</span> <span class="variable">fs</span>.<span class="function">readdirSync</span>(<span class="string">'./commands'</span>).<span class="function">filter</span>(<span class="variable">f</span> =&gt; <span class="variable">f</span>.<span class="function">endsWith</span>(<span class="string">'.js'</span>));
<span class="keyword">for</span> (<span class="keyword">const</span> <span class="variable">file</span> <span class="keyword">of</span> <span class="variable">commandFiles</span>) {
  <span class="keyword">const</span> <span class="variable">cmd</span> <span class="operator">=</span> <span class="function">require</span>(<span class="string">`./commands/${file}`</span>);
  <span class="variable">client</span>.<span class="property">commands</span>.<span class="function">set</span>(<span class="variable">cmd</span>.<span class="property">data</span>.<span class="property">name</span>, <span class="variable">cmd</span>);
}

<span class="comment">// Massive interaction handler</span>
<span class="variable">client</span>.<span class="function">on</span>(<span class="string">'interactionCreate'</span>, <span class="keyword">async</span> <span class="variable">i</span> =&gt; {
  <span class="keyword">if</span> (<span class="operator">!</span><span class="variable">i</span>.<span class="function">isChatInputCommand</span>()) <span class="keyword">return</span>;
  <span class="keyword">const</span> <span class="variable">cmd</span> <span class="operator">=</span> <span class="variable">client</span>.<span class="property">commands</span>.<span class="function">get</span>(<span class="variable">i</span>.<span class="property">commandName</span>);
  <span class="keyword">if</span> (<span class="operator">!</span><span class="variable">cmd</span>) <span class="keyword">return</span>;
  
  <span class="comment">// manual cooldown logic...</span>
  <span class="comment">// manual permission checks...</span>
  <span class="keyword">await</span> <span class="variable">cmd</span>.<span class="function">execute</span>(<span class="variable">i</span>);
});</code></pre>
            </div>
            
            <!-- DJS Next Code -->
            <div v-else class="code-pane djsnext-pane" key="djsnext">
              <pre><code><span class="keyword">const</span> <span class="punctuation">{</span> <span class="variable">GatewayIntentBits</span>, <span class="class-name">DJSNextClient</span> <span class="punctuation">}</span> <span class="operator">=</span> <span class="function">require</span>(<span class="string">'djs-next'</span>);

<span class="keyword">const</span> <span class="variable">client</span> <span class="operator">=</span> <span class="keyword">new</span> <span class="class-name">DJSNextClient</span>(<span class="punctuation">{</span>
  <span class="property">intents</span>: [<span class="variable">GatewayIntentBits</span>.<span class="property">Guilds</span>],
  <span class="property">developers</span>: [<span class="string">'YOUR_ID'</span>],
  <span class="property">prefixes</span>: [<span class="string">'!'</span>],
<span class="punctuation">}</span>);

<span class="variable">client</span>.<span class="function">enableHMR</span>();
<span class="variable">client</span>.<span class="function">enableDevTools</span>(<span class="string">'dnxt'</span>);
<span class="variable">client</span>.<span class="function">start</span>(<span class="variable">process</span>.<span class="property">env</span>.<span class="property">DISCORD_TOKEN</span>);

<span class="comment">// That's it. Commands, events, components,</span>
<span class="comment">// cooldowns, permissions, error handling —</span>
<span class="comment">// all handled automatically by dropping</span>
<span class="comment">// files into src/commands/, src/events/,</span>
<span class="comment">// and src/components/.</span></code></pre>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('djsnext')
</script>

<style scoped>
.code-showcase {
  max-width: 800px;
  margin: 0 auto;
  padding: 64px 24px;
}

.code-showcase-inner {
  text-align: center;
}

.code-showcase-title {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #5b69f6, #ffc107);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 8px;
}

.code-showcase-subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
  margin-bottom: 32px;
}

.compact-editor {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: left;
}

/* Header & Tabs */
.editor-header {
  background: #252526;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  padding-left: 16px;
  padding-top: 12px;
}

.mac-dots {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
  margin-right: 24px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.editor-tabs {
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
}

.tab-btn {
  background: rgba(255, 255, 255, 0.03);
  border: none;
  padding: 8px 16px;
  color: #858585;
  font-size: 0.85rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 6px 6px 0 0;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #cccccc;
}

.tab-btn.active {
  background: #1e1e1e;
  color: #ffffff;
  border-top: 2px solid transparent;
}

.vanilla-tab.active { border-top-color: #ff6b6b; }
.djsnext-tab.active { border-top-color: #5b69f6; }

.vanilla-icon { color: #ff6b6b; }
.djsnext-icon { color: #5b69f6; }

/* Code Body */
.editor-body {
  padding: 0;
  min-height: 400px;
  position: relative;
}

.code-pane {
  padding: 24px;
  height: 100%;
  box-sizing: border-box;
}

.code-pane.vanilla-pane {
  background: linear-gradient(180deg, rgba(255, 107, 107, 0.05) 0%, transparent 100%);
  border-top: 1px solid rgba(255, 107, 107, 0.1);
}

.code-pane.djsnext-pane {
  background: linear-gradient(180deg, rgba(91, 105, 246, 0.08) 0%, transparent 100%);
  border-top: 1px solid rgba(91, 105, 246, 0.2);
}

.code-pane pre {
  margin: 0;
  background: transparent;
  padding: 0;
  overflow-x: auto;
}

.code-pane code {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #d4d4d4;
}

/* Custom Branded Syntax Highlighting */
.keyword { color: #5b69f6; font-weight: 600; }     /* Blurple */
.class-name { color: #ffc107; font-weight: 600; }  /* Yellow */
.function { color: #4ade80; }                      /* Green */
.string { color: #f472b6; }                        /* Pink */
.comment { color: #828282; font-style: italic; }   /* Subtle Grey */
.variable { color: #e2e8f0; }                      /* Light Grey */
.property { color: #38bdf8; }                      /* Light Blue */
.operator { color: #94a3b8; }                      /* Muted Blue-Grey */
.punctuation { color: #64748b; }                   /* Darker Blue-Grey */

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  position: absolute;
  width: calc(100% - 48px);
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .code-showcase {
    padding: 32px 16px;
  }
  .code-showcase-title {
    font-size: 1.5rem;
  }
  .code-pane {
    padding: 16px;
  }
  .code-pane code {
    font-size: 0.8rem;
  }
  .tab-btn {
    padding: 8px 12px;
    font-size: 0.75rem;
  }
  .mac-dots {
    margin-right: 12px;
  }
}
</style>
