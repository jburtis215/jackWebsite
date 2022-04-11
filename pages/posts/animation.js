
import Layout from '../../components/templates/layout'
import VideoSamplePage from "../../components/templates/videoSamplePage"

export default function Animation() {
    const animation = "Particle Simulation"
    const embed = "2FObbKgvrtw"
    return (

        <Layout header={"Smooth Particle Hydrodynamics"} title={"Smooth Particle Hydrodynamics"}>
            <VideoSamplePage title={animation} embedCode={embed} >
                <div className="justify-center content-center">
                    <h1 className="text-xl font-extrabold text-center">I created a JavaScript/WebGL Smoothed Particle Hydrodynamics (SPH) simulation of the physical behavior of fluid particles</h1>
                    <br/><br/>
                    <div className="max-w-2/3 mx-auto">
                        <p className="mb-5">
                            This is an interactive 3D scene which calculates pressure, viscosity, gravity, and friction forces on several hundred 3D 'Fluid' particles in real time to simulate the behavior of real fluids inside a cubic container.
                        </p>
                        <p className="mb-5">
                            The color of the particles indicates their relative density compared to the rest of the particles- Red indicates the denset particles, while Blue is the least dense.
                        </p>
                        <p className="mb-5">
                            This project was created as an Independent Study at Northwestern University with Professor Jack Tumblin.
                        </p>
                    </div>
                </div>
            </VideoSamplePage>
        </Layout>
    )
}