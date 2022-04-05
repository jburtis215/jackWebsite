export default function GraphicsComponent() {
  var inner = '  <body onload="main()">\n' +
      '    <canvas id="webgl" width="600" height="600" style="float:left;">\n' +
      '    Please use a browser that supports "canvas"\n' +
      '    </canvas>\n' +
      '    <br>\n' +
      '    <div id = "info" style = "margin-left:635px;" >\n' +
      '   \t<b>Particle System Controls:</b> <br>\n' +
      '  <b>c or C key:</b> toggle clear-screen. <b>r/R key:</b> soft/hard reset. <br><b>Space-bar:</b> single-step.    <b>p or P key:</b> pause/resume.\t <br>\n' +
      '\t<b>t/T key:</b> less/more drag.  <b>g/G key:</b> less/more gravity \n' +
      '\t<br><b>v or V: switch solvers</b> (implicit vs. explicit)\n' +
      '\t<br><b>b or B:</b> floor-bounce method\n' +
      '\t<!-- Make \'div\' elements to hold changeable HTML made in our JavaScript file;\n' +
      '\t\t (where? look at the end of \'BouncyBall03.js\' at \n' +
      '\t\t\tmyKeyPress(), myKeyDown() and myKeyUp() fcns)\n' +
      '\t-->\n' +
      '\t<p>\n' +
      '      <button type="button" onclick="VBO3toggle()">Euler Solver</button>\n' +
      '      <button type="button" onclick="VBO4toggle()">Midpoint Solver</button>\n' +
      '      <button type="button" onclick="VBO5toggle()">Velocity-Verlet Solver</button>\n' +
      '     <button type="button" onclick="VBO6toggle()">Adams-Bashforth Solver</button>\n' +
      '     \n' +
      '     <button type="button" onclick="VBO7toggle()">Reverse Midpoint Solver</button>\n' +
      '</p>\n' +
      '\t<p>\n' +
      '\t<button type="button" onclick="Part0toggle()">Bouncy Balls hide/show</button>\n' +
      '      <button type="button" onclick="Part1toggle()">Wind hide/show</button>\n' +
      '      <button type="button" onclick="Part2toggle()">Fire hide/show</button>\n' +
      '      <button type="button" onclick="Part3toggle()">Boid hide/show</button>\n' +
      '      <button type="button" onclick="Part4toggle()">Spring hide/show</button>\n' +
      '  </p>\n' +
      '  \n' +
      '\t<p>\n' +
      '\t      <button type="button" onclick="VBO0toggle()">World hide/show</button> <br>\n' +
      '\n' +
      '   <!--   <button type="button" onclick="onPlusButton()" >++Start</button>\n' +
      '      <button type="button" onclick="onMinusButton()">--Start</button> -->\n' +
      '\t\t<b>For Bouncy Balls</b>: Press \'r\' to launch <br> <br>\n' +
      '\t\t<b>For Wind</b>: Press \'z\' to throw all particles up <br> <br>\n' +
      '\t\t<b>For Spring</b>: Hold \'y\' to pull down <br> <br>\n' +
      '\t</p>\n' +
      '\t</div>\n' +
      '    <script src="lib/webgl-utils.js"></script>\n' +
      '    <script src="lib/webgl-debug.js"></script>\n' +
      '    <script src="lib/cuon-utils.js"></script>\n' +
      '    <script src="lib/cuon-matrix-quat03.js"></script>\n' +
      '<!-- YOU SHOULD UPGRADE to Brandon Jones\' far-faster, \n' +
      '      far more complete vector/matrix/quaternion library: (Google it!)\n' +
      '\t\t<script src="../lib/glmatrix.js"></script>\n' +
      '--> \n' +
      '\t<script src="ParticleSystems/AbstractParticleSystems.js"></script>\n' +
      '\t<script src="ParticleSystems/FireSystem.js"></script>\n' +
      '\t<script src="ParticleSystems/ForceField.js"></script>\n' +
      '\t<script src="ParticleSystems/BoidSystem.js"></script>\n' +
      '\t<script src="ParticleSystems/SpringSystem.js"></script>\n' +
      '\t<script src="ParticleSystems/WindySystem.js"></script>\n' +
      '\t<script src="Util/DensityCalculator.js"></script>\n' +
      '\t<script src="Util/PressureCalculator.js"></script>\n' +
      '\t<script src="Util/ViscosityCalculator.js"></script>\n' +
      '  <script src="CurrentSolvers.js"></script>\n' +
      '  <script src="OldSolvers.js"></script>\n' +
      '  <script src="sphSolver.js"></script>\n' +
      '  <script src="Main.js"></script>\n' +
      '  </body>';

return (
    <div className="content" dangerouslySetInnerHTML={{__html: inner}}></div>
    )
    }