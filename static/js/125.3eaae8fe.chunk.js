"use strict";(self.webpackChunkmedicine_delivery=self.webpackChunkmedicine_delivery||[]).push([[125],{125:(e,s,i)=>{i.r(s),i.d(s,{default:()=>f});var t=i(43);const a="Container_container__VVOCq";var n=i(579);const r=e=>{let{children:s}=e;return(0,n.jsx)("div",{className:a,children:s})};var c=i(224);const l="MedicineCardList_sectionMedicine__y9Sc3",d="MedicineCardList_listMedicine__TEH35",o="MedicineCardList_itemMedicine__13oMF",m="MedicineCardList_img__PHpw1",u="MedicineCardList_subtitle__U9xf8",_="MedicineCardList_medicineOrder__C2Hqm",h="MedicineCardList_btnOrder__1mwvw",g=e=>{let{medicines:s}=e;const{addToCart:i}=(0,t.useContext)(c.A),a=s.map((e=>{let{_id:t,name:a,imgUrl:r,price:c}=e;return(0,n.jsxs)("li",{className:o,children:[(0,n.jsx)("img",{src:r,alt:a,width:290,className:m}),(0,n.jsx)("h3",{className:u,children:a}),(0,n.jsxs)("div",{className:_,children:[(0,n.jsxs)("p",{children:[c," $"]}),(0,n.jsx)("button",{className:h,onClick:()=>((e,s)=>{i(e,s)})(s,t),children:"add to Cart"})]})]},t)}));return(0,n.jsx)("section",{className:l,children:(0,n.jsx)("ul",{className:d,children:a})})},p="DrugsList_sectionDrug__bnA13",x="DrugsList_title__6eglp",j="DrugsList_item__bb451",C=e=>{let{drugsItem:s,onSelectPharmacy:i}=e;console.log(s);const t=s.map((e=>{let{_id:s,name:t,latitude:a,longitude:r}=e;return(0,n.jsx)("li",{className:j,onClick:()=>{i(s)},children:t},s)}));return(0,n.jsxs)("section",{className:p,children:[(0,n.jsx)("h1",{className:x,children:"drugstore:"}),(0,n.jsx)("ul",{children:t})]})};var y=i(942);const v=e=>{let{currentDrug:s}=e;const{latitude:i,longitude:t}=s?s.coordinates:{latitude:50.442226451645666,longitude:30.53763616537363};return console.log(i),(0,n.jsx)(y.aJ,{googleMapsApiKey:"AIzaSyDKYZdu5xvm8s02742nhLWHdNVizpgEgsM",children:(0,n.jsx)(y.u6,{mapContainerStyle:{height:"400px",borderRadius:"10px"},center:{lat:i,lng:t},zoom:15,children:(0,n.jsx)(y.pH,{position:{lat:i,lng:t}})})})};var b=i(154);const M=b.A.create({baseURL:"https://medicine-delivery-ztb4.onrender.com/api/drugs",params:{limit:12}}),N=b.A.create({baseURL:"https://medicine-delivery-ztb4.onrender.com/api/medicines",params:{limit:12}}),L="Shop_wrapper__gaMcg",w="Shop_mapWrapper__FoysE",f=()=>{const[e,s]=(0,t.useState)([]),[i,a]=(0,t.useState)(null),[c,l]=(0,t.useState)([]);(0,t.useEffect)((()=>{(async()=>{try{const e=await(async()=>{const{data:e}=await M.get("/");return e})();s(e)}catch({response:e}){console.log(e.data.message)}})()}),[]),(0,t.useEffect)((()=>{(async()=>{try{const e=await(async()=>{const{data:e}=await N.get("/");return e})();l(e)}catch({response:e}){console.log(e.data.message)}})()}),[]);const d=c.filter((e=>e.availablePharmacies.includes(i))),o=e.find((e=>{let{_id:s}=e;return s===i}));return(0,n.jsxs)(r,{children:[(0,n.jsx)("div",{className:w,children:(0,n.jsx)(v,{currentDrug:o})}),(0,n.jsxs)("div",{className:L,children:[(0,n.jsx)(C,{drugsItem:e,onSelectPharmacy:e=>a(e)}),(0,n.jsx)(g,{medicines:i?d:c})]})]})}}}]);
//# sourceMappingURL=125.3eaae8fe.chunk.js.map