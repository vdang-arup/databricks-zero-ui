import{a as Ei}from"./chunk-ICNJUBLY.js";import{a as _i,b as J,c as Q}from"./chunk-NRRACVCX.js";import{$b as E,Ca as Je,D as je,E as Ue,Ea as Qe,Fa as ti,Ga as ei,Ha as ii,Hb as ai,Ia as oi,Ib as li,J as qe,Jb as ci,K as Ct,Kb as di,La as ni,Lb as pi,Mb as mi,Na as ri,Nb as ui,O as pt,Oa as si,Ob as fi,P as Xt,Pb as hi,Q as ot,Qb as gi,R as P,Rb as yi,S as N,Sb as _,T as St,Tb as u,Ub as X,Vb as Mt,W as pe,Wb as bi,X as Ze,Xb as y,Y as me,Yb as Y,Z as ue,Zb as d,_b as It,ac as _t,bc as vi,ca as U,cc as wi,dc as G,ec as h,fc as xi,gc as Ci,ha as fe,hc as be,ka as he,la as ge,lc as Si,mc as a,nc as r,oc as At,pc as O,qa as We,qc as Nt,rc as ve,sc as Ai,ta as Ke,tc as I,uc as q,v as Wt,va as Xe,wa as Ye,x as $t,xa as Ge,y as ze,z as Kt}from"./chunk-3VSD6X44.js";import"./chunk-66URT45J.js";import{Ya as ye}from"./chunk-QGX4UOGU.js";import"./chunk-X6YHEMIY.js";import{a as M,b as K,d as Zt,i as xt}from"./chunk-DNA43DVC.js";var ki=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Kt({type:e}),e.\u0275inj=Wt({providers:[{provide:Qe,useClass:fi,multi:!0},mi,yi],imports:[Je,hi,ai]});let t=e;return t})();function Oi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Li(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function Pi(t){let i=(t||new Date).getHours();return i>=19||i<7}function R(t,e){return(i,o)=>{let{update:n}=i,s=Object.assign({waitUntilFirstUpdate:!1},e);i.update=function(c){if(c.has(t)){let l=c.get(t),p=this[t];l!==p&&(!s?.waitUntilFirstUpdate||this.hasUpdated)&&this[o].call(this,l,p)}n.call(this,c)}}}var B={auto:"auto",dark:"dark",light:"light"};var Ri=[O,_`
    #main {
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: rgb(var(--arc-background-color));
      color: rgb(var(--arc-font-color));
    }

    .container {
      flex: 1 1 100%;
      display: flex;
      overflow: hidden;
      gap: 0;
      padding: 0;
    }

    ::slotted(arc-sidebar) {
      display: none;
    }

    #content {
      flex: 1 1 100%;
      overflow: hidden;
      background-color: rgb(var(--arc-container-color));
    }

    arc-bottombar,
    ::slotted(arc-bottombar) {
      display: block;
    }

    /* Medium devices and up */
    @media (min-width: ${49}rem) {
      .container:not(.container--fullscreen) {
        gap: var(--arc-spacing-normal);
        padding: var(--arc-spacing-normal) var(--arc-spacing-medium);
      }

      ::slotted(arc-sidebar) {
        display: block;
      }

      arc-bottombar,
      ::slotted(arc-bottombar) {
        display: none;
      }
    }
  `];function C(t,e,i){let o=new CustomEvent(e,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return t.dispatchEvent(o),o}function Ot(t,e){return new Promise(i=>{function o(n){n.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}var v={accessibilityChange:"arc-accessibility-change",afterHide:"arc-after-hide",afterShow:"arc-after-show",auth:"arc-auth",cellClick:"arc-cell-click",change:"arc-change",clear:"arc-clear",error:"arc-error",hide:"arc-hide",initialFocus:"arc-initial-focus",loaded:"arc-loaded",requestClose:"arc-request-close",rowClick:"arc-row-click",select:"arc-select",showAccessibility:"arc-show-accessibility",show:"arc-show",tableReady:"arc-table-ready"};var $i=u`
  <svg
    width="512"
    height="159"
    viewBox="0 0 512 159"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="title" lang="en">Arup logo</title>
    <path
      d="M331.03 146.348C302.146 146.348 289.628 133.297 284.742 125.522C279.153 116.521 278.43 104.335 278.43 94.7163V31.8024C278.43 31.1942 278.439 30.5858 278.449 29.9586C278.554 23.4 278.658 17.2028 268.47 16.8796H265.228V11.6328H317.459L317.495 16.9176L316.565 16.9081C312.668 16.8701 309.701 17.9061 307.592 19.9877C305.093 22.4686 303.819 26.4417 303.819 31.8024V101.008C303.819 124.438 314.007 136.32 334.102 136.32C345.469 136.32 355.031 132.964 361.011 126.872C370.676 116.882 371.448 103.936 371.448 88.0436V31.6124C371.448 23.267 370.62 16.8891 360.163 16.8891H357.445V11.6328H395.97V16.8891H394.343C386.627 16.8891 382.16 19.2939 382.16 31.6124V89.0037C382.167 127.594 365.439 146.348 331.03 146.348Z"
    />
    <path
      d="M460.357 143.553H408.078V138.325L408.962 138.297C421.216 137.945 421.842 134.029 421.842 122.775V31.7264C421.842 20.0162 421.386 17.2408 409.476 16.8891L408.592 16.8606V11.6328H461.926C493.434 11.6328 509.916 30.1011 509.916 48.3411C509.916 69.2143 491.305 85.5629 467.552 85.5629L455.785 85.3918V76.1529C455.785 76.1529 460.243 76.1054 461.867 76.1054C476.486 76.1054 484.005 65.0511 484.005 48.5978C484.005 31.4602 473.018 19.9402 456.669 19.9402L446.157 19.9117V124.895C446.157 135.92 448.152 137.916 459.483 138.287L460.367 138.316V143.553H460.357Z"
    />
    <path
      d="M268.611 143.553H230.943L190.642 82.2647V74.7842L191.459 74.6987C205.593 73.2064 218.862 65.0701 218.862 46.6968C218.862 31.2797 207.77 20.5201 191.887 20.5201H181.013V124.895C181.013 136.263 186.232 137.394 193.608 137.736L194.472 137.774V143.544H143.364V138.24L144.229 138.192C155.312 137.574 156.88 134.799 156.88 124.885V30.2816C156.471 18.5715 155.749 17.0697 144.267 16.8891L143.373 16.8796V11.6328H198.427C219.423 11.6328 243.945 20.8621 243.945 46.887C243.945 62.3991 234.546 73.5296 215.991 79.9834L236.903 110.856C239.183 114.354 247.567 124.524 251.322 128.668C258.479 136.367 263.63 137.432 267.043 138.135L268.611 138.468V143.553Z"
    />
    <path
      d="M134.287 143.553H84.4139V138.401L85.2978 138.373C91.3906 138.164 95.164 136.833 95.164 130.883C95.164 128.221 93.0825 123.013 91.9608 120.209L83.8532 100.818H38.8088L30.5299 119.676C27.783 125.902 26.9846 128.155 26.9846 131.073C26.9846 135.36 26.9846 138.192 37.0123 138.373L37.9059 138.392V143.563H1.93879V138.401L2.83226 138.382C9.96102 138.221 13.668 134.599 18.7057 122.88L67.495 11.6328H72.5042L72.7417 12.1841L121.674 127.404C125.2 135.987 126.036 138.021 133.422 138.325L134.296 138.363V143.553H134.287ZM42.5062 91.8932H80.2031L61.7729 47.1817L42.5062 91.8932Z"
    />
  </svg>
`;var Mi=[O,_`
    :host {
      height: 3.5rem;
      background-color: rgb(var(--arc-container-color));
      z-index: 1;
      --logo-height: var(--arc-brand-height);
    }

    /* Layout */
    #main,
    #left,
    #logoWrapper,
    #right,
    #tabs {
      display: grid;
      grid-auto-flow: column;
    }

    #main {
      height: inherit;
      width: 100%;
      padding: 0 var(--arc-spacing-medium) 0 var(--arc-spacing-medium);
      box-shadow: var(--arc-box-shadow);
      user-select: none;
    }

    /* Left side */
    #left {
      justify-content: flex-start;
    }

    #logoWrapper {
      align-items: center;
      gap: var(--arc-spacing-small);
      text-decoration: none;
      color: inherit;
    }

    #tool-logo {
      height: var(--logo-height);
      width: auto;
    }

    /* Show the tool-name when there is no tool-logo */
    #tool-name {
      display: flex;
      overflow: hidden;
    }

    #tool-name::slotted(*) {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    /* Hide the tool-name when there is a tool-logo */
    #tool-logo + #tool-name {
      display: none;
    }

    /* Right side */
    #right {
      justify-content: flex-end;
      gap: var(--arc-spacing-medium);
    }

    #tabSlot {
      display: none;
    }

    ::slotted(arc-button) {
      border-left: var(--arc-border-width) var(--arc-border-style)
        rgb(var(--arc-color-default));
      border-right: var(--arc-border-width) var(--arc-border-style)
        rgb(var(--arc-color-default));
    }

    ::slotted(arc-icon-button),
    #dropdown,
    #accessibility {
      margin: 0 var(--arc-spacing-x-small) 0 var(--arc-spacing-x-small);
    }

    #accessibility {
      display: none;
    }

    #company-logo {
      color: rgb(var(--arc-color-primary));
      display: flex;
      align-items: center;
    }

    #company-logo > svg {
      height: var(--arc-brand-height);
      width: auto;
    }

    /* Medium devices and up */
    @media (min-width: ${49}rem) {
      #tabSlot,
      #tool-logo + #tool-name,
      #accessibility {
        display: flex;
      }

      ::slotted(arc-sso) {
        border-left: var(--arc-border-width) var(--arc-border-style)
          rgb(var(--arc-color-default));
        border-right: var(--arc-border-width) var(--arc-border-style)
          rgb(var(--arc-color-default));
      }
    }
  `];var we,mt=we=class extends y{constructor(){super(...arguments),this.size=I.medium,this.rotation=0}render(){return u`
      <svg
        id="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        role=${h(this.label?"img":void 0)}
        aria-label=${h(this.label||void 0)}
        aria-hidden=${h(this.label?void 0:"true")}
        style=${J({transform:this.rotation?`rotate(${this.rotation}deg)`:null,height:`var(--arc-font-size-${this.size})`,width:`var(--arc-font-size-${this.size})`})}
      >
        ${we.svg}
      </svg>
    `}};mt.tag="ph-icon-list";mt.styles=Q;mt.svg=X`<path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>`;a([d({type:String}),r("design:type",String)],mt.prototype,"label",void 0);a([d({type:String,reflect:!0}),r("design:type",String)],mt.prototype,"size",void 0);a([d({type:Number}),r("design:type",Number)],mt.prototype,"rotation",void 0);mt=we=a([Y("ph-icon-list")],mt);var xe,ut=xe=class extends y{constructor(){super(...arguments),this.size=I.medium,this.rotation=0}render(){return u`
      <svg
        id="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        role=${h(this.label?"img":void 0)}
        aria-label=${h(this.label||void 0)}
        aria-hidden=${h(this.label?void 0:"true")}
        style=${J({transform:this.rotation?`rotate(${this.rotation}deg)`:null,height:`var(--arc-font-size-${this.size})`,width:`var(--arc-font-size-${this.size})`})}
      >
        ${xe.svg}
      </svg>
    `}};ut.tag="ph-icon-${key}";ut.styles=Q;ut.svg=X`<path d="M16 3C13.6471 3 11.472 3.57975 9.47461 4.73926C7.47721 5.89876 5.89876 7.47721 4.73926 9.47461C3.57975 11.472 3 13.6471 3 16C3 18.3529 3.57975 20.528 4.73926 22.5254C5.89876 24.5228 7.47721 26.1012 9.47461 27.2607C11.472 28.4202 13.6471 29 16 29C18.3529 29 20.528 28.4202 22.5254 27.2607C24.5228 26.1012 26.1012 24.5228 27.2607 22.5254C28.4202 20.528 29 18.3529 29 16C29 13.6471 28.4202 11.472 27.2607 9.47461C26.1012 7.47721 24.5228 5.89876 22.5254 4.73926C20.528 3.57975 18.3529 3 16 3ZM16 27.4004C14.7643 27.4004 13.5667 27.21 12.4072 26.8291C11.2477 26.4482 10.2025 25.9023 9.27148 25.1914C8.3405 24.4805 7.52376 23.6595 6.82129 22.7285C6.11882 21.7975 5.57715 20.7523 5.19629 19.5928C4.81543 18.4333 4.625 17.2357 4.625 16C4.625 14.4596 4.92546 12.987 5.52637 11.582C6.12728 10.1771 6.93555 8.9668 7.95117 7.95117C8.9668 6.93555 10.1771 6.12728 11.582 5.52637C12.987 4.92546 14.4596 4.625 16 4.625C17.5404 4.625 19.013 4.92546 20.418 5.52637C21.8229 6.12728 23.0332 6.93555 24.0488 7.95117C25.0645 8.9668 25.8727 10.1771 26.4736 11.582C27.0745 12.987 27.375 14.4596 27.375 16C27.375 17.5404 27.0745 19.013 26.4736 20.418C25.8727 21.8229 25.0645 23.0374 24.0488 24.0615C23.0332 25.0856 21.8229 25.8981 20.418 26.499C19.013 27.0999 17.5404 27.4004 16 27.4004Z"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5504 13.1667H23.6504C24.1196 13.1665 24.5 12.8041 24.5 12.3572C24.5 11.9101 24.1195 11.5477 23.6502 11.5476L8.35465 11.5476L8.35 11.5476C7.88056 11.5476 7.5 11.9101 7.5 12.3572C7.5 12.8042 7.88056 13.1667 8.35 13.1667L13.4504 13.1667V23.6678C13.4501 23.6753 13.45 23.6829 13.45 23.6905C13.45 24.1376 13.8306 24.5 14.3 24.5C14.7694 24.5 15.15 24.1376 15.15 23.6906L15.1504 18.8468L15.1502 18.8335C15.1502 18.3864 15.5308 18.024 16.0002 18.024C16.4696 18.024 16.8502 18.3864 16.8502 18.8334L16.8504 23.6659C16.8501 23.6741 16.85 23.6823 16.85 23.6905C16.85 24.1376 17.2305 24.5 17.7 24.5C18.1694 24.5 18.5499 24.1376 18.55 23.6906L18.5504 13.1667ZM17.2024 7.97421C16.8836 7.67058 16.4512 7.5 16.0004 7.5C15.0569 7.5 14.3004 8.22048 14.3004 9.11906C14.3004 10.0095 15.0569 10.7381 16.0004 10.7381C16.4512 10.7381 16.8836 10.5675 17.2024 10.2639C17.5212 9.96027 17.7004 9.54846 17.7004 9.11906C17.7004 8.68966 17.5212 8.27784 17.2024 7.97421Z"></path>

`;a([d({type:String}),r("design:type",String)],ut.prototype,"label",void 0);a([d({type:String,reflect:!0}),r("design:type",String)],ut.prototype,"size",void 0);a([d({type:Number}),r("design:type",Number)],ut.prototype,"rotation",void 0);ut=xe=a([Y("arc-icon-accessibility")],ut);var nt=class extends y{emitAccessibility(){C(this,v.showAccessibility)}render(){let e=u`
      ${Nt(this.logo,()=>u`<img id="tool-logo" src="${this.logo}" alt="tool-logo" />`)}
      <slot id="tool-name" name="name"></slot>
    `;return u`
      <header id="main">
        <div id="left">
          ${Nt(this.home,()=>u`<a
                id="logoWrapper"
                href=${this.home}
                rel="noreferrer noopener"
                role="button"
                aria-label="tool logo"
              >
                ${e}
              </a>`,()=>u`<div id="logoWrapper">${e}</div>`)}
        </div>
        <div id="right">
          <nav id="tabs" aria-label="primary navigation">
            <slot id="tabSlot"></slot>
            <arc-icon-button
              id="accessibility"
              label="Accessibility panel"
              @click=${this.emitAccessibility}
            >
              <arc-icon-accessibility slot="icon"></arc-icon-accessibility>
            </arc-icon-button>
            <slot name="user"></slot>
          </nav>
          <slot name="company-logo" id="company-logo">${$i}</slot>
        </div>
      </header>
    `}};nt.tag="arc-navbar";nt.styles=Mi;a([d({type:String}),r("design:type",String)],nt.prototype,"home",void 0);a([d({type:String}),r("design:type",String)],nt.prototype,"logo",void 0);customElements.define("arc-navbar",nt);function*Yt(t,e){if(t!==void 0){let i=0;for(let o of t)yield e(o,i++)}}function Ii(t){return/^([A-Z]([a-z]+))(([A-Z]([a-z]+))+)$/.test(t)}function Ni(t){return/^([a-z]+)(([A-Z]([a-z]+))+)$/.test(t)}function Et(t){return`${t.charAt(0).toUpperCase()}${t.slice(1)}`}function Ce(t){if(!Ii(t)&&!Ni(t))return Et(t);let i=`${t.charAt(0).toLowerCase()}${t.slice(1)}`.replace(/([A-Z])/g," $1");return Et(i)}function Vt(t){return!Ii(t)&&!Ni(t)?t:`${t.charAt(0).toLowerCase()}${t.slice(1)}`.replace(/([A-Z])/g,"-$1").toLowerCase()}function Di(t){try{return JSON.stringify(t)}catch{throw new Error("Invalid JSON object")}}function Vi(t){try{return JSON.parse(t)}catch{throw new Error("Invalid JSON string")}}function Gt(t){if(!1)return"";let e=document.querySelector(":root");return getComputedStyle(e).getPropertyValue(t).trim()}function Se(t,e){if(!1)return;let i=document.querySelector(":root");Gt(t)!==e&&i.style.setProperty(t,e)}var Hi=[{name:"colourAdjustments",options:{theme:Object.values(B)}},{name:"contentAdjustments",options:{fontSize:[I.medium,I.large,I["x-large"]],lineHeight:[q.dense,q.normal,q.loose],letterSpacing:[q.dense,q.normal,q.loose],highLegibilityFonts:null,highlightLinks:null,plainText:null}}];var Fi=[O,_`
    #wrapper {
      display: grid;
      gap: var(--arc-spacing-small);
    }

    .label {
      display: flex;
      align-items: center;
      gap: var(--arc-spacing-small);
    }

    #wrapper .options {
      display: flex;
      flex-wrap: wrap;
      gap: var(--arc-spacing-small);
    }
  `];var Bi=new Map,xo=new WeakMap;function Co(t){return t||{keyframes:[],options:{duration:0}}}function D(t,e){Bi.set(t,Co(e))}function rt(t,e){let i=xo.get(t);if(i&&i[e])return i[e];let o=Bi.get(e);return o||{keyframes:[],options:{duration:0}}}function st(t,e,i){return new Promise(o=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");let n=t.animate(e,Object.assign(Object.assign({},i),{duration:Oi()?0:i.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})})}function ft(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{let o=requestAnimationFrame(i);e.addEventListener("cancel",()=>o,{once:!0}),e.cancel()})))}var _e=new Set;function Ae(t){_e.add(t),document.body.classList.add("arc-scroll-lock")}function Ee(t){_e.delete(t),_e.size===0&&document.body.classList.remove("arc-scroll-lock")}function Jt(t){let e=[];function i(s){s instanceof HTMLElement&&(e.push(s),s.shadowRoot&&s.shadowRoot.mode==="open"&&i(s.shadowRoot)),[...s.querySelectorAll("*")].map(c=>i(c))}i(t);let o=e.find(s=>be(s))||null,n=e.reverse().find(s=>be(s))||null;return{start:o,end:n}}var Ft=[],Qt=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}activate(){Ft.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown)}deactivate(){Ft=Ft.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown)}isActive(){return Ft[Ft.length-1]===this.element}handleFocusIn(e){let i=e.composedPath();if(this.isActive()&&!i.includes(this.element)){let{start:o,end:n}=Jt(this.element),s=this.tabDirection==="forward"?o:n;typeof s?.focus=="function"&&s.focus({preventScroll:!0})}}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward",setTimeout(()=>{this.tabDirection="forward"}))}};var Lt={top:"top",end:"end",bottom:"bottom",start:"start"};var V={"x-slow":{duration:1e3,easing:"ease"},slow:{duration:500,easing:"ease"},medium:{duration:250,easing:"ease"},fast:{duration:150,easing:"ease"},"x-fast":{duration:50,easing:"ease"}};var zi=[O,_`
    :host {
      --size: 25rem;
      display: contents;
    }

    .drawer {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      z-index: var(--arc-z-index-drawer);
    }

    .drawer--contained {
      position: absolute;
      z-index: initial;
    }

    #overlay {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(var(--arc-darker-40) 0 0);
      pointer-events: all;
    }

    .drawer--contained #overlay {
      position: absolute;
    }

    #panel {
      position: absolute;
      display: flex;
      flex-direction: column;
      z-index: 2;
      max-width: 100%;
      max-height: 100%;
      background-color: rgb(var(--arc-container-color));
      overflow: auto;
      pointer-events: all;
    }

    #panel:focus {
      outline: none;
    }

    /* Placements */
    .drawer--top #panel {
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
      width: 100%;
      height: var(--size);
    }

    .drawer--end #panel {
      top: 0;
      right: 0;
      bottom: auto;
      left: auto;
      width: var(--size);
      height: 100%;
    }

    .drawer--bottom #panel {
      top: auto;
      right: auto;
      bottom: 0;
      left: 0;
      width: 100%;
      height: var(--size);
    }

    .drawer--right #panel {
      top: 0;
      right: auto;
      bottom: auto;
      left: 0;
      width: var(--size);
      height: 100%;
    }

    #header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--arc-spacing-small);
      padding-left: var(--arc-spacing-medium);
      user-select: none;
    }

    #header span {
      font-size: var(--arc-font-size-large);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #body {
      flex: 1 1 auto;
      padding: var(--arc-spacing-medium);
      padding-top: var(--arc-spacing-normal);
      border-top: var(--arc-border-width) var(--arc-border-style)
        rgb(var(--arc-color-default));
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }

    #footer {
      text-align: right;
      padding: var(--arc-spacing-medium);
    }
  `];var H=class extends y{constructor(){super(...arguments),this.open=!1,this.contained=!1,this.placement=Lt.end}handleOpenChange(){return At(this,void 0,void 0,function*(){if(this.open){C(this,v.show),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ae(this)),yield Promise.all([ft(this.drawer),ft(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{C(this,v.initialFocus,{cancelable:!0}).defaultPrevented||this.panel.focus({preventScroll:!0})});let e=rt(this,`drawer.show${Et(this.placement)}`),i=rt(this,"drawer.overlay.show");yield Promise.all([st(this.panel,e.keyframes,e.options),st(this.overlay,i.keyframes,i.options)]),C(this,v.afterShow)}else{C(this,v.hide),this.modal.deactivate(),Ee(this),yield Promise.all([ft(this.drawer),ft(this.overlay)]);let e=rt(this,`drawer.hide${Et(this.placement)}`),i=rt(this,"drawer.overlay.hide");yield Promise.all([st(this.panel,e.keyframes,e.options),st(this.overlay,i.keyframes,i.options)]),this.drawer.hidden=!0;let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),C(this,v.afterHide)}})}connectedCallback(){super.connectedCallback(),this.modal=new Qt(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&!this.contained&&(this.modal.activate(),Ae(this))}disconnectedCallback(){super.disconnectedCallback(),Ee(this)}show(){if(!this.open)return this.open=!0,Ot(this,v.afterShow)}hide(){if(this.open)return this.open=!1,Ot(this,v.afterHide)}_requestClose(){if(C(this,v.requestClose,{cancelable:!0}).defaultPrevented){let i=rt(this,"drawer.denyClose");st(this.panel,i.keyframes,i.options);return}this.hide()}_handleKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._requestClose())}render(){return u`
      <div
        id="main"
        class=${G({drawer:!0,"drawer--contained":this.contained,"drawer--top":this.placement===Lt.top,"drawer--end":this.placement===Lt.end,"drawer--bottom":this.placement===Lt.bottom,"drawer--start":this.placement===Lt.start})}
        @keydown=${this._handleKeyDown}
      >
        <div
          id="overlay"
          @click=${this._requestClose}
          role="presentation"
          tabindex="-1"
        ></div>
        <div
          id="panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${h(this.label||void 0)}
          aria-labelledby="${h(this.label?void 0:"title")}"
          tabindex="0"
        >
          <div id="header">
            <slot id="title" name="label"><span>${this.label}</span></slot>
            <arc-icon-button
              id="toggleClose"
              label="Close drawer"
              @click=${this._requestClose}
            >
              <ph-icon-x slot="icon"></ph-icon-x>
            </arc-icon-button>
          </div>

          <div id="body">
            <slot></slot>
          </div>

          <footer id="footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};H.tag="arc-drawer";H.styles=zi;a([E("#main"),r("design:type",HTMLElement)],H.prototype,"drawer",void 0);a([E("#panel"),r("design:type",HTMLElement)],H.prototype,"panel",void 0);a([E("#overlay"),r("design:type",HTMLElement)],H.prototype,"overlay",void 0);a([d({type:Boolean,reflect:!0}),r("design:type",Boolean)],H.prototype,"open",void 0);a([d({type:Boolean,reflect:!0}),r("design:type",Boolean)],H.prototype,"contained",void 0);a([d({type:String,reflect:!0}),r("design:type",String)],H.prototype,"placement",void 0);a([d({type:String}),r("design:type",String)],H.prototype,"label",void 0);a([R("open",{waitUntilFirstUpdate:!0}),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",Promise)],H.prototype,"handleOpenChange",null);D("drawer.showTop",{keyframes:[{opacity:0,transform:"translateY(-100%)"},{opacity:1,transform:"translateY(0)"}],options:V.slow});D("drawer.hideTop",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-100%)"}],options:V.slow});D("drawer.showEnd",{keyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],options:V.slow});D("drawer.hideEnd",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],options:V.slow});D("drawer.showBottom",{keyframes:[{opacity:0,transform:"translateY(100%)"},{opacity:1,transform:"translateY(0)"}],options:V.slow});D("drawer.hideBottom",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(100%)"}],options:V.slow});D("drawer.showStart",{keyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],options:V.slow});D("drawer.hideStart",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],options:V.slow});D("drawer.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.01)"},{transform:"scale(1)"}],options:V.slow});D("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:V.slow});D("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:V.slow});customElements.define("arc-drawer",H);var ji=[O,_`
    :host {
      display: inline-flex;
    }

    #radioGroup {
      display: grid;
      position: relative;
      right: var(--arc-spacing-small);
      border: none;
      padding: 0;
      margin: 0;
      min-width: 0;
    }

    /* Medium devices and up */
    @media (min-width: ${49}rem) {
      :host([row]) #radioGroup {
        grid-auto-flow: column;
      }
    }
  `];var tt=class extends y{constructor(){super(...arguments),this.row=!1}handleFocusIn(){let i=[...this.defaultSlot.assignedElements({flatten:!0})].find(o=>o.tagName==="ARC-RADIO"&&o.checked);i?.focus()}render(){return u`
      <div id="main">
        <label id="label">
          <slot name="label">${this.label}</slot>
        </label>
        <div id="radioGroup" role="radiogroup" @focusin=${this.handleFocusIn}>
          <slot></slot>
        </div>
      </div>
    `}};tt.tag="arc-radio-group";tt.styles=ji;a([E("slot:not([name])"),r("design:type",HTMLSlotElement)],tt.prototype,"defaultSlot",void 0);a([d({type:String}),r("design:type",String)],tt.prototype,"label",void 0);a([d({type:Boolean}),r("design:type",Boolean)],tt.prototype,"row",void 0);customElements.define("arc-radio-group",tt);var Ui=vi(class extends wi{constructor(t){if(super(t),t.type!==_t.PROPERTY&&t.type!==_t.ATTRIBUTE&&t.type!==_t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!xi(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Mt||e===bi)return e;let i=t.element,o=t.name;if(t.type===_t.PROPERTY){if(e===i[o])return Mt}else if(t.type===_t.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(o))return Mt}else if(t.type===_t.ATTRIBUTE&&i.getAttribute(o)===e+"")return Mt;return Ci(t),e}});var qi=_`
  input {
    cursor: inherit;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 1;
  }

  #control {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    cursor: inherit;
    user-select: none;
    appearance: none;
    text-decoration: none;
    padding: var(--arc-spacing-small);
    border-radius: 50%;
  }

  #label {
    line-height: var(--arc-font-size-x-large);
    user-select: none;
  }
`;var Zi=[O,qi,_`
    .radio {
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      cursor: pointer;
    }

    #icon {
      position: relative;
      display: flex;
    }

    #icon svg {
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentcolor;
      flex-shrink: 0;
      font-size: var(--arc-font-size-x-large);
    }

    #icon svg.fill {
      position: absolute;
      transform: scale(0);
    }

    /* Hover, Focus & Mouse down */
    .radio:not(.radio--disabled) input:hover + #control,
    .radio:not(.radio--disabled) input:focus-visible + #control {
      background-color: rgba(var(--arc-font-color), 10%);
    }
    .radio:not(.radio--disabled) input:active + #control {
      background-color: rgba(var(--arc-font-color), 30%);
    }

    /* Disabled */
    .radio--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Checked */
    .radio--checked #icon {
      color: rgb(var(--arc-color-info));
    }

    .radio--checked #icon svg.fill {
      transform: scale(1);
    }
  `];var F=class extends y{constructor(){super(...arguments),this.formController=new Ei(this,{value:e=>e.checked?e.value:void 0}),this.disabled=!1,this.checked=!1,this.invalid=!1}firstUpdated(){this.updateComplete.then(()=>{let e=this.getAllRadios(),i=e.find(o=>o.checked);if(e.forEach(o=>{o.input.tabIndex=-1}),i&&!i.disabled)i.input.tabIndex=0;else if(e.length>0){let o=this.getAllRadios({includeDisabled:!1});o[0].input.tabIndex=0}})}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleCheckedChange(){this.checked&&(this.input.tabIndex=0,this.getSiblingRadios().forEach(e=>{e.input.tabIndex=-1,e.checked=!1}))}getAllRadios(e={includeDisabled:!0}){let i=this.closest("arc-radio-group"),{includeDisabled:o}=e;return i?[...i.querySelectorAll("arc-radio")].filter(n=>n.name!==this.name?!1:!(!o&&n.disabled)):[this]}getSiblingRadios(){return this.getAllRadios().filter(e=>e!==this)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}_handleClick(){this.checked||(this.checked=!0,C(this,v.change))}handleKeyDown(e){if(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(e.key)){let i=this.getAllRadios({includeDisabled:!1}),o=["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,n=i.indexOf(this)+o;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(s=>{s.checked=!1,s.input.tabIndex=-1}),i[n].input.focus(),i[n].checked=!0,i[n].input.tabIndex=0,C(i[n],v.change),e.preventDefault()}}render(){return u`
      <label
        id="main"
        class=${G({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled})}
        @keydown=${this.handleKeyDown}
      >
        <input
          type="radio"
          name=${h(this.name||void 0)}
          .value=${h(this.value||void 0)}
          .checked=${Ui(this.checked)}
          .disabled=${this.disabled}
          aria-checked=${this.checked?"true":"false"}
          aria-disabled=${this.disabled?"true":"false"}
          @click=${this._handleClick}
        />
        <span id="control">
          <span id="icon">
            <svg
              class="bg"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="RadioButtonUncheckedIcon"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
              ></path>
            </svg>
            <svg
              class="fill"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="RadioButtonCheckedIcon"
            >
              <path
                d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
              ></path>
            </svg>
          </span>
        </span>
        <span id="label"><slot></slot></span>
      </label>
    `}};F.tag="arc-radio";F.styles=Zi;a([E('input[type="radio"]'),r("design:type",HTMLInputElement)],F.prototype,"input",void 0);a([d({type:String}),r("design:type",String)],F.prototype,"name",void 0);a([d({type:String}),r("design:type",String)],F.prototype,"value",void 0);a([d({type:Boolean,reflect:!0}),r("design:type",Boolean)],F.prototype,"disabled",void 0);a([d({type:Boolean,reflect:!0}),r("design:type",Boolean)],F.prototype,"checked",void 0);a([d({type:Boolean,reflect:!0}),r("design:type",Object)],F.prototype,"invalid",void 0);a([R("disabled",{waitUntilFirstUpdate:!0}),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],F.prototype,"handleDisabledChange",null);a([R("checked",{waitUntilFirstUpdate:!0}),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],F.prototype,"handleCheckedChange",null);customElements.define("arc-radio",F);var et=class t extends y{constructor(){super(...arguments),this._rootCssVariables={},this._defaultPreferences={theme:this.getTheme(),fontSize:I.medium,lineHeight:q.normal,letterSpacing:q.normal,highLegibilityFonts:!1,highlightLinks:!1,plainText:!1},this._availableRootValues={fontSize:Object.values(I),lineHeight:Object.values(q),letterSpacing:Object.values(q)},this._userPreferences=this._defaultPreferences,this.open=!1}handlePreferenceChange(){return At(this,void 0,void 0,function*(){localStorage.setItem(t.tag,Di(this._userPreferences)),Object.keys(this._userPreferences).forEach(e=>this.updateRootValue(e,this._userPreferences[e])),C(this,v.accessibilityChange,{detail:{preferences:this._userPreferences}})})}connectedCallback(){super.connectedCallback(),Object.keys(this._defaultPreferences).forEach(i=>this.storeRootValues(i));let e=localStorage.getItem(t.tag);e&&(this._userPreferences=Vi(e))}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}getTheme(){if(!1)return B.auto;let e=document.querySelector("arc-container");return e?e.theme:B.auto}storeRootValues(e){e in this._availableRootValues&&this._availableRootValues[e].forEach(i=>{let o=`--arc-${Vt(e)}-${i}`;this._rootCssVariables[o]=Gt(o)})}restoreRootValues(e){e in this._availableRootValues&&this._availableRootValues[e].forEach(i=>{let o=`--arc-${Vt(e)}-${i}`;Se(o,this._rootCssVariables[o])})}updateRootValue(e,i){if(!(e in this._defaultPreferences))throw new Error("The provided key is not a valid UserPreference");if(!(e in this._availableRootValues))return;this.restoreRootValues(e);let o=this._availableRootValues[e],n=o.findIndex(l=>l===this._defaultPreferences[e]),s=o.findIndex(l=>l===i);if(s<0)throw new Error("The provided value does not exist as an available root value");let c=s-n;o.forEach((l,p)=>{let m=p+c;m>=o.length&&(m=o.length-1);let f=`--arc-${Vt(e)}-${l}`,b=`--arc-${Vt(e)}-${o[m]}`;Se(f,Gt(b))})}restoreRootDefaults(){Object.keys(this._defaultPreferences).forEach(e=>this.restoreRootValues(e)),this._userPreferences=this._defaultPreferences}handleOptionChange(e){let i=e.target,o=i.name,n=i.value;this._userPreferences=Object.assign(Object.assign({},this._userPreferences),{[o]:n})}radioTemplate(e,i){return u`
      <arc-radio-group id=${e}>
        <span slot="label">${Ce(e)}</span>
        ${Yt(i,o=>u`
            <arc-radio
              name=${e}
              value=${o}
              ?checked=${o===this._userPreferences[e]}
              @arc-change=${this.handleOptionChange}
              >${Et(o)}
            </arc-radio>
          `)}
      </arc-radio-group>
    `}render(){return u`
      <div id="main">
        <arc-drawer id="drawer" @arc-hide=${this.hide} ?open=${this.open}>
          <div class="label" slot="label">
            <arc-icon-accessibility size="large"></arc-icon-accessibility>
            <span>Accessibility Controls</span>
          </div>
          <div id="wrapper">
            ${Yt(Hi,e=>u`
                <div class="label">
                  <span>${Ce(e.name)}</span>
                </div>
                <div class="options">
                  ${Yt(Object.entries(e.options),i=>{let[o,n]=i;return u`${Nt(Array.isArray(n),()=>this.radioTemplate(o,n))}`})}
                </div>
              `)}
            <slot name="options"></slot>
          </div>
          <arc-button
            type="tab"
            slot="footer"
            @click=${this.restoreRootDefaults}
            >Restore defaults</arc-button
          >
        </arc-drawer>
      </div>
    `}};et.tag="arc-accessibility";et.styles=Fi;a([It(),r("design:type",Object)],et.prototype,"_userPreferences",void 0);a([d({type:Boolean,reflect:!0}),r("design:type",Boolean)],et.prototype,"open",void 0);a([R("_userPreferences"),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",Promise)],et.prototype,"handlePreferenceChange",null);customElements.define("arc-accessibility",et);var Wi=[O,_`
    :host {
      height: 4.5rem;
      background-color: rgb(var(--arc-background-color));
    }

    #main {
      height: inherit;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  `];var at=class extends y{constructor(){super(...arguments),this.tabs=5}_handleTabChange(e){let i=s=>s.tagName==="ARC-ICON-BUTTON",n=e.target.assignedElements({flatten:!0}).filter(i);this.tabCount=n.length,this.tabCount>this.tabs&&this.log(`Please limit your tab count to a maximum of ${this.tabs} tabs`)}log(e){console.log(e)}emitAccessibility(){this.log("Emitting arc-show-accessibility event"),C(this,v.showAccessibility)}render(){return u`
      <nav id="main" aria-label="mobile navigation">
        <slot @slotchange=${this._handleTabChange}></slot>
        <arc-icon-button @click=${this.emitAccessibility}>
          <arc-icon-accessibility slot="icon"></arc-icon-accessibility>
          Accessibility Panel
        </arc-icon-button>
      </nav>
    `}};at.tag="arc-bottombar";at.styles=Wi;a([It(),r("design:type",Number)],at.prototype,"tabs",void 0);a([It(),r("design:type",Number)],at.prototype,"tabCount",void 0);customElements.define("arc-bottombar",at);var Z=class extends y{constructor(){super(...arguments),this.theme=B.auto,this.fullscreen=!1}handleThemeChange(){(B[this.theme]===B.auto||!(this.theme in B))&&(this.theme=this.getTheme())}connectedCallback(){super.connectedCallback(),this.theme in B&&(this._appPreferredTheme=this.theme)}getTheme(e){return Pi(e)||Li()?B.dark:B.light}handleAccessibilityChange(e){let{preferences:i}=e.detail,{theme:o}=i;if(o&&o in B){this.theme=o;return}this.theme=this._appPreferredTheme}showAccessibility(){this.accessibility.open=!0}render(){return u`
      <div id="main">
        <slot
          id="nav"
          name="nav"
          @arc-show-accessibility=${this.showAccessibility}
        >
          <arc-navbar
            @arc-show-accessibility=${this.showAccessibility}
          ></arc-navbar>
        </slot>
        <div
          id="container"
          class=${G({container:!0,"container--fullscreen":this.fullscreen})}
        >
          <slot name="side"></slot>
          <div id="content">
            <slot></slot>
          </div>
        </div>
        <slot
          name="accessibility"
          @arc-accessibility-change=${this.handleAccessibilityChange}
        >
          <arc-accessibility
            id="accessibility"
            @arc-accessibility-change=${this.handleAccessibilityChange}
          ></arc-accessibility>
        </slot>
        <slot name="bottom">
          <arc-bottombar
            @arc-show-accessibility=${this.showAccessibility}
          ></arc-bottombar>
        </slot>
      </div>
    `}};Z.tag="arc-container";Z.styles=Ri;a([E("#main"),r("design:type",HTMLElement)],Z.prototype,"container",void 0);a([E("#accessibility"),r("design:type",Function)],Z.prototype,"accessibility",void 0);a([d({type:String,reflect:!0}),r("design:type",String)],Z.prototype,"theme",void 0);a([d({type:Boolean}),r("design:type",Boolean)],Z.prototype,"fullscreen",void 0);a([R("theme"),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],Z.prototype,"handleThemeChange",null);customElements.define("arc-container",Z);function Pt(t){return t.split("-")[0]}function ee(t){return t.split("-")[1]}function ie(t){return["top","bottom"].includes(Pt(t))?"x":"y"}function Gi(t){return t==="y"?"height":"width"}function Ki(t,e,i){let{reference:o,floating:n}=t,s=o.x+o.width/2-n.width/2,c=o.y+o.height/2-n.height/2,l=ie(e),p=Gi(l),m=o[p]/2-n[p]/2,f=Pt(e),b=l==="x",g;switch(f){case"top":g={x:s,y:o.y-n.height};break;case"bottom":g={x:s,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:c};break;case"left":g={x:o.x-n.width,y:c};break;default:g={x:o.x,y:o.y}}switch(ee(e)){case"start":g[l]-=m*(i&&b?-1:1);break;case"end":g[l]+=m*(i&&b?-1:1);break}return g}var Ji=(t,e,i)=>xt(void 0,null,function*(){let{placement:o="bottom",strategy:n="absolute",middleware:s=[],platform:c}=i,l=yield c.isRTL==null?void 0:c.isRTL(e),p=yield c.getElementRects({reference:t,floating:e,strategy:n}),{x:m,y:f}=Ki(p,o,l),b=o,g={},A=new Set,L=0;for(let x=0;x<s.length;x++){let{name:S,fn:w}=s[x];if(A.has(S))continue;let{x:k,y:j,data:W,reset:$}=yield w({x:m,y:f,initialPlacement:o,placement:b,strategy:n,middlewareData:g,rects:p,platform:c,elements:{reference:t,floating:e}});if(m=k??m,f=j??f,g=K(M({},g),{[S]:M(M({},g[S]),W)}),$){typeof $=="object"&&($.placement&&(b=$.placement),$.rects&&(p=$.rects===!0?yield c.getElementRects({reference:t,floating:e,strategy:n}):$.rects),{x:m,y:f}=Ki(p,b,l),$.skip!==!1&&A.add(S)),x=-1;continue}}return{x:m,y:f,placement:b,strategy:n,middlewareData:g}});function So(t){return M({top:0,right:0,bottom:0,left:0},t)}function _o(t){return typeof t!="number"?So(t):{top:t,right:t,bottom:t,left:t}}function Bt(t){return K(M({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function oe(t,e){return xt(this,null,function*(){var i;e===void 0&&(e={});let{x:o,y:n,platform:s,rects:c,elements:l,strategy:p}=t,{boundary:m="clippingAncestors",rootBoundary:f="viewport",elementContext:b="floating",altBoundary:g=!1,padding:A=0}=e,L=_o(A),S=l[g?b==="floating"?"reference":"floating":b],w=Bt(yield s.getClippingRect({element:(i=yield s.isElement==null?void 0:s.isElement(S))==null||i?S:S.contextElement||(yield s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:m,rootBoundary:f})),k=Bt(s.convertOffsetParentRelativeRectToViewportRelativeRect?yield s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b==="floating"?K(M({},c.floating),{x:o,y:n}):c.reference,offsetParent:yield s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating),strategy:p}):c[b]);return{top:w.top-k.top+L.top,bottom:k.bottom-w.bottom+L.bottom,left:w.left-k.left+L.left,right:k.right-w.right+L.right}})}var Ao=Math.min,Tt=Math.max;function Xi(t,e,i){return Tt(t,Ao(e,i))}var Eo={left:"right",right:"left",bottom:"top",top:"bottom"};function te(t){return t.replace(/left|right|bottom|top/g,e=>Eo[e])}function To(t,e,i){i===void 0&&(i=!1);let o=ee(t),n=ie(t),s=Gi(n),c=n==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(c=te(c)),{main:c,cross:te(c)}}var ko={start:"end",end:"start"};function Yi(t){return t.replace(/start|end/g,e=>ko[e])}function Oo(t){let e=te(t);return[Yi(t),e,Yi(e)]}var Te=function(t){return t===void 0&&(t={}),{name:"flip",options:t,fn(i){return xt(this,null,function*(){var o;let{placement:n,middlewareData:s,rects:c,initialPlacement:l,platform:p,elements:m}=i,Fe=t,{mainAxis:f=!0,crossAxis:b=!0,fallbackPlacements:g,fallbackStrategy:A="bestFit",flipAlignment:L=!0}=Fe,x=Zt(Fe,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),S=Pt(n),k=g||(S===l||!L?[te(l)]:Oo(l)),j=[l,...k],W=yield oe(i,x),$=[],Ut=((o=s.flip)==null?void 0:o.overflows)||[];if(f&&$.push(W[S]),b){let{main:kt,cross:qt}=To(n,c,yield p.isRTL==null?void 0:p.isRTL(m.floating));$.push(W[kt],W[qt])}if(Ut=[...Ut,{placement:n,overflows:$}],!$.every(kt=>kt<=0)){var De,Ve;let kt=((De=(Ve=s.flip)==null?void 0:Ve.index)!=null?De:0)+1,qt=j[kt];if(qt)return{data:{index:kt,overflows:Ut},reset:{skip:!1,placement:qt}};let ce="bottom";switch(A){case"bestFit":{var He;let Be=(He=Ut.slice().sort((vo,wo)=>vo.overflows.filter(wt=>wt>0).reduce((wt,de)=>wt+de,0)-wo.overflows.filter(wt=>wt>0).reduce((wt,de)=>wt+de,0))[0])==null?void 0:He.placement;Be&&(ce=Be);break}case"initialPlacement":ce=l;break}return{reset:{placement:ce}}}return{}})}}};function Lo(t,e,i,o){o===void 0&&(o=!1);let n=Pt(t),s=ee(t),c=ie(t)==="x",l=["left","top"].includes(n)?-1:1,p=1;s==="end"&&(p=-1),o&&c&&(p*=-1);let m=typeof i=="function"?i(K(M({},e),{placement:t})):i,{mainAxis:f,crossAxis:b}=typeof m=="number"?{mainAxis:m,crossAxis:0}:M({mainAxis:0,crossAxis:0},m);return c?{x:b*p,y:f*l}:{x:f*l,y:b*p}}var ke=function(t){return t===void 0&&(t=0),{name:"offset",options:t,fn(i){return xt(this,null,function*(){let{x:o,y:n,placement:s,rects:c,platform:l,elements:p}=i,m=Lo(s,c,t,yield l.isRTL==null?void 0:l.isRTL(p.floating));return{x:o+m.x,y:n+m.y,data:m}})}}};function Po(t){return t==="x"?"y":"x"}var Oe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,fn(i){return xt(this,null,function*(){let{x:o,y:n,placement:s}=i,w=t,{mainAxis:c=!0,crossAxis:l=!1,limiter:p={fn:k=>{let{x:j,y:W}=k;return{x:j,y:W}}}}=w,m=Zt(w,["mainAxis","crossAxis","limiter"]),f={x:o,y:n},b=yield oe(i,m),g=ie(Pt(s)),A=Po(g),L=f[g],x=f[A];if(c){let k=g==="y"?"top":"left",j=g==="y"?"bottom":"right",W=L+b[k],$=L-b[j];L=Xi(W,L,$)}if(l){let k=A==="y"?"top":"left",j=A==="y"?"bottom":"right",W=x+b[k],$=x-b[j];x=Xi(W,x,$)}let S=p.fn(K(M({},i),{[g]:L,[A]:x}));return K(M({},S),{data:{x:S.x-o,y:S.y-n}})})}}};var Le=function(t){return t===void 0&&(t={}),{name:"size",options:t,fn(i){return xt(this,null,function*(){let{placement:o,rects:n,platform:s,elements:c}=i,j=t,{apply:l}=j,p=Zt(j,["apply"]),m=yield oe(i,p),f=Pt(o),b=ee(o),g,A;f==="top"||f==="bottom"?(g=f,A=b===((yield s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(A=f,g=b==="end"?"top":"bottom");let L=Tt(m.left,0),x=Tt(m.right,0),S=Tt(m.top,0),w=Tt(m.bottom,0),k={height:n.floating.height-(["left","right"].includes(o)?2*(S!==0||w!==0?S+w:Tt(m.top,m.bottom)):m[g]),width:n.floating.width-(["top","bottom"].includes(o)?2*(L!==0||x!==0?L+x:Tt(m.left,m.right)):m[A])};return l?.(M(M({},k),n)),{reset:{rects:!0}}})}}};function Re(t){return t?.toString()==="[object Window]"}function ht(t){if(t==null)return window;if(!Re(t)){let e=t.ownerDocument;return e&&e.defaultView||window}return t}function jt(t){return ht(t).getComputedStyle(t)}function lt(t){return Re(t)?"":t?(t.nodeName||"").toLowerCase():""}function it(t){return t instanceof ht(t).HTMLElement}function Rt(t){return t instanceof ht(t).Element}function Ro(t){return t instanceof ht(t).Node}function $e(t){let e=ht(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function se(t){let{overflow:e,overflowX:i,overflowY:o}=jt(t);return/auto|scroll|overlay|hidden/.test(e+o+i)}function $o(t){return["table","td","th"].includes(lt(t))}function oo(t){let e=navigator.userAgent.toLowerCase().includes("firefox"),i=jt(t);return i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].includes(i.willChange)||e&&i.willChange==="filter"||e&&(i.filter?i.filter!=="none":!1)}var Qi=Math.min,zt=Math.max,ne=Math.round;function ct(t,e){e===void 0&&(e=!1);let i=t.getBoundingClientRect(),o=1,n=1;return e&&it(t)&&(o=t.offsetWidth>0&&ne(i.width)/t.offsetWidth||1,n=t.offsetHeight>0&&ne(i.height)/t.offsetHeight||1),{width:i.width/o,height:i.height/n,top:i.top/n,right:i.right/o,bottom:i.bottom/n,left:i.left/o,x:i.left/o,y:i.top/n}}function gt(t){return((Ro(t)?t.ownerDocument:t.document)||window.document).documentElement}function ae(t){return Re(t)?{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}:{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function no(t){return ct(gt(t)).left+ae(t).scrollLeft}function Mo(t){let e=ct(t);return ne(e.width)!==t.offsetWidth||ne(e.height)!==t.offsetHeight}function Io(t,e,i){let o=it(e),n=gt(e),s=ct(t,o&&Mo(e)),c={scrollLeft:0,scrollTop:0},l={x:0,y:0};if(o||!o&&i!=="fixed")if((lt(e)!=="body"||se(n))&&(c=ae(e)),it(e)){let p=ct(e,!0);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else n&&(l.x=no(n));return{x:s.left+c.scrollLeft-l.x,y:s.top+c.scrollTop-l.y,width:s.width,height:s.height}}function le(t){return lt(t)==="html"?t:t.assignedSlot||t.parentNode||($e(t)?t.host:null)||gt(t)}function to(t){return!it(t)||getComputedStyle(t).position==="fixed"?null:t.offsetParent}function No(t){let e=le(t);for($e(e)&&(e=e.host);it(e)&&!["html","body"].includes(lt(e));){if(oo(e))return e;e=e.parentNode}return null}function Pe(t){let e=ht(t),i=to(t);for(;i&&$o(i)&&getComputedStyle(i).position==="static";)i=to(i);return i&&(lt(i)==="html"||lt(i)==="body"&&getComputedStyle(i).position==="static"&&!oo(i))?e:i||No(t)||e}function eo(t){if(it(t))return{width:t.offsetWidth,height:t.offsetHeight};let e=ct(t);return{width:e.width,height:e.height}}function Do(t){let{rect:e,offsetParent:i,strategy:o}=t,n=it(i),s=gt(i);if(i===s)return e;let c={scrollLeft:0,scrollTop:0},l={x:0,y:0};if((n||!n&&o!=="fixed")&&((lt(i)!=="body"||se(s))&&(c=ae(i)),it(i))){let p=ct(i,!0);l.x=p.x+i.clientLeft,l.y=p.y+i.clientTop}return K(M({},e),{x:e.x-c.scrollLeft+l.x,y:e.y-c.scrollTop+l.y})}function Vo(t){let e=ht(t),i=gt(t),o=e.visualViewport,n=i.clientWidth,s=i.clientHeight,c=0,l=0;return o&&(n=o.width,s=o.height,Math.abs(e.innerWidth/o.scale-o.width)<.01&&(c=o.offsetLeft,l=o.offsetTop)),{width:n,height:s,x:c,y:l}}function Ho(t){var e;let i=gt(t),o=ae(t),n=(e=t.ownerDocument)==null?void 0:e.body,s=zt(i.scrollWidth,i.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),c=zt(i.scrollHeight,i.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),l=-o.scrollLeft+no(t),p=-o.scrollTop;return jt(n||i).direction==="rtl"&&(l+=zt(i.clientWidth,n?n.clientWidth:0)-s),{width:s,height:c,x:l,y:p}}function ro(t){return["html","body","#document"].includes(lt(t))?t.ownerDocument.body:it(t)&&se(t)?t:ro(le(t))}function re(t,e){var i;e===void 0&&(e=[]);let o=ro(t),n=o===((i=t.ownerDocument)==null?void 0:i.body),s=ht(o),c=n?[s].concat(s.visualViewport||[],se(o)?o:[]):o,l=e.concat(c);return n?l:l.concat(re(le(c)))}function Fo(t,e){let i=e.getRootNode==null?void 0:e.getRootNode();if(t.contains(e))return!0;if(i&&$e(i)){let o=e;do{if(o&&t===o)return!0;o=o.parentNode||o.host}while(o)}return!1}function Bo(t){let e=ct(t),i=e.top+t.clientTop,o=e.left+t.clientLeft;return{top:i,left:o,x:o,y:i,right:o+t.clientWidth,bottom:i+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}function io(t,e){return e==="viewport"?Bt(Vo(t)):Rt(e)?Bo(e):Bt(Ho(gt(t)))}function zo(t){let e=re(le(t)),o=["absolute","fixed"].includes(jt(t).position)&&it(t)?Pe(t):t;return Rt(o)?e.filter(n=>Rt(n)&&Fo(n,o)&&lt(n)!=="body"):[]}function jo(t){let{element:e,boundary:i,rootBoundary:o}=t,s=[...i==="clippingAncestors"?zo(e):[].concat(i),o],c=s[0],l=s.reduce((p,m)=>{let f=io(e,m);return p.top=zt(f.top,p.top),p.right=Qi(f.right,p.right),p.bottom=Qi(f.bottom,p.bottom),p.left=zt(f.left,p.left),p},io(e,c));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}var Uo={getClippingRect:jo,convertOffsetParentRelativeRectToViewportRelativeRect:Do,isElement:Rt,getDimensions:eo,getOffsetParent:Pe,getDocumentElement:gt,getElementRects:t=>{let{reference:e,floating:i,strategy:o}=t;return{reference:Io(e,Pe(i),o),floating:K(M({},eo(i)),{x:0,y:0})}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>jt(t).direction==="rtl"};function so(t,e,i,o){o===void 0&&(o={});let{ancestorScroll:n=!0,ancestorResize:s=!0,elementResize:c=!0,animationFrame:l=!1}=o,p=!1,m=n&&!l,f=s&&!l,b=c&&!l,g=m||f?[...Rt(t)?re(t):[],...re(e)]:[];g.forEach(w=>{m&&w.addEventListener("scroll",i,{passive:!0}),f&&w.addEventListener("resize",i)});let A=null;b&&(A=new ResizeObserver(i),Rt(t)&&A.observe(t),A.observe(e));let L,x=l?ct(t):null;l&&S();function S(){if(p)return;let w=ct(t);x&&(w.x!==x.x||w.y!==x.y||w.width!==x.width||w.height!==x.height)&&i(),x=w,L=requestAnimationFrame(S)}return()=>{var w;p=!0,g.forEach(k=>{m&&k.removeEventListener("scroll",i),f&&k.removeEventListener("resize",i)}),(w=A)==null||w.disconnect(),A=null,l&&cancelAnimationFrame(L)}}var ao=(t,e,i)=>Ji(t,e,M({platform:Uo},i));var lo={top:"top","top-start":"top-start","top-end":"top-end",right:"right","right-start":"right-start","right-end":"right-end",bottom:"bottom","bottom-start":"bottom-start","bottom-end":"bottom-end",left:"left","left-start":"left-start","left-end":"left-end"};var co=[O,_`
    :host {
      display: inline-block;
    }

    #main,
    #trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    #positioner {
      position: absolute;
      z-index: var(--arc-z-index-dropdown);
    }

    #panel {
      max-height: var(--arc-panel-height);
      min-width: var(--arc-panel-width);
      background-color: rgb(var(--arc-container-color));
      box-shadow: var(--arc-box-shadow);
      overflow: auto;
      overscroll-behavior: none;
      pointer-events: none;
    }

    :host([open]) #panel {
      pointer-events: all;
    }

    #positioner[data-placement^='top'] #panel {
      transform-origin: bottom;
    }

    #positioner[data-placement^='bottom'] #panel {
      transform-origin: top;
    }

    #positioner[data-placement^='left'] #panel {
      transform-origin: right;
    }

    #positioner[data-placement^='right'] #panel {
      transform-origin: left;
    }
  `];var T=class extends y{constructor(){super(...arguments),this.placement=lo["bottom-start"],this.distance=0,this.skidding=0,this.open=!1,this.disabled=!1,this.hoist=!1}handleOpenChange(){return At(this,void 0,void 0,function*(){if(!this.disabled)if(this._updateAccessibleTrigger(),this.open){C(this,v.show),this.addOpenListeners(),yield ft(this),this.startPositioner(),this.panel.hidden=!1;let{keyframes:e,options:i}=rt(this,"dropdown.show");yield st(this.panel,e,i),C(this,v.afterShow)}else{C(this,v.hide),this.removeOpenListeners(),yield ft(this);let{keyframes:e,options:i}=rt(this,"dropdown.hide");yield st(this.panel,e,i),this.panel.hidden=!0,this.stopPositioner(),C(this,v.afterHide)}})}handlePopoverOptionsChange(){this.updatePositioner()}handleDisabledChange(){this.disabled&&this.open&&this.hide()}connectedCallback(){super.connectedCallback(),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){return At(this,void 0,void 0,function*(){this.panel.hidden=!this.open,this.open&&(yield this.updateComplete,this.addOpenListeners(),this.startPositioner())})}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide(),this.stopPositioner()}startPositioner(){this.stopPositioner(),this.updatePositioner(),this._positionerCleanup=so(this.trigger,this.positioner,this.updatePositioner.bind(this))}updatePositioner(){!this.open||!this.trigger||!this.positioner||ao(this.trigger,this.positioner,{placement:this.placement,middleware:[ke({mainAxis:this.distance,crossAxis:this.skidding}),Te(),Oe(),Le({apply:({width:e,height:i})=>{Object.assign(this.panel.style,{maxWidth:`${e}px`,maxHeight:`${i}px`})},padding:8})],strategy:this.hoist?"fixed":"absolute"}).then(({x:e,y:i,placement:o})=>{this.positioner.setAttribute("data-placement",o),Object.assign(this.positioner.style,{position:this.hoist?"fixed":"absolute",left:`${e}px`,top:`${i}px`})})}stopPositioner(){this._positionerCleanup&&(this._positionerCleanup(),this._positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}_updateAccessibleTrigger(){if(this.trigger){let i=this.triggerSlot.assignedElements({flatten:!0}).find(o=>Jt(o).start);i&&(i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false"))}}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}show(){if(!this.open)return this.open=!0,Ot(this,v.afterShow)}hide(){if(this.open)return this.open=!1,Ot(this,v.afterHide)}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).filter(i=>i.tagName==="ARC-MENU")[0]}focusOnTrigger(){let e=this.triggerSlot.assignedElements({flatten:!0})[0];e&&typeof e.focus=="function"&&e.focus()}handleDocumentKeyDown(e){var i,o,n;if(e.key==="Escape"){this.hide(),this.focusOnTrigger();return}if(e.key==="Tab"){let s=((i=this.containingElement)===null||i===void 0?void 0:i.getRootNode())instanceof ShadowRoot?(n=(o=document.activeElement)===null||o===void 0?void 0:o.shadowRoot)===null||n===void 0?void 0:n.activeElement:document.activeElement;this.open&&s?.tagName==="ARC-MENU-ITEM"&&(e.preventDefault(),this.hide(),this.focusOnTrigger())}}handleDocumentMouseDown(e){let i=e.composedPath();this.containingElement&&!i.includes(this.containingElement)&&this.hide()}handleTriggerKeyDown(e){if(e.key==="Escape"){this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let i=this.getMenu(),o=i?[...i.querySelectorAll("arc-menu-item")]:[],n=o[0],s=o[o.length-1];if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.open||this.show(),e.key==="ArrowDown"&&n){i.setCurrentItem(n),n.focus();return}if(e.key==="ArrowUp"&&s){i.setCurrentItem(s),s.focus();return}}let c=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&i&&!c.includes(e.key)&&i.typeToSelect(e.key)}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerClick(){this.open?this.hide():this.show()}handlePanelSelect(e){e.target.tagName==="ARC-MENU"&&(this.hide(),this.focusOnTrigger())}render(){return u`
      <div
        id="main"
        class=${G({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          id="trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot
            id="triggerSlot"
            name="trigger"
            @slotchange=${this._updateAccessibleTrigger}
          ></slot>
        </span>

        <div id="positioner">
          <div
            id="panel"
            role="menu"
            aria-hidden=${this.open?"false":"true"}
            aria-labelledby="main"
            @arc-select=${this.handlePanelSelect}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `}};T.tag="arc-dropdown";T.styles=co;a([E("#trigger"),r("design:type",HTMLElement)],T.prototype,"trigger",void 0);a([E("#triggerSlot"),r("design:type",HTMLSlotElement)],T.prototype,"triggerSlot",void 0);a([E("#positioner"),r("design:type",HTMLElement)],T.prototype,"positioner",void 0);a([E("#panel"),r("design:type",HTMLElement)],T.prototype,"panel",void 0);a([d({type:String}),r("design:type",String)],T.prototype,"placement",void 0);a([d({attribute:!1}),r("design:type",HTMLElement)],T.prototype,"containingElement",void 0);a([d({type:Number}),r("design:type",Number)],T.prototype,"distance",void 0);a([d({type:Number}),r("design:type",Number)],T.prototype,"skidding",void 0);a([d({type:Boolean,reflect:!0}),r("design:type",Boolean)],T.prototype,"open",void 0);a([d({type:Boolean,reflect:!0}),r("design:type",Boolean)],T.prototype,"disabled",void 0);a([d({type:Boolean,reflect:!0}),r("design:type",Boolean)],T.prototype,"hoist",void 0);a([R("open",{waitUntilFirstUpdate:!0}),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",Promise)],T.prototype,"handleOpenChange",null);a([R("distance"),R("hoist"),R("placement"),R("skidding"),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],T.prototype,"handlePopoverOptionsChange",null);a([R("disabled"),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],T.prototype,"handleDisabledChange",null);D("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:V.fast});D("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:V.fast});customElements.define("arc-dropdown",T);function po(t){let e=t.assignedNodes({flatten:!0}),i="";return[...e].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(i+=o.textContent)}),i}var mo=[O,_`
    :host {
      display: block;
    }
  `];var dt=class extends y{constructor(){super(...arguments),this.typeToSelectString=""}getAllItems(e={includeDisabled:!0}){let{includeDisabled:i}=e;return[...this.defaultSlot.assignedElements({flatten:!0})].filter(o=>o.getAttribute("role")!=="menuitem"?!1:!(!i&&o.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){let i=this.getAllItems({includeDisabled:!1}),o=e.disabled?i[0]:e;i.forEach(n=>n.setAttribute("tabindex",n===o?"0":"-1"))}typeToSelect(e){let i=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>{this.typeToSelectString=""},750),this.typeToSelectString+=e.toLowerCase();for(let o of i){let n=o.shadowRoot.querySelector("slot:not([name])");if(po(n).toLowerCase().trim().substring(0,this.typeToSelectString.length)===this.typeToSelectString){this.setCurrentItem(o),o.focus();break}}}_handleClick(e){let o=e.target.closest("arc-menu-item");o&&!o.disabled&&C(this,v.select,{detail:{item:o}})}handleKeyDown(e){if(e.key==="Enter"){let i=this.getCurrentItem();e.preventDefault(),i&&i.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){let i=this.getAllItems({includeDisabled:!1}),o=this.getCurrentItem(),n=o?i.indexOf(o):0;i.length&&(e.preventDefault(),e.key==="ArrowDown"?n++:e.key==="ArrowUp"?n--:e.key==="Home"?n=0:e.key==="End"&&(n=i.length-1),n<0&&(n=0),n>i.length-1&&(n=i.length-1),this.setCurrentItem(i[n]),i[n].focus())}this.typeToSelect(e.key)}_handleSlotChange(){let e=this.getAllItems({includeDisabled:!1});e.length&&this.setCurrentItem(e[0])}render(){return u`
      <div
        id="main"
        role="menu"
        @click=${this._handleClick}
        @keydown=${this.handleKeyDown}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}};dt.tag="arc-menu";dt.styles=mo;a([E("#menu"),r("design:type",HTMLElement)],dt.prototype,"menu",void 0);a([E("slot"),r("design:type",HTMLSlotElement)],dt.prototype,"defaultSlot",void 0);customElements.define("arc-menu",dt);var uo=[O,_`
    :host {
      display: block;
    }

    .menu-item {
      position: relative;
      display: flex;
      align-items: stretch;
      text-align: left;
      padding: var(--arc-spacing-small) var(--arc-spacing-medium);
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      cursor: pointer;
      color: inherit;
    }

    #prefix,
    #label,
    #suffix {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
    }

    #prefix ::slotted(*) {
      margin-right: var(--arc-spacing-x-small);
    }

    #label {
      flex: 1 1 auto;
      max-width: 30ch;
      overflow: hidden;
    }

    #label * {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis ' ...';
    }

    #suffix ::slotted(*) {
      margin-left: var(--arc-spacing-x-small);
    }

    /* Hover & Focus */
    :host(:focus) {
      outline: none;
    }

    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible:not([aria-disabled='true'])) .menu-item {
      outline: none;
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
    }

    /* Disabled */
    .menu-item--disabled {
      opacity: 0.5;
      outline: none;
      cursor: not-allowed;
    }
  `];var z=class extends y{constructor(){super(...arguments),this.disabled=!1}click(){this.menuitem.click()}firstUpdated(){this.setAttribute("role","menuitem")}_handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}handleDisabledChange(){this.setAttribute("aria-disabled",String(this.disabled))}render(){let e=!!this.href,i=e?ve`a`:ve`div`;return Ai`
      <${i}
        id="main"
        class=${G({"menu-item":!0,"menu-item--disabled":this.disabled})}
        value=${h(e?void 0:this.value)}
        href=${h(this.href||void 0)}
        target=${h(this.target||void 0)}
        download=${h(this.download||void 0)}
        rel=${h(this.target?"noreferrer noopener":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this._handleClick}
      >
        <span id="prefix">
          <slot name="prefix"></slot>
        </span>
        <span id="label">
          <slot></slot>
        </span>
        <span id="suffix">
          <slot name="suffix"></slot>
        </span>
      </${i}>
    `}};z.tag="arc-menu-item";z.styles=uo;a([E("#main"),r("design:type",Object)],z.prototype,"menuitem",void 0);a([d({type:String}),r("design:type",String)],z.prototype,"value",void 0);a([d({type:String}),r("design:type",String)],z.prototype,"href",void 0);a([d({type:String}),r("design:type",String)],z.prototype,"target",void 0);a([d({type:String}),r("design:type",String)],z.prototype,"download",void 0);a([d({type:Boolean,reflect:!0}),r("design:type",Boolean)],z.prototype,"disabled",void 0);a([R("disabled"),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],z.prototype,"handleDisabledChange",null);customElements.define("arc-menu-item",z);var Me,yt=Me=class extends y{constructor(){super(...arguments),this.size=I.medium,this.rotation=0}render(){return u`
      <svg
        id="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        role=${h(this.label?"img":void 0)}
        aria-label=${h(this.label||void 0)}
        aria-hidden=${h(this.label?void 0:"true")}
        style=${J({transform:this.rotation?`rotate(${this.rotation}deg)`:null,height:`var(--arc-font-size-${this.size})`,width:`var(--arc-font-size-${this.size})`})}
      >
        ${Me.svg}
      </svg>
    `}};yt.tag="ph-icon-squares-four";yt.styles=Q;yt.svg=X`<path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"/>`;a([d({type:String}),r("design:type",String)],yt.prototype,"label",void 0);a([d({type:String,reflect:!0}),r("design:type",String)],yt.prototype,"size",void 0);a([d({type:Number}),r("design:type",Number)],yt.prototype,"rotation",void 0);yt=Me=a([Y("ph-icon-squares-four")],yt);var Ie,bt=Ie=class extends y{constructor(){super(...arguments),this.size=I.medium,this.rotation=0}render(){return u`
      <svg
        id="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        role=${h(this.label?"img":void 0)}
        aria-label=${h(this.label||void 0)}
        aria-hidden=${h(this.label?void 0:"true")}
        style=${J({transform:this.rotation?`rotate(${this.rotation}deg)`:null,height:`var(--arc-font-size-${this.size})`,width:`var(--arc-font-size-${this.size})`})}
      >
        ${Ie.svg}
      </svg>
    `}};bt.tag="ph-icon-question";bt.styles=Q;bt.svg=X`<path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>`;a([d({type:String}),r("design:type",String)],bt.prototype,"label",void 0);a([d({type:String,reflect:!0}),r("design:type",String)],bt.prototype,"size",void 0);a([d({type:Number}),r("design:type",Number)],bt.prototype,"rotation",void 0);bt=Ie=a([Y("ph-icon-question")],bt);var Ne,vt=Ne=class extends y{constructor(){super(...arguments),this.size=I.medium,this.rotation=0}render(){return u`
      <svg
        id="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        role=${h(this.label?"img":void 0)}
        aria-label=${h(this.label||void 0)}
        aria-hidden=${h(this.label?void 0:"true")}
        style=${J({transform:this.rotation?`rotate(${this.rotation}deg)`:null,height:`var(--arc-font-size-${this.size})`,width:`var(--arc-font-size-${this.size})`})}
      >
        ${Ne.svg}
      </svg>
    `}};vt.tag="ph-icon-warning";vt.styles=Q;vt.svg=X`<path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"/>`;a([d({type:String}),r("design:type",String)],vt.prototype,"label",void 0);a([d({type:String,reflect:!0}),r("design:type",String)],vt.prototype,"size",void 0);a([d({type:Number}),r("design:type",Number)],vt.prototype,"rotation",void 0);vt=Ne=a([Y("ph-icon-warning")],vt);var qo=function(){return{location:"navbar"}};function Zo(t,e){if(t&1&&pe(0,10),t&2){ue();let i=Xt(20);ot("ngTemplateOutlet",i)("ngTemplateOutletContext",fe(2,qo))}}var Wo=function(){return{location:"bottombar"}};function Ko(t,e){if(t&1&&pe(0,10),t&2){ue();let i=Xt(20);ot("ngTemplateOutlet",i)("ngTemplateOutletContext",fe(2,Wo))}}function Xo(t,e){t&1&&(P(0,"arc-button",17),U(1," Library "),N())}function Yo(t,e){t&1&&(P(0,"arc-icon-button",17),St(1,"ph-icon-squares-four",18),U(2," Library "),N())}function Go(t,e){t&1&&(P(0,"arc-button",17),U(1," Support "),N())}function Jo(t,e){t&1&&(P(0,"arc-icon-button",17),St(1,"ph-icon-question",18),U(2," Support "),N())}function Qo(t,e){if(t&1&&(P(0,"arc-dropdown"),pt(1,Xo,2,0,"arc-button",11),pt(2,Yo,3,0,"arc-icon-button",11),P(3,"arc-menu")(4,"arc-menu-item",12),U(5,"Assembly"),N(),P(6,"arc-menu-item",13),U(7,"Product"),N(),P(8,"arc-menu-item",14),U(9,"Material"),N()()(),P(10,"arc-dropdown"),pt(11,Go,2,0,"arc-button",11),pt(12,Jo,3,0,"arc-icon-button",11),P(13,"arc-menu")(14,"arc-menu-item",15),U(15," Documentation "),N(),P(16,"arc-menu-item",16),U(17," Feedback "),N()()()),t&2){let i=e.location;Ct(1),ot("ngIf",i==="navbar"),Ct(1),ot("ngIf",i==="bottombar"),Ct(9),ot("ngIf",i==="navbar"),Ct(1),ot("ngIf",i==="bottombar")}}var fo=(()=>{let e=class e{constructor(){this.settingStore=$t(_i),this.document=$t(Ke),this.renderer=$t(qe),this.authStore=$t(Si),this.authenticated$=this.authStore.authenticated$}ngAfterViewInit(){this.authStore.updateAuthenticatedState()}onAccessibilityChanged(o){let{theme:n}=o.detail.preferences;if(n==="auto"){let s=this.document.defaultView;if(s){let{matches:c}=s.matchMedia("(prefers-color-scheme: dark)");n=c?"dark":"light"}else n="light"}this.renderer.setAttribute(this.document.body,"theme",n),this.renderer.addClass(this.document.body,n),this.renderer.removeClass(this.document.body,n),this.settingStore.setSetting({theme:n})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=ze({type:e,selectors:[["veracity-root"]],decls:21,vars:6,consts:[[1,"banner"],["slot","icon",2,"vertical-align","middle"],[3,"arc-accessibility-change"],["container",""],["slot","nav","home","/"],["slot","name"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["type","tab","slot","user"],["slot","bottom",3,"arc-show-accessibility"],["authenticatedMenus",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","tab","slot","trigger",4,"ngIf"],["routerLink","library/assembly"],["routerLink","library/product"],["routerLink","library/material"],["href","https://docs.zero.arup.com","target","_blank","matTooltip","View documentation"],["href","https://feedback.arup.com/product/zero-suite-zero-veracity-and-analytics","target","_blank","matTooltip","Share feedback"],["type","tab","slot","trigger"],["slot","icon"]],template:function(n,s){if(n&1){let c=Ze();P(0,"span",0)(1,"p"),St(2,"ph-icon-warning",1),P(3,"strong"),U(4," The Veracity database is dynamic and a work in progress. It currently reflects preliminary and best-efforts data gathering, and we will continue developing the interface and carbon factor dataset in coming months. "),N(),St(5,"ph-icon-warning",1),N()(),P(6,"arc-container",2,3),me("arc-accessibility-change",function(p){return s.onAccessibilityChanged(p)}),P(8,"arc-navbar",4)(9,"span",5),U(10,"Veracity"),N(),pt(11,Zo,1,3,"ng-container",6),he(12,"async"),P(13,"arc-button",7),St(14,"mgt-login"),N()(),St(15,"router-outlet"),P(16,"arc-bottombar",8),me("arc-show-accessibility",function(){je(c);let p=Xt(7);return Ue(p.showAccessibility())}),pt(17,Ko,1,3,"ng-container",6),he(18,"async"),N()(),pt(19,Qo,18,4,"ng-template",null,9,We)}n&2&&(Ct(11),ot("ngIf",ge(12,2,s.authenticated$)),Ct(6),ot("ngIf",ge(18,4,s.authenticated$)))},dependencies:[Xe,Ye,ni,ri,Ge],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}span.banner[_ngcontent-%COMP%]{vertical-align:middle;text-align:center;padding:calc(var(--arc-spacing-small) / 4) var(--arc-spacing-medium);background:rgba(var(--arc-color-primary));color:rgba(var(--arc-white-000))}arc-container[_ngcontent-%COMP%]{height:100%}arc-navbar[_ngcontent-%COMP%]{--arc-color-primary: var(--arc-font-color)}arc-navbar[_ngcontent-%COMP%]   [slot=user][_ngcontent-%COMP%]{pointer-events:none}arc-navbar[_ngcontent-%COMP%]   [slot=user][_ngcontent-%COMP%]   mgt-login[_ngcontent-%COMP%]{pointer-events:all;--login-signed-in-background: transparent;--login-signed-in-hover-background: transparent}"],changeDetection:0});let t=e;return t})();var ho=[{path:"",loadChildren:()=>import("./chunk-BURDRLUJ.js").then(t=>t.LandingPageModule)},{path:"library",loadChildren:()=>import("./chunk-7C2P4OYH.js").then(t=>t.LibraryModule),canActivate:[ui]}];var go=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=Kt({type:e,bootstrap:[fo]}),e.\u0275inj=Wt({imports:[ii,oi,ti,ki,si.forRoot(ho)]});let t=e;return t})();function tn(t){let{auth:e}=t;return new li({auth:e})}function en(){return{interactionType:ye.Popup,authRequest:{scopes:["user.read"]}}}function on(t){let{url:e}=t.api.veracity,{clientId:i}=t.auth,o=new Map;return o.set("https://graph.microsoft.com/v1.0/me",["user.read"]),o.set("https://graph.microsoft.com/v1.0/users ",["user.read"]),o.set(`${e}/*`,[`api://${i}/user_impersonation`]),{interactionType:ye.Popup,protectedResourceMap:o}}function yo(t){return[{provide:ci,useValue:tn(t)},{provide:di,useValue:en()},{provide:pi,useValue:on(t)}]}var bo={production:!1};bo.production&&void 0;fetch("configurations/config.json").then(t=>t.json()).then(t=>{let e=yo(t),i=[{provide:gi,useValue:t},...e];return ei(i).bootstrapModule(go)}).catch(t=>console.error(t));
