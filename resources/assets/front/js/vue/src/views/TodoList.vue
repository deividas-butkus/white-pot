<template>
  <ContainerLayout>
    <h1>Todo list</h1>
    <ol>
      <li>
        Sukurti duomenis 'todos', Vue komponento data funkcijos grąžinamame
        objekte, sukurti darbai turi pasižymėti tokiomis savybėmis
        <ul>
          <li>id: string</li>
          <li>title: string</li>
          <li>done: bool</li>
        </ul>
      </li>
      <li>
        Sukurti įvesties lauko ir mygtuko paspaudimo formą naujam darbui pridėti
      </li>
      <li>
        Įgalinti pridėjimą uždedant formai 'submit.prevent' įvykio klausiklį
        <br />
        kuris turi kviesti Vue.js komponento methods objekte aprašytą funkciją
        'addItem'. <br />
        Šis metodas turi pridėti naują objektą į 'todos masyvą':
        <ol>
          <li>su nauju unikaliu 'id'</li>
          <li>'done: false'</li>
          <li>ir įvesties lauke aprašytą 'title' reikšme</li>
        </ol>
      </li>
      <li>
        Atvaizduoti esamus darbus. <br />
        Jeigu darbas atliktas, jo atvaizduojamą 'title' savybės reikšmę
        perbraukti. Taip pat šalia kiekvieno darbo pavadinimo sukurti trinimo
        mygtuką.
      </li>
      <li>
        įgalinti kiekvieno darbo trinimą, papaudus ta šalia sukurtą mygtuką.
      </li>
      <li>
        įgalinti kiekvieno darbo 'done' savybės pakitimą priešinga, paspaudus
        darbo pavadinimą 'title'
      </li>
    </ol>

    <div class="d-flex justify-content-center">
      <b-card>
        <form @submit.prevent="addItem">
          <b-input-group prepend="Username">
            <b-form-input v-model="newTitle" />
            <b-input-group-append>
              <b-button variant="outline-success" type="submit">
                Add Todo
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </form>
        <!-- https://bootstrap-vue.org/docs/components/table#formatter-callback -->
        <b-table
          striped
          hover
          :fields="[
            { key: 'title', label: 'Title' },
            { key: 'toggle', label: 'Toggle job' },
            { key: 'delete', label: 'Delete job' },
          ]"
          :items="todos"
        >
          <template #cell(title)="data">
            <div :class="{ done: data.item.done }">
              {{ data.item.title }}
            </div>
          </template>

          <template #cell(toggle)="data">
            <b-button
              variant="warning"
              @click="data.item.done = !data.item.done"
            >
              {{ data.item.done ? "Undo" : "Do" }}
            </b-button>
          </template>

          <template #cell(delete)="data">
            <b-button variant="danger" @click="deleteItem(data.item.id)">
              Delete
            </b-button>
          </template>
        </b-table>
      </b-card>
    </div>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';

export default {
  components: {
    ContainerLayout,
  },
  data() {
    return {
      todos: [
        { id: '1', title: 'Pastatys piramidę', done: false },
        { id: '2', title: 'Palaižyt sau pažastį', done: true },
        { id: '3', title: 'Išsimaudyt vonioje alaus', done: false },
        { id: '4', title: 'Padirbt kasininku 2 savaites', done: true },
        { id: '5', title: 'Pasodint medį', done: false },
      ],
      newTitle: '',
    };
  },
  methods: {
    addItem() {
      const newId = String(Math.max(...this.todos.map(({ id }) => +id)) + 1);
      this.todos = [
        ...this.todos,
        {
          id: newId,
          title: this.newTitle,
          done: false,
        },
      ];
    },
    // Šiuo metu funkcija nėra naudojama, update logika parašyta šalia update mygtuko
    updateItem(id) {
      const updatedItem = this.todos.find((t) => t.id === id);
      updatedItem.done = !updatedItem.done;
    },
    deleteItem(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped>
.done {
  text-decoration: line-through;
}
</style>
