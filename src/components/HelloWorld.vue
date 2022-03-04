<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- <hr /> -->

    <div class="display">
      <input v-model.number="operand1" type="number" />
      <input v-model.number="operand2" type="number" />

      <p class="result">{{ result }}</p>
    </div>
    <div class="keyboard">
      <button v-on:click="result = operand1 + operand2">+</button>
      <button @click="result = operand1 - operand2">-</button>
      <button @click="divide(operand1, operand2)">/</button>
      <button @click="multyply">*</button>
      <button @click="exponentiation(operand1, operand2)">x²</button>
      <button @click="integerDivision(operand1, operand2)">integer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "Empty Props",
      required: true,
    },
  },
  data() {
    return {
      message: "Hello Vue",
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    doThat(str, evnt) {
      console.log("click", str, evnt);
    },
    onValidate() {
      console.log("validation true");
    },
    divide(op1, op2) {
      this.result = op1 / op2;
    },
    multyply() {
      const { operand1, operand2 } = this;
      this.result = operand1 * operand2;
    },
    // возводит число в заданную степень
    exponentiation(op1, op2) {
      this.result = Math.pow(op1, op2);
    },
    // целочисленное деление
    integerDivision(op1, op2) {
      let intResult = op1 / op2;
      this.result = Math.trunc(intResult);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  min-width: 40px;
  height: 30px;
  margin: 15px;
}
input {
  padding: 8px;
  margin: 5px;
}
.result {
  font-size: 25px;
  width: 100%;
  text-align: center;
  border: 2px solid black;
}
</style>
