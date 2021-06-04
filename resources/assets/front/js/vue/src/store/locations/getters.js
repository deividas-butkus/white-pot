export default {
  getLocationTitles: (state) => (locations) => locations
    .map((location) => state.locations.find((stateLocation) => stateLocation.id === location.id).title),

  getEditedLocationId: (state) => state.editedLocationId ?? false,

  getLocationIsEdited: (state) => !!state.editedLocationId,

  getEditedLocation: (state) => state.locations
    .find(({ id }) => id === state.editedLocationId) ?? false,

  getLocations: (state) => state.locations,

  getLocationTitlesAndIds: (state) => state.locations.map(({ id, title }) => ({ id, title })),
};
