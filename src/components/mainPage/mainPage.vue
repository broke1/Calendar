
<template>
  <div class="container">
    <div class="calendar-slider">
      <div class="cart-block">
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
    <!-- <div class="page-block">
      <div 
        ref="page"
        class="page"  
        @click="getElement($event)"
      >
        Hello Kitty. How are you? And hello Bob!
      </div>
      <div 
        ref="clue"
        class="clue"  
        @click="hideClue()"
      />
    </div> -->
  </div>
</template>

<script> 

import script from './mainPage.ts'
export default script

</script>

<style lang="sass" scoped>
    @import "./mainPage.sass"
</style>