import Head from 'next/head'
import Image from 'next/image'
import NavContainer from './navigationMenu/navContainer.js'
import styles from '../componentStyles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import { useState } from 'react';
import Link from 'next/link'
import SideMenu from "./navigationMenu/sideMenu";

const name = 'Jack Burtis'
export const siteTitle = 'Jack Burtis'

export default function Layout({ children, home }) {
    const [menuOpen, setMenuOpen] = useState(false)
    function changeMenu() {
        setMenuOpen(!menuOpen);
    }
    let menu = menuOpen ? "hi" : "";

    return (
        <>
        <NavContainer onClick={() => changeMenu()}> </NavContainer>
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Jack's new personal Website"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profPic.jpg"
                            className={utilStyles.borderCircle}
                            height={300}
                            width={300}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <SideMenu open={menuOpen} onClick={() => changeMenu()}> </SideMenu>
            <main className={styles.bodyContent}>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    </>
    )
}
