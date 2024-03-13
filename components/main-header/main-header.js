import Link from "next/link";
import classes from './main-header.module.css'
import NavLink from "./nav-link";
export default function MainHeader() {

  return (
    <header className={classes.header}>
      <NavLink href='/'>
      <span className={classes.highlight}>tripShare</span>
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/trips'>trips</NavLink>
          </li>
          <li>
            <NavLink href='/trips/share'>share</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}