import { atom, action } from 'nanostores';

export const basketState = atom([]);

export const basketStateToggle = action(basketState, 'basketStateToggle', store => {
  store.set(!store.get());
  return store.get();
});