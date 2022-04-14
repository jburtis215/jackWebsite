import Layout from "../../components/templates/layout";
import PictureWithCaption from "../../components/mainPageComponents/pictureWIthCaption";

export default function DinnerClub() {

    return (
    <Layout header={"Seattle Dinner Club"} title={"SDC"}>
        <div className={"z-0"}>
            <div className="sticky mx-auto text-center font-normal text-lg mb-14 w-2/3">
                <p>
                    I started a dinner club in Seattle!
                </p>
                <br/>
                <p>
                    I'd assign friends and friends-of-friends into random tables, and each diner would have to take one turn cooking a meal for the rest of the table.
                </p>
                <br/>
                <p>
                    The results were fantastic!  Hover over the pictures below to see more (and get some culinary inspiration!)
                </p>
            </div>
            <div className="overflow-hidden">
                <div className="overflow-scroll h-900 justify-center content-center">
                    <PictureWithCaption height={900} width={700} imageAddress={'tapas'} caption={"A Delicious Tapas Meal from Rachel C. included Sangria, tortilla, pastrami, etc etc and so much more"}/>
                    <PictureWithCaption height={500} width={700} imageAddress={'sasha'} caption={"A Delicious Tapas Meal from Rachel C. included Sangria, tortilla, pastrami, etc etc"}/>
                    <PictureWithCaption height={600} width={700} imageAddress={'food'} caption={"A Delicious Tapas Meal from Rachel C. included Sangria, tortilla, pastrami, etc etc"}/>
                    <PictureWithCaption height={600} width={700} imageAddress={'dinner'} caption={"A Delicious Tapas Meal from Rachel C. included Sangria, tortilla, pastrami, etc etc"}/>
                </div>
            </div>
        </div>
    </Layout>
    )
}