import React, { Component } from 'react';
import styles from '../../scss/module/pagestate.module.scss';

export default class Portfolio extends Component {
  render() {
    return (
      <div className={styles.bg_blue}>
        <div className="container">
          <h2>Portfolio</h2>
        </div>
      </div>
    )
  }
}
