
import Layout from '../../components/templates/layout'
import VideoSamplePage from "../../components/templates/videoSamplePage"

export default function RayTracing() {
    const animation = "Ray Tracing"
    const embed = "URsMHt72pnA"
    return (

        <Layout header={"Ray Tracing"} title={"Ray Tracing"} showBar={true}>
            <VideoSamplePage title={animation} embedCode={embed} >
                <div className="justify-center content-center">
                    <h1 className="text-xl font-extrabold text-center">I created an interactive JavaScript/WebGL Ray-Tracing Graphics program for producing high fidelity images 3D animation frames
                    </h1>
                    <br/><br/>
                    <div className="max-w-2/3 mx-auto">
                        <p className="mb-5">
                            This program allows the user to navigate a sample 3D scene and choose a frame to render.
                        </p>
                        <p className="mb-5">
                            Once the user chooses a view, the program uses the Ray-Tracing technique to render a high quality image of the scene, including creating reflective and textured effects.
                        </p>
                        <p className="mb-5">
                            This was created as a school project with Professor Jack Tumblin.
                        </p>
                    </div>
                </div>
            </VideoSamplePage>
        </Layout>
    )
}