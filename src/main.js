import '../styles/style.sass';

import { drawGalleyItem } from './item.js';
import items from './items.js';

const galleryRootElement = document.getElementById('galleryRoot');

items.map( item => galleryRootElement.appendChild( drawGalleyItem(item) ) );