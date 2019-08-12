<template>
  <div @click="handler">
    hello 2
  </div>
</template>

<script lang="ts">
import { Inject, Vue, Prop, Component } from 'vue-property-decorator';

@Component
class HelloWorld extends Vue {
  name:string = 'HelloWorld';
  // eslint-disable-next-line no-undef
  @Inject() obj!:object;
  @Prop({
    type: String,
    required: false,
    default: ''
    }) dd!:string;
  // props =  {
  //   msg: String
  // }
  handler () {
    console.log(this.dd);

  }
  mounted () {
    console.log(this.obj);
  }
}
export default HelloWorld
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
