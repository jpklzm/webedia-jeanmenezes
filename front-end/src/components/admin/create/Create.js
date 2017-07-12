import React, { Component } from 'react';

import { post } from '../../../services/post';

import styles from './styles.scss';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      status: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.state.data !== '') {
      post(this.state.data).then(response => {
        this.setState({ status: response.data });
      });
      this.setState({ data: '' });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      data: {
        title: this.titleField.value,
        subTitle: this.subtitleField.value,
        description: this.descriptionField.value,
        content: this.contentField.value,
        imageUrl: this.imageUrlField.value,
      },
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <h1> Criar post </h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              ref={e => (this.titleField = e)}
              className={styles.input}
              placeholder="Título"
              onSubmit={this.value === ''}
            />
          </div>
          <div>
            <input
              type="text"
              ref={e => (this.subtitleField = e)}
              className={styles.input}
              placeholder="Subtítulo"
              onSubmit={this.value === ''}
            />
          </div>
          <div>
            <input
              type="text"
              ref={e => (this.descriptionField = e)}
              className={styles.input}
              placeholder="Descrição"
              onSubmit={this.value === ''}
            />
          </div>
          <div>
            <textarea
              rows="5"
              type="text"
              ref={e => (this.contentField = e)}
              className={styles.textarea}
              placeholder="Conteúdo"
              onSubmit={this.value === ''}
            />
          </div>
          <div>
            <input
              type="url"
              ref={e => (this.imageUrlField = e)}
              className={styles.input}
              placeholder="URL da Imagem"
              onSubmit={this.value === ''}
            />
          </div>
          {this.state.status
            ? <div className={styles.alert}>
                <strong>Yay!</strong> Post criado com sucesso!
              </div>
            : null}
          <button type="submit" className={styles.button}>
            Criar Post
          </button>
        </form>
      </div>
    );
  }
}

export default Create;
