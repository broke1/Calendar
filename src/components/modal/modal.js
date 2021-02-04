//import { TestScheduler } from "jest"
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      
    } 
  },
  computed: {
    title: function() {
      return this.$store.getters.getTitle
    },
    show: function() { 
      return this.$store.getters.statusModal
    },
    listModal: function() {
      return this.$store.getters.listModal
    },
    btnModal: function() {
      return this.$store.getters.btnModal
    }
  },
  methods: {
    closeCartBlock: function() {
      this.$store.commit('openCloseModal',{id: 0, status: false})
    },
    checkTask: function(index) {
      this.$store.commit('checkTask',index)
    }
  },
  mounted() {

    
  } 
  
})