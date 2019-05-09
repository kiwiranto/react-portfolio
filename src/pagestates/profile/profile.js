import React, { Component } from 'react'
import styles from '../../scss/module/pagestate.module.scss';

export default class Profile extends Component {
  render() {
    return (
      <div className={styles.bg_green}>
        <div className="container">
          <h2>Profile</h2>
        </div>        
      </div>
    )
  }
}
