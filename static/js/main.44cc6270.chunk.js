(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,s){e.exports={item:"Post_item__nE5l1"}},14:function(e,t,s){e.exports={nav:"Navbar_nav__wtbbI",item:"Navbar_item__34RdT",active:"Navbar_active__2bFSH"}},200:function(e,t,s){},201:function(e,t,s){},206:function(e,t,s){},244:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(8),i=s(36),r=s(4),c=s(112),o=s.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"14052d0f-1194-42cb-a6a5-f63bafb7758b"}}),u=function(e,t){return o.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},l=function(e){return o.post("follow/".concat(e))},d=function(e){return o.delete("follow/".concat(e))},j=function(e){return console.warn("Obsolute method. Please use profileAPI object"),b.getProfile(e)},b={getProfile:function(e){return o.get("profile/"+e)},getStatus:function(e){return o.get("profile/status/"+e)},updateStatus:function(e){return o.put("profile/status",{status:e})}},p=function(){return o.get("auth/me")},h="ADD-POST",g="SET_USER_PROFILE",f="SET_STATUS",O={postsData:[{id:1,message:"Hi iam there",like:"10"},{id:2,message:"Do you?",like:"5"},{id:3,message:"how are you"}],profile:null,status:""},m=function(e){return{type:f,status:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var s={id:4,message:t.newPostText,like:"0"};return Object(r.a)(Object(r.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[s]),newPostText:""});case f:return Object(r.a)(Object(r.a)({},e),{},{status:t.status});case g:return Object(r.a)(Object(r.a)({},e),{},{profile:t.profile});default:return e}},_="SEND_MESSAGE",v={dialogsData:[{id:1,name:"Dmitry"},{id:2,name:"Sasha"},{id:3,name:"Niki"},{id:4,name:"Viki"},{id:5,name:"Alyona"},{id:6,name:"Stas"}],messageData:[{id:1,message:"hi"},{id:2,message:"hello"},{id:3,message:"how are you"},{id:4,message:"fine"},{id:5,message:"hi"},{id:6,message:"hi"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var s=t.newMessageText;return Object(r.a)(Object(r.a)({},e),{},{messageData:[].concat(Object(i.a)(e.messageData),[{id:7,message:s}])});default:return e}},w={},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return e},y="FOLLOW",N="UNFOLLOW",C="SET_USERS",I="SET_CURRENT_PAGE",M="TOGGLE_IS_FETCHING",k="TOGGLE_IS_FOLLOWING_PROGRESS",F={users:[],pageSize:5,totalUsersCount:20,currentPage:1,isFentching:!1,followingInProgress:[]},D=function(e){return{type:M,isFetching:e}},T=function(e,t){return{type:k,isFetching:e,userId:t}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!0}):e}))});case N:return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!1}):e}))});case C:return Object(r.a)(Object(r.a)({},e),{},{users:t.users});case I:return Object(r.a)({},e.currentPage);case M:return Object(r.a)(Object(r.a)({},e),{},{isFentching:t.isFetching});case k:return Object(r.a)(Object(r.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},E="SET_USER_DATA",U={userId:null,email:null,login:null,isAuth:!1},L=function(e,t,s){return{type:E,data:{userId:e,email:t,login:s}}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(r.a)(Object(r.a)(Object(r.a)({},e),t.data),{},{isAuth:!0});default:return e}},G=s(113),R=s(247),H=Object(a.c)({profilePage:x,messagePage:P,sidebar:S,usersPage:A,auth:z,form:R.a}),B=Object(a.e)(H,Object(a.a)(G.a));window.store=B;var Y=B,W=s(1),V=s.n(W),X=s(52),q=s.n(X),J=(s(200),s(201),s(12)),K=s(14),Q=s.n(K),Z=function(){return Object(n.jsx)("nav",{className:Q.a.nav,children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:Q.a.item,children:Object(n.jsx)(J.b,{to:"/profile",activeClassName:Q.a.active,children:"Profile"})}),Object(n.jsx)("li",{className:Q.a.item,children:Object(n.jsx)(J.b,{to:"/messages",activeClassName:Q.a.active,children:"Messages"})}),Object(n.jsx)("li",{className:Q.a.item,children:Object(n.jsx)(J.b,{to:"/users",activeClassName:Q.a.active,children:"Users"})}),Object(n.jsx)("li",{className:Q.a.item,children:Object(n.jsx)(J.b,{to:"/news",activeClassName:Q.a.active,children:"News"})}),Object(n.jsx)("li",{className:Q.a.item,children:Object(n.jsx)(J.b,{to:"/music",activeClassName:Q.a.active,children:"Music"})}),Object(n.jsx)("li",{className:Q.a.item,children:Object(n.jsx)(J.b,{to:"/settings",activeClassName:Q.a.active,children:"Settings"})})]})})},$=s(22),ee=s(23),te=s(25),se=s(24),ne=(s(206),s.p+"static/media/loader.408f8fd9.svg"),ae=function(e){return Object(n.jsx)("img",{src:ne})},ie=s(37),re=s.n(ie),ce=function(e){Object(te.a)(s,e);var t=Object(se.a)(s);function s(){var e;Object($.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0}),e.props.updateStatus()},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(ee.a)(s,[{key:"deactivateEditMode",value:function(){this.setState({editMode:!1}),this.props.updateStatus(this.state.status)}},{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[!this.state.editMode&&Object(n.jsx)("div",{children:Object(n.jsx)("span",{className:re.a.status_text,onDoubleClick:this.activateEditMode,children:this.props.status||" No status"})}),this.state.editMode&&Object(n.jsx)("div",{children:Object(n.jsx)("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode.bind(this),value:this.state.status})})]})}}]),s}(V.a.Component),oe=function(e){return e.profile?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{className:re.a.img__content,src:"https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg"})}),Object(n.jsxs)("div",{className:re.a.user,children:[Object(n.jsx)("img",{className:re.a.img__ava,src:e.profile.photos.large}),Object(n.jsx)("div",{children:Object(n.jsx)(ce,{status:e.status,updateStatus:e.updateStatus})})]})]}):Object(n.jsx)(ae,{})},ue=s(10),le=s(246),de=s(245),je=function(e){if(!e)return"Field is required"},be=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e)}},pe=s(58),he=s(80),ge=s.n(he),fe=function(e){e.input;var t=e.meta,s=(e.child,Object(pe.a)(e,["input","meta","child"])),a=t.touched&&t.error;return Object(n.jsxs)("div",{className:ge.a.formControl+" "+(a?ge.a.error:" "),children:[Object(n.jsx)("div",{children:s.children}),a&&Object(n.jsxs)("span",{children:[" ",t.error," "]})]})},Oe=function(e){var t=e.input,s=(e.meta,e.child,Object(pe.a)(e,["input","meta","child"]));return Object(n.jsx)(fe,Object(r.a)(Object(r.a)({},e),{},{children:Object(n.jsx)("textarea",Object(r.a)(Object(r.a)({},t),s))}))},me=function(e){var t=e.input,s=(e.meta,e.child,Object(pe.a)(e,["input","meta","child"]));return Object(n.jsx)(fe,Object(r.a)(Object(r.a)({},e),{},{children:Object(n.jsx)("input",Object(r.a)(Object(r.a)({},t),s))}))},xe=s(54),_e=s.n(xe),ve=s(116),Pe=s.n(ve),we=function(e){return Object(n.jsxs)("div",{className:Pe.a.item,children:[Object(n.jsx)("img",{src:"https://html5css.ru/howto/img_avatar.png"}),e.message,Object(n.jsx)("div",{children:Object(n.jsxs)("span",{children:["Like ",e.like]})})]})},Se=be(10),ye=Object(de.a)({form:"profileAddNewPostForm"})((function(e){return Object(n.jsx)("form",{onSubmit:e.handleSubmit,children:Object(n.jsxs)("div",{className:_e.a.new__posts,children:[Object(n.jsx)(le.a,{name:"newPostText",component:Oe,placeholder:"Post text",validate:[je,Se]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Add post"})})]})})})),Ne=function(e){var t=e.postsData.map((function(e){return Object(n.jsx)(we,{message:e.message,like:e.like})}));return Object(n.jsxs)("div",{className:_e.a.posts,children:[Object(n.jsx)("div",{className:_e.a.my__posts,children:"My posts"}),Object(n.jsx)(ye,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(n.jsx)("div",{children:t})]})},Ce=Object(ue.b)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:h,newPostText:e}}(t))}}}))(Ne),Ie=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(oe,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(n.jsx)(Ce,{})]})},Me=s(9),ke=function(e){return{isAuth:e.auth.isAuth}},Fe=function(e){var t=function(t){Object(te.a)(a,t);var s=Object(se.a)(a);function a(){return Object($.a)(this,a),s.apply(this,arguments)}return Object(ee.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(n.jsx)(e,Object(r.a)({},this.props)):Object(n.jsx)(Me.a,{to:"/login"})}}]),a}(V.a.Component);return Object(ue.b)(ke)(t)},De=function(e){Object(te.a)(s,e);var t=Object(se.a)(s);function s(){return Object($.a)(this,s),t.apply(this,arguments)}return Object(ee.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=15616),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(n.jsx)(Ie,Object(r.a)(Object(r.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(V.a.Component),Te=Object(a.d)(Object(ue.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){j(e).then((function(e){var s;t((s=e.data,{type:g,profile:s}))}))}},getStatus:function(e){return function(t){b.getStatus(e).then((function(e){t(m(e.data))}))}},updateStatus:function(e){return function(t){b.updateStatus(e).then((function(s){0===s.data.resultCode&&t(m(e))}))}}}),Me.f)(De),Ae=s(26),Ee=s.n(Ae),Ue=function(e){return Object(n.jsx)("div",{className:Ee.a.dialog+" "+Ee.a.active,children:Object(n.jsx)(J.b,{to:"/messages/"+e.id,children:e.name})})},Le=function(e){return Object(n.jsx)("div",{className:Ee.a.message,children:e.message})},ze=be(50),Ge=Object(de.a)({form:"messageForm"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)(le.a,{component:Oe,validate:[je,ze],name:"newMessageText",placeholder:"Enter your message..."})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"send message"})})]})})),Re=function(e){var t=e.messagePage,s=t.dialogsData.map((function(e){return Object(n.jsx)(Ue,{name:e.name,id:e.id},e.id)})),a=t.messageData.map((function(e){return Object(n.jsx)(Le,{message:e.message},e.id)}));t.newMessageText;return Object(n.jsxs)("div",{className:Ee.a.dialogs,children:[Object(n.jsx)("div",{className:Ee.a.dialogs_items,children:s}),Object(n.jsx)("div",{className:Ee.a.messages,children:a}),Object(n.jsx)("div",{children:Object(n.jsx)(Ge,{onSubmit:function(t){e.sendMessageCreator(t.newMessageText)}})})]})},He=Object(a.d)(Object(ue.b)((function(e){return{messagePage:e.messagePage}}),(function(e){return{sendMessageCreator:function(t){e(function(e){return{type:_,newMessageText:e}}(t))}}})),Fe)(Re),Be=s(56),Ye=s.n(Be),We=s.p+"static/media/userLogo.3759889a.png",Ve=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:s.map((function(t){return Object(n.jsx)("span",{className:" ".concat(e.currentPage===t&&Ye.a.selectedPage," ").concat(Ye.a.pagesD," "),onClick:function(s){e.onPageChanged(t)},children:t})}))}),e.users.map((function(t){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:Object(n.jsx)(J.b,{to:"profile/"+t.id,children:Object(n.jsx)("img",{src:null!=t.photos.small?t.photos.small:We,className:Ye.a.userPhoto})})}),Object(n.jsx)("div",{children:t.followed?Object(n.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)},children:"unfollow"}):Object(n.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"follow"})})]}),Object(n.jsxs)("span",{children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:t.name}),Object(n.jsx)("div",{children:t.status})]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:"u.location.city"}),Object(n.jsx)("div",{children:"u.location.country"})]})]})]},t.id)}))]})},Xe=function(e){Object(te.a)(s,e);var t=Object(se.a)(s);function s(){var e;Object($.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(ee.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.isFentching?Object(n.jsx)(ae,{}):null,Object(n.jsx)(Ve,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress})]})}}]),s}(V.a.Component),qe=Object(a.d)(Fe,Object(ue.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFentching:e.usersPage.isFentching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(T(!0,e)),l(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:y,userId:e}}(e)),t(T(!1,e))}))}},unFollow:function(e){return function(t){t(T(!0,e)),d(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:N,userId:e}}(e)),t(T(!1,e))}))}},setCurrentPage:function(e){return{type:I,currentPage:e}},toogleIsFollowingProgress:T,getUsers:function(e,t){return function(s){s(D(!0)),u(e,t).then((function(e){var t;s((t=e.items,{type:C,users:t})),s(D(!1))}))}}}))(Xe),Je=s(57),Ke=s.n(Je),Qe=function(e){return Object(n.jsxs)("header",{className:Ke.a.header,children:[Object(n.jsx)("img",{className:Ke.a.img,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"}),Object(n.jsx)("div",{className:Ke.a.loginBlock,children:e.isAuth?e.login:Object(n.jsx)(J.b,{to:"/login",children:"Login"})})]})},Ze=function(e){Object(te.a)(s,e);var t=Object(se.a)(s);function s(){return Object($.a)(this,s),t.apply(this,arguments)}return Object(ee.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(n.jsx)(Qe,Object(r.a)({},this.props))}}]),s}(V.a.Component),$e=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){p().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,a=s.email,i=s.login;e(L(n,a,i))}}))}}})(Ze),et=Object(de.a)({form:"login"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)(le.a,{placeholder:"Login",name:"login",validate:[je],component:me})}),Object(n.jsx)("div",{children:Object(n.jsx)(le.a,{placeholder:"Password",name:"password",validate:[je],component:me})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(le.a,{type:"checkbox",name:"chekbox",component:me})," remember me"]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Log in "})})]})})),tt=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"LOGIN"}),Object(n.jsx)(et,{onSubmit:function(e){}})]})},st=function(e){return Object(n.jsx)(J.a,{children:Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)($e,{}),Object(n.jsx)(Z,{}),Object(n.jsxs)("div",{className:"app-wrapper-content",children:[Object(n.jsx)(Me.b,{path:"/messages",render:function(){return Object(n.jsx)(He,{})}}),Object(n.jsx)(Me.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(Te,{})}}),Object(n.jsx)(Me.b,{path:"/users",render:function(){return Object(n.jsx)(qe,{})}}),Object(n.jsx)(Me.b,{path:"/login",render:function(){return Object(n.jsx)(tt,{})}})]})]})})};q.a.render(Object(n.jsx)(V.a.StrictMode,{children:Object(n.jsx)(ue.a,{store:Y,children:Object(n.jsx)(st,{})})}),document.getElementById("root"))},26:function(e,t,s){e.exports={dialogs:"Messages_dialogs__R76N7",dialogs_items:"Messages_dialogs_items__3zDYu",dialog:"Messages_dialog__cLzua",active:"Messages_active__1fAN5",messages:"Messages_messages__24gWY",message:"Messages_message__1fw4F"}},37:function(e,t,s){e.exports={img__content:"ProfileInfo_img__content__1HcXG",user:"ProfileInfo_user__20t3Q",img__ava:"ProfileInfo_img__ava__2yYxM",user__info:"ProfileInfo_user__info__pDK5V",status_text:"ProfileInfo_status_text__YiXsk"}},54:function(e,t,s){e.exports={posts:"MyPosts_posts__3TAxN",my__posts:"MyPosts_my__posts__3VyZj",new__posts:"MyPosts_new__posts__BAjsL"}},56:function(e,t,s){e.exports={userPhoto:"Users_userPhoto__3sOH8",selectedPage:"Users_selectedPage__3yBFS",pagesD:"Users_pagesD__3MNLt"}},57:function(e,t,s){e.exports={header:"Header_header__aHpgE",img:"Header_img__2qPtp",loginBlock:"Header_loginBlock__Hv8BS"}},80:function(e,t,s){e.exports={formControl:"FormsControls_formControl__1FAUG",error:"FormsControls_error__2hrdX"}}},[[244,1,2]]]);
//# sourceMappingURL=main.44cc6270.chunk.js.map