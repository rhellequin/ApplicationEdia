
// Appel de la recherche : POST vers le backend :
//==============================================

async function  SearchAids   (tb) {

        const listFilter = tb.map ((e,i) => {
            return {critere: e.critere, valeur: e.valeur}
        })
        const param = JSON.stringify(listFilter);

        const data = await fetch('/search', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `parameters=${param}`
            });
        const body = await data.json();
        if (!body.result) {
            return null;
        } else {
            const aids = body.aids;
            return aids;
        }
    };
    export default SearchAids;

