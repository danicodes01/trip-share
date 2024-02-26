import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import classes from './main-header.module.css'
export default function MainHeader() {

  return (
    <header>
      <Link href='/'>
        <Image src={logo} alt='logo' priority />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/trips'>trips</Link>
          </li>
          <li>
            <Link href='/trips/share'>share</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}