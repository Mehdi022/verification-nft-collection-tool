<template class="main">
  <div>
      <div class="block text-gray-700 text-sm mx-auto" v-if="step === 1">
        <img class="mx-auto" src="/loading.gif">
      </div>
      <div class="block text-gray-700 text-sm" v-if="step === 2">
        Project not found.
      </div>
      <div class="block text-gray-700 text-sm" v-if="step === 3"> 
        <h2 class="block text-gray-700 text-2xl font-bold mb-5">{{projectName}} Users</h2>
        <div class="flex flex-wrap -mx-4 mb-8">
          <div v-if="this.allUsers.length == 0" class="px-4 mb-8">Watching for users, but do not see any so far!</div>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">
                  Wallet
                </th>
                <th class="text-left">
                  User
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="sale in allUsers"> 
                <td>{{ sale.publicKey }}</td>
                <td>{{ sale.discordName }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </div>
      <div class="block text-gray-700 text-sm mt-5" v-if="step > 2">
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
var hdate = require('human-date')

export default Vue.extend({
  data() {
    return { 
      step: 1,
      projectName: '',
      allUsers: []
    }
  },
  async mounted() {

    // Retrieve the project config based on wildcard path
    var projectName = this.$route.path.replaceAll("/users", "").replaceAll("/","")

    // retrieve project config
    try { 
      var projectConfig = await axios.get('/api/getProject?project=' + projectName)
      this.projectName = projectConfig.data.project_friendly_name
    } catch (e) {
      console.log(e) 
    }

    // retrieve verified users
    var projectUsers
    try {
      projectUsers = await axios.get('/api/getProjectHolders?project=' + projectName)
      this.allUsers = projectUsers.data
      console.log(`found ${JSON.stringify(projectUsers)} users`)
    } catch (e) {
      console.log(e)
    }

    // return not found if the project config is empty
    if (!projectUsers) {
      this.step = 2
      return
    }

    // load the user data
    this.step = 3
  }
})
</script>
