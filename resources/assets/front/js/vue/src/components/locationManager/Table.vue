<template>
  <b-table
    small
    :fields="fields"
    :items="locations"
    striped
    head-variant="dark"
  >
    <template #cell(title)="data">
      {{ data.value }}
    </template>

    <template #cell(createdAt)="data">
      {{ dateStr2yyyymmdd(data.value) }}
    </template>

    <template #cell(updatedAt)="data">
      {{ dateStr2yyyymmdd(data.value) }}
    </template>

    <template #cell(actions)="data">
      <b-button
        :variant="
          isLocationEdited(data.item.id) ? 'outline-warning' : 'warning'
        "
        @click="editLocation(data.item.id)"
      >
        {{ isLocationEdited(data.item.id) ? "Cancel" : "Edit" }}
      </b-button>
      <span class="mr-1"></span>
      <b-button
        variant="danger"
        :disabled="isLocationEdited(data.item.id)"
        @click="deleteLocation(data.item.id)"
      >
        Delete
      </b-button>
    </template>
  </b-table>
</template>

<script>
import { dateStr2yyyymmdd } from '@/helpers/dateTime';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Table',
  data() {
    return {
      fields: [
        'title',
        { key: 'createdAt', label: 'Created At' },
        { key: 'updatedAt', label: 'Updated At' },
        { key: 'actions', label: 'Actions' },
      ],
    };
  },
  methods: {
    dateStr2yyyymmdd,
    ...mapActions('locations', ['deleteLocation', 'editLocation']),
    isLocationEdited(locationId) {
      return !!this.editedLocationId && locationId === this.editedLocationId;
    },
  },
  computed: {
    ...mapGetters('locations', {
      editedLocationId: 'getEditedLocationId',
      locations: 'getLocations',
    }),
  },
};
</script>
