import classes from './MainNavigation.module.css';

import React from 'react'
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
      <header className={classes.header}>
          <div className={classes.logo}>QuoteMe</div>
          <nav className={classes.nav}>
          <ul>
              <li>
                <NavLink to='/quotes' activeClassName={classes.active}>All Quotes</NavLink>
              </li>
              <li>
                <NavLink to='/newquote' activeClassName={classes.active}>Add a Quote</NavLink>
              </li>
          </ul>
          </nav>
      </header>
  )
}

export default MainNavigation;