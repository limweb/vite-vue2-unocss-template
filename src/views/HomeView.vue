<template>
  <div max-w-2xl mx-auto>
    <div flex bg-blue-500 text-white p-16 rounded-xl shadow="2xl blue-500/50">
      <div>
        <h1>Hi,Maokai</h1>
        <p>我朋友说再当舔狗就打断我的腿，幸好是腿，要是手的话，就没办法和你聊天了，宝。</p>
        <a href="https://juejin.cn/user/1838039173968382">
          <button rounded-full border-none bg-white p-3 mb-5 shadow="xl indigo-500/50" hover="scale-120 shadow-2xl" transition cursor-pointer>
            掘金个人主页
          </button>
        </a>
        <div flex space-x-4>
          <i class="i-bi-windows" />
          <i class="i-bi-chat-right-dots-fill" />
          <i class="i-bi-github" />
        </div>
      </div>
      <div flex items-center>
        <div flex w-32 h-32 items-center justify-center rounded-full bg-white shadow="xl indigo-500/50">
          <i class="i-bi-person-heart" text="gray 7xl" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'HomeView'
    }
</script>