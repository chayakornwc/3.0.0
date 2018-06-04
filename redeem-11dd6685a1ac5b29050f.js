(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{782:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(237),i=n(268),s=n.n(i),c=(n(253),n(267)),u=n.n(c),l=n(80),d=n.n(l),p=n(265),m=n.n(p),h=n(747),k=n(356),b=n.n(k),g=n(355),w=n.n(g),f=n(354),v=n.n(f),E=(n(85),n(271)),x=n.n(E);function y(e){var t=e.onClose;return a.a.createElement(h.Dialog,{haveCloseButton:!0,backdrop:!0,title:"Redeem ticket",buttons:[{text:"Close",onPress:t}],open:!0,closeOnEscape:!0,onClose:t},a.a.createElement(C,null))}n(330),n(328),x.a.initializeApp({apiKey:"AIzaSyCNk1PljsNsYRgvZ98_KYVqotkRojt24kk",authDomain:"reactbkk3.firebaseapp.com",databaseURL:"https://reactbkk3.firebaseio.com",projectId:"reactbkk3",storageBucket:"reactbkk3.appspot.com",messagingSenderId:"666406395956"}),Object.assign(window,{firebase:x.a});var C=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=n=e.call.apply(e,[this].concat(a))||this,n.state={status:"initial",error:"",code:"",admin:!1},n.signIn=u()(s.a.mark(function e(){var t,r,a,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({status:"signingIn"}),e.prev=1,e.prev=2,e.next=5,x.a.auth().signInWithPopup(new x.a.auth.GithubAuthProvider);case 5:t=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),n.setState({status:"error",error:"Cannot sign in: "+e.t0}),e.abrupt("return");case 12:return r=t.user.providerData[0].uid,n.setState({status:"checking"}),e.prev=14,e.next=17,x.a.firestore().collection("github_users").doc(r).get();case 17:a=e.sent,e.next=24;break;case 20:return e.prev=20,e.t1=e.catch(14),n.setState({status:"error",error:"Cannot check: "+e.t1}),e.abrupt("return");case 24:o=a.data(),n.setState({status:"checked",code:o&&o.code,admin:o&&o.admin}),e.next=31;break;case 28:e.prev=28,e.t2=e.catch(1),n.setState({status:"error",error:"Unknown error: "+e.t2});case 31:case"end":return e.stop()}},e,this,[[1,28],[2,8],[14,20]])})),n.openEventPop=function(){window.open("https://www.eventpop.me/e/3607-react-bangkok-3-0-0","_blank")},n.giveCode=u()(s.a.mark(function e(){var t,n,r,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.prompt("Enter GitHub username")){e.next=4;break}return window.alert("Aborting."),e.abrupt("return");case 4:return e.prev=4,e.next=7,v.a.get("https://api.github.com/users/"+t);case 7:if(n=e.sent.data){e.next=10;break}throw new Error("No response from GitHub");case 10:if(n.id){e.next=12;break}throw new Error("No user ID data found");case 12:if(r=n.id,window.alert("Found GitHub user id = "+r+"."),a=window.prompt("Enter redemption code")){e.next=18;break}return window.alert("Aborting."),e.abrupt("return");case 18:return e.next=20,x.a.firestore().collection("github_users").doc(String(r)).set({code:a,username:t},{merge:!0});case 20:window.alert("OK done.\n\nusername="+t+"\nid="+r+"\ncode="+a),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(4),window.alert("Cannot giveCode: "+e.t0+".");case 26:case"end":return e.stop()}},e,this,[[4,23]])})),t||m()(n)}return t.prototype.render=function(){if("error"===this.state.status)return a.a.createElement("div",null,a.a.createElement("p",{className:Object(o.css)({color:"red"})},a.a.createElement("strong",null,"Error:")," ",this.state.error));if("signingIn"===this.state.status)return a.a.createElement(h.Preloader,{kind:"linear",labelAlign:"center",subtitle:"Signing in...",indeterminate:!0});if("checking"===this.state.status)return a.a.createElement(h.Preloader,{kind:"linear",labelAlign:"center",subtitle:"Looking for your ticket...",indeterminate:!0});if("checked"===this.state.status){var e=this.state.admin&&a.a.createElement("div",null,a.a.createElement("p",null,"Hey you are an admin! You can"," ",a.a.createElement(h.Button,{onPress:this.giveCode,text:"give redemption codes!"})));return this.state.code?a.a.createElement("div",null,a.a.createElement("p",null,"Congratulations! You receive a free ticket."),a.a.createElement("p",null,"Use the code ",a.a.createElement("strong",null,this.state.code)," to redeem your free ticket."),a.a.createElement(h.Button,{text:"Get your free ticket!",subtitle:"Go to Event Pop",colorScheme:"primary",iconPositionRight:!0,icon:a.a.createElement(w.a,null),onPress:this.openEventPop}),e):a.a.createElement("div",null,a.a.createElement("p",null,"Sorry, we cannot find the ticket associated with your account..."),e)}return a.a.createElement("div",null,a.a.createElement("p",null,"To redeem your ticket, please first sign in with GitHub..."),a.a.createElement(h.Button,{text:"Sign in with GitHub",colorScheme:"primary",size:"large",icon:a.a.createElement(b.a,null),onPress:this.signIn}))},d()(t,e),t}(a.a.Component);function S(e){var t=e.onClose;return a.a.createElement(y,{onClose:t})}n.d(t,"renderDialog",function(){return S})}}]);
//# sourceMappingURL=redeem-11dd6685a1ac5b29050f.js.map