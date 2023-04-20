// initialization;

import { showView } from './dom.js';

 // - find relevant section;
 const section = document.getElementById('edit-movie');
 // - detach section from DOM;
 section.remove();

 // visualization logic;
 export function showEdit() {
     showView(section);
 }