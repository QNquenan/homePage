<template>
  <div id="app">
    <div class="bgGrid">
      <div class="Grid">
        <div class="mask"></div>
        <div class="itemGrid-row" v-for="i in gridRows" :key="i">
          <div class="itemGrid-cols" v-for="j in gridCols" :key="j"></div>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="info">
        <div class="header">
          <img src="https://i.p-i.vip/43/20240913-66e403f2331ec.webp" alt="">
        </div>

        <div class="infoText">
          <h1>Hi,</h1>
          <h1>I'm <span class="qn">鹊楠</span></h1>
        </div>
      </div>

      <div class="typewriter">
        <i class="fa-solid fa-quote-left"></i>
        <vue-typed-js class="desc" :strings="typingTexts" :loop="true" :startDelay="300" :typeSpeed="100"
          :backSpeed="50">
          <span class="typing"></span>
        </vue-typed-js>
        <i class="fa-solid fa-quote-right"></i>
      </div>

      <div class="btns">
        <vs-button color="#fe8599" animation-type="scale" href="https://blog.quenan.love" blank>
          <i class="fa-solid fa-blog"></i>

          <template #animate>
            博客
          </template>
        </vs-button>

        <vs-button color="#000" animation-type="scale" href="https://github.com/QNquenan" blank>
          <i class="fa-brands fa-github"></i>

          <template #animate>
            Github
          </template>
        </vs-button>

        <vs-button color="#0BA6D8" animation-type="scale" href="https://space.bilibili.com/495882959" blank>
          <i class="fa-brands fa-bilibili"></i>

          <template #animate>
            BiliBili
          </template>
        </vs-button>

        <vs-button color="#FACB1E" animation-type="scale" href="mailto:qn2987271942@outlook.com" blank>
          <i class="fa-solid fa-envelope"></i>

          <template #animate>
            E-meil
          </template>
        </vs-button>

        <vs-button color="#D81E06" animation-type="scale"
          href="https://music.163.com/#/playlist?id=2696501847&creatorId=1785635020" blank>
          <i class="fa-solid fa-music"></i>

          <template #animate>
            网易云
          </template>
        </vs-button>

        <vs-button color="#D81E06" animation-type="scale" @click="active = !active">
          <i class="fa-solid fa-info"></i>

          <template #animate>
            关于
          </template>
        </vs-button>

      </div>
    </div>

    <div class="footer">
      All Rights Reserved To ©Quenan | 2024
    </div>


    <vs-dialog blur width="550px" not-center v-model="active">
      <template #header>
        <h4 class="not-margin">
          关于本站
        </h4>
      </template>

      <div class="con-content">
        <p>本站基于 <b>Vue2</b> 和 <b>Vuesax</b> 框架构建！</p>
        <p>你可以从这里前往 <b>我的博客、GitHub、哔哩哔哩、网易云歌单</b> 以及给我发 <b>邮件</b> ！</p>
        <p>本项目借鉴了
          <b><a href="https://pzj.us.kg/">pzjawa</a></b> 、
          <b><a href="https://www.liushen.fun/sites/">清羽飞扬</a></b>
          等主页，感谢他们awa
        </p>
        <p>项目已经开源：<a href="https://github.com/QNquenan/homePage">https://github.com/QNquenan/homePage</a></p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button color="#fe8599" animation-type="scale" @click="versions" border flat>
            当前版本
          </vs-button>
          <vs-button color="#fe8599" animation-type="scale" @click="active = false">
            知道啦
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      typingTexts: [
        "你好鸭，欢迎来到我的主页！",
        "彼方尚有荣光在，世界不止眼前的苟且，还有诗和远方",
        "累了可以在我这里歇歇脚嗷",
        "May you happy every day",
      ],
      gridRows: 9, // 控制列数
      gridCols: 5, // 控制行数
      active: false,
      upTime: '2024-9-14',
      version: 'beta1'
    }
  },
  mounted() {

  },
  methods: {
    versions() {
      this.$vs.notification({
        icon: '<i class="fa-solid fa-info"></i>',
        color: '#FE8599',
        position: 'top-center',
        title: '当前的版本',
        text: `现在是 <b>${this.upTime}</b> 更新的 <b>${this.version}</b>`
      })
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  font-family: JetBrainsMomo !important;
}

@font-face {
  font-family: JetBrainsMomo;
  font-display: swap;
  src: url('/src/assets/fonts/JetBrainsMono-Medium.woff2');
}

@media screen and (max-width: 762px) {
  #app {
    .bgGrid {
      .Grid {
        .itemGrid-row {
          .itemGrid-cols {
            width: 60px !important;
            height: 60px !important;
          }
        }

        .mask {
          height: 110% !important;
        }
      }
    }

    .main {
      background-size: cover !important;
      background-position: -20em !important;

      .typewriter {
        text-shadow: 0 0 10px #fff;
      }

      .info {
        flex-direction: column;
        align-items: center;

        .header {
          margin: 0 0 1em 0;
        }
      }
    }
  }
}

#app {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  .vs-dialog {
    .vs-dialog__header {
      padding: 20px 16px;

    }

    .vs-dialog__content {

      p {
        margin: 5px 0;
      }

      a {
        /* 清除超链接样式 */
        text-decoration: none;
        /* 更改初始颜色 */
        color: #000;
        /* 设置过渡动画 */
        transition: all 0.3s;
        /* 设置相对定位 */
        position: relative;
      }

      a::before {
        /* 设置一个填充让伪元素正常渲染 */
        content: " ";
        /* 设置绝对定位 */
        position: absolute;
        /* 设置底部距离 */
        bottom: -3px;
        /* 设置宽度 */
        width: 100%;
        /* 设置高度 */
        height: 2px;
        /* 设置过渡动画 */
        transition: all 0.3s;
        /* 设置水平方向缩放比例 */
        transform: scaleX(0);
        /* 设置背景 */
        background: rgb(255, 133, 153);
      }

      a:hover {
        /* 设置鼠标接触时颜色 */
        color: rgb(255, 133, 153);
      }

      a:hover::before {
        /* 设置比例为1，使其显示 */
        transform: scaleX(1);
      }
    }

    .vs-dialog__footer {
      margin: 10px 0 0;

      .con-footer {
        display: flex;
        justify-content: flex-end;
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 1em;
    width: 100%;
    text-align: center;
    text-shadow: 0 0 10px #fff;
  }

  .bgGrid {

    .Grid {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      right: 0;

      .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        background-image: linear-gradient(to top right, #fff 50%,
            rgb(255 255 255 / 0) 100%);
      }

      .itemGrid-row {
        .itemGrid-cols {
          width: 88px;
          height: 88px;
          border-left: 1px dashed;
          border-bottom: 1px dashed;
        }
      }
    }
  }

  .main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: no-repeat url(./assets/img/bg.webp);
    background-size: contain;
    background-position: left;

    .btns {
      display: flex;

      .vs-button {
        width: 4em;
      }

      svg {
        height: 1.8em;
      }
    }

    .typewriter {
      display: flex;
      margin-bottom: 2em;

      .desc {
        margin: 0 1em;
      }
    }

    .info {
      display: flex;
      margin-bottom: 2em;

      .infoText {
        margin-left: 2em;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        font-size: 1.3em;

        .qn {
          position: relative;

          &::before {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;
            content: '';
            background: #fe859994;
            height: 30%;
            width: 110%;
            display: inline-block;
          }
        }
      }

      .header {
        width: 9em;
        height: 9em;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          background: green;
          width: 1.2em;
          height: 1.2em;
          border-radius: 50%;
          border: 3px solid #ffffff;
          bottom: 0;
          right: 20px;
        }

        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          border: 3px #fff solid;
          box-shadow: 0 0 15px 6px #ffb3b3;
        }
      }
    }
  }
}
</style>
