import draggable from 'vuedraggable'

export default {
  name: 'MyPackage1',

  components: {
    draggable
  },

  props: {
    value: Array
  },

  computed: {
    list: {
      get () {
        return this.value;
      },
      set (list) {
        this.$emit('input', list);
      }
    }
  }
}
