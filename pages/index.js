import Head from 'next/head'
import Layout, { siteTitle } from '../components/templates/layout'
import utilStyles from '../styles/utils.module.css'
import PictureWithCaption from "../components/mainPageComponents/pictureWIthCaption";
import Link from "next/link";

export default function Home() {

    return (
        <Layout home showBar={true}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={" mt-5 " + utilStyles.displayMenuPicsTotal}>
                <div className={"mt-24 cursor-pointer " + utilStyles.displayMenuPicsContainer}>
                    <Link href={"/posts/particleSimulation"}>
                        <PictureWithCaption height={500} width={875} heightVar={"h-500"} widthVar={"w-[875px]"} imageAddress={'particleStill.png'} caption={"Fluid Particle Simulation"}/>
                    </Link>
                </div>
                <div className={"mt-24 cursor-pointer " + utilStyles.displayMenuPicsContainer}>
                    <Link href={"/posts/rayTracing"}>
                        <PictureWithCaption height={500} width={875} heightVar={"h-500"} widthVar={"w-[875px]"} imageAddress={'RayTracingStill.png'} caption={"Ray Tracing"}/>
                    </Link>
                </div>
            </div>
            <div className={" " + utilStyles.displayMenuPicsTotal}>
                <div className={"mt-24 cursor-pointer " + utilStyles.displayMenuPicsContainer}>
                    <Link href={"/posts/dinnerClub"}>
                        <PictureWithCaption height={500} width={875} heightVar={"h-500"} widthVar={"w-[875px]"} imageAddress={'pasta.jpeg'} caption={"Seattle Dinner Club"}/>
                    </Link>
                </div>
                <div className={"mt-24 cursor-pointer " + utilStyles.displayMenuPicsContainer}>
                    <Link  href={"/posts/aboutMe"}>
                        <PictureWithCaption height={500} width={875} heightVar={"h-500"} widthVar={"w-[875px]"} imageAddress={'boat.jpeg'} caption={"About Me"}/>
                    </Link>
                </div>
            </div>
            <section className={utilStyles.headingMd}>
            </section>
        </Layout>
    )
}
