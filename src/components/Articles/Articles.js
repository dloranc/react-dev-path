import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CancelToken } from 'axios';
import { fetchArticles } from './../../store/articles/actionCreators';
import { setShow } from './../../store/show/actionCreators';

window.source = CancelToken.source();

export const Articles = ({ show, articles, setShow, fetchArticles }) => {
  useEffect(() => {
    fetchArticles();

    setTimeout(() => {
      setShow(false);
      window.source.cancel('Request aborted');
    }, 1)
  }, [fetchArticles, setShow]);

  return (
    <div className="articles">
      {show && articles.map(article => (
        <div className="article" key={article.id}>{article.title}</div>
      ))}
    </div>
  )
};

const mapStateToProps = (state) => ({
  show: state.show,
  articles: state.articles,
});

const mapDispatchToProps = {
  setShow,
  fetchArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
