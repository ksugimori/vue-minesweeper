<template>
  <div class="number-input">
    <div
      class="btn btn-minus"
      @touchstart="startCountDown"
      @touchend="stopCountDown"
      @mousedown="startCountDown"
      @mouseup="stopCountDown"
      @mouseout="stopCountDown"
    ></div>
    <input
      type="number"
      :min="min"
      :max="max"
      :value="value"
      @input="emitInput($event.target.value)"
    />
    <div
      class="btn btn-plus"
      @touchstart="startCountUp"
      @touchend="stopCountUp"
      @mousedown="startCountUp"
      @mouseup="stopCountUp"
      @mouseout="stopCountUp"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    min: Number,
    max: Number,
  },
  methods: {
    emitInput: function (nextValue) {
      this.$emit("input", nextValue);
    },
    increment: function () {
      this.emitInput(Math.min(this.value + 1, this.max));
    },
    decrement: function () {
      this.emitInput(Math.max(this.value - 1, this.min));
    },
    startCountUp: function () {
      this.stopCountUp();
      this.increment();
      this.clickTimer = setTimeout(() => {
        this.timer = setInterval(() => {
          if (this.value >= this.max) {
            clearInterval(this.timer);
          }
          this.increment();
        }, 50);
      }, 500);
    },
    stopCountUp: function () {
      clearTimeout(this.clickTimer);
      clearInterval(this.timer);
    },
    startCountDown: function () {
      this.stopCountDown();
      this.decrement();
      this.clickTimer = setTimeout(() => {
        this.timer = setInterval(() => {
          if (this.value <= this.min) {
            clearInterval(this.timer);
            return;
          }
          this.decrement();
        }, 50);
      }, 500);
    },
    stopCountDown: function () {
      clearTimeout(this.clickTimer);
      clearInterval(this.timer);
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -webkit-appearance: textfield;
  border-radius: 0;
  -moz-appearance: textfield;
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

.number-input {
  display: flex;
}

.btn {
  position: relative;
  width: 2rem;
  height: 2rem;
  border: 0.3rem solid #000;
  font-size: 2rem;
  line-height: 1em;
  background-color: #000;
  color: #fff;
  text-align: center;
}

.btn::before,
.btn::after {
  content: "";
  background-color: #fff;
  display: block;
  position: absolute;
}

.btn:hover::before,
.btn:hover::after {
  background-color: #000;
}

.btn-minus::before {
  width: 1.4rem;
  height: 0.3rem;
  top: 0.85rem;
  left: 0.3rem;
}

.btn-plus::before {
  width: 1.4rem;
  height: 0.3rem;
  top: 0.85rem;
  left: 0.3rem;
}

.btn-plus::after {
  width: 0.3rem;
  height: 1.4rem;
  top: 0.3rem;
  left: 0.85rem;
}

.btn:hover {
  background-color: #fff;
  color: #000;
  cursor: pointer;
}

.number-input input {
  font-family: "Roboto Mono", monospace;
  border-top: 0.3rem solid #000;
  border-bottom: 0.3rem solid #000;
  border-right: none;
  border-left: none;
  width: 3rem;
  height: 2rem;
  padding: 0 1em;
  line-height: 2rem;
  font-size: 1rem;
  text-align: right;
}

input:invalid {
  color: #fe0000;
  outline: none;
  box-shadow: none;
}
</style>