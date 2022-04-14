import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import {useState} from "react";

export default function PictureWithCaption({imageAddress, height, width, caption}) {

    const [hover, setHover] = useState(false)

    function onHover() {
        setHover(true);
    }
    function onLeave() {
        setHover(false);
    }

    const widthVar = "w-" + width;
    const heightVar = "h-" + height;
    const nameOfClass = 'rounded-2xl absolute top-0 bg-light-gray ' + utilStyles.captionContainer +
        ' ' + heightVar + ' ' + widthVar + ' ' +  (hover ? utilStyles.showCaptionBackground : utilStyles.hideCaption);

    const highlight = (
        <div className="rounded-full opacity-50 absolute top-3/4 h-10 w-10 bg-amber-400"/>);

    return (
        <div className={utilStyles.dinnerPicDiv + ' mx-auto ' + widthVar + ' ' + heightVar} >
            <Image
                priority
                src={'/images/' + imageAddress + '.jpg'}
                className={utilStyles.dinnerPic}
                height={height}
                width={width}
                alt={"name"}
            />
            <div className={nameOfClass} onMouseOver={onHover} onMouseLeave={onLeave}>
            </div>
            <div className={"font-serif text-center absolute top-1/4 font-bold text-2xl w-4/5 " +  ' ' + (hover ? '': utilStyles.hideCaption)} onMouseOver={onHover} onMouseLeave={onLeave}>
                {caption}
            </div>
        </div>);
}