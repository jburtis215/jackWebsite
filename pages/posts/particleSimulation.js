import Layout from '../../components/templates/layout'
import React from "react";
import Image from "next/image";

export default class ParticleSimulation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onCanvasClick: function() {return null},
            initiated: false
        };
        this.onClickHelper = this.onClickHelper.bind(this);
        this.onFirstClick = this.onFirstClick.bind(this)

    }
    componentDidMount () {
        console.log("componentDidMount");
        document.body.appendChild(this.getScript("lib/webgl-utils.js"));
        document.body.appendChild(this.getScript("lib/webgl-debug.js"));
        document.body.appendChild(this.getScript("lib/cuon-utils.js"));
        document.body.appendChild(this.getScript("lib/cuon-matrix-quat03.js"));
        document.body.appendChild(this.getScript("ParticleSystems/AbstractParticleSystems.js"));
        document.body.appendChild(this.getScript("Util/DensityCalculator.js"));
        document.body.appendChild(this.getScript("Util/PressureCalculator.js"));
        document.body.appendChild(this.getScript("Util/ViscosityCalculator.js"));
        document.body.appendChild(this.getScript("CurrentSolvers.js"));
        document.body.appendChild(this.getScript("OldSolvers.js"));
        document.body.appendChild(this.getScript("sphSolver.js"));
        document.body.appendChild(this.getScript("Main.js"));
        this.setState({onCanvasClick:function() {
            window.main()
        }})
    }

    onFirstClick () {
        this.setState({initiated: true})
    }

    onClickHelper () {
        console.log("You clicked")
        this.setState({initiated: true})
        this.state.onCanvasClick()
    }

    getScript (path) {
        const script = document.createElement("script");
        script.src = "/graphics/ParticleSimulation/" + path;
        script.async = false;
        return script;
    }
    render() {
        const canvas = (<canvas id="webgl" width="600" height="600" className={"float-left"} onClick={this.onClickHelper}>
            Please use a browser that supports "canvas"
        </canvas>);
        return (
                <Layout header={"Fluid Particle Simulation"} title={"Fluid Particle Simulation"} showBar={true}>
                    <div className="w-2/3 mx-auto mb-10">
                        <h1 className="mx-auto text-xl font-extrabold text-center w-600">I created a JavaScript/WebGL Smoothed Particle Hydrodynamics (SPH) simulation of the physical behavior of fluid particles</h1>
                    </div>
                    <div className="mb-16">
                        { canvas }
                        <div className={"flex justify-center align-middle absolute h-600 w-600 bg-blue-gray" + (this.state.initiated ? " hidden" : "")} onClick={this.onClickHelper}>
                            <div className="h-110 w-340 my-auto">
                                <Image
                                    priority
                                    src={'/images/start.png'}
                                    height={110}
                                    className="cursor-pointer"
                                    width={340}
                                    alt={"name"}
                                    />
                            </div>
                        </div>
                        <div className="pt-52">
                            <div className="mx-auto text-center w-2/3">
                                <span className="mx-auto text-center w-2/3 my-5 font-extrabold text-2xl">Press Start to begin!</span>
                            <br/>
                                <br/>
                                Press '<span className="font-extrabold">r</span>' to launch the particles into motion.
                                <br/>
                                Use <span className="font-extrabold">w/a/s/d</span> to change the view.
                                <br/>
                                Use the <span className="font-extrabold">arrows</span> buttons to move forward and backward
                                <br/> Use '<span className="font-extrabold">i</span>' and '<span className="font-extrabold">k</span>' to move up and down
                            </div>
                        </div>
                    </div>
                    <div className="max-w-2/3 mx-auto mt-[320px]">
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
                </Layout>
        )
    }
}
