<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="@/assets/images/branding.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item to="/category" tag="router-link">
        Category
      </b-navbar-item>
      <b-navbar-item to="/by-project" tag="router-link">
        By Project
      </b-navbar-item>
      <b-navbar-item to="/about" tag="router-link">
        About
      </b-navbar-item>
    </template>

    <template slot="end"> </template>
  </b-navbar>
</template>
