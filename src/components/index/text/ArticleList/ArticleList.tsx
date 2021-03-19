import React from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';

const ArticleList = ({ articles }) => {
    return (
        <div>
            { articles.map(article => 
                <ArticleItem article={ article } />
            ) }
        </div>
    );
};

export default ArticleList;