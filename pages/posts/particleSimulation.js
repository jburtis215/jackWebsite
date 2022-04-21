import Layout from '../../components/templates/layout'
import React from "react";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";

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
                <Layout header={"Fluid Particle Simulation Game"} title={"Fluid Particle Simulation Game"}>
                    { canvas }
                    <div className={"flex justify-center align-middle absolute h-600 w-600 bg-blue-gray" + (this.state.initiated ? " hidden" : "")} onClick={this.onClickHelper}>
                        <div className="h-110 w-340 my-auto">
                            <Image
                                priority
                                src={'/images/start.png'}
                                height={110}
                                width={340}
                                alt={"name"}
                                />
                        </div>
                    </div>
                    <div>
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
                </Layout>
        )
    }
}
