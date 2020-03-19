<template>
  <div>
    <van-list v-model="loading" 
    :finished="finished" 
    finished-text="没有更多了" 
    @load="onLoad">

      <van-cell v-for="item in list" 
      :key="item.id" 
      @click="handleItemClick(item.id)">

        <div class="item">
          <div class="left">
            <img :src="item.image" />
          </div>

          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="create_time">{{item.create_time}}</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { List, Cell, Toast } from "vant";
import moment from "moment";

export default {
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    handleItemClick(uid) {
      console.log(uid);

      this.$router.push({
        path: "/detail",
        query: {
          id: uid
        }
      });
    },

    onLoad() {
      fetch("/article/list")
        .then(res => res.json())
        .then(res => {
          if (res.status === 200) {
            this.loading = false;
            this.finished = true;
            
            // 处理返回的时间格式
            this.list = res.data.map(item => {
              if (item.create_time) {
                item.create_time = moment(item.create_time).format(
                  "YYYY-MM-DD HH:mm:ss"
                );
              }
              return item;
            });
          } else {
            Toast.fails(res.msg);
          }
        });
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
}

.item .left, .item img {
  height: 100px;
  width: 150px;
  border-radius: 10px;
}

.item .right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
}

.item .right .title {
  font-size: 18px;
}

.item .right .create_time {
  font-size: 12px;
  color: #9e9e9e;
}
</style>