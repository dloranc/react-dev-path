import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, setArticles } from './../../store/articles/actionCreators';

export const Articles = ({ articles, setArticles, fetchArticles }) => {
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles, setArticles]);

  return (
    <div className="articles">
      {articles.map(article => (
        <div className="article" key={article.id}>{article.title}</div>
      ))}
    </div>
  )
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = {
  fetchArticles,
  setArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
