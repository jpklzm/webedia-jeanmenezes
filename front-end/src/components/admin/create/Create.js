import React, { Component } from 'react';

import styles from './styles.scss';

class Create extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.onSubmit}>
          <label className={styles.label}> Título </label>
          <div>
            <input type="text" className={styles.input} placeholder="" onSubmit={this.value === ''} />
          </div>
          <label className={styles.label}> Subtítulo </label>
          <div>
            <input type="text" className={styles.input} placeholder="" onSubmit={this.value === ''} />
          </div>
          <label className={styles.label}> Descrição </label>
          <div>
            <input type="text" className={styles.input} placeholder="" onSubmit={this.value === ''} />
          </div>
          <label className={styles.label}> Conteúdo </label>
          <div>
            <input type="text" className={styles.input} placeholder="" onSubmit={this.value === ''} />
          </div>
          <label className={styles.label}> URL da Imagem </label>
          <div>
            <input type="url" className={styles.input} placeholder="" onSubmit={this.value === ''} />
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
