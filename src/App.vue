/* eslint-disable no-sequences */
<template>
  <div id="app">
    <div class="container">
      <form id="contact" action="" method="post" @submit.prevent="submit">
        <h1 class="fieldset">Contact Form</h1>
        <fieldset>
          <input
            placeholder="Your name"
            name="name"
            v-model="name"
            :minlength="5"
            :maxlength="50"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            name="email"
            placeholder="Your Email Address (must have @domain.com)"
            type="email"
            v-model="email"
            tabindex="2"
            required
            pattern='(\W|^)[\w.\-]{0,25}@(!yahoo|!hotmail|!gmail|domain)\.com(\W|$)'

          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Subject title (optional)"
            :maxlength="100"
            v-model="subject"
            type="text"
            name="subject"
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your message here...."
            name="message"
            v-model="message"
            :maxlength="500"
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Send
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    submit() {
      const resource = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };
      axios
        .post(
          'https://5d9f7fe94d823c0014dd323d.mockapi.io/api/message',
          resource,
        )
        .then((res) => {
          this.status = `Response ${res.data}`;
          // eslint-disable-next-line no-alert
          alert(res);
          setTimeout(() => {}, 2000);
          // eslint-disable-next-line no-console
          this.reset();
        })
        .catch((e) => {
          // eslint-disable-next-line no-alert
          alert(e.response.data);
          setTimeout(() => {}, 2000);
          // eslint-disable-next-line no-console
        });
    },

    reset() {
      // eslint-disable-next-line no-sequences
      // eslint-disable-next-line no-unused-expressions
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    },

    pattern() {
      const blacklisted = ['gmail.com', 'org', 'net'];
      const domain = this.email.split('@').slice(1);

      if (domain.inArray(domain[0], blacklisted) !== -1) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

html,
#app,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  /*background: #4CAF50;*/
}

.container {
  max-width: 400px;
  width: 100%;
  margin: auto;
  position: relative;
}

.register-tabs-container {
  min-height: 517px;

  /* .con-tab {
    padding-bottom: 23px;
  } */
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
  background: #f9f9f9;
  padding: 25px;
  margin: 150px 0;
  /*box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);*/
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #4caf50;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #43a047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
</style>
