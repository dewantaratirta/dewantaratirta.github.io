import {writable} from 'svelte/store';
import {onMount} from 'svelte';

export const theme = writable('light');

export const toggle = () => {
    let t;
    theme.subscribe((v) => {
        t = v;
    })
    t = (t == 'light') ? 'dark' : 'light';
    theme.set(t);
    window.document.body.id = t;
}