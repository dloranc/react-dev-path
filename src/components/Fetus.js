import React from 'react';

class Fetus extends React.Component {
  state = { data: null };

  componentDidMount = () =>
    fetch('https://jsonplaceholder.typicode.com/todos/1', { signal: this.abortController.signal })
      .then(data => data.json())
      .then(data => this.setState({ data: data }))
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('fetus aborted');
          return;
        }

        throw error;
      });

  componentWillUnmount = () => this.abortController.abort();

  abortController = new window.AbortController();

  render = () => <div>{this.state.data ? JSON.stringify(this.state.data, null, 2) : 'loading'}</div>;
}

export default Fetus;
