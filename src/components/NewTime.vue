<template>
  <div >
    天天快乐
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "NewTime",
    data(){
      return{

      }
    },
    methods:{

    },
    computed: {
      ...mapState({
        NewData: state => state.organizationalManagement.newData
      })
    },
    mounted(){
      this.$store.dispatch("union",{age:"456"})
        .then(()=>{
             console.log(this.NewData)
        })
    },
    components: {

    }

  }
</script>

<style scoped lang="less">
  div{
    width: 5rem;
   background: #ff0;
    height: 4rem;
  }
</style>
