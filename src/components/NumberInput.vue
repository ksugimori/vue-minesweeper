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
      @input="$emit('input', parseValue($event.target.value))"
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
    parseValue: function (val) {
      return parseInt(val) || 0;
    },
    emitInput: function (nextValue) {
      this.$emit("input", nextValue);
    },
    increment: function () {
      if (this.value >= this.max) {
        this.emitInput(this.max);
        return;
      }
      this.emitInput(this.value + 1);
    },
    decrement: function () {
      if (this.value <= this.min) {
        this.emitInput(this.min);
        return;
      }
      this.emitInput(this.value - 1);
    },
    startCountUp: function () {
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
  -moz-appearance: textfield;
}

.number-input {
  display: flex;
  border: 0.3rem solid #000;
  height: 2rem;
}

.btn {
  position: relative;
  width: 2rem;
  font-size: 2rem;
  line-height: 1em;
  background-color: #000;
  color: #fff;
  text-align: center;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  border-top: none;
  border-bottom: none;
  border-right: 0.3rem solid #000;
  border-left: 0.3rem solid #000;
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