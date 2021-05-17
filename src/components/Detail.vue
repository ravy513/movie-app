<template>
<div class="row">
    <div class="col-md-10">
  <div v-if="detail">
    <div class="media">
        <div class="mr-3">
        <router-link class="link text-center" :to="{ name: 'home'}">BACK TO LIST</router-link>

      <img  :src="detail.Poster" alt="Generic placeholder image" />
      </div>
      <div class="media-body">
        <h5 class="mt-0">{{ detail.Title }}</h5>
        <div v-for="rec in key" :key="rec">
            <strong>{{ rec }}: </strong>{{detail[rec]}}
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>

</template>
<script>
import store from "@/store";

export default {
  data() {
    return {
      detail: null,
      key :[],
    };
  },
  created() {
    const recID = this.$route.params?.id;
    if (recID) {
      const records = store.state.appStore.records;
      if (records && records.length > 0) {
        this.detail = records.find((item) => item.imdbID == recID);
        this.key = Object.keys(this.detail);
        let index = this.key.indexOf('Poster');
        if (index > -1) {
        this.key.splice(index, 1);
        }
        index = this.key.indexOf('Title');
        if (index > -1) {
        this.key.splice(index, 1);
        }
      }
      //   store.dispatch('appStore/getDetail').then(response=>{
      //       if(response.data){
      //           this.detail = response.data
      //       }
      //   })
      //   .catch(error=>console.log(error))
    }
  },
  setup() {},
};
</script>
<style scoped>
.link{
    margin-bottom:10px;
}
/*.media-body { max-width: 40%;}*/
</style>