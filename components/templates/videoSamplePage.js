import YoutubeEmbed from "../Utils/VideoEmbed";
export default function VideoSamplePage({children, title, embedCode}) {
    return (
        <div className="mx-auto flex justify-center">
            <YoutubeEmbed embedId={embedCode}/>
            <div className="ml-10 w-[600px] my-auto">{children}</div>
        </div>
    )
}