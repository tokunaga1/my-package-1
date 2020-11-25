<template>
  <div id="app">
    <MyPackage1 v-model="bs" group="a" />
    <MyPackage1 v-model="cs" group="a" />
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
      items: {
        bs: [...new Array(5)].map((b, i) => `b${i}`),
        cs: [...new Array(4)].map((c, i) => `c${i}`)
      }
    }),

    computed: {
      bs: {
        get () {
          return this.items.bs;
        },
        set (bs) {
          this.$set(this.items, 'bs', bs);
        }
      },
      cs: {
        get () {
          return this.items.cs;
        },
        set (cs) {
          this.$set(this.items, 'cs', cs);
        }
      },
    }
  }
</script>

<style lang="scss">
  li {
    cursor: grab;
  }
</style>
