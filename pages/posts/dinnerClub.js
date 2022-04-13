import Layout from "../../components/templates/layout";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function DinnerClub() {

    return (
    <Layout header={"Seattle Dinner Club"} title={"SDC"}>
        <div className="sticky mx-auto text-center font-extrabold text-2xl mb-14"> First title</div>
        <div className="overflow-hidden">
        <div className="overflow-scroll h-60per justify-center content-center">
            <div className={utilStyles.dinnerPicDiv}>
            <Image
                priority
                src="/images/dinner.jpg"
                className={utilStyles.dinnerPic}
                height={600}
                width={700}
                alt={"name"}
                />
            </div>
            <div className={utilStyles.dinnerPicDiv}>
            <Image
                priority
                src="/images/tapas.jpg"
                className={utilStyles.dinnerPic}
                height={900}
                width={700}
                alt={"name"}
            />
            </div>
            <div className={utilStyles.dinnerPicDiv}>
            <Image
                priority
                src="/images/sasha.jpg"
                className={utilStyles.dinnerPic}
                height={500}
                width={700}
                alt={"name"}
            />
            </div>
            <div className={utilStyles.dinnerPicDiv}>
            <Image
                priority
                src="/images/food.jpg"
                className={utilStyles.dinnerPic}
                height={700}
                width={700}
                alt={"name"}
            />
            </div>
        </div>
        </div>
    </Layout>
    )
}