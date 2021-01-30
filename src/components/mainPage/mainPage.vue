
<template>
  <div class="container">
    <div class="calendar-slider">
      <div 
        class="cart-block" 
        :class="{ 'cart-block-modal': modalShow}"
      >
        <div 
          class="cart-shade" 
          @click="openCartBlock()"
        />
        <div class="cart-header">
          <div class="cart-day">
            {{ day }}
          </div>
          <div class="cart-month">
            {{ month }}
          </div>
        </div>
        <div class="cart-body">
          <div class="cart-box">
            <div class="cart-list">
              <div 
                v-for="(item,index) in list"
                :key="index"
                class="cart-line"
              >
                <input 
                  v-model="list[index]"
                  type="text" 
                  class="line-input"
                >
                <div class="line-btn">
                  V
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div 
      class="main-shade"
      :class="{ 'main-shade-modal' : modalShow }"
      @click="closeCartBlock()"
    />
  </div>
</template>

<script> 

import script from './mainPage.ts'
export default script

</script>

<style lang="sass" scoped>
    @import "./mainPage.sass"
</style>