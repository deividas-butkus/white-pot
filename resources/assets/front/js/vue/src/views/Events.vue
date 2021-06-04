<template>
  <ContainerLayout>
    <h1>Įvykiai(Events)</h1>
    <p>
      Vue.js įvykių pavadinimai yra beveik analogiški natūraliems naršyklės
      variklio įvykių pavadinimams. Norint uždėti įvykio klausiklį, turite
      paprasčiausiai panaudoti direktyvą
      <strong>v-on:[įvykio-tipas]="... ką daryti įvykus įvykiui ..."</strong> .
      <br />
      Galimas ir šios direktyvos trumpinys
      <strong>@:[įvykio-tipas]="... ką daryti įvykus įvykiui ..."</strong>
    </p>
    <article>
      <h2>Populiariausi įvykių klausikliai(Event listeners)</h2>
      <ol>
        <li>click</li>
        <li>submit</li>
        <li>scrool</li>
        <li>load</li>
      </ol>
    </article>
    <article>
      <h2>Įvykių redaguokliai(Event modifiers)</h2>
      <p>
        Uždedant įvykio klausiklius elementams, dažnai norime juos pakeisti, ar
        pritaikyti pagal puslapiui reikiamą funkcionalumą. Dažniaus pakitimus
        galime atlikti, iškarto - naudodami <strong>event modifiers</strong>
      </p>
      <ol>
        <li>
          <strong>stop</strong> - event.stopPropagination() - įvykis
          neperduodamas kitiems tėviniams elementams.
        </li>
        <li>
          <strong>capture</strong> - {capture: true} - įvykis primiausia įvyksta
          tame elemente, kuriam buvo uždėtas įvykio klausiklis
        </li>
        <li>
          <strong>prevent</strong> - event.preventDefault() - sustabdomi
          standartiniai įvykio veiksmai
        </li>
        <li>
          <strong>self</strong> - self - Įgalinti įvykio veikimą, tik tam
          elementui, kuriam buvo uždėtas įvykio klausiklis
        </li>
        <li>
          <strong>once</strong> - {once: true} - įvykio klausiklis įvyks tik
          vieną kartą
        </li>
        <li><strong>passive</strong></li>
      </ol>
    </article>
    <section>
      <div>counter: {{ counter }}</div>
      <b-button variant="success" v-on:click="inc">Increase</b-button>
      <b-button variant="danger" @click="dec">Decrease</b-button>
    </section>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';
// Change About page to Event page
export default {
  name: 'Events',
  components: {
    ContainerLayout,
  },
  data() {
    return {
      counter: 5,
    };
  },
  methods: {
    inc() {
      this.counter += 1;
    },
    dec() {
      this.counter -= 1;
    },
  },
};
</script>
