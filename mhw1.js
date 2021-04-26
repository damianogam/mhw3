const contenitore = document.querySelector("#news .containerinterno");

function creaBoxNews(json, titolo, immagine, descrizione, link, data){
    const divbox = document.createElement('div');
    divbox.classList.add('box');
    const divimgbox = document.createElement('div');
    const image = document.createElement('img');
    image.src = immagine;
    const spanx = document.createElement('span');
    data = data.substring(0, 10);  
    spanx.textContent = data; 
    const divboxcontent = document.createElement('div');
    divboxcontent.classList.add('boxcontent');
    const intestazione = document.createElement('h4'); 
    intestazione.textContent = titolo;

    const parx = document.createElement('p');
    if(descrizione.length > 160){
        descrizione = descrizione.substring(0,160) + '...';
    }

    parx.textContent = descrizione;
    const anchor = document.createElement('a');
    anchor.textContent = 'Approfondisci';
    anchor.href = link;

    contenitore.appendChild(divbox);
    divbox.appendChild(divimgbox);
    divimgbox.appendChild(image);
    divimgbox.appendChild(spanx);
    divbox.appendChild(divboxcontent);
    divboxcontent.appendChild(intestazione);
    divboxcontent.appendChild(parx);
    divbox.appendChild(anchor);
}

function onJsonNews(json) {
    console.log('JSON ricevuto');
    console.log(json);

    if (json.status == 400) {
        const error = document.createElement("h1"); 
        const mex = document.createTextNode(json.detail); 
        error.appendChild(mex); 
        stats1.appendChild(error);
        return;
      }

      const results = json.news;
      
      if(results.length == 0) {
	    const errore = document.createElement("h1"); 
	    const messaggio = document.createTextNode("Nessun risultato!"); 
	    errore.appendChild(messaggio); 
	    library.appendChild(errore);
        }

        let i = 0;
        contenitore.innerHTML = '';
        for(result of results) {
            creaBoxNews(json, result.title, result.image, result.description, result.url, result.published);
            
            if(i>=2){  
                break;   
            }
            i++;
        }  
}

function onResponse(response) {
    return response.json();
    }


const api_key = "bsjDnHcFqfal6uR2EkdpgfE-ItYc1WFWKC6YJv1zCEsp9gPs";

fetch('https://api.currentsapi.services/v1/latest-news?language=it&category=education&apiKey=' + api_key).then(onResponse).then(onJsonNews);



/*-----------------------------
-------------------------------
-------------------------------*/



const KEY = 'Av38a7pBZqR08NxVMyUj8x-JvdgruaQJiJrtb-v0U8cFw7q_czC7TALI0keuP1L6';
const latitudine = '37.60875487523013';
const longitudine ='15.163469034670458';


function GetMap() {

    const map = new Microsoft.Maps.Map('#map', {
        credentials: KEY,
        center: new Microsoft.Maps.Location(latitudine, longitudine)
    });


    const center = map.getCenter();

    const pin = new Microsoft.Maps.Pushpin(center, {
        color: 'rgba(9, 43, 43, 0.5)',
        title: 'ISTITUTO COMPRENSIVO P.VASTA',
        subTitle: 'ACIREALE',
    })

    
    map.entities.push(pin);
}
