<template>
  <div v-if="records.length">
        
    <div class="row">
      <div v-for="item in $store.state.appStore.records" :key="item.Title" class="col-md-4">
        <div class="card" style="width: 18rem">
          <img v-if="item.Poster!='N/A'" class="card-img-top" :src="item.Poster" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{item.Title}}</h5>
            <p class="card-text">
             {{getDesc(item)}}
            </p>
            <router-link class="link text-center" :to="{ name: 'detail', params: { id: item.imdbID }}">Find out more</router-link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import store from "@/store";
import jsonRecords from '../records';
export default {
  methods: {
        getDesc(item){
             // return (item.Plot.substring(0,50) + '...')
             return item.Type;
        }
  },
  created() {
    store
      .dispatch("appStore/fetchData")
      .then((result) => {
        if (result.data.Response === "False") {
          this.records =jsonRecords.Search
          store.commit('appStore/MEMBER_DATA', jsonRecords)
        } else{
          this.records =result.data.Search
          store.commit('appStore/MEMBER_DATA', result.data.Search)

        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      records: [],
    };
  },

  setup() {},
};
</script>