
// Appel de la recherche : POST vers le backend :
//==============================================

    async function  SearchAids   (tb) {

        const param = JSON.stringify(tb);
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

