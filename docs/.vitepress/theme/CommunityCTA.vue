<template>
  <div class="community-cta">
    <div class="cta-content">
      <div class="cta-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
        </svg>
      </div>
      <h2>Join the Next-Gen Community</h2>
      <p>Connect with thousands of developers, share your bots, get instant support, and shape the future of the Discord Next ecosystem.</p>
      <div class="cta-actions">
        <a href="https://discord.gg/XKzUqhVCaS" class="cta-button primary" target="_blank" rel="noopener">
          Join Discord Server
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.community-cta {
  padding: 64px 24px 96px;
  max-width: 1152px;
  margin: 0 auto;
}

.cta-content {
  position: relative;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  padding: 64px 32px;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.cta-content:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.cta-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
}

.cta-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(91, 105, 246, 0.1);
  color: var(--vp-c-brand-1);
  border-radius: 20px;
  margin-bottom: 24px;
}

h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 16px;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

p {
  font-size: 18px;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.cta-button {
  display: inline-block;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.2s ease;
  text-decoration: none !important;
}

.cta-button.primary {
  background: var(--vp-c-brand-1);
  color: white;
  border: 1px solid transparent;
}

.cta-button.primary:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(91, 105, 246, 0.3);
}

@media (max-width: 640px) {
  .cta-content {
    padding: 48px 24px;
  }
  h2 {
    font-size: 28px;
  }
}
</style>
