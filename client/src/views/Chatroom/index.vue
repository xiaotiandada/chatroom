<template>
  <div class="chatroom">
    <div class="chatroom-content">
      <ul>
        <li v-for="(item, index) in messagesList" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="chartroom-input">
      <input autocomplete="off" v-model="inputVal" />
      <button @click="clickButton">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chatroom",
  data() {
    return {
      inputVal: "",
      messagesList: []
    };
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    customEmit: function(data) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)'
      );
    },
    chatmessage(messages) {
      console.log(messages);
      this.messagesList.push(messages);
    }
  },
  methods: {
    clickButton: function(data) {
      console.log(data);
      // $socket is socket.io-client instance
      this.$socket.emit("chatmessage", this.inputVal);
      this.inputVal = "";
    }
  }
};
</script>
