import Layout from "../../components/templates/layout";
import PictureWithCaption from "../../components/mainPageComponents/pictureWIthCaption";

export default function DinnerClub() {

    return (
    <Layout header={"Seattle Dinner Club"} title={"SDC"}>
        <div className={"z-0"}>
            <div className="sticky mx-auto text-center font-normal text-lg mb-14 w-1/3">
                <p>
                    I started a dinner club in Seattle!
                </p>
                <hr className="bg-gray-500 h-1 my-4"/>
                <p>
                    Friends and friends-of-friends were put into random tables, and each diner would cook a meal for the rest of the table.
                </p>
                <hr className="bg-gray-500 h-1 my-4"/>
                <p>
                    Hover over the pictures below to get some culinary inspiration!
                </p>
            </div>
            <div className="overflow-hidden">
                <div className="overflow-scroll h-900 justify-center content-center">
                    <div className="flex justify-center pb-20">
                        <PictureWithCaption height={700} width={520} heightVar={"h-700"} widthVar={"w-[520px]"} imageAddress={'tapas.jpg'} caption={"A Delicious Tapas Meal from Rachel C. included Patatas Bravas, Gambas Al Ajillo, Spanish Tortilla, and Sangria"}/>
                        <PictureWithCaption height={500} width={700} heightVar={"h-500"} widthVar={"w-700"} imageAddress={'sasha.jpg'} caption={"From Julia's Kitchen came Mushroom Risotto, Kale Salad, and a perfectly paired Red wine"}/>
                    </div>
                    <div className="flex justify-center pb-20">
                        <PictureWithCaption height={600} width={700} heightVar={"h-600"} widthVar={"w-700"}imageAddress={'food.jpg'} caption={"Zander contributed Spaghetti and Meatballs with stuffed Eggplant, sprinkled with Pomegranate seed"}/>
                        <PictureWithCaption height={600} width={700} heightVar={"h-600"} widthVar={"w-700"}imageAddress={'dinner.jpg'} caption={"Joe cooked up an autumnal pumpkin squash gnocchi with sweet potatoes and salad"}/>
                    </div>
                    <PictureWithCaption height={400} width={700} heightVar={"h-400"} widthVar={"w-700"}imageAddress={'pasta.jpeg'} caption={"Molly chef-ed up vegan mac-and-cheese with bread crumbs and green onions"}/>
                    <hr className="bg-gray-500 h-1 my-16"/>
                </div>
            </div>
        </div>
    </Layout>
    )
}