<template>
    <div>
      <v-container>
        <v-text-field
          v-model="searchQuery"
          label="Buscar productos"
          class="mt-4"
        ></v-text-field>
  
        <v-row>
          <v-col v-for="product in filteredProducts" :key="product.id" cols="12" sm="6" md="4">
            <v-card>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-subtitle>{{ product.category }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  import api from '../api';
  
  export default {
    data() {
      return {
        products: [],
        searchQuery: '',
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter((product) =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    async created() {
      const response = await api.get('/products');
      this.products = response.data;
    },
  };
  </script>
  