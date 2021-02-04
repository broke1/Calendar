
<template>
  <div 
    class="main-modal-block"
    :class="{ 'main-modal-block-show' : show }"
  >
    <div 
      class="main-shade"
      @click="closeCartBlock()"
    />
    <div class="main-modal">
      <div class="cart-header">
        <div class="cart-day">
          {{ title.day }}
        </div>
        <div class="cart-month">
          {{ title.month }}
        </div>
      </div>
      <div class="cart-body">
        <div class="cart-list">
          <div 
            v-for="(item,index) in listModal"
            :key="index"
            class="cart-line"
          >
            <input 
              v-model="listModal[index]"
              class="line-input"
              type="text"
            >
            <div 
              class="line-btn"
              :class="{ 'line-btn-check' : btnModal[index] }"
              @click="checkTask(index)"
            >
              V
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 

import script from './modal.js'

export default script

</script>

<style lang="sass" scoped>
    @import "./modal.sass"
</style>