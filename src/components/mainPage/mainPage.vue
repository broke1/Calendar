
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