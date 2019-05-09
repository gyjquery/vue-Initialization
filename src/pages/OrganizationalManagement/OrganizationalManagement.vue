<template>
    <div class="one">
      <div class="two"></div>
      <NewTime/>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import NewTime from "../../components/NewTime"
    export default {
        name: "OrganizationalManagement",
        data(){
            return{

            }
        },
        methods:{

        },
        computed: {
            ...mapState({
              organizationalManagement: state => state.organizationalManagement
            })
        },
        mounted(){
          this.$store.dispatch("unionInstitution",{name:"asdsa"})
            .then(()=>{
                console.log(this.organizationalManagement)
            })
        },
      components: {
        NewTime
      }

    }
</script>

<style  lang="less">
 @import "../../../static/css/rem";
  div.one{
    width: 375/@rem;
    height: 300/@rem;
    background: #f00;
  }
</style>
