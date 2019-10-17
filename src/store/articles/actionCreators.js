import { createAction } from 'redux-starter-kit';
import axios from 'axios';
import { normalize, schema } from 'normalizr';

export const addArticle = createAction('articles/ADD');
export const setArticles = createAction('articles/SET');

export const fetchArticles = () => axios.get('http://localhost:4000/articles')
  .then(response => {
    const { data } = response;

    const tag = new schema.Entity("tags", {});
    const article = new schema.Entity("articles", {
      tags: [tag]
    });

    const normalizedData = normalize(data, [article]);

    const articles = normalizedData.result.map(
      result => normalizedData.entities.articles[result]
    );

    return articles;
  });
