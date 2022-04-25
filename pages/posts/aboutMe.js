
import Layout from '../../components/templates/layout'
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    return (

        <Layout header={"Hi, I'm Jack."} title={"Jack Burtis"} showBar={false}>
            <div className="flex justify-center">
                <div className=" mr-24 my-auto">
                    <Image
                        priority
                        src="/images/canoePic.jpeg"
                        className={utilStyles.profPic}
                        height={500}
                        width={450}
                        alt={"Jack"}
                    />
                </div>
                <hr className=" my-auto mr-10 h-[480px] w-1 bg-gray-500"/>
                <div className={utilStyles.aboutMePro}>
                    <h1 className="text-2xl font-bold text-center"> Professional Life </h1>
                    <p className="mb-4">Here's what I've been up to in the last few years.
                    </p>
                    <h1 className="text-2xl font-bold">2015-2019</h1>
                    <p>
                        My career kicked off in earnest at <span className="font-bold">Northwestern University</span>, where I studied Computer Science and Radio/TV/Film, with a concentration in graphics and computer animation.
                    </p>
                    <h1 className="text-2xl font-bold">2018</h1>
                    <p>
                       I had the pleasure of working as an intern at Amazon in the Ads space, leveraging <span className="font-bold">AWS technologies</span> to create an automated content moderation workflow for video ads.
                    </p>
                    <h1 className="text-2xl font-bold">2019</h1>
                    <p>
                        I returned to Seattle for a full time job at Amazon, working on the backend Ads storage APIs (the Axiom team).  I gained extensive experience <span className="font-bold">coding in Java</span>.
                    </p>
                    <h1 className="text-2xl font-bold">2021</h1>
                    <p>
                        After a year and a half, my hard work was recognized and I was promoted to SDE 2.  In this role, I am one of the engineers in charge of maintaining and improving an <span className="font-bold">enterprise-scale</span>, business crucial system that <span className="font-bold">supports all of Amazon Ads</span>.
                    </p>
                    <br/>
                    For a more detailed account, download my resume <a href="/images/JohnBurtisResume.pdf" className="underline border-l-blue-300">here</a>.
                    <br/>
                </div>
            </div>

            <div className="text-center font-bold text-2xl mt-20 mb-8">Personal Life</div>
            <div className="w-2/3 mx-auto my-15">
                <img
                    src="/images/enchantments.jpg"
                    className={utilStyles.fillImg}
                    alt={"Jack"}
                />
            </div>
            <hr className="w-3/4 h-1 bg-gray-500 mx-auto mt-8"/>
            <div className={utilStyles.aboutMeFun}>
                <p>Outside of work, I spend my time skiing, hiking, and organizing elaborate <span className="underline text-blue-500"><Link href="/posts/dinnerClub">dinner parties.</Link></span></p>
                <br/>
                <p>I'm a huge movie fan, and can often be found convincing friends to watch old Marx Brothers movies with me.</p>
            </div>
        </Layout>
    )
}