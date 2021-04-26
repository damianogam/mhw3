/*
Vota le tue mete preferite per la gita scolastica per l'anno scolastico 2021/22
Genova-Torino-Milano-Venezia-Verona-Bologna-Ravenna----Roma-Firenze-Perugia-Ancona----Napoli-Palermo-Bari-Siracusa-Matera-Caserta-Lecce-Trapani
Barra di ricerca
Risultati in tempo reale del sondaggio */


const titoli = ['Roma','Firenze','Palermo','Napoli','Venezia','Torino','Trapani','Perugia','Bologna','Genova'];
const immagini = ['https://www.arisassociazione.it/images/colosseo_roma_bellissima.jpg'
                ,'https://img.huffingtonpost.com/asset/5f804267200000f700561655.jpeg?ops=scalefit_630_noupscale'
                ,'https://images.musement.com/cover/0002/52/cathedral-of-palermo-xl-jpg_header-151876.jpeg'
                ,'https://www.poli-listaperta.it/wp-content/uploads/2019/09/Panorama-di-Napoli-Gettyimages.jpg'
                ,'https://www.myveniceapartment.com/wp-content/uploads/2019/01/canale-venezia-my-venice-apartment.jpg'
                ,'https://www.cislpiemonte.it/torino-canavese/wp-content/uploads/sites/2/2020/12/Torino.jpg'
                ,'https://upload.wikimedia.org/wikipedia/commons/c/c4/Trapani%2C_Sicily.jpg'
                ,'https://www.10cose.it/wp-content/uploads/2015/09/perugia1.jpg'
                ,'https://www.cadetaruffi.com/wp-content/uploads/2016/04/bologna.jpg'
                ,'http://www.bbalcentrodigenova.it/wp-content/uploads/Fotolia_Ridotta.jpg'];
const descrizioni = ["Capitale d'Italia, è considerata una delle città più belle del mondo. Il suo centro storico insieme alle proprietà della Santa Sede dentro la città e alla Basilica di San Paolo, è tra i siti italiani inseriti dall'Unesco nella Word Heritage List."
                ,"Per molti luogo di origine del Rinascimento, in quanto culla di quel rinnovamento culturale e scientifico che contraddistinse la fine del trecento a Firenze, per poi esplodere nel 1500 in tutta Europa."
                ,"Il Capoluogo della Sicilia è stato nei secoli un crocevia di infinite culture, Palermo si sviluppa fra ville liberty, residenze arabo-normanne, chiese barocche, teatri neoclassici e mura puniche. La città di Palermo è una fra le mete preferite del Sud Italia, grazie anche al perfetto connubio mare-arte."
                ,"Napoli è una delle più grandi ed incantevoli città d’arte del Mediterraneo. La città domina l’omonimo golfo, che si estende dalla penisola sorrentina all’area vulcanica dei Campi Flegrei ed offre una vista molto suggestiva, con l’imponente vulcano Vesuvio e, in lontananza, tre magnifiche isole: Capri, Ischia e Procida."
                ,"Una città incredibile, costituita da un insieme di 118 isole unite da oltre 400 ponti e separate dai canali che fungono da strade, percorsi da barche e gondole. Venezia è una città affascinante per i numerosi tesori d'arte che custodisce: chiese, palazzi, musei, ponti."
                ,"Torino, prima capitale d'Italia, è una città ricca di storia e cultura, sempre più apprezzata dai turisti stranieri. Tutto merito del processo di rinnovamento che in poco più di un decennio ha trasformato il capoluogo piemontese da grigio polo industriale a vivace città d'arte, ideale per trascorrere un weekend di cultura e divertimento insieme ad amici o famigliari. "
                ,"Trapani è la “Città dei due mari” perché è situata sull'estrema punta occidentale della Sicilia, alla confluenza del Mar Tirreno e del Canale di Sicilia. Capoluogo di provincia, è una città con un patrimonio ambientale e culturale di notevole valore."
                ,"Potente centro etrusco e poi importante città medievale, Perugia custodisce amorevolmente tracce preziose dei suoi luminosi periodi storici. Oggi è capoluogo amministrativo delle regione Umbria, meta culturale e turistica di rilievo e prestigiosa sede della Università degli Studi da oltre 700 anni."
                ,"Città d’arte, cultura e commercio con un'efficiente struttura fieristica e una rinomata tradizione manifatturiera e motoristica, Bologna è nota per i quasi 40 km di portici, i più lunghi del mondo."
                ,"Metropoli di mare, e città dalla gloriosa storia, Genova suscita sentimenti contrastanti e ciò e dovuto anche al fatto che essa ha duplici sfaccettature: porto sul Mediterraneo da aperto ai traffici con i paesi che vi si affacciano e città di mercanti e di banchieri, conosciuta da tutti come la città più inglese d'Italia."];
