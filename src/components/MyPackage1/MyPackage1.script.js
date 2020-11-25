import draggable from 'vuedraggable'

export default {
  name: 'MyPackage1',

  components: {
    draggable
  },

  props: {
    value: Array,
    group: String
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
