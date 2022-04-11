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

export default function Layout({header, children, home }) {
    const [menuOpen, setMenuOpen] = useState(false)
    function changeMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <NavContainer> </NavContainer>
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
                            src="/images/canoePic.jpeg"
                            className={utilStyles.profPic}
                            height={450}
                            width={350}
                            alt={name}
                        />
                        <div className="text-center w-2/5">
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                            <div className="mt-5">Hi, I'm Jack.  I'm a software developer with a passion for computer graphics, animation, and film.  I'm currently working out of Seattle.</div>

                            <div className="mt-5">
                            I have experience in both coding Graphics software and creating 3D animation using software such as Maya.
                            </div>

                            <div className="mt-5">This is my website! I wrote it using Next.js/React frameworks. </div>
                            <div className="mt-5">Please click on the links below to see examples of my work.</div>
                        </div>
                    </>
                ) : (
                    <>
                    <h1 className={utilStyles.heading2Xl}>
                        {header}
                    </h1>
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
