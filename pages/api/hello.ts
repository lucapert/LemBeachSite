// possiamo generare delle api
// tutto ci+ che è inserito all'interno della folder api è accessibile tramite
// il path /api/<nome_cartella>/<nome_file>
// solo il path fino alla cartella se ci riferiamo al file index.ts
// nel brouser vedremo i dati

// dati li possiamo ottenere da file ma anche da un database sql... ecc.
// funzione che prende request e response
export default (req, res) => {
    // response status code
    res.statusCode = 200
    // ritorniamo il json
    res.json({ naem: 'John Doe' })
}

// di base per ogni function dobbiamo avere file separati
// es. uno per ottenere il singolo article e uno per
// tutti gli articles

// Molto utile è l'utilizzo di Prisma che ci permette di conetterci
// ad un database mySQL o Postgress db

