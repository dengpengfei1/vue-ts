<template>
  <div id='app'>
    <HelloWorld dd="dd"></HelloWorld>
    <button @click='handler'>click</button>
  </div>
</template>

<script lang='ts'>
import HelloWorld from './components/HelloWorld.vue';
import { Vue, Component, Provide } from 'vue-property-decorator';

interface Person {
  getName(): string;
  getAge(): number;
}

function setDesc(desc: string) {
  return function(target) {
    target.prototype.desc = desc;
  };
}

@setDesc('a')
class P implements Person {
  name: string = 'aa';
  age: number = 10;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

@Component({
  components: {
    HelloWorld
  }
})
class App extends Vue {
  man: any = null;
  // eslint-disable-next-line no-undef
  @Provide() obj: object = {flag: true};
  handler() {
    this.man = new P('t', 2);
    // eslint-disable-next-line no-console
    console.log(this.man.getAge());
  }
  mounted() {
    // eslint-disable-next-line no-console
    console.log(324);
  }
}

export default App;
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
