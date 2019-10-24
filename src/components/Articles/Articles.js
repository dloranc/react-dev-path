import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, setArticles } from './../../store/articles/actionCreators';
import { getTitles } from './../../store/articles/selectors';

export const Articles = ({ titles, setArticles }) => {
  useEffect(() => {
    fetchArticles().then(response => setArticles(response));
  }, [setArticles]);

  return (
    <div className="articles">
      {titles.map(title => (
        <div className="article" key={title}>{title}</div>
      ))}
    </div>
  )
};

const mapStateToProps = (state) => ({
  titles: getTitles(state.articles),
});

const mapDispatchToProps = {
  fetchArticles,
  setArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
