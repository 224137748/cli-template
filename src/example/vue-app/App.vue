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
      <div>
        <h2>Vuex计数器:{{ count }}</h2>
        <button @click="handleClick">按钮</button>
      </div>
      <div>
        <h2>router</h2>
        <router-link class="link-btn" to="/" tag="a">home</router-link>
        <router-link class="link-btn" to="/detail" tag="a">datail</router-link>
        <div class="router-wrap">
          <router-view />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";

/** vuex示例 */
function vuexExample() {
  const store = useStore();
  const count = computed(() => store.state.count);
  const handleClick = () => {
    // console.log(33);
    store.commit("UPDATE_COUNT");
  };

  return { handleClick, count };
}

/** axiso 示例 */
function axiosExample() {
  const state = reactive({
    keywords: "",
    list: [],
  });
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
    state,
    handleSearch,
  };
}

export default {
  name: "app",
  components: {
    HelloWorld,
  },
  setup: () => {
    const { count, handleClick } = vuexExample();
    const { state, handleSearch } = axiosExample();

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
  min-height: 300px;
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
.link-btn {
  margin: 20px;
}
.router-wrap {
  padding: 20px;
  border: 1px solid;
  margin-top: 10px;
}
</style>
