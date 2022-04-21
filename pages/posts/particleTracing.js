import Layout from '../../components/templates/layout'
import React from "react";
import {useState} from "react";
export default class ParticleTracing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onCanvasClick: function() {return null},
            initiated: false
        };
        this.onClickHelper = this.onClickHelper.bind(this);

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
        const canvas = (<canvas id="webgl" width="600" height="600" className={"float-left " + (this.state.initiated ? "" : "bg-light-green")} onClick={this.onClickHelper}>
            Please use a browser that supports "canvas"
        </canvas>);
        const alt = (<div className="h-600 w-600" onClick={this.onClickHelper}>Hello</div>)
        const display = this.state.initiated ? canvas : alt;
        return (
                <Layout header={"Fluid Particle Simulation Game"} title={"Fluid Particle Simulation Game"}>
                    Click on the Green Square to begin the game!
                    { canvas }
                    <div>
                        Instructions:
                        <div>
                            Press 'r' to launch the particles into motion.<br/>Use W/S/A/D to change the view. <br/> Use the arrow buttons to move forward and backward <br/> Use I and K to move up and down
                        </div>
                    </div>
                </Layout>
        )
    }
}
