<template></template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('home-root-page')
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('home-root-page')
  }
})
</script>
