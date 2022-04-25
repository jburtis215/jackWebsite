import Head from 'next/head'
import Image from 'next/image'
import NavContainer from '../navigationMenu/navContainer.js'
import styles from '../../componentStyles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import { useState } from 'react';
import SideMenu from "../navigationMenu/sideMenu";
import Paragraph from "../mainPageComponents/paragraph";

const name = 'Jack Burtis'
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
        <div className="flex justify-between">
            <SideMenu open={menuOpen} onClick={() => changeMenu()}> </SideMenu>
            <NavContainer> </NavContainer>
        </div>
        <div className={styles.container + ' ' + (menuOpen ? styles.openContainer : '')}>
            <header className={styles.header}>
                {home ? (
                    <div className="flex justify-center">
                        <div className={utilStyles.profPicContainer}>
                        <Image
                            priority
                            src="/images/canoePic.jpeg"
                            className={utilStyles.profPic}
                            height={250}
                            width={250}
                            alt={name}
                        />
                        </div>
                        <div className={ utilStyles.infoContainer}>
                            <h1 className={utilStyles.heading2XlHome}>{name}</h1>
                            <Paragraph>Welcome to my website! I wrote it using Next.js/React frameworks. </Paragraph>
                        </div>
                    </div>
                ) : (
                    <>
                    <h1 className={utilStyles.heading2Xl}>
                        {header}
                    </h1>
                    </>
                )}
            </header>

            <br/>
            <hr className="h-2 bg-gray-300 mr-10"/>
            <main className={styles.bodyContent}>
                {children}

                <div className="flex justify-center mt-14">
                    <div className={"text-center rounded-full w-20 h-5 mb-10 " + utilStyles.linkedIn}><a target="_blank" href="https://github.com/jburtis215/jackWebsite">LinkedIn</a>
                    </div>
                </div>
            </main>
        </div>
    </>
    )
}
