import Link from 'next/link';

// creiamo un link ad uno specifico articolo. l'id lo prendiamo
// dall'articolo
const ArticleItem = ({ article }) => {
    return (
        <Link href="/article/[id]" as={'/article/${article.id}'}>
            <a>
                {/* con &rarr; mettiamo un arrow */}
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    );
};

export default ArticleItem;