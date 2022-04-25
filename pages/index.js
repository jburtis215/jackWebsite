import Head from 'next/head'
import Layout, { siteTitle } from '../components/templates/layout'
import utilStyles from '../styles/utils.module.css'
import PictureWithCaption from "../components/mainPageComponents/pictureWIthCaption";
import Link from "next/link";

export default function Home() {

    return (
        <Layout home >
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={"flex justify-evenly mt-5 " + utilStyles.displayMenuPicsTotal}>

                <Link href={"/posts/particleSimulation"}>
                    <div className={"cursor-pointer " + utilStyles.displayMenuPicsContainer}>
                        <PictureWithCaption height={400} width={700} heightVar={"h-400"} widthVar={"w-700"} imageAddress={'particleStill.png'} caption={"Fluid Particle Simulation"}/>
                    </div>
                </Link>
                <Link href={"/posts/rayTracing"}>
                    <div className={"cursor-pointer " + utilStyles.displayMenuPicsContainer}>
                        <PictureWithCaption height={400} width={700} heightVar={"h-400"} widthVar={"w-700"} imageAddress={'rayTracingStill.png'} caption={"Ray Tracing"}/>
                    </div>
                </Link>
            </div>
            <div className={"flex justify-evenly " + utilStyles.displayMenuPicsTotal}>
                <Link href={"/posts/dinnerClub"}>
                    <div className={"cursor-pointer " + utilStyles.displayMenuPicsContainer}>
                        <PictureWithCaption height={400} width={700} heightVar={"h-400"} widthVar={"w-700"} imageAddress={'pasta.jpeg'} caption={"Seattle Dinner Club"}/>
                    </div>
                </Link>
                <Link  href={"/posts/dinnerClub"}>
                    <div className={"cursor-pointer " + utilStyles.displayMenuPicsContainer}>
                        <PictureWithCaption height={400} width={700} heightVar={"h-400"} widthVar={"w-700"} imageAddress={'boat.jpeg'} caption={"About Me"}/>
                    </div>
                </Link>
            </div>
            <section className={utilStyles.headingMd}>
            </section>
        </Layout>
    )
}
