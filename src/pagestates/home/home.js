import React, { Component } from 'react'
import styles from '../../scss/module/pagestate.module.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.bg_red}>
        <div className="container">
          <h2>Home</h2>
        </div>
      </div>
    )
  }
}
