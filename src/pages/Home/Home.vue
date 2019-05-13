<template>
   <div class="oag">
     <van-button type="primary" @click="isShow">默认按钮</van-button>
     <van-cell-group>
       <van-cell title="单元格" value="内容" />
       <van-cell title="单元格" value="内容" label="描述信息" />
         <van-field v-model="value" placeholder="请输入用户名" />
     </van-cell-group>
     <van-dialog
       v-model="show"
       :show-cancel-button="false"
       :show-confirm-button="false"
     >
         <vue-scroll :ops="ops" class="wrapper">
           <div class="eee" style="display: table">123</div>
         </vue-scroll>
     </van-dialog>

   </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        name: "Home",
        data(){
            return{
              value:"",
              show:false,
              ass:false,
              ase:false,
              ops:{

              }
            }
        },
        methods:{
          isShow(){
            this.show=true
          },

        },
        computed: {
            ...mapState({
              // organizationalManagement: state => state.organizationalManagement
            })
        },
        mounted(){
          // this.$store.dispatch("unionInstitution",{name:"asdsa"})
          //   .then(()=>{
          //     console.log(this.organizationalManagement)
          //   })
        },
      components: {

      }

    }
</script>

<style  lang="less">
 @import "../../../static/css/rem";
  .oag{
    .van-dialog{
       overflow: visible;
    }
    .xxx{
      position: absolute;
      margin-top: -20px;
      right: 0;
    }
     .acc{
       vertical-align: top;
     }
    .wrapper{
      height: 400px;
      background: blue;
      overflow: hidden;
      width: 100%;
      .__view{
        height: 400px;
        .eee{
          height: 500px;
          background: #f0f;
          width: 100%;
        }
      }

    }
  }
</style>
