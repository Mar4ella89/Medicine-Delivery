"use strict";(self.webpackChunkmedicine_delivery=self.webpackChunkmedicine_delivery||[]).push([[108],{516:(e,i,s)=>{s.d(i,{A:()=>r});const t="Container_container__VVOCq";var n=s(579);const r=e=>{let{children:i}=e;return(0,n.jsx)("div",{className:t,children:i})}},108:(e,i,s)=>{s.r(i),s.d(i,{default:()=>g});var t=s(43),n=s(401),r=s(516),c=s(725);const a={sectionMedicine:"MedicineCardList_sectionMedicine__y9Sc3",listMedicine:"MedicineCardList_listMedicine__TEH35",itemMedicine:"MedicineCardList_itemMedicine__13oMF",img:"MedicineCardList_img__PHpw1",subtitle:"MedicineCardList_subtitle__U9xf8",medicineOrder:"MedicineCardList_medicineOrder__C2Hqm",btnOrder:"MedicineCardList_btnOrder__1mwvw",btnOrderDisabled:"MedicineCardList_btnOrderDisabled__RXIp+"};var o=s(579);const l=e=>{let{medicines:i}=e;const{addToCart:s,favorites:n,addToFavorites:r,removeFromFavorites:l}=(0,t.useContext)(c.A),d=i.map((e=>{let{_id:t,name:c,imgUrl:d,price:m}=e;return(0,o.jsxs)("li",{className:a.itemMedicine,children:[(0,o.jsx)("img",{src:d,alt:c,width:290,className:a.img}),(0,o.jsx)("h3",{className:a.subtitle,children:c}),(0,o.jsxs)("div",{className:a.medicineOrder,children:[(0,o.jsxs)("p",{children:[m.toFixed(2)," $"]}),(0,o.jsx)("button",{type:"button",className:a.btnFavorite,onClick:()=>{return e=t,void(n.includes(e)?l(e):r(e));var e},children:n.includes(t)?"\u2764\ufe0f":"\ud83e\udd0d"}),(0,o.jsx)("button",{type:"button",className:a.btnOrder,onClick:()=>((e,i)=>{s(e,i)})(i,t),children:"add to Cart"})]})]},t)}));return(0,o.jsx)("section",{className:a.sectionMedicine,children:(0,o.jsx)("ul",{className:a.listMedicine,children:d})})},d="DrugsList_sectionDrug__bnA13",m="DrugsList_title__6eglp",_="DrugsList_item__bb451",p="DrugsList_selected__qpG9b",u=e=>{let{drugsItem:i,onSelectPharmacy:s}=e;const[n,r]=(0,t.useState)(null),c=i.map((e=>{let{_id:i,name:t}=e;return(0,o.jsx)("li",{className:"".concat(_," ").concat(n===i?p:""),onClick:()=>{return s(e=i),void r(e);var e},children:t},i)}));return(0,o.jsxs)("section",{className:d,children:[(0,o.jsx)("p",{className:"".concat(_," ").concat(""===n?p:""),onClick:()=>(s(""),void r("")),children:"All drugs"}),(0,o.jsx)("h2",{className:m,children:"drugstore:"}),(0,o.jsx)("ul",{children:c})]})};var h=s(168);const x={wrapper:"SortingControls_wrapper__bbW6p",sortingItem:"SortingControls_sortingItem__sSXd5",selected:"SortingControls_selected__FgU0o"},v=e=>{let{onFilterByFavorite:i,onSortFromCheap:s,onSortFromExpensive:n,onSortByName:r}=e;const[c,a]=(0,t.useState)(null),l=(e,i)=>{a(e),i()};return(0,o.jsxs)("div",{className:x.wrapper,children:[(0,o.jsx)("span",{className:x.title,children:"Sorting:"}),(0,o.jsx)("span",{onClick:()=>l("favorite",i),className:"".concat(x.sortingItem," ").concat("favorite"===c?x.selected:""),children:"Favorites"}),(0,o.jsx)("span",{onClick:()=>l("cheap",s),className:"".concat(x.sortingItem," ").concat("cheap"===c?x.selected:""),children:"From cheap to expensive"}),(0,o.jsx)("span",{onClick:()=>l("expencive",n),className:"".concat(x.sortingItem," ").concat("expencive"===c?x.selected:""),children:"From expensive to cheap"}),(0,o.jsx)("span",{onClick:()=>l("name",r),className:"".concat(x.sortingItem," ").concat("name"===c?x.selected:""),children:"Sort by Name (A to Z)"})]})},C="Shop_wrapper__gaMcg",g=()=>{const{selectedPharmacy:e,setSelectedPharmacy:i,drugsItem:s}=(0,t.useContext)(h.A),{visibleMedicines:a,favorites:d}=(0,t.useContext)(c.A),m=a.filter((i=>i.availablePharmacies.includes(e))),_=e?m:a,[p,x]=(0,t.useState)("default");console.log(_),console.log(d),console.log([..._].filter((e=>{let{_id:i}=e;return d.includes(i)})));const g=(0,t.useMemo)((()=>"default"===p?_:"favorite"===p?[..._].filter((e=>{let{_id:i}=e;return d.includes(i)})):"cheapToExpensive"===p?[..._].sort(((e,i)=>e.price-i.price)):"expensiveToCheap"===p?[..._].sort(((e,i)=>i.price-e.price)):"nameAZ"===p?[..._].sort(((e,i)=>e.name.localeCompare(i.name))):_),[_,p,d]);return(0,o.jsxs)(r.A,{children:[(0,o.jsx)(v,{onFilterByFavorite:()=>{x("favorite")},onSortFromCheap:()=>{x("cheapToExpensive")},onSortFromExpensive:()=>{x("expensiveToCheap")},onSortByName:()=>{x("nameAZ")}}),(0,o.jsxs)("div",{className:C,children:[(0,o.jsx)(u,{drugsItem:s,onSelectPharmacy:e=>i(e)}),(0,o.jsx)(l,{medicines:g})]}),(0,o.jsx)(n.N9,{autoClose:3e3,position:"bottom-right"})]})}}}]);
//# sourceMappingURL=108.8a2fce6d.chunk.js.map