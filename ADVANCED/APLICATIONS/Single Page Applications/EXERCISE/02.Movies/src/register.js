// initialization;

import { showView } from './dom.js';

 // - find relevant section;
 const section = document.getElementById('form-sign-up');
 // - detach section from DOM;
 section.remove();

 // visualization logic;
 export function showRegister() {
     showView(section);
 }