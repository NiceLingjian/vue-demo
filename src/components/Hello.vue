<template>
  <div class="hello">
    <h1 v-text='title'></h1>
    <input v-model='newitem' @keyup.enter="addNew()">
    <ul >
      <li v-for='item in items' :class='{finished: item.isFinished}' @click='toggleFinshed(item)'>
        <div>{{item.label}}   <span v-if='item.isFinished'>已经完成</span><span v-else>未完成</span></div>
      </li>
    </ul>
    <p>{{childmsg}}</p>
    <tips-component @shentao='showmsg'></tips-component>
  </div>
</template>

<script>
import Store from '../store'
import tipsComponent from './Tips'
export default {
  name: 'hello',
  data () {
    return {
        title: '一天任务单',
        items: Store.fetch(),
        newitem: '',
        childmsg: ''
    }
  },
  props: ['msg', 'st'],
  components: {tipsComponent},
  methods: {
    toggleFinshed: function (item) {
        item.isFinished = !item.isFinished;
        console.log(this.msg, this.st)
    },
    addNew: function(){
        this.items.push({
            label: this.newitem,
            isFinished: false
        })
        this.newitem = '';
    },
    showmsg(msg) {
        console.log(msg)
        this.childmsg = msg
    }
  },
  watch:{
    items:{
        handler: function(val, oldval){
            Store.save(val)
        },
        deep: true
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
  margin: 0 10px;
  cursor: pointer;
}

a {
  color: #42b983;
}
.finished{
    color: red
}
</style>
