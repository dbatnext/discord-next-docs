import DefaultTheme from 'vitepress/theme';
import './style.css';
import { h, watch, onMounted } from 'vue';
import { useRoute } from 'vitepress';
import BadgesBar from './BadgesBar.vue';
import ScrollProgress from './ScrollProgress.vue';
import TerminalDemo from './TerminalDemo.vue';

const PathManager = {
  setup() {
    const route = useRoute();
    onMounted(() => {
      watch(() => route.path, (path) => {
        if (typeof document !== 'undefined') {
          document.documentElement.classList.remove('djs-next-page', 'dpy-next-page');
          if (path.startsWith('/djs-next/')) {
            document.documentElement.classList.add('djs-next-page');
          } else if (path.startsWith('/dpy-next/')) {
            document.documentElement.classList.add('dpy-next-page');
          }
        }
      }, { immediate: true });
    });
    return () => null;
  }
};

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-after': () => h(BadgesBar),
      'home-hero-after': () => h(TerminalDemo),
      'layout-bottom': () => [h(PathManager), h(ScrollProgress)]
    })
  }
};
