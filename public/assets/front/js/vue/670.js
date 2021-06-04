(self.webpackChunk=self.webpackChunk||[]).push([[670],{5670:(i,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>e});const a={name:"Events",components:{ContainerLayout:t(7190).Z},data:function(){return{counter:5}},methods:{inc:function(){this.counter+=1},dec:function(){this.counter-=1}}};const e=(0,t(1900).Z)(a,(function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("ContainerLayout",[t("h1",[i._v("Įvykiai(Events)")]),i._v(" "),t("p",[i._v("\n    Vue.js įvykių pavadinimai yra beveik analogiški natūraliems naršyklės\n    variklio įvykių pavadinimams. Norint uždėti įvykio klausiklį, turite\n    paprasčiausiai panaudoti direktyvą\n    "),t("strong",[i._v('v-on:[įvykio-tipas]="... ką daryti įvykus įvykiui ..."')]),i._v(" .\n    "),t("br"),i._v("\n    Galimas ir šios direktyvos trumpinys\n    "),t("strong",[i._v('@:[įvykio-tipas]="... ką daryti įvykus įvykiui ..."')])]),i._v(" "),t("article",[t("h2",[i._v("Populiariausi įvykių klausikliai(Event listeners)")]),i._v(" "),t("ol",[t("li",[i._v("click")]),i._v(" "),t("li",[i._v("submit")]),i._v(" "),t("li",[i._v("scrool")]),i._v(" "),t("li",[i._v("load")])])]),i._v(" "),t("article",[t("h2",[i._v("Įvykių redaguokliai(Event modifiers)")]),i._v(" "),t("p",[i._v("\n      Uždedant įvykio klausiklius elementams, dažnai norime juos pakeisti, ar\n      pritaikyti pagal puslapiui reikiamą funkcionalumą. Dažniaus pakitimus\n      galime atlikti, iškarto - naudodami "),t("strong",[i._v("event modifiers")])]),i._v(" "),t("ol",[t("li",[t("strong",[i._v("stop")]),i._v(" - event.stopPropagination() - įvykis\n        neperduodamas kitiems tėviniams elementams.\n      ")]),i._v(" "),t("li",[t("strong",[i._v("capture")]),i._v(" - {capture: true} - įvykis primiausia įvyksta\n        tame elemente, kuriam buvo uždėtas įvykio klausiklis\n      ")]),i._v(" "),t("li",[t("strong",[i._v("prevent")]),i._v(" - event.preventDefault() - sustabdomi\n        standartiniai įvykio veiksmai\n      ")]),i._v(" "),t("li",[t("strong",[i._v("self")]),i._v(" - self - Įgalinti įvykio veikimą, tik tam\n        elementui, kuriam buvo uždėtas įvykio klausiklis\n      ")]),i._v(" "),t("li",[t("strong",[i._v("once")]),i._v(" - {once: true} - įvykio klausiklis įvyks tik\n        vieną kartą\n      ")]),i._v(" "),t("li",[t("strong",[i._v("passive")])])])]),i._v(" "),t("section",[t("div",[i._v("counter: "+i._s(i.counter))]),i._v(" "),t("b-button",{attrs:{variant:"success"},on:{click:i.inc}},[i._v("Increase")]),i._v(" "),t("b-button",{attrs:{variant:"danger"},on:{click:i.dec}},[i._v("Decrease")])],1)])}),[],!1,null,null,null).exports}}]);