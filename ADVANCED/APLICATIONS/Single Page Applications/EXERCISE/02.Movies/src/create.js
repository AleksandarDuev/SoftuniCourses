// initialization;

import { showView } from './dom.js';

 // - find relevant section;
 const section = document.getElementById('add-movie');
 // - detach section from DOM;
 section.remove();

 // visualization logic;
 export function showCreate() {
     showView(section);
 }