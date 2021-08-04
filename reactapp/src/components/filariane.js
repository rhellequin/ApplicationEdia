


// Construction des infos de recherche :
//==============================================

async function  FilAriane   (tb) {

    const listResponse = tb.map ((e,i) => {
        return {critere: e.critere, valeur: e.valeur}
    })
    const param = JSON.stringify(listResponse);

    const data = await fetch('/filariane', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `parameters=${param}`
        });
    const body = await data.json();
    if (!body.result) {
        return null;
    } else {
        const filAriane = body.filAriane; console.log('filariane :', filAriane)
        return filAriane;
    }
};

export default FilAriane;

