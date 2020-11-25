<template>
  <div id="app">
    <MyPackage1 v-model="bs" />
  </div>
</template>

<script>
  import MyPackage1 from '@/components/MyPackage1/MyPackage1.vue'

  export default {
    name: 'App',

    components: {
      MyPackage1
    },

    data: () => ({
      items: [...new Array(5)].map((b, i) => `b${i}`)
    }),

    computed: {
      bs: {
        get () {
          return this.items;
        },
        set (bs) {
          this.items = bs;
        }
      }
    }
  }
</script>

<style lang="scss">
  li {
    cursor: grab;
  }
</style>
