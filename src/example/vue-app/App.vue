<template>
  <div>
    <hello-world :msg="'你好啊，李银河！'" />
    <section>
      <div>
        <input
          class="search-input"
          type="text"
          placeholder="请输入歌手、歌名"
          v-model="keywords"
          @keyup.enter="handleSearch"
        />
        <button @click="handleSearch">搜索</button>
      </div>
      <ul class="song-list" v-if="list.length">
        <li class="song-item" v-for="(item, index) in list.slice(0, 15)" :key="item.id">
          <span class="index">{{ index + 1 }}</span>
          <span class="song-name">{{ item.name }}</span>
          <span class="song-artist" v-if="item.artists.length">{{
            " -- " +
            (item.artists.length > 1
              ? item.artists.reduce((acc, cur) => `${acc.name ?? ""} & ${cur.name}`)
              : item.artists[0].name)
          }}</span>
        </li>
      </ul>
    </section>

    <hr />
    <section>
      <h2>{{ count }}</h2>
      <button @click="handleClick">按钮</button>
    </section>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "app",
  components: {
    HelloWorld,
  },
  setup: () => {
    const count = ref(0);
    const state = reactive({
      keywords: "",
      list: [],
    });

    const handleClick = () => {
      count.value++;
    };

    const handleSearch = async () => {
      const value = state.keywords;
      if (value) {
        const { data: res } = await axios.get(`/api/search?keywords=${value}`);
        if (res?.result && res?.result?.songs) {
          state.list = res.result.songs || [];
        }
      } else {
        state.list = [];
      }
    };

    return {
      count,
      ...toRefs(state),
      handleClick,
      handleSearch,
    };
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
section {
  min-height: 400px;
  padding: 20px;
}
.search-input {
  line-height: 32px;
  margin: 10px;
  padding: 0 6px;
  outline: none;
}
.song-item {
  line-height: 26px;
  padding-left: 20px;
  list-style: none;
}
.index {
  display: inline-block;
  min-width: 20px;
  text-align: center;
  margin-right: 10px;
}
</style>
