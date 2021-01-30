//import { TestScheduler } from "jest"
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      // dict: {
      //   'hello': 'привет',
      //   'kitty': 'китти',
      //   'how': 'как',
      //   'are': 'глагол to be',
      //   'you': 'ты',
      //   'and': 'и',
      //   'bob': 'боб',
      // },
      day: 16,
      month: 'июня',
      list: ['','','','','','','',''],
      modalShow: false,
    } 
  },
  methods: {
    openCartBlock: function() {
      this.modalShow = true
    },
    closeCartBlock: function() {
      this.modalShow = false
    },
    // prepareText: function() {
    //   let originText = this.$refs.page.innerText
    //   let reg = new RegExp( /(\S*)/, "g")
    //   let text = originText.match(reg)
    //   text.forEach( item => {
    //     if (item != '') {
    //       originText = originText.replace(item, `<span>${item}</span>`)
    //     }
    //   })
    //   this.$refs.page.innerHTML = originText
    // },
    // getElement: function(event) {
    //   if (event.target.tagName == "SPAN") {
    //     let word = event.target.innerText
    //     this.word = word.replace(/(\?|!|;|\.|,)/g,'')
    //     let translate = this.translateWord()
    //     translate.then( () => {
    //       this.showClue(event.layerX,event.layerY)
    //     }) 
    //     // this.showClue(event.layerX,event.layerY)
    //   } 
    // },
    // translateWord: async function() {

    //   let formData = new FormData()  // формируем объект для передачи RESTу
    //   formData.append('name', this.word)
        
        
    //   let response = await fetch(`http://localhost:5000/rest`, {
    //     method: "POST",
    //     body: formData
    //   })
    //     .catch (error => {
    //       return error
    //     })   

    //   if (response.ok) { // если HTTP-статус в диапазоне 200-299
    //     // получаем тело ответа (см. про этот метод ниже)
    //     let result = await response.text()
    //     this.word = result
    //   } else {
    //     alert("Ошибка HTTP: " + response.status)
    //   }
            
    //   //this.word = this.dict[this.word.toLowerCase()]

    // },
    // showClue: function(x,y) {
    //   let clue = this.$refs.clue
    //   if (clue.classList.contains('clue-show') && clue.innerText == this.word) {
    //     this.hideClue()
    //   } else {
    //     clue.innerText = this.word
    //     clue.classList.add('clue-show')
    //     clue.style = `top:${y-50}px;left:${x}px`
    //   }

    // },
    // hideClue: function() {
    //   this.$refs.clue.classList.remove('clue-show') 
    // },
    // test: function (numb: number) {
    //   numb = this.word
    //   console.log(numb)
    // }
  },
  mounted() {
    //this.prepareText()
    // let numb: number = 10
    // this.test(numb)
    
  } 
  
})