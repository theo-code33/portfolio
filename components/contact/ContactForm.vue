<template>
      <form
        v-on:submit.prevent="sendMessage"
        class="contact-form"
      >
        <div>
          <label for="full_name">Nom</label>
          <input
            v-model="name"
            required
            name="name"
            id="full_name"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            required
            v-model="email"
            name="email"
            id="email"
            type="email"
            placeholder="john.doe@gmail.com"
          />
        </div>
        <div>
          <label for="subject">Sujet</label>
          <select v-model="subject" name="subject" id="subject">
            <option value="" selected disabled>Sélectionnez votre sujet</option>
            <option value="Développement d'un site Wordpress">Développement d'un site Wordpress</option>
            <option value="Développement d'un site Prestashop">Développement d'un site Prestashop</option>
            <option value="Développement d'une web application">Développement d'une web application</option>
            <option value="Développement d'une landing page">Développement d'une landing page</option>
            <option value="Maintenance d'un site web">Maintenance d'un site web</option>
            <option value="Développement d'un module wordpress ou prestashop">Développement d'un module wordpress ou prestashop</option>
            <option value="Autre demande">Autre demande</option>
          </select>
        </div>
        <div>
          <label for="message">Message</label>
            <textarea
              required
              v-model="message"
              name="message"
              id="message"
              rows="4"
              placeholder="Rentrez votre message"
              maxlength="2000"
            ></textarea>
        </div>
        <button
          type="submit"
        >
          {{ loading ? "En cours d'envoie..." : "Envoyer" }}
        </button>
        <span v-if="success" class="success">
          Merci pour votre message, je vous répondrai dans les plus brefs délais.
        </span>
        <span v-if="errored" class="error">
          Une erreur est survenue, veuillez réessayer.
        </span>
      </form>
  </template>

<script>
import createAirtable from "../../database/createAirtable";

export default {
    name: "ContactForm",
    data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    async sendMessage() {
      this.loading = true;
      this.success = false;
      this.errored = false;
      try {
        const airtable = await createAirtable(this);
        this.success = true;
        this.errored = false;
        this.loading = false;
        this.name = "";
        this.email = "";
        this.subject = "";
        this.message = "";
      } catch (error) {
        this.errored = true;
        this.loading = false;
      }
    },
  }
}
</script>

<style lang="scss">
.contact-form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  div{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;

    label{
      font-size: 18px;
      font-family: "Mundial", sans-serif;
      margin-bottom: 10px;
    }
    input{
      border: none;
      border-bottom: 1px solid #707070;
      outline: none;
      font-family: "Mundial", sans-serif;
      font-size: 30px;
      padding: 10px 0;

      &::placeholder{
        color: rgba($color: #000000, $alpha: 0.5);
      }

      &:focus{
        border-bottom: 1px solid #000000;
      }
    }
    textarea{
      border: none;
      border-bottom: 1px solid #707070;
      outline: none;
      font-family: "Mundial", sans-serif;
      font-size: 30px;
      padding: 10px 0;
      resize: none;

      &::placeholder{
        color: rgba($color: #000000, $alpha: 0.5);
      }
      &:focus{
        border-bottom: 1px solid #000000;
      }
    }
    select{
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      border-bottom: 1px solid #707070;
      outline: none;
      font-family: "Mundial", sans-serif;
      font-size: 30px;
      padding: 10px 0;
      background: url("data:image/svg+xml,<svg height='20px' width='20px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
      background-position: calc(100% - 0.75rem) center !important;
      cursor: pointer;

      &:focus{
        border-bottom: 1px solid #000000;
      }
    }
  }
  button{
    border: 2px solid #000;
    outline: none;
    background-color: #000000;
    color: #FFFFFF;
    font-family: "Mundial", sans-serif;
    font-size: 20px;
    padding: 20px 60px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
      background-color: #FFF;
      color: #000;

    }
  }
  span{
    font-family: "Mundial", sans-serif;
    font-size: 20px;
    margin-top: 30px;
    text-align: center;
    display: block;
    width: 100%;
    &.success{
      color: green;
    }
    &.error{
      color: red;
    }
  }
}

@media all and (max-width: 767px) {
  .contact-form{
    input{
      font-size: 20px !important;
    }
    textarea{
      font-size: 20px !important;
    }
    select{
      font-size: 20px !important;
    }
    button{
      width: 100%;
    }
  }
}
</style>