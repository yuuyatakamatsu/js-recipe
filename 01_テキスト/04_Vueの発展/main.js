// Vue.createApp() がたくさんありますが、驚かないでください
// Vue はページの一部分に適用できるので、1ページにいっぱいあっても大丈夫です

const vIf = {
  data() {
    return {
      seen: false,
    }
  },
  methods: {
    hyouji: function () {
      this.seen = true
    },
  },
}

Vue.createApp(vIf).mount("#v-if")

const vIfSignIn = {
  data() {
    return {
      user: null,
    }
  },
  methods: {
    signIn() {
      this.user = {
        name: "ギーク太郎",
      }
    },
    signOut() {
      this.user = null
    },
  },
}

Vue.createApp(vIfSignIn).mount("#v-if-sign-in")

const vFor = {
  data() {
    return {
      animals: ["ふらみんご", "ごりら", "らいおん"],
    }
  },
}

Vue.createApp(vFor).mount("#v-for")

const vForPush = {
  data() {
    return {
      animals: ["ふらみんご", "ごりら", "らいおん"],
    }
  },
  methods: {
    addAnimal: function () {
      this.animals.push("んらいおん")
    },
  },
}

Vue.createApp(vForPush).mount("#v-for-push")

const vBind = {
  data() {
    return {
      helloClass: "hello",
    }
  },
}

Vue.createApp(vBind).mount("#v-bind")

const computed = {
  data() {
    return {
      items: [
        {
          name: "りんご",
          price: 150,
          amount: 3,
        },
        {
          name: "みかん",
          price: 100,
          amount: 5,
        },
        {
          name: "ぶどう",
          price: 400,
          amount: 1,
        },
      ],
    }
  },
  computed: {
    totalPrice: function () {
      let price = 0
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].price * this.items[i].amount
      }
      return price
    },
  },
}

Vue.createApp(computed).mount("#computed")

const computedRecalculate = {
  data() {
    return {
      items: [
        {
          name: "りんご",
          price: 150,
          amount: 3,
        },
        {
          name: "みかん",
          price: 100,
          amount: 5,
        },
        {
          name: "ぶどう",
          price: 400,
          amount: 1,
        },
      ],
    }
  },
  computed: {
    totalPrice: function () {
      let price = 0
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].price * this.items[i].amount
      }
      return price
    },
  },
  methods: {
    addItem: function (item) {
      item.amount += 1
    },
  },
}

Vue.createApp(computedRecalculate).mount("#computed-recalculate")

const vModel = {
  data() {
    return {
      inputValue: "",
    }
  },
}

Vue.createApp(vModel).mount("#v-model")

const created = {
  data() {
    return {
      inputValue: "",
      memo: "",
    }
  },
  created: function () {
    const storedMemo = localStorage.memo
    if (storedMemo) {
      this.memo = storedMemo
    }
  },
  methods: {
    save: function () {
      localStorage.memo = this.inputValue
    },
  },
}

Vue.createApp(created).mount("#created")
