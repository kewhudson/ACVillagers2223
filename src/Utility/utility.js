export const zeroPad = (num, places) => String(num).padStart(places, '0');
export const getPokemonImage = (id) =>
    `...${zeroPad(id, 3)}.png`


/* Qua no idea se sia necessario dato che noi l'img la abbiamo già dall'api */