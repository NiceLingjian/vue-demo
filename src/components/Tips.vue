<template>
  <div class="Tips">
    <input type="text" v-model='msg'>
    <button @click='sumbit'>sumbit</button>
  </div>
</template>

<script>
export default {
  name: 'Tips',
  data () {
    return {
      msg: '给你我的消息'
    }
  },
  methods:{
    sumbit () {
      this.$emit('shentao', this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
