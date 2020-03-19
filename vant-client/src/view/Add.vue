<template>
  <div>
    <van-uploader v-model="fileList" :after-read="afterRead" :max-count="1" />

    <van-cell-group>
      <van-field v-model="title" label="文章标题" placeholder="文章标题" />
      <van-field v-model="summary" label="文章摘要" placeholder="文章摘要" />
      <van-field v-model="content" label="文章内容" type='textarea' autosize placeholder="文章内容" />
    </van-cell-group>

    <van-button type="primary" @click="handleAdd" class="add-button">提交</van-button>
  </div>
</template>

<script>
import { Field, Button, CellGroup, Uploader, Toast } from 'vant';

export default {
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [Uploader.name]: Uploader,

  },

  data() {
    return {
      fileList: [],

      title: "",
      summary: "",
      content: "",
      image: ""
    };
  },


  methods: {
    afterRead(file) {
      console.log(file);
      // this.image = file.content
    },

    handleAdd(){
      const data = {
        title: this.title,
        summary: this.summary,
        content: this.content,
        image: this.image,
      }
      fetch('/article/create', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(res=>{
        if(res.status===200){
          Toast.success("文章发布成功");
          this.$router.push('/');
        }else{
          Toast.fail(res.msg);
        }
      })
      console.log(data);
    }

  }
};
</script>

<style scoped>
.add-button{
  position: absolute;
  left: 0;
  bottom: 80px;
  width: 100%
}
</style>