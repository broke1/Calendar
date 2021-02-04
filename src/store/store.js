export default {
  state: {

  },
  mutations: {
    openCloseModal: (state, modal) => {    // открывает или закрывает модальное окно
      state.modal.id = modal.id
      state.modal.status = modal.status     
    },
    checkTask: (state, index) => {    // открывает или закрывает модальное окно
      Vue.set(state.listCarousel[state.modal.id].btn, index, !state.listCarousel[state.modal.id].btn[index])
    },
  },
  actions: {

  },
  getters: {
    getListCarousel(state) {
      if (!state.listCarousel) {
        Vue.set(state, 'listCarousel', [])
        let dayBlock = {}
        for (let i=1; i < 7; i++) {
          dayBlock.day = i
          dayBlock.month = 'июня'
          dayBlock.list = ['','','','','','','','']
          dayBlock.btn = [false,false,false,false,false,false,false,false]
          state.listCarousel.push(dayBlock)
          dayBlock = {}
        }
      }
      return state.listCarousel
    },
    statusModal(state) {
      if (!state.modal) {
        Vue.set(state, 'modal', {})
        Vue.set(state.modal, 'id', 0)
        Vue.set(state.modal, 'status', false)
      }
      return state.modal.status
    },
    getTitle(state) {
      let title = {}
      title.day = state.listCarousel[state.modal.id].day
      title.month = state.listCarousel[state.modal.id].month
      return title
    },
    listModal(state) {
      return state.listCarousel[state.modal.id].list
    },
    btnModal(state) {
      return state.listCarousel[state.modal.id].btn
    } 
  }
}