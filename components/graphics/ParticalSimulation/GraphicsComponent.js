import React from "react";


export default class GraphicsComponent extends React.Component {


    render() {
        return (

            <div>
                <script src="lib/webgl-utils.js"/>
                <script src="lib/webgl-debug.js"/>
                <script src="lib/cuon-utils.js"/>
                <script src="lib/cuon-matrix-quat03.js"/>

                <script src="ParticleSystems/AbstractParticleSystems.js"/>
                <script src="ParticleSystems/FireSystem.js"/>
                <script src="ParticleSystems/ForceField.js"/>
                <script src="ParticleSystems/BoidSystem.js"/>
                <script src="ParticleSystems/SpringSystem.js"/>
                <script src="ParticleSystems/WindySystem.js"/>
                <script src="Util/DensityCalculator.js"/>
                <script src="Util/PressureCalculator.js"/>
                <script src="Util/ViscosityCalculator.js"/>
                <script src="CurrentSolvers.js"/>
                <script src="OldSolvers.js"/>
                <script src="sphSolver.js"/>
                <script src="Main.js"/>
            <body onLoad={main}>
            <canvas id="webgl" width="600" height="600" className="float-left">
                Please use a browser that supports "canvas"
            </canvas>
            <br/>
            <div id="info" className="ml-635px;">
                <b>Particle System Controls:</b> <br/>
                <b>c or C key:</b> toggle clear-screen. <b>r/R key:</b> soft/hard
                reset. <br/><b>Space-bar:</b> single-step. <b>p or P key:</b> pause/resume. <br/>
                <b>t/T key:</b> less/more drag. <b>g/G key:</b> less/more gravity
                <br/><b>v or V: switch solvers</b> (implicit vs. explicit)
                <br/><b>b or B:</b> floor-bounce method
                <p>
                    <button type="button" onClick="VBO3toggle()">Euler Solver</button>
                    <button type="button" onClick="VBO4toggle()">Midpoint Solver</button>
                    <button type="button" onClick="VBO5toggle()">Velocity-Verlet Solver</button>
                    <button type="button" onClick="VBO6toggle()">Adams-Bashforth Solver</button>

                    <button type="button" onClick="VBO7toggle()">Reverse Midpoint Solver</button>
                </p>
                <p>
                    <button type="button" onClick="Part0toggle()">Bouncy Balls hide/show</button>
                    <button type="button" onClick="Part1toggle()">Wind hide/show</button>
                    <button type="button" onClick="Part2toggle()">Fire hide/show</button>
                    <button type="button" onClick="Part3toggle()">Boid hide/show</button>
                    <button type="button" onClick="Part4toggle()">Spring hide/show</button>
                </p>

                <p>
                    <button type="button" onClick="VBO0toggle()">World hide/show</button>
                    <br/>

                    <b>For Bouncy Balls</b>: Press 'r' to launch <br/> <br/>
                    <b>For Wind</b>: Press 'z' to throw all particles up <br/> <br/>
                    <b>For Spring</b>: Hold 'y' to pull down <br/> <br/>
                </p>
            </div>
            </body>
        </div>
        )
    }
}