(function(){
'use strict';
class I18n{
  constructor(){this.supportedLanguages=['ko','en','ja','es','pt','zh','id','tr','de','fr','hi','ru'];this.currentLang=this.detectLanguage();this.translations={};this.ready=this.loadTranslations(this.currentLang).then(()=>this.updateUI())}
  detectLanguage(){const query=new URLSearchParams(location.search).get('lang');if(this.supportedLanguages.includes(query))return query;const saved=localStorage.getItem('app_language');if(this.supportedLanguages.includes(saved))return saved;const browser=(navigator.language||'en').split('-')[0];return this.supportedLanguages.includes(browser)?browser:'en'}
  async loadTranslations(lang){try{const response=await fetch(`js/locales/${lang}.json`);if(!response.ok)throw Error(String(response.status));this.translations=await response.json();this.currentLang=lang}catch(error){if(lang!=='en')return this.loadTranslations('en')}}
  t(key){let value=this.translations;for(const part of key.split('.')){if(value&&typeof value==='object'&&part in value)value=value[part];else return key}return typeof value==='string'?value:key}
  updateUI(){document.documentElement.lang=this.currentLang;document.querySelectorAll('[data-i18n]').forEach(node=>{const value=this.t(node.dataset.i18n);if(value!==node.dataset.i18n)node.textContent=value});const title=this.t('app.title'),description=this.t('app.description');if(title!=='app.title')document.title=title;const meta=document.querySelector('meta[name="description"]');if(meta&&description!=='app.description')meta.content=description}
  async setLanguage(lang){if(!this.supportedLanguages.includes(lang))return;localStorage.setItem('app_language',lang);await this.loadTranslations(lang);this.updateUI()}
  getCurrentLanguage(){return this.currentLang}
}
window.i18n=new I18n();
})();
