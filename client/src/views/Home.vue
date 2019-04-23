<template>
  <div class="home">
    <input autocomplete="off" v-model="inputVal" />
    <button @click="clickButton">Send</button>
    <ul>
      <li v-for="(item, index) in messagesList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font: 13px Helvetica, Arial;
}
form {
  background: #000;
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
form input {
  border: 0;
  padding: 10px;
  width: 90%;
  margin-right: 0.5%;
}
form button {
  width: 9%;
  background: rgb(130, 224, 255);
  border: none;
  padding: 10px;
}
#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages li {
  padding: 5px 10px;
}
#messages li:nth-child(odd) {
  background: #eee;
}
</style>
