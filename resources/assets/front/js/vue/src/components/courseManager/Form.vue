<template>
  <form class="shadow p-3 my-3" @submit.prevent="handleSubmit">
    <h2>Create Course</h2>
    <b-row>
      <b-col cols="5">
        <b-form-group label="Title" label-for="title">
          <b-form-input
            id="title"
            v-model="title"
            :disabled="!locationsExist"
          />
        </b-form-group>
        <div v-if="errors.title.length > 0">
          <div
            class="text-danger"
            v-for="(message, i) in errors.title"
            :key="i"
          >
            {{ message }}
          </div>
        </div>

        <b-row>
          <b-col cols="12">
            <b-form-group label="Locations" v-if="locationsExist">
              <b-form-checkbox-group>
                <div
                  v-for="{ id, title } in locations"
                  :key="id"
                  class="my-checkbox-container"
                >
                  <div
                    :class="{
                      'my-checkbox': true,
                      checked: selectedLocations.includes(id),
                    }"
                    @click="handleLocationsChange(id)"
                  ></div>
                  <label
                    class="form-check-label ml-2"
                    @click="handleLocationsChange(id)"
                  >
                    {{ title }}
                  </label>
                </div>
              </b-form-checkbox-group>
            </b-form-group>
            <div v-if="errors.selectedLocations.length > 0">
              <div
                class="text-danger"
                v-for="(message, i) in errors.selectedLocations"
                :key="i"
              >
                {{ message }}
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="7">
        <b-form-group label="Description" label-for="description">
          <b-form-textarea
            id="description"
            rows="5"
            v-model="description"
            :disabled="!locationsExist"
          />
          <div v-if="errors.description.length > 0">
            <div
              class="text-danger"
              v-for="(message, i) in errors.description"
              :key="i"
            >
              {{ message }}
            </div>
          </div>
        </b-form-group>
        <b-row>
          <b-col cols="8">
            <b-alert variant="danger w-100 mb-0" :show="!locationsExist">
              {{ error }}
            </b-alert>
          </b-col>
          <b-col cols="4">
            <div class="d-flex align-items-end h-100">
              <b-button
                variant="success w-100"
                size="lg"
                type="submit"
                :disabled="!locationsExist"
              >
                Create Course
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Form',
  created() {},
  data() {
    return {
      title: '',
      description: '',
      selectedLocations: [],
      errors: {
        title: [],
        description: [],
        selectedLocations: [],
      },
    };
  },
  methods: {
    ...mapActions('courses', ['createCourse']),
    handleLocationsChange(id) {
      const ii = this.selectedLocations.indexOf(id);
      if (ii >= 0) {
        if (this.selectedLocations.length > 1) {
          this.selectedLocations.splice(ii, 1);
        }
      } else {
        this.selectedLocations.push(id);
      }
    },
    handleCoursesChange(id) {
      const ii = this.selectedCourses.indexOf(id);
      if (ii >= 0) {
        this.selectedCourses.splice(ii, 1);
      } else {
        this.selectedCourses.push(id);
      }
    },
    handleSubmit() {
      if (this.validate()) {
        this.createCourse({
          title: this.title,
          description: this.description,
          locations: this.selectedLocations,
        });
        this.title = '';
        this.description = '';
        this.selectedLocations = [];
      }
    },
    validate() {
      this.errors = {
        title: [],
        description: [],
        selectedLocations: [],
      };
      if (this.selectedLocations.length === 0) {
        this.errors.selectedLocations.push('You must select at least one location');
      }
      if (this.title.length === 0) {
        this.errors.title.push('Title is required');
      }
      if (this.description.length === 0) {
        this.errors.description.push('Description is required');
      }
      //  Kitų laukų validacija
      return Object.values(this.errors).every((fieldErrors) => fieldErrors.length === 0);
    },
  },
  computed: {
    ...mapGetters({
      locations: 'locations/getLocationTitlesAndIds',
    }),
    locationsExist() {
      return this.locations.length > 0;
    },
    error() {
      return !this.locationsExist ? 'Please create locations first.' : '';
    },
  },
};
</script>

<style lang="scss" scoped>
.my-checkbox-container {
  margin-bottom: 0.25rem;
  & > *:hover {
    cursor: pointer;
  }
}

.my-checkbox {
  position: relative;
  display: inline-block;
  height: 18px;
  width: 18px;
  box-shadow: 0 0 1px 1px grey;
  border-radius: 3px;
  &.checked {
    box-shadow: 0 0 0 3px #4343ff3a;
    background: rgb(0, 81, 255);
    &:after {
      content: "";
      position: absolute;
      left: 6px;
      top: 3px;
      width: 6px;
      height: 10px;
      border-right: 3px solid #fff;
      border-bottom: 3px solid #fff;
      transform: rotate(45deg);
    }
  }
}
</style>
