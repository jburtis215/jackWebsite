import YoutubeEmbed from "../../components/Gimmicks/VideoEmbed";
export default function VideoSamplePage({children, title, embedCode}) {
    return (
        <div className="max-w-2/3 mx-auto">
            <YoutubeEmbed embedId={embedCode}/>
            <div className="max-w-2/3 mx-auto">{children}</div>
        </div>
    )
}