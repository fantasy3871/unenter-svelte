import { writable } from 'svelte/store';
import { DEFAULT_NOISE_MAP_DATA } from '../constants/noise-map';

export const noiseMapData = writable(DEFAULT_NOISE_MAP_DATA);
