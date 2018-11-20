<template>
    <div>12345</div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        name: "OrganizationalManagement",
        data(){
            return{

            }
        },
        methids:{

        },
        computed: {
            ...mapState({
                queryDate: state => state.organizationalManagement.queryDate
            })
        },
        mounted(){
          this.$store.dispatch("unionInstitution")
            .then(()=>{
              console.log(1111)
            })
        }
    }
</script>

<style lang="less" scoped>

</style>
