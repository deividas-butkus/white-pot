<template>
  <ContainerLayout>
    <form @submit.prevent="handleSubmit" class="shadow p-4 mx-auto w-75 mt-5">
      <h1 class="h3">Register for course</h1>
      <b-row>
        <b-col cols="6">
          <b-form-group label="Name" label-for="name" :state="valid.name">
            <b-form-input
              id="name"
              v-model="values.name"
              :state="valid.name"
              trim
            ></b-form-input>
            <b-form-invalid-feedback>
              <div v-for="(err, i) in errors.name" :key="i">{{ err }}</div>
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group
            label="Surname"
            label-for="surname"
            :state="valid.surname"
          >
            <b-form-input
              id="surname"
              v-model="values.surname"
              :state="valid.surname"
            ></b-form-input>
            <b-form-invalid-feedback>
              <div v-for="(err, i) in errors.surname" :key="i">{{ err }}</div>
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="4">
          <b-form-group label="Email" label-for="email" :state="valid.email">
            <b-form-input
              id="email"
              v-model="values.email"
              :state="valid.email"
              trim
            ></b-form-input>
            <b-form-invalid-feedback>
              <div v-for="(err, i) in errors.email" :key="i">{{ err }}</div>
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            label="Mobile"
            label-for="mobile"
            valid-feedback="Field is valid"
            :state="valid.mobile"
          >
            <b-form-input
              id="mobile"
              v-model="values.mobile"
              :state="valid.mobile"
            ></b-form-input>
            <b-form-invalid-feedback>
              <div v-for="(err, i) in errors.mobile" :key="i">{{ err }}</div>
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group
            label="Selected Course"
            label-for="selected-course"
            valid-feedback="Field is valid"
            :state="valid.selectedCourse"
          >
            <b-form-select
              id="selected-course"
              v-model="values.selectedCourse"
              :options="possibleCourses"
              :state="valid.selectedCourse"
            ></b-form-select>
            <b-form-invalid-feedback>
              <div v-for="(err, i) in errors.selectedCourse" :key="i">
                {{ err }}
              </div>
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <div class="text-center mt-3">
        <b-button
          variant="success"
          size="lg"
          type="submit"
          :disabled="!dataIsValid"
        >
          Request Course!
        </b-button>
      </div>
    </form>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';

export default {
  name: 'CourseRequest',
  components: {
    ContainerLayout,
  },
  data() {
    return {
      values: {
        name: '',
        surname: '',
        email: '',
        mobile: '',
        selectedCourse: '',
      },
      possibleCourses: [
        {
          value: 'sd6f54654654',
          text: 'Kaunas',
        },
        {
          value: 'sd6f546rt54654',
          text: 'Vilnius',
        },
        {
          value: 'sd6f54654uyu654',
          text: 'Remote',
        },
        {
          value: 'sd6f546494654',
          text: 'Klaipėda',
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      if (this.dataIsValid) {
        const formData = { ...this.values };
        console.log('Duomenys geri, važiuojam!', formData);
      }
    },
  },
  computed: {
    errors() {
      const result = {
        name: [],
        surname: [],
        email: [],
        mobile: [],
        selectedCourse: [],
      };
      // eslint-disable-next-line object-curly-newline
      const { name, surname, email, mobile, selectedCourse } = this.values;

      if (!name) result.name.push('Name is required');
      if (name && name.length < 2) result.name.push('Name must be at least 2 letter long');
      if (name && name.length > 32) result.name.push('Name can not be longer than 32 letters');

      if (!surname) result.surname.push('Surname is required');
      if (surname && surname.length < 2) {
        result.surname.push('Surname must be at least 2 letter long');
      }
      if (surname && surname.length > 32) {
        result.surname.push('Surname can not be longer than 32 letters');
      }

      if (!email) result.email.push('Email is required');
      if (email && !/^\S+@\S+\.\S+$/.test(email)) result.email.push('Invalid email format');

      if (!mobile) result.mobile.push('Mobile is required');
      if (mobile && !/^\+370(\s){0,1}\d{8}$/.test(mobile)) {
        result.mobile.push('Invalid LT number format');
      }

      if (!selectedCourse) result.selectedCourse.push('You must select a course');

      return result;
    },
    valid() {
      return Object.entries(this.errors).reduce(
        (acc, [prop, errors]) => ({
          ...acc,
          [prop]: errors.length > 0 ? false : undefined,
        }),
        {},
      );
    },
    dataIsValid() {
      return Object.values(this.valid).every((x) => x === undefined);
    },
  },
};
// N.D.
// 1. Parsitraukt realius kursus į data kintamajį <possibleCourses>
// 2. course modulyje sukurti action + API užklausą, siųsti pasirinkto kurso duomenis,
// tam kad sukurti užklausą
</script>
