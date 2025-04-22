import{$b as m,Sb as f,Xb as g,Zb as n,dc as v,ec as l,mc as e,nc as i,pc as y,qc as w,rc as h,sc as p,vc as d,wc as a}from"./chunk-3VSD6X44.js";var c=class{constructor(t,s){(this.host=t).addController(this),this.options=Object.assign({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0},s),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form=void 0)}handleFormData(t){let s=this.options.disabled(this.host),r=this.options.name(this.host),b=this.options.value(this.host);!s&&r&&b&&(Array.isArray(b)?b.forEach(x=>{t.formData.append(r,x.toString())}):t.formData.append(r,b.toString()))}handleFormSubmit(t){let s=this.options.disabled(this.host),{reportValidity:r}=this.options;this.form&&!this.form.noValidate&&!s&&!r(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}submit(){if(this.form){let t=document.createElement("button");this.form.append(t),t.click(),t.remove()}}};var u={filled:"filled",outlined:"outlined",tab:"tab"};var k=[y,f`
    :host {
      display: inline-block;
      position: relative;
      width: auto;
      cursor: pointer;
      --min-width: 0;
      --btn-color: rgb(var(--arc-input-color));
      --btn-background: rgb(var(--arc-color-default));
    }

    :host([type='tab']) {
      height: 100%;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-width: var(--min-width);
      height: var(--button-size);
      min-height: 100%;
      border: none;
      border-radius: var(--button-size);
      font-weight: var(--arc-font-weight-semibold);
      font-family: var(--arc-font-button);
      font-size: inherit;
      letter-spacing: inherit;
      text-decoration: none;
      user-select: none;
      white-space: nowrap;
      vertical-align: middle;
      padding: 0 var(--button-spacing);
      cursor: inherit;
      color: var(--btn-color);
      background-color: var(--btn-background);
      gap: var(--arc-spacing-small);
      outline: none;
      -webkit-appearance: none;
    }

    /* Types */
    .button--outlined {
      border: var(--arc-border-style) var(--arc-border-width);
      background: none;
    }

    .button--tab {
      background: none;
      border-radius: 0;
    }
    .button--tab.button--active {
      border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style)
        currentColor;
    }

    /* Sizes */
    .button--small {
      --button-size: var(--arc-input-height-small);
      --button-spacing: var(--arc-spacing-small);
    }

    .button--medium {
      --button-size: var(--arc-input-height-medium);
      --button-spacing: var(--arc-spacing-medium);
    }

    .button--large {
      --button-size: var(--arc-input-height-large);
      --button-spacing: var(--arc-spacing-large);
    }

    /* Colors */
    .button--filled.button--default {
      --focus-color: rgba(var(--arc-input-color), 0.4);
    }

    .button--filled.button--primary {
      --btn-color: rgb(var(--arc-container-color));
      --btn-background: rgb(var(--arc-color-primary));
      --focus-color: rgba(var(--arc-color-primary), 0.4);
    }
    .button--outlined.button--primary {
      --btn-color: rgb(var(--arc-color-primary));
    }

    .button--filled.button--secondary {
      --btn-color: rgb(var(--arc-container-color));
      --btn-background: rgb(var(--arc-color-secondary));
      --focus-color: rgba(var(--arc-color-secondary), 0.4);
    }
    .button--outlined.button--secondary {
      --btn-color: rgb(var(--arc-color-secondary));
    }

    .button--filled.button--error {
      --btn-background: rgb(var(--arc-color-error));
      --focus-color: rgba(var(--arc-color-error), 0.4);
    }
    .button--outlined.button--error {
      --btn-color: rgb(var(--arc-color-error));
    }

    .button--filled.button--warning {
      --btn-background: rgb(var(--arc-color-warning));
      --focus-color: rgba(var(--arc-color-warning), 0.4);
    }
    .button--outlined.button--warning {
      --btn-color: rgb(var(--arc-color-warning));
    }

    .button--filled.button--info {
      --btn-background: rgb(var(--arc-color-info));
      --focus-color: rgba(var(--arc-color-info), 0.4);
    }
    .button--outlined.button--info {
      --btn-color: rgb(var(--arc-color-info));
    }

    .button--filled.button--success {
      --btn-background: rgb(var(--arc-color-success));
      --focus-color: rgba(var(--arc-color-success), 0.4);
    }
    .button--outlined.button--success {
      --btn-color: rgb(var(--arc-color-success));
    }

    /* Default - Hover, Focus & Mouse down */
    .button--filled:hover:not(.button--disabled):not(.button--loading),
    .button--filled:focus-visible:not(.button--disabled):not(.button--loading) {
      background-image: linear-gradient(var(--arc-hover-dark) 0 0);
    }
    .button--filled:active:not(.button--disabled):not(.button--loading) {
      background-image: linear-gradient(var(--arc-hover-darker) 0 0);
    }

    /* Tab & Outlined - Hover, Focus & Mouse down */
    .button--tab:hover:not(.button--disabled),
    .button--tab:focus-visible:not(.button--disabled),
    .button--outlined:hover:not(.button--disabled),
    .button--outlined:focus-visible:not(.button--disabled) {
      background-color: currentColor;
      background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
    }
    .button--tab:active:not(.button--disabled):not(.button--loading),
    .button--outlined:active:not(.button--disabled):not(.button--loading) {
      background-image: linear-gradient(var(--arc-hover-light) 0 0);
    }

    /* Focus outline (same for all button states) */
    .button:focus-visible:not(.button--disabled) {
      box-shadow: var(--arc-box-shadow-focus) var(--focus-color);
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

    .button--loading #prefix,
    .button--loading #label,
    .button--loading #suffix {
      visibility: hidden;
    }

    #loader {
      position: absolute;
      --stroke-color: var(--btn-color);
    }

    /* Prevent click events from firing when a user clicks on a slot */
    slot {
      pointer-events: none;
    }
  `];var o=class extends g{constructor(){super(...arguments),this.formController=new c(this),this.color=a.default,this.size=d.medium,this.type=u.filled,this.active=!1,this.disabled=!1,this.loading=!1,this.submit=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}_handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopPropagation();return}this.submit&&this.formController.submit()}render(){let t=!!this.href,s=t?h`a`:h`button`;return p`
      <${s}
        id="main"
        class=${v({button:!0,"button--small":this.size===d.small,"button--medium":this.size===d.medium,"button--large":this.size===d.large,"button--default":this.color===a.default,"button--primary":this.color===a.primary,"button--secondary":this.color===a.secondary,"button--error":this.color===a.error,"button--warning":this.color===a.warning,"button--info":this.color===a.info,"button--success":this.color===a.success,"button--filled":this.type===u.filled,"button--outlined":this.type===u.outlined,"button--tab":this.type===u.tab,"button--active":this.active,"button--disabled":this.disabled,"button--loading":this.loading})}
        ?disabled=${l(t?void 0:this.disabled)}
        type=${this.submit?"submit":"button"}
        name=${l(t?void 0:this.name)}
        value=${l(t?void 0:this.value)}
        href=${l(this.href||void 0)}
        target=${l(this.target||void 0)}
        download=${l(this.download||void 0)}
        rel=${l(this.target?"noreferrer noopener":void 0)}
        role="button"
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this._handleClick}
      >
        <slot id="prefix" name="prefix"></slot>
        <slot id="label"></slot>
        <slot id="suffix" name="suffix"></slot>
        ${w(this.loading,()=>p`<arc-spinner id="loader"></arc-spinner>`)}
      </${s}>
    `}};o.tag="arc-button";o.styles=k;e([m("#main"),i("design:type",Object)],o.prototype,"button",void 0);e([n({type:String,reflect:!0}),i("design:type",String)],o.prototype,"color",void 0);e([n({type:String,reflect:!0}),i("design:type",String)],o.prototype,"size",void 0);e([n({type:String,reflect:!0}),i("design:type",String)],o.prototype,"type",void 0);e([n({type:String}),i("design:type",String)],o.prototype,"name",void 0);e([n({type:String}),i("design:type",String)],o.prototype,"value",void 0);e([n({type:String}),i("design:type",String)],o.prototype,"href",void 0);e([n({type:String}),i("design:type",String)],o.prototype,"target",void 0);e([n({type:String}),i("design:type",String)],o.prototype,"download",void 0);e([n({type:Boolean,reflect:!0}),i("design:type",Boolean)],o.prototype,"active",void 0);e([n({type:Boolean,reflect:!0}),i("design:type",Boolean)],o.prototype,"disabled",void 0);e([n({type:Boolean,reflect:!0}),i("design:type",Boolean)],o.prototype,"loading",void 0);e([n({type:Boolean,reflect:!0}),i("design:type",Boolean)],o.prototype,"submit",void 0);customElements.define("arc-button",o);export{c as a};
