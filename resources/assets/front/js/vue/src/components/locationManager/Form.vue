<template>
  <b-card
    :class="{
      shadow: true,
      'border-success': !isEdited,
      'border-warning': isEdited,
    }"
  >
    <h2 class="h4">{{ formAction }}</h2>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group label="Location" label-for="location">
        <b-form-input
          id="location"
          v-model="locationTitle"
          type="text"
          placeholder="Vievis"
          required
        />
      </b-form-group>
      <div class="text-center">
        <b-button type="submit" :variant="isEdited ? 'warning' : 'success'">
          {{ formAction }}
        </b-button>
      </div>
    </b-form>
  </b-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Form',
  data() {
    return {
      locationTitle: '',
    };
  },
  watch: {
    editedLocation(newEditedLocation) {
      if (newEditedLocation) {
        this.locationTitle = newEditedLocation.title;
      } else {
        this.locationTitle = '';
      }
    },
  },
  methods: {
    handleSubmit() {
      if (this.isEdited) {
        this.updateLocation({ title: this.locationTitle });
      } else this.createLocation(this.locationTitle);
    },
    ...mapActions('locations', ['updateLocation', 'createLocation']),
  },
  computed: {
    ...mapGetters('locations', {
      isEdited: 'getLocationIsEdited',
      editedLocation: 'getEditedLocation',
    }),
    formAction() {
      return `${this.isEdited ? 'Update' : 'Create'} Location`;
    },
  },
};
</script>
