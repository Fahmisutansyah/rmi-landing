<template>
  <div class="contact-form">
    <div class="section-title">
      <h2>Let's talk...</h2>
    </div>
    <form>
      <div class="row">
        <div class="col-md-6">
          <label>Your Name*</label>
          <input placeholder="Your Full Name" type="text" v-model="form.name"/>
        </div>
        <div class="col-md-6">
          <label>Email Address*</label>
          <input placeholder="E-mail Address" type="email" v-model="form.email"/>
        </div>
        <div class="col-12">
          <label>Company*</label>
          <input placeholder="Company Name" type="text" v-model="form.company"/>
        </div>
        <div class="col-12">
          <label>Message*</label>
          <textarea
            cols="30"
            id="message"
            name="message"
            placeholder="Write Here"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div>
          <button class="theme-btn" @click="fetchFb">Send Now</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from '../../utils/firebase'
import {doc, setDoc, Timestamp} from 'firebase/firestore'

export default {
  data(){
    return {
      form:{ 
        name: "",
        email: "",
        company: "",
        message: ""
      },
      validation: {
        name: false,
        email: false,
        company: false,
        message: false
      }
    }
  },
  methods:{
    async fetchFb(e){
      e.preventDefault()
      const serverTime = Timestamp.fromDate(new Date())
      // EPOCH TIME
      const time = new Date(serverTime.seconds*1000).valueOf().toString()
      const str = `Hello RMI! My name is ${this.form.name} from ${this.form.company}. Here's my message:\n${this.form.message}`
      const uri = encodeURI(str)
      await setDoc(doc(db, 'contacts', time), this.form)
      window.open(`https://api.whatsapp.com/send?phone=6281285959576&text=${uri}`)
      // const querySnapshot = await getDocs(collection(db, 'contacts'))
    }
  }
}
</script>
