(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{lXdu:function(t,e,n){"use strict";n.r(e),n.d(e,"BooksModule",(function(){return Q}));var o=n("ofXK"),i=n("tyNb"),s=n("l7P3"),c=n("fXoL");const d=function(){var t={EntitiesOnly:0,Both:1,None:2};return t[t.EntitiesOnly]="EntitiesOnly",t[t.Both]="Both",t[t.None]="None",t}();function r(t){return function(e,n){const o={ids:[...n.ids],entities:Object.assign({},n.entities)},i=t(e,o);return i===d.Both?Object.assign({},n,o):i===d.EntitiesOnly?Object.assign(Object.assign({},n),{entities:o.entities}):n}}function b(t,e){const n=e(t);return Object(c.T)()&&void 0===n&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",t,"The `selectId` implementation:",e.toString()),n}function a(t){function e(e,n){const o=b(e,t);return o in n.entities?d.None:(n.ids.push(o),n.entities[o]=e,d.Both)}function n(t,n){let o=!1;for(const i of t)o=e(i,n)!==d.None||o;return o?d.Both:d.None}function o(t,e){return e.ids=[],e.entities={},n(t,e),d.Both}function i(t,e){const n=(t instanceof Array?t:e.ids.filter(n=>t(e.entities[n]))).filter(t=>t in e.entities).map(t=>delete e.entities[t]).length>0;return n&&(e.ids=e.ids.filter(t=>t in e.entities)),n?d.Both:d.None}function s(t,e){return c([t],e)}function c(e,n){const o={};return(e=e.filter(t=>t.id in n.entities)).length>0?e.filter(e=>function(e,n,o){const i=Object.assign({},o.entities[n.id],n.changes),s=b(i,t),c=s!==n.id;return c&&(e[n.id]=s,delete o.entities[n.id]),o.entities[s]=i,c}(o,e,n)).length>0?(n.ids=n.ids.map(t=>o[t]||t),d.Both):d.EntitiesOnly:d.None}function a(e,o){const i=[],s=[];for(const n of e){const e=b(n,t);e in o.entities?s.push({id:e,changes:n}):i.push(n)}const r=c(s,o),a=n(i,o);switch(!0){case a===d.None&&r===d.None:return d.None;case a===d.Both||r===d.Both:return d.Both;default:return d.EntitiesOnly}}return{removeAll:function(t){return Object.assign({},t,{ids:[],entities:{}})},addOne:r(e),addMany:r(n),addAll:r(o),setAll:r(o),setOne:r((function(e,n){const o=b(e,t);return o in n.entities?(n.entities[o]=e,d.EntitiesOnly):(n.ids.push(o),n.entities[o]=e,d.Both)})),updateOne:r(s),updateMany:r(c),upsertOne:r((function(t,e){return a([t],e)})),upsertMany:r(a),removeOne:r((function(t,e){return i([t],e)})),removeMany:r(i),map:r((function(t,e){return c(e.ids.reduce((n,o)=>{const i=t(e.entities[o]);return i!==e.entities[o]&&n.push({id:o,changes:i}),n},[]).filter(({id:t})=>t in e.entities),e)})),mapOne:r((function({map:t,id:e},n){const o=n.entities[e];return o?s({id:e,changes:t(o)},n):d.None}))}}const u=Object(s.g)("[Books List] Load Books List via Service"),l=Object(s.g)("[Books Effect] Books Loaded Successfully",Object(s.l)()),h=Object(s.g)("[Book List] Load Book via Service",Object(s.l)()),f=Object(s.g)("[Book Effect] Book Loaded Successfully",Object(s.l)()),p=Object(s.g)("[Add Book Component] Add Book",Object(s.l)()),g=Object(s.g)("[Books List Operations] Delete Book",Object(s.l)()),k=Object(s.g)("[Books List Operations] Update Book",Object(s.l)()),O={loadBooks:u,booksLoaded:l,addBook:p,deleteBook:g,updateBook:k,loadBook:h,bookLoaded:f},m=function(t={}){const{selectId:e,sortComparer:n}=Object.assign({sortComparer:!1,selectId:t=>t.id},t),o={getInitialState:function(t={}){return Object.assign({ids:[],entities:{}},t)}},i={getSelectors:function(t){const e=t=>t.ids,n=t=>t.entities,o=Object(s.j)(e,n,(t,e)=>t.map(t=>e[t])),i=Object(s.j)(e,t=>t.length);return t?{selectIds:Object(s.j)(t,e),selectEntities:Object(s.j)(t,n),selectAll:Object(s.j)(t,o),selectTotal:Object(s.j)(t,i)}:{selectIds:e,selectEntities:n,selectAll:o,selectTotal:i}}},c=n?function(t,e){const{removeOne:n,removeMany:o,removeAll:i}=a(t);function s(t,e){return c([t],e)}function c(e,n){const o=e.filter(e=>!(b(e,t)in n.entities));return 0===o.length?d.None:(p(o,n),d.Both)}function u(t,e){return e.entities={},e.ids=[],c(t,e),d.Both}function l(t,e){return h([t],e)}function h(e,n){const o=[],i=e.filter(e=>function(e,n,o){if(!(n.id in o.entities))return!1;const i=Object.assign({},o.entities[n.id],n.changes),s=b(i,t);return delete o.entities[n.id],e.push(i),s!==n.id}(o,e,n)).length>0;if(0===o.length)return d.None;{const t=n.ids,e=[];return n.ids=n.ids.filter((t,o)=>t in n.entities||(e.push(o),!1)),p(o,n),!i&&e.every(e=>n.ids[e]===t[e])?d.EntitiesOnly:d.Both}}function f(e,n){const o=[],i=[];for(const c of e){const e=b(c,t);e in n.entities?i.push({id:e,changes:c}):o.push(c)}const s=h(i,n),r=c(o,n);switch(!0){case r===d.None&&s===d.None:return d.None;case r===d.Both||s===d.Both:return d.Both;default:return d.EntitiesOnly}}function p(n,o){n.sort(e);const i=[];let s=0,c=0;for(;s<n.length&&c<o.ids.length;){const d=n[s],r=b(d,t),a=o.ids[c];e(d,o.entities[a])<=0?(i.push(r),s++):(i.push(a),c++)}o.ids=i.concat(s<n.length?n.slice(s).map(t):o.ids.slice(c)),n.forEach((e,n)=>{o.entities[t(e)]=e})}return{removeOne:n,removeMany:o,removeAll:i,addOne:r(s),updateOne:r(l),upsertOne:r((function(t,e){return f([t],e)})),addAll:r(u),setAll:r(u),setOne:r((function(e,n){const o=b(e,t);return o in n.entities?(n.ids=n.ids.filter(t=>t!==o),p([e],n),d.Both):s(e,n)})),addMany:r(c),updateMany:r(h),upsertMany:r(f),map:r((function(t,e){return h(e.ids.reduce((n,o)=>{const i=t(e.entities[o]);return i!==e.entities[o]&&n.push({id:o,changes:i}),n},[]),e)})),mapOne:r((function({map:t,id:e},n){const o=n.entities[e];return o?l({id:e,changes:t(o)},n):d.None}))}}(e,n):a(e);return Object.assign(Object.assign(Object.assign({selectId:e,sortComparer:n},o),i),c)}(),B=m.getInitialState({booksLoaded:!1,selectedBookId:null}),j=Object(s.i)(B,Object(s.k)(O.booksLoaded,(t,e)=>m.setAll(e.books,Object.assign(Object.assign({},t),{booksLoaded:!0}))),Object(s.k)(O.bookLoaded,(t,e)=>m.setAll(e.book,Object.assign(Object.assign({},t),{bookLoaded:!0}))),Object(s.k)(O.addBook,(t,e)=>m.addOne(e.book,t)),Object(s.k)(O.deleteBook,(t,e)=>m.removeOne(e.bookId,t)),Object(s.k)(O.updateBook,(t,e)=>m.updateOne(e.update,t))),{selectAll:v}=m.getSelectors(),y=Object(s.h)("books"),M=Object(s.j)(y,v),w=Object(s.j)(y,v);Object(s.j)(y,t=>t.selectedBookId);var J=n("BSO8");function x(t,e){1&t&&(c.Kb(0,"button",8),c.cc(1,"Add Book"),c.Jb())}function C(t,e){1&t&&(c.Kb(0,"th",5),c.cc(1,"Actions"),c.Jb())}const K=function(t){return["add-edit-book",t]};function I(t,e){if(1&t){const t=c.Lb();c.Kb(0,"td"),c.Kb(1,"button",11),c.cc(2,"Edit"),c.Jb(),c.cc(3," \xa0 \xa0 "),c.Kb(4,"button",12),c.Rb("click",(function(){c.Yb(t);const e=c.Tb().$implicit;return c.Tb().deleteBook(e.id)})),c.cc(5,"Delete"),c.Jb(),c.Jb()}if(2&t){const t=c.Tb().$implicit;c.xb(1),c.Ub("routerLink",c.Vb(1,K,t.id))}}function A(t,e){if(1&t&&(c.Kb(0,"tr"),c.Kb(1,"td",9),c.cc(2),c.Jb(),c.Kb(3,"td"),c.cc(4),c.Jb(),c.Kb(5,"td"),c.cc(6),c.Jb(),c.Kb(7,"td"),c.cc(8),c.Jb(),c.bc(9,I,6,3,"td",10),c.Jb()),2&t){const t=e.$implicit,n=c.Tb();c.xb(2),c.ec("\xa0",t.title,""),c.xb(2),c.dc(t.author),c.xb(2),c.dc(t.description),c.xb(2),c.ec("\xa0",t.published,""),c.xb(1),c.Ub("ngIf",n.isLoggedIn)}}let P=(()=>{class t{constructor(t){this.store=t}ngOnInit(){this.store.dispatch(O.loadBooks()),this.store.select(M).subscribe(t=>this.books$=t),this.store.select(J.a).subscribe(t=>{t&&(this.isLoggedIn=t.isAuthenticated)})}deleteBook(t){this.store.dispatch(O.deleteBook({bookId:t}))}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(s.b))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-books"]],decls:20,vars:3,consts:[[1,"containerPane"],["id","addBook","class","btn buttonSuccess addButton","routerLink","add-edit-book","routerLinkActive","active",4,"ngIf"],[1,"booksTable"],["width","15%"],["width","45%"],["width","12%"],["width","12%",4,"ngIf"],[4,"ngFor","ngForOf"],["id","addBook","routerLink","add-edit-book","routerLinkActive","active",1,"btn","buttonSuccess","addButton"],["scope","row"],[4,"ngIf"],[1,"btn","buttonPrimary",3,"routerLink"],[1,"btn","buttonDanger",3,"click"]],template:function(t,e){1&t&&(c.Kb(0,"div",0),c.Kb(1,"h1"),c.cc(2,"Book Details"),c.Jb(),c.Kb(3,"div"),c.bc(4,x,2,0,"button",1),c.Jb(),c.Ib(5,"br"),c.Kb(6,"table",2),c.Kb(7,"thead"),c.Kb(8,"tr"),c.Kb(9,"th",3),c.cc(10,"Title"),c.Jb(),c.Kb(11,"th",3),c.cc(12,"Author"),c.Jb(),c.Kb(13,"th",4),c.cc(14,"Description"),c.Jb(),c.Kb(15,"th",5),c.cc(16,"Published"),c.Jb(),c.bc(17,C,2,0,"th",6),c.Jb(),c.Jb(),c.Kb(18,"tbody"),c.bc(19,A,10,5,"tr",7),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(4),c.Ub("ngIf",e.isLoggedIn),c.xb(13),c.Ub("ngIf",e.isLoggedIn),c.xb(2),c.Ub("ngForOf",e.books$))},directives:[o.j,o.i,i.c,i.d],styles:["h1[_ngcontent-%COMP%]{text-align:center;color:#8b0000}.booksTable[_ngcontent-%COMP%]{width:90%;margin-left:5%;border-spacing:0}.booksTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .booksTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#b8d1f3;border:none}.booksTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:55px}.booksTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background:#f1f3f5}.booksTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background:#dae5f4}.addButton[_ngcontent-%COMP%]{margin-left:89%}@media (min-width:481px) and (max-width:768px){.addButton[_ngcontent-%COMP%]{margin-left:85%}}@media (min-width:361px) and (max-width:480px){.addButton[_ngcontent-%COMP%]{margin-left:85%}}@media (min-width:321px) and (max-width:360px){.addButton[_ngcontent-%COMP%]{margin-left:75%}table[_ngcontent-%COMP%]{overflow-y:scroll;display:block}}"]}),t})();class L{}var U=n("3Pt+");function T(t,e){1&t&&(c.Kb(0,"h2",16),c.cc(1,"Add Book Details"),c.Jb())}function _(t,e){1&t&&(c.Kb(0,"h2",16),c.cc(1,"Edit Book Details"),c.Jb())}function S(t,e){if(1&t){const t=c.Lb();c.Kb(0,"button",17),c.Rb("click",(function(){c.Yb(t);const e=c.Tb(),n=c.Xb(6);return e.onSubmit(n,"add")})),c.cc(1,"Add "),c.Jb()}if(2&t){c.Tb();const t=c.Xb(6);c.Ub("disabled",t.invalid)}}function $(t,e){if(1&t){const t=c.Lb();c.Kb(0,"button",17),c.Rb("click",(function(){c.Yb(t);const e=c.Tb(),n=c.Xb(6);return e.onSubmit(n,"edit")})),c.cc(1,"Update "),c.Jb()}if(2&t){c.Tb();const t=c.Xb(6);c.Ub("disabled",t.invalid)}}let N=(()=>{class t{constructor(t,e,n){this.store=t,this.router=e,this.route=n,this.submitted=!1,this.book=new L,this.showAdd=!0,this.route.paramMap.subscribe(t=>{this.id=t.get("id")}),this.id&&(this.showAdd=!1,this.store.dispatch(h({bookId:this.id})),this.store.select(w).subscribe(t=>{this.tempBook=t,this.book=Object.assign({},this.tempBook[0])}))}ngOnInit(){}onSubmit(t,e){if(this.submitted=!0,t.valid)if("add"===e)this.store.dispatch(p({book:this.book}));else if("edit"===e){const e={id:this.book.id,changes:Object.assign(Object.assign({},this.book),t.value)};this.store.dispatch(O.updateBook({update:e}))}}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(s.b),c.Hb(i.b),c.Hb(i.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-add-edit-book"]],decls:30,vars:8,consts:[[1,"formPane"],[1,"formContent"],[1,"formDiv"],["class","formHeader",4,"ngIf"],["bookForm","ngForm"],[1,"form-group"],["for","title"],["type","text","id","title","name","title","required","",3,"ngModel","ngModelChange"],["for","author"],["type","text","id","author","name","author","required","",3,"ngModel","ngModelChange"],["for","side"],["type","text","id","description","name","description","required","",3,"ngModel","ngModelChange"],["for","published"],["type","text","id","published","name","published","required","",3,"ngModel","ngModelChange"],["class","btn buttonPrimary","type","button",3,"disabled","click",4,"ngIf"],["routerLink","/home",1,"btn","buttonDanger"],[1,"formHeader"],["type","button",1,"btn","buttonPrimary",3,"disabled","click"]],template:function(t,e){1&t&&(c.Kb(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"div",2),c.bc(3,T,2,0,"h2",3),c.bc(4,_,2,0,"h2",3),c.Kb(5,"form",null,4),c.Kb(7,"div",5),c.Kb(8,"p",6),c.cc(9,"Title"),c.Jb(),c.Kb(10,"input",7),c.Rb("ngModelChange",(function(t){return e.book.title=t})),c.Jb(),c.Jb(),c.Kb(11,"div",5),c.Kb(12,"p",8),c.cc(13,"Author"),c.Jb(),c.Kb(14,"input",9),c.Rb("ngModelChange",(function(t){return e.book.author=t})),c.Jb(),c.Jb(),c.Kb(15,"div",5),c.Kb(16,"p",10),c.cc(17,"Description"),c.Jb(),c.Kb(18,"input",11),c.Rb("ngModelChange",(function(t){return e.book.description=t})),c.Jb(),c.Jb(),c.Kb(19,"div",5),c.Kb(20,"p",12),c.cc(21,"Published"),c.Jb(),c.Kb(22,"input",13),c.Rb("ngModelChange",(function(t){return e.book.published=t})),c.Jb(),c.Jb(),c.Ib(23,"br"),c.bc(24,S,2,1,"button",14),c.cc(25," \xa0 "),c.bc(26,$,2,1,"button",14),c.cc(27,"\xa0 "),c.Kb(28,"button",15),c.cc(29,"Cancel"),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(3),c.Ub("ngIf",e.showAdd),c.xb(1),c.Ub("ngIf",!e.showAdd),c.xb(6),c.Ub("ngModel",e.book.title),c.xb(4),c.Ub("ngModel",e.book.author),c.xb(4),c.Ub("ngModel",e.book.description),c.xb(4),c.Ub("ngModel",e.book.published),c.xb(2),c.Ub("ngIf",e.showAdd),c.xb(2),c.Ub("ngIf",!e.showAdd))},directives:[o.j,U.p,U.j,U.k,U.b,U.n,U.i,U.l,i.c],styles:["button.btn[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.2}.formContent[_ngcontent-%COMP%]{height:80%;width:40%}button[_ngcontent-%COMP%]:disabled{background-color:grey;color:#2f4f4f;border:none;cursor:not-allowed}@media (min-width:481px) and (max-width:768px){.formPane[_ngcontent-%COMP%]{margin-top:80px}.formContent[_ngcontent-%COMP%]{height:55%;width:85%}}@media (min-width:361px) and (max-width:480px){.formContent[_ngcontent-%COMP%]{height:70%;width:85%}}@media (min-width:321px) and (max-width:360px){.formContent[_ngcontent-%COMP%]{height:70%;width:85%}}"]}),t})(),E=(()=>{class t{constructor(t){this.router=t,this.token=localStorage.getItem("accessToken")}canActivate(){return this.token||this.router.navigateByUrl("/login"),!0}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(i.b))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const D=[{path:"",component:P},{path:"add-edit-book",component:N,canActivate:[E]},{path:"add-edit-book/:id",component:N,canActivate:[E]}];let F=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[i.f.forChild(D)],i.f]}),t})();var R=n("AytR"),X=n("tk/3");let H=(()=>{class t{constructor(t){this.http=t}getBooks(){return this.http.get(R.a.booksUrl)}getBook(t){return this.http.get(`${R.a.booksUrl}/${t}`)}addBook(t){return this.http.post(R.a.booksUrl,t)}updateBook(t,e){return this.http.put(`${R.a.booksUrl}/${t}`,e)}deleteBook(t){return this.http.delete(`${R.a.booksUrl}/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(X.a))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var q=n("9jGm"),Y=n("bOdf"),z=n("lJxs"),G=n("vkgz");let V=(()=>{class t{constructor(t,e,n){this.bookService=t,this.actions$=e,this.router=n,this.loadBooks$=Object(q.d)(()=>this.actions$.pipe(Object(q.e)(O.loadBooks),Object(Y.a)(()=>this.bookService.getBooks()),Object(z.a)(t=>O.booksLoaded({books:t})))),this.loadBook$=Object(q.d)(()=>this.actions$.pipe(Object(q.e)(O.loadBook),Object(Y.a)(t=>this.bookService.getBook(t.bookId)),Object(z.a)(t=>O.bookLoaded({book:[t]})))),this.addBook$=Object(q.d)(()=>this.actions$.pipe(Object(q.e)(O.addBook),Object(Y.a)(t=>this.bookService.addBook(t.book)),Object(G.a)(()=>this.router.navigateByUrl("/home"))),{dispatch:!1}),this.deleteBook$=Object(q.d)(()=>this.actions$.pipe(Object(q.e)(O.deleteBook),Object(Y.a)(t=>this.bookService.deleteBook(t.bookId))),{dispatch:!1}),this.updateBook$=Object(q.d)(()=>this.actions$.pipe(Object(q.e)(O.updateBook),Object(Y.a)(t=>this.bookService.updateBook(t.update.id,t.update.changes)),Object(G.a)(()=>this.router.navigateByUrl("/home"))),{dispatch:!1})}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(H),c.Ob(q.a),c.Ob(i.b))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac}),t})(),Q=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},providers:[H],imports:[[o.b,U.h,U.m,F,s.d.forFeature("books",j),q.c.forFeature([V])]]}),t})()}}]);