<template>
  <div class="detail">
    <div class="title">{{detail.title}}</div>
    <div class="create-time">{{detail.create_time}}</div>
    <div class="summary">{{detail.summary}}</div>
    <div class="content">{{detail.content}}</div>
  </div>
</template>

<script>
import moment from "moment";
import { Toast } from 'vant';

export default {
  data() {
    return {
      detail: {}
    };
  },

  created() {
    fetch("/article/detail/" + this.$route.query.id)
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          this.detail = res.data;
          this.detail.create_time = this.detail.create_time
            ? moment(this.detail.create_time).format("YYYY-MM-DD HH:mm:ss")
            : undefined;
        } else {
          Toast.fail(res.msg);
        }
      });
  }
};
</script>

<style scoped>
.detail {
  padding: 20px;
  text-align: left;
}
.detail .title {
  font-size: 25px;
  margin-bottom: 20px;
}
.detail .create-time {
  text-align: right;
  color: #9e9e9e;
  margin-bottom: 20px;
}

.detail .summary {
  padding: 20px;
  background: #dcdcdc;
  margin-bottom: 20px;
}

.detail .content {
  text-indent: 2em;
  line-height: 200%;
}
</style>