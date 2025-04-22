import{$b as I,Sb as u,Tb as h,Ub as g,Vb as _,Xb as m,Yb as f,Zb as n,ac as E,bc as P,cc as B,dc as M,ec as s,jc as C,mc as o,nc as i,pc as b,qc as T,rc as x,sc as S,tc as y,u as z}from"./chunk-3VSD6X44.js";import{a as w}from"./chunk-DNA43DVC.js";var Z=(()=>{let t=class t extends C{constructor(){super({theme:"light"}),this.setSetting=this.updater((e,c)=>w(w({},e),c))}};t.\u0275fac=function(c){return new(c||t)},t.\u0275prov=z({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var j=[b,u`
    :host {
      display: inline-flex;
      cursor: pointer;
      --icon-color: rgb(var(--arc-font-color));
    }

    .button {
      display: grid;
      align-content: center;
      text-align: center;
      width: 100%;
      min-height: 100%;
      border: none;
      font-family: var(--arc-font-button);
      line-height: inherit;
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      vertical-align: middle;
      padding: 0;
      cursor: inherit;
      color: var(--icon-color);
      background: none;
      outline: none;
      -webkit-appearance: none;
    }

    #iconWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #icon {
      display: flex;
      padding: var(--arc-spacing-small);
      border-radius: 50%;
    }

    #action {
      font-size: var(--arc-font-size-xx-small);
      margin-top: -0.2rem;
    }

    /* Active */
    .button.button--active {
      border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style)
        currentColor;
    }

    /* Hover, Focus & Mouse down */
    .button:hover:not(.button--disabled):not(.button--loading) #icon,
    .button:focus-visible:not(.button--disabled):not(.button--loading) #icon {
      background-color: rgba(var(--arc-font-color), 10%);
    }
    .button:active:not(.button--disabled):not(.button--loading) #icon {
      background-color: rgba(var(--arc-font-color), 30%);
    }

    /* Disabled */
    .button--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Loading */
    .button--loading {
      cursor: wait;
    }

    .button--loading #icon {
      visibility: hidden;
    }

    #loader {
      position: absolute;
    }

    /* Prevent click events from firing on slots */
    #iconWrapper,
    #icon,
    #action {
      pointer-events: none;
    }
  `];var v=P(class extends B{constructor(r){var t;if(super(r),r.type!==E.ATTRIBUTE||r.name!=="style"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,l)=>{let e=r[l];return e==null?t:t+`${l=l.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(r,[t]){let{style:l}=r.element;if(this.vt===void 0){this.vt=new Set;for(let e in t)this.vt.add(e);return this.render(t)}this.vt.forEach(e=>{t[e]==null&&(this.vt.delete(e),e.includes("-")?l.removeProperty(e):l[e]="")});for(let e in t){let c=t[e];c!=null&&(this.vt.add(e),e.includes("-")?l.setProperty(e,c):l[e]=c)}return _}});var $=[b,u`
    :host {
      display: inline-flex;
      --icon-color: currentColor;
    }

    #main {
      display: block;
      color: var(--icon-color);
      line-height: 1;
      flex-shrink: 0;
      max-width: initial;
      fill: var(--icon-color);
      stroke: var(--icon-color);
      --icon-stroke-linecap-butt: butt;
      stroke-miterlimit: 10;
      stroke-linecap: square;
      stroke-linejoin: miter;
    }
  `];var k,d=k=class extends m{constructor(){super(...arguments),this.size=y.medium,this.rotation=0}render(){return h`
      <svg
        id="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        role=${s(this.label?"img":void 0)}
        aria-label=${s(this.label||void 0)}
        aria-hidden=${s(this.label?void 0:"true")}
        style=${v({transform:this.rotation?`rotate(${this.rotation}deg)`:null,height:`var(--arc-font-size-${this.size})`,width:`var(--arc-font-size-${this.size})`})}
      >
        ${k.svg}
      </svg>
    `}};d.tag="ph-icon-lightning";d.styles=$;d.svg=g`<path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"/>`;o([n({type:String}),i("design:type",String)],d.prototype,"label",void 0);o([n({type:String,reflect:!0}),i("design:type",String)],d.prototype,"size",void 0);o([n({type:Number}),i("design:type",Number)],d.prototype,"rotation",void 0);d=k=o([f("ph-icon-lightning")],d);var a=class extends m{constructor(){super(...arguments),this.label="",this.active=!1,this.disabled=!1,this.loading=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}_handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation())}render(){let t=!!this.href,l=t?x`a`:x`button`;return S`
      <${l}
        id="main"
        class=${M({button:!0,"button--active":this.active,"button--disabled":this.disabled,"button--loading":this.loading})}
        ?disabled=${s(t?void 0:this.disabled)}
        type="button"
        href=${s(this.href||void 0)}
        target=${s(this.target||void 0)}
        download=${s(this.download||void 0)}
        rel=${s(this.target?"noreferrer noopener":void 0)}
        role="button"
        aria-disabled=${this.disabled?"true":"false"}
        aria-label=${this.label}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this._handleClick}
      >
        <span id="iconWrapper" aria-hidden="true">
          <span id="icon">
            <slot name="icon">
              <ph-icon-lightning></ph-icon-lightning>
            </slot>
          </span>
          ${T(this.loading,()=>S`<arc-spinner id="loader"></arc-spinner>`)}
        </span>
        <span id="action"><slot></slot></span>
      </${l}>
    `}};a.tag="arc-icon-button";a.styles=j;o([I("#main"),i("design:type",Object)],a.prototype,"button",void 0);o([n({type:String}),i("design:type",String)],a.prototype,"href",void 0);o([n({type:String}),i("design:type",String)],a.prototype,"target",void 0);o([n({type:String}),i("design:type",String)],a.prototype,"download",void 0);o([n({type:String}),i("design:type",String)],a.prototype,"label",void 0);o([n({type:Boolean,reflect:!0}),i("design:type",Boolean)],a.prototype,"active",void 0);o([n({type:Boolean,reflect:!0}),i("design:type",Boolean)],a.prototype,"disabled",void 0);o([n({type:Boolean,reflect:!0}),i("design:type",Boolean)],a.prototype,"loading",void 0);customElements.define("arc-icon-button",a);var L,p=L=class extends m{constructor(){super(...arguments),this.size=y.medium,this.rotation=0}render(){return h`
      <svg
        id="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        role=${s(this.label?"img":void 0)}
        aria-label=${s(this.label||void 0)}
        aria-hidden=${s(this.label?void 0:"true")}
        style=${v({transform:this.rotation?`rotate(${this.rotation}deg)`:null,height:`var(--arc-font-size-${this.size})`,width:`var(--arc-font-size-${this.size})`})}
      >
        ${L.svg}
      </svg>
    `}};p.tag="ph-icon-x";p.styles=$;p.svg=g`<path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>`;o([n({type:String}),i("design:type",String)],p.prototype,"label",void 0);o([n({type:String,reflect:!0}),i("design:type",String)],p.prototype,"size",void 0);o([n({type:Number}),i("design:type",Number)],p.prototype,"rotation",void 0);p=L=o([f("ph-icon-x")],p);export{Z as a,v as b,$ as c};
