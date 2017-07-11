import React, { Component } from 'react';

import { post } from '../../../services/post';

import styles from './styles.scss';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.state.data !== '') {
      post(this.state.data);
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
        <form onSubmit={this.onSubmit}>
          <label className={styles.label}> Título </label>
          <div>
            <input
              type="text"
              ref={e => (this.titleField = e)}
              className={styles.input}
              placeholder=""
              onSubmit={this.value === ''}
            />
          </div>
          <label className={styles.label}> Subtítulo </label>
          <div>
            <input
              type="text"
              ref={e => (this.subtitleField = e)}
              className={styles.input}
              placeholder=""
              onSubmit={this.value === ''}
            />
          </div>
          <label className={styles.label}> Descrição </label>
          <div>
            <input
              type="text"
              ref={e => (this.descriptionField = e)}
              className={styles.input}
              placeholder=""
              onSubmit={this.value === ''}
            />
          </div>
          <label className={styles.label}> Conteúdo </label>
          <div>
            <input
              type="text"
              ref={e => (this.contentField = e)}
              className={styles.input}
              placeholder=""
              onSubmit={this.value === ''}
            />
          </div>
          <label className={styles.label}> URL da Imagem </label>
          <div>
            <input
              type="url"
              ref={e => (this.imageUrlField = e)}
              className={styles.input}
              placeholder=""
              onSubmit={this.value === ''}
            />
          </div>
          <button type="submit" className={styles.btn}>
            Criar Post
          </button>
        </form>
      </div>
    );
  }
}

export default Create;
