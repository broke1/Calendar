
<template>
  <div class="container">
    <div class="calendar-slider">
      <carousel-3d 
        class="carousel-block" 
        :width="500" 
        :height="600"
        :perspective="0" 
        :space="450" 
        :display="3"
      >
        <slide 
          v-for="(item,index) in listCarousel"
          :key="index"
          :index="index"
          class="cart-block" 
        >
          <div 
            class="cart-shade" 
            @mousedown="downCartBlock"
            @mouseup="upCartBlock"
          />
          <div class="cart-header">
            <div class="cart-day">
              {{ item.day }}
            </div>
            <div class="cart-month">
              {{ item.month }}
            </div>
          </div>
          <div class="cart-body">
            <div class="cart-box">
              <div class="cart-list">
                <div 
                  v-for="(itemList,indexList) in item.list"
                  :key="indexList"
                  class="cart-line"
                >
                  <div class="line-input">
                    {{ item.list[indexList] }}
                  </div>
                  <div class="line-btn">
                    V
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </div>
    <div 
      class="main-shade"
      :class="{ 'main-shade-modal' : modalShow }"
      @click="closeCartBlock()"
    />
  </div>
</template>

<script> 

import script from './mainPage.js'

export default script

</script>

<style lang="sass" scoped>
    @import "./mainPage.sass"
</style>