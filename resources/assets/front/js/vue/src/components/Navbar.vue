<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
    <b-container>
      <b-navbar-brand to="/">My Site</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Directives</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/events">Events</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/todo-list"
              >Todo list</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/courses">Courses</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/location-manager">
              Location manager
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/course-manager">
              Course manager
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/course-request">
              Course request
            </router-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
