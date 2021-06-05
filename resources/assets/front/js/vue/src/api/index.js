import axios from 'axios';

class API {
  static domain = 'http://127.0.0.1:8000';

    static async getRecipes() {
        try {
            const { data } = await axios.get(`${this.domain}/api/recipes`);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

  static async getLocations() {
    try {
      const { data } = await axios.get(`${this.domain}/api/locations`);
      return data;
    } catch (err) {
      throw err.message;
    }
  }

  static async postLocation(title) {
    try {
      await axios.post(`${this.domain}/api/locations`, { title });
      return true;
    } catch (err) {
      throw err.message;
    }
  }

  static async patchLocation({ id, ...body }) {
    console.log(body);
    try {
      await axios.patch(`${this.domain}/api/locations/${id}`, body);
      return true;
    } catch (err) {
      throw err.message;
    }
  }

  static async deleteLocation(id) {
    try {
      await axios.delete(`${this.domain}/api/locations/${id}`);
      return true;
    } catch (err) {
      throw err.message;
    }
  }

  static async getCourses() {
    try {
      const { data } = await axios.get(`${this.domain}/api/courses`);
      return data;
    } catch (err) {
      throw err.message;
    }
  }

  static async postCourse(body) {
    try {
      const { data } = await axios.post(`${this.domain}/api/courses`, body);
      return data.courses;
    } catch (err) {
      throw err.message;
    }
  }

  static async deleteCourse(id) {
    try {
      await axios.delete(`${this.domain}/api/courses/${id}`);
      return true;
    } catch (err) {
      throw err.message;
    }
  }
}

export default API;
