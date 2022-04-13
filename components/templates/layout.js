import Head from 'next/head'
import Image from 'next/image'
import NavContainer from '../navigationMenu/navContainer.js'
import styles from '../../componentStyles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import { useState } from 'react';
import SideMenu from "../navigationMenu/sideMenu";
import Paragraph from "../mainPageComponents/paragraph";

const name = 'Hi,  I\'m Jack.'
export const siteTitle = 'Jack Burtis'

export default function Layout({header, title, children, home }) {
    const [menuOpen, setMenuOpen] = useState(false)
    function changeMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <Head>
            <title>{title}</title>
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
        <NavContainer> </NavContainer>
            <SideMenu open={menuOpen} onClick={() => changeMenu()}> </SideMenu>
        <div className={styles.container + ' ' + (menuOpen ? styles.openContainer : '')}>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/canoePic.jpeg"
                            className={utilStyles.profPic}
                            height={675}
                            width={525}
                            alt={name}
                        />
                        <div className="text-center w-900 pl-10">
                            <h1 className={utilStyles.heading2XlHome}>{name}</h1>
                            <Paragraph>I'm a software developer with a passion for computer graphics, animation, and film.  I'm currently working out of Seattle.</Paragraph>
                            <Paragraph>
                            I have experience in both coding Graphics software and creating 3D animation using software such as Maya.
                            </Paragraph>
                            <Paragraph>Welcome to my website! I wrote it using Next.js/React frameworks. </Paragraph>
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
            <main className={styles.bodyContent}>{children}</main>
        </div>
    </>
    )
}
