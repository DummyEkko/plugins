<template>
  <header>app: {{ x }} {{ y }}</header>
  <RouterView />
</template>



<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSharedMouse } from '@dummy/hooks'


const { x, y } = useSharedMouse()

</script>