import{d as _,g as v,o as c,c as r,h as g,i as D,a as t,F as b,e as k,f,w as x,t as i,b as h,j as y,_ as w,k as S,l as $,p as A,m as C}from"./index.42b96c12.js";import{S as V}from"./SuccessAlert.393cc84e.js";const P={class:"table"},T=t("thead",{class:"table-head"},[t("tr",{class:"table-head-row"},[t("td",{class:"br-tl-1"},"Title"),t("td",null,"Related Service"),t("td",null,"TimeStamp"),t("td",{class:"actions br-tr-1"},"Actions")])],-1),B={class:"table-body"},I={class:"table-body-row"},N={class:"table-body-cell action"},F={class:"table-body-cell"},M={class:"table-body-cell"},R={class:"table-body-cell buttons-cell pl-1"},j={class:"flex f-gap-1"},q=t("button",{class:"btn btn-success"},[t("i",{class:"fa-regular fa-pen-to-square action"})],-1),E=["onClick"],L=t("i",{class:"fa-solid fa-trash action"},null,-1),z=[L],G={__name:"PubDocTable",props:{documentArray:Array},setup(s){const n=s,l=_(!1),u=o=>{h.delete(`/api/delete/published/document/${o}`).then(e=>{l.value=!0}).catch(e=>{console.error(e)})},d="/published/document/";return(o,e)=>{const m=v("router-link");return c(),r(b,null,[l.value?(c(),g(V,{key:0,successMessage:"Document Deleted Successfully"})):D("",!0),t("table",P,[T,t("tbody",B,[(c(!0),r(b,null,k(n.documentArray,a=>(c(),r("tr",I,[t("td",N,[f(m,{to:d+a.doc_id},{default:x(()=>[y(i(a.doc_title),1)]),_:2},1032,["to"])]),t("td",F,i(a.related_service),1),t("td",M,i(a.timestamp),1),t("td",R,[t("div",j,[q,t("button",{onClick:X=>u(a.doc_id),class:"btn btn-danger"},z,8,E)])])]))),256))])])],64)}}};const p=s=>(A("data-v-29e6e0ab"),s=s(),C(),s),H=p(()=>t("h1",null,"Documentation",-1)),J={class:"button-div mt-1"},K=p(()=>t("i",{class:"fa-solid fa-file-circle-plus fa-2x"},null,-1)),O=[K],Q=p(()=>t("i",{class:"fa-regular fa-folder-open fa-2x"},null,-1)),U={class:"container mt-5"},W={__name:"DocumentationPublishView",setup(s){const n=S(),l=()=>{n.push("/create/document")},u=()=>{n.push("/documents/drafts")},d=_(),o=_([]);return $(()=>{h.get("/api/get/published/documents").then(e=>{o.value=e.data.docs}).catch(e=>{console.error(e)}),h.get("/api/get/document/draft-ids").then(e=>{e.data.status==="success"?d.value=e.data.documentDrafts.length:e.data.status==="failed"&&console.error(e.data.message)}).catch(e=>{console.error(e)})}),(e,m)=>(c(),r(b,null,[H,t("div",J,[t("button",{onClick:l,class:"btn btn-secondary"},O),t("button",{onClick:u,id:"draftsbtn",class:"btn btn-secondary"},[y(" Drafts ("+i(d.value)+") ",1),Q])]),t("div",U,[f(G,{documentArray:o.value},null,8,["documentArray"])])],64))}},tt=w(W,[["__scopeId","data-v-29e6e0ab"]]);export{tt as default};
