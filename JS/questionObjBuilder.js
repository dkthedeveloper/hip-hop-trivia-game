export function presentQuestion (url) {
return fetch(url)
    .then(res => res.json())
   .then(data => data.clues)
};



