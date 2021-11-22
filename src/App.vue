<template>
  <v-app>
    <v-system-bar
      app
      height="30"
      color="#e0e0e0"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        v-system-bar
      </v-col>
    
    </v-system-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Reactify?</v-list-item-title>
          <v-list-item-subtitle>My first Reactify webpage!</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      app
      color="#f5f5f5"

    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-col
        class="text-center"
        cols="11"
      >
        <span>First react application? Kidding, my first vue application</span>
      </v-col>
        
      
    </v-app-bar>

    <v-content
      color="#fafafa"
    >
      <ReactApplication/>
    </v-content>
    <v-footer 
      padless
      color="#f4f4f4"

      >
      <v-col
        class="text-center"
        cols="12"
      >
        <strong>v-footer</strong>
      </v-col>
    </v-footer>
    <v-bottom-navigation v-model="value">
     <h2>BOTTOM NAVIGATION</h2>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import ReactApplication from './components/ReactApplication';
export default {
  name: 'App',
  components: {
    ReactApplication,
  },
  data () {
    return{
      drawer: false,
      items: [
        { title: 'Teste'},
        { title: 'AF1'},
        { title: 'DESENVOLVIMENTO'},
        { title: 'WEB'},
        { title: 'LAB'},
      ],
      right: null,
    }
  },
};
</script>