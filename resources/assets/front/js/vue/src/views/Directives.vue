<template>
  <ContainerLayout>
    <h1>Pagrindinės direktyvos</h1>
    <article>
      <h2>v-for</h2>
      <p>
        <strong>v-for</strong> tai direktyva, kuri kuria komponentą tiek kartų,
        kiek yra nurodytas masyve elementų <br />
        Kiekvieną karta kuriant elementus su <strong>v-for</strong> direktyva,
        turime papildomai kurti ir <strong>:key</strong> savybę su unikaliomis
        reikšmėmis. <br />
        <strong>:key</strong> savybė reikalinga vidinei Vue.js logikai, kuri
        pagal potencialiai pakitusius masyvo duomenis ir
        <strong>:key</strong> nustatymą apsprendžia kiek elementų pervaizduoti
        iš naujo.
      </p>
      <ul>
        <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
      </ul>
    </article>
    <article>
      <h2>v-if, v-else ir v-if-else</h2>
      <p>
        Šios direktyvos naudojamos tuomet, kuomet turinys atvaizduojamas
        priklausomai nuo salygų.
        <strong>v-if</strong> direktyva gali būti naudojama bet kur, o
        <strong>v-else</strong> ir <strong>v-else-if</strong> tik tiesiogiai po
        <strong>v-if</strong> direktyvą turinčių elementų.
      </p>
      <div v-if="sex === 'male' && age >= 20">
        Einam alaus atsigert.(teiginys)
      </div>
      <div v-else-if="sex === 'male'">Gal tenisą?</div>
      <div v-else>Gal kavos?</div>
    </article>
    <article>
      <h2>v-show</h2>
      <p>
        Ši direktyva veikia panašiai kaip v-if - rodo turinį, tuomet jeigu
        reikšmė yra 'truthy' -> true, o priešingu atveju - ne. Esminis skirtumas
        tas, jog v-show turinį slepia jam uždedant CSS savybę
        <strong>display: none</strong>. Tokiu būdų taupomi naršyklės
        atvaizdavimo variklio resursai, nes pakeisti stilių yra mažiau
        reikalaujanti komanda negu suskurti elementą arba jį pašalinti iš DOM'o.
      </p>
      <div v-show="likeKefyr">Man patinka Kefyras</div>
    </article>
    <article>
      <h2>v-model</h2>
      <p>
        Tai direktyva, kuri susieja įvesties lauką, su kintamuoju Vue.js
        komponente. Privalote turėti kintamajį tokiu pavadinimu, kokį įrašote
        <strong>v-model</strong> direktyvos viduje. <br />
        Naudojant šią direktyvą įgalinamas dvipusis susiejimas - pasikeistus
        įvesties value reikšmei, atsinaujina kintamasis. O jeigu keičiasi
        kintamojo reikšmė, atitinkamai perstatoma ir įvesties reikšmė.
      </p>
      <h3>Simple input</h3>
      <input type="text" v-model="inputValue" />
      <div>{{ inputValue }}</div>
      <b-form-input type="text" v-model="inputValue" />
    </article>
  </ContainerLayout>
</template>

<script>
import ContainerLayout from '@/layouts/ContainerLayout.vue';
// Change About page to Event page
export default {
  name: 'Directives',
  components: {
    ContainerLayout,
  },
  data() {
    return {
      fruits: ['oranges', 'apples', 'burgers'],
      age: 18,
      sex: 'male',
      likeKefyr: false,
      inputValue: '',
    };
  },
};
</script>
