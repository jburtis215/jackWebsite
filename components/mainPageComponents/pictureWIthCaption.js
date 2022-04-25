import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import {useState} from "react";

export default function PictureWithCaption({imageAddress, height, width, heightVar, widthVar, caption}) {

    const [hover, setHover] = useState(false)

    function onHover() {
        console.log(widthVar);
        setHover(true);
    }
    function onLeave() {
        setHover(false);
    }

    const nameOfClass = 'absolute top-0 bg-light-gray ' + widthVar + ' ' + heightVar + ' ' + utilStyles.captionContainer +
        ' '  +  (hover ? utilStyles.showCaptionBackground : utilStyles.hideCaption);


    return (
        <div className={"my-auto mx-auto " + widthVar + ' ' + heightVar + ' ' + utilStyles.dinnerPicDiv} >
            <Image
                priority
                src={'/images/' + imageAddress}
                className={utilStyles.dinnerPic}
                height={height}
                width={width}
                alt={"name"}
            />
            <div className={nameOfClass} onMouseOver={onHover} onMouseLeave={onLeave}>
                <div className={"font-serif absolute top-1/4 font-bold text-2xl " + widthVar + ' ' + heightVar + ' ' + (hover ? utilStyles.showCaption : utilStyles.hideCaption)} onMouseOver={onHover} onMouseLeave={onLeave}>
                    <div className="w-2/3 mx-auto">
                    {caption}
                    </div>
                </div>
            </div>
        </div>);
}