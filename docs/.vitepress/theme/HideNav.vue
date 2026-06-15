<template></template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('hide-search-hamburger')
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('hide-search-hamburger')
  }
})
</script>
