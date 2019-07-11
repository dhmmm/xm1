<template>
  <div class="home">
    <Nowplay />
  </div>
</template>

<script>
// @ is an alias to /src
import Nowplay from '@/components/nowplay.vue'

export default {
  name: 'home',
  components: {
    Nowplay
  }
}
</script>
