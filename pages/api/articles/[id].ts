
// abbiamo generato un altro file per ottenere il singolo file
import { request } from 'http';
import { articles } from '../../../data'

export default function handler({ query: {id} }, res) {
    // questo è un modo per ottenere i parametri da query
    // l'altro modo è quello di destrutturare come parametro della funzione
    // req.query.id;
    const filtered = articles.filter(article => {
        article.id === id
    });

    // prendiamo gli articoli filtrati e ne ritorniamo uno solo
    // che ha fatto match con id query string
    if(filtered.length > 0)
    {
        res.status(200).json(filtered[0]);
    } else {
        res.status(404)
        .json({ message:  'article with id {id} is not found'})
    }
    res.status(200).json(articles);
}