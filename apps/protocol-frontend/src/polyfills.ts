import { Buffer } from 'buffer';

window.Buffer = window.Buffer ?? Buffer;
window.process = window.process ?? { env: {} }; // Minimal process polyfill

export {};

/*
// If we see issues with 'regenerator-runtime', add back these imports
import 'core-js/stable';
import 'regenerator-runtime/runtime';
*/
