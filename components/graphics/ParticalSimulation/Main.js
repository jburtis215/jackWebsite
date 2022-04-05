
// ORIGINAL SOURCE:
// RotatingTranslatedTriangle.js (c) 2012 matsuda
const PART_XPOS = 0;  //  position
const PART_YPOS = 1;
const PART_ZPOS = 2;
const PART_XVEL = 3; //  velocity
const PART_YVEL = 4;
const PART_ZVEL = 5;
const PART_X_FTOT = 6;  // force accumulator:'ApplyForces()' fcn clears
const PART_Y_FTOT = 7;  // to zero, then adds each force to each particle.
const PART_Z_FTOT = 8;
const PART_R = 9;  // color : red,green,blue
const PART_G = 10;
const PART_B = 11;
const PART_MASS = 12;  // mass
const PART_DIAM = 13;	// on-screen diameter (in pixels)
const PART_RENDMODE = 14;	// on-screen appearance (square, round, or soft-round)
// Other useful particle values, currently unused
const PART_AGE = 15;  // # of frame-times since creation/initialization
const PART_CHARGE = 16;  // for electrostatic repulsion/attraction
const PART_MASS_VEL = 17;  // time-rate-of-change of mass.
const PART_MASS_FTOT = 18;  // force-accumulator for mass-change
const PART_R_VEL = 19;  // time-rate-of-change of color:red
const PART_G_VEL = 20;  // time-rate-of-change of color:grn
const PART_B_VEL = 21;  // time-rate-of-change of color:blu
const PART_R_FTOT = 22;  // force-accumulator for color-change: red
const PART_G_FTOT = 23;  // force-accumulator for color-change: grn
const PART_B_FTOT = 24;  // force-accumulator for color-change: blu
const PART_EXP = 25;
const PART_DENSITY = 26;
const PART_PRESSURE = 27;
const PART_VOX_X = 28;
const PART_VOX_Y = 29;
const PART_VOX_Z = 30;


const PART_MAXVAR = 31;  // Size of array in CPart uses to store its values.

const F_NONE = 0;       // Non-existent force: ignore this CForcer object
const F_MOUSE = 1;       // Spring-like connection to the mouse cursor; lets
// you 'grab' and 'wiggle' one particle(or several).
const F_GRAV_E = 2;       // Earth-gravity: pulls all particles 'downward'.
const F_GRAV_P = 3;       // Planetary-gravity; particle-pair (e0,e1) attract
                          // each other with force== grav* mass0*mass1/ dist^2
const F_WIND = 4;       // Blowing-wind-like force-field;fcn of 3D position
const F_BUBBLE = 5;       // Constant inward force towards centerpoint if
                          // particle is > max_radius away from centerpoint.
const F_DRAG = 6;       // Viscous drag -- proportional to neg. velocity.
const F_SPRING = 7;       // ties together 2 particles; distance sets force
const F_SPH = 8;       // a big collection of identical springs; lets you
                             // make cloth & rubbery shapes as one force-making
                             // object, instead of many many F_SPRING objects.
const F_CHARGE = 9;       // attract/repel by charge and inverse distance;
                          // applies to all charged particles.
const F_FIRE = 10;
const F_MAXKINDS = 11;      // 'max' is always the LAST name in our list;
                            // gives the total number of choices for forces.
var partsPerAxis = Math.ceil(1/0.0899671);

const interval = 0.0890671;
const half_interval = 0.0890671 / 2;
const axisSize = 1.0;
const h = .05;// * axisSize / (partsPerAxis-1);//(1 + ((Math.sqrt(2)-1)/2)) * (2/(2*partsPerAxis));

const kernelCoefficient = 15/(Math.PI * 4*h*4*h*4*h);
const kernelNormalizer = kernelCoefficient * 8;
var gl;													// WebGL rendering context -- the 'webGL' object
// in JavaScript with all its member fcns & data
var g_canvasID;									// HTML-5 'canvas' element ID#

const epsilon = Math.pow(10, -2.5);
var oneTime = 0;
// by falling below the floor.
var g_angleStep = 45.0;					// Rotation angle rate, in degrees/second.

var g_currentAngle = 0;

var k = 100;

var speedOfSound = 1000;

var floatsPerVertex = 7;
var xcount = 1000;			// # of lines to draw in x,y to make the grid.
var ycount = 1000;

var DENSITY_CONST = 997;//9*((4/3)*Math.PI*(Math.pow(h, 3)))
gndVerts = new Float32Array(floatsPerVertex * (2 * (xcount + ycount) + 24));

makeGroundGrid();
// For multiple VBOs & Shaders:-----------------
worldBox = new VBObox0();		  // Holds VBO & shaders for drawing world surfaces;
part1Box = new VBObox1();		  // "  "  for drawing 1st particle system
part2Box = new VBObox2();     // "  "  for drawing 2nd particle system
part3Box = new VBObox10();
part4Box = new VBObox9();
part5Box = new VBObox5();
part6Box = new VBObox6();
part7Box = new VBObox7();

partSys1 = new PartSys();
partSys2 = new PartSys();
partSys3 = new PartSys();
partSys4 = new PartSys();
partSys5 = new PartSys();

var g_last = Date.now();				//  Timestamp: set after each frame of animation,
// used by 'animate()' function to find how much
// time passed since we last updated our canvas.
var g_stepCount = 0;						// Advances by 1 for each timestep, modulo 1000, 
// (0,1,2,3,...997,998,999,0,1,2,..) to identify
// WHEN othe ball bounces.  RESET by 'r' or 'R'.


// Define all the adjustable ball-movement parameters, and
var INIT_VEL = 0.15 * 60.0;		// initial velocity in meters/sec.
// adjust by ++Start, --Start buttons. Original value
// was 0.15 meters per timestep; multiply by 60 to get
// meters per second.
// timesteps per second.
var g_drag = 0.985;			// units-free air-drag (scales velocity); adjust by d/D keys
var g_grav = 9.832;			// gravity's acceleration; adjust by g/G keys
// on Earth surface: 9.832 meters/sec^2.
var g_resti = 1.0;			// units-free 'Coefficient of restitution' for 
// inelastic collisions.  Sets the fraction of momentum
// (0.0 <= g_resti < 1.0) that remains after a ball
// 'bounces' on a wall or floor, as computed using
// velocity perpendicular to the surface.
// (Recall: momentum==mass*velocity.  If ball mass does
// not change, and the ball bounces off the x==0 wall,
// its x velocity xvel will change to -xvel*g_resti ).
var g_solver = 1;				// adjust by s/S keys.
// ==0 for Euler solver (explicit, forward-time, as
// found in BouncyBall03 and BouncyBall04.goodMKS)
// ==1 for special-case implicit solver, reverse-time,
// as found in BouncyBall03.01BAD, BouncyBall04.01badMKS)
var g_bounce = 1;				// floor-bounce constraint type:
// ==0 for velocity-reversal, as in all previous versions
// ==1 for Chapter 7's collision resolution method, which
// uses an 'impulse' to cancel any velocity boost caused
// used by 'animate()' function to find how much
// time passed since we last updated our canvas.

var yvelNow = 0.0;
var zvelNow = 0.0;
var partCount = 100;
//var s0 = new Float32Array(partCount*PART_MAXVAR);

//PartSys_init();
//var FSIZE = VBObox1.s0.BYTES_PER_ELEMENT;	// memory needed to store an s0 array element.
// Tricky extra variables we need for our new way of resolving collisions.
// When we're executing our 'constraint' code, these new vars hold 's0' state 
// values, and the 'Now' vars above hold the 's1' state values. CONFUSING!!
// Thus we found another good reason to convert to 'state-variable' form...
var xposPrev = 0.0;
var yposPrev = 0.0;
var zposPrev = 0.0;
var xvelPrev = 0.0;
var yvelPrev = 0.0;
var zvelPrev = 0.0;

//  For 3D camera
var timeStep = 1.7/1000;			// current timestep (1/60th sec) in milliseconds


MvpMat = new Matrix4();		// Transforms CVV axes to model axes.

var xCamPos = .5;
var yCamPos = .5;
var zCamPos = 1.9;
var currentAngle = 90;
var zlook = -10;
var moveSpeed = 0;
var moveSpeed2 = 0;
var zMoveStep = 0;
var ANGLE3_STEP = 0;
var zStep = 0;
var springRun = 0;
// For keyboard, mouse-click-and-drag:		
var myRunMode = 3;	// particle system state: 0=reset; 1= pause; 2=step; 3=run

var isDrag = false;		// mouse-drag: true when user holds down mouse button
var xMclik = 0.0;			// last mouse button-down position (in CVV coords)
var yMclik = 0.0;
var xMdragTot = 0.0;	// total (accumulated) mouse-drag amounts (in CVV coords).
var yMdragTot = 0.0;
var isClear = 1;


// For mouse/keyboard:------------------------
var g_show0 = 1;								// 0==Show, 1==Hide VBO0 contents on-screen.
var g_show1 = 0;								// 	"					"			VBO1		"				"				" 
var g_show2 = 0;                //  "         "     VBO2    "       "       "
var g_show3 = 1;
var g_show4 = 0;
var g_show5 = 0;
var g_show6 = 0;
var g_show7 = 0;

var part1 = 1;
var part2 = 0;
var part3 = 0;
var part4 = 0;
var part5 = 0;

function main() {
//=============================================================================
    // Retrieve <canvas> element
    g_canvasID = document.getElementById('webgl');

    // Create the the WebGL rendering context: one giant JavaScript object that
    // contains the WebGL state machine adjusted by large sets of WebGL functions,
    // built-in variables & parameters, and member data. Every WebGL function call
    // will follow this format:  gl.WebGLfunctionName(args);
    gl = getWebGLContext(g_canvasID);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }
    //partSys1.BouncyS0();
    partSys1.ForceField();
    partSys2.WindyS0();
    partSys3.FireS0();
    partSys4.BoidS0();
    partSys5.SpringS0();
    // Register the Mouse & Keyboard Event-handlers-------------------------------
    // If users move, click or drag the mouse, or they press any keys on the
    // the operating system will sense them immediately as 'events'.
    // If you would like your program to respond to any of these events, you must
    // tell JavaScript exactly how to do it: you must write your own 'event
    // handler' functions, and then 'register' them; tell JavaScript WHICH
    // events should cause it to call WHICH of your event-handler functions.
    //
    if (g_show0 == 1) {
        // First, register all mouse events found within our HTML-5 canvas:
        // when user's mouse button goes down call mouseDown() function,etc
        g_canvasID.onmousedown = function (ev) {
            worldBox.myMouseDown(ev, gl, g_canvasID)
        };
        g_canvasID.onmousemove = function (ev) {
            worldBox.myMouseMove(ev, gl, g_canvasID)
        };
        g_canvasID.onmouseup = function (ev) {
            worldBox.myMouseUp(ev, gl, g_canvasID)
        };
        // NOTE! 'onclick' event is SAME as on 'mouseup' event
        // in Chrome Brower on MS Windows 7, and possibly other
        // operating systems; use 'mouseup' instead.

        // Next, register all keyboard events found within our HTML webpage window:
        window.addEventListener("keydown", worldBox.myKeyDown, false);
        window.addEventListener("keyup", worldBox.myKeyUp, false);
        window.addEventListener("keypress", worldBox.myKeyPress, false);
    }


    // Initialize each of our 'vboBox' objects:
    worldBox.init(gl);		// VBO + shaders + uniforms + attribs for our 3D world,
                              // including ground-plane,
    part1Box.init(gl);		//  "		"		"  for 1st particle system in the 3D world
    part2Box.init(gl);    //  "   "   "  for 2nd particle system in the 3D world
    part3Box.init(gl);
    part4Box.init(gl);
    part5Box.init(gl);
    part6Box.init(gl);
    part7Box.init(gl);
    gl.clearColor(0, 0, 0, 1);	  // RGBA color for clearing <canvas>

    // ==============ANIMATION=============
    // Quick tutorials on synchronous, real-time animation in JavaScript/HTML-5:
    //    https://webglfundamentals.org/webgl/lessons/webgl-animation.html
    //  or
    //  	http://creativejs.com/resources/requestanimationframe/
    //		--------------------------------------------------------
    // Why use 'requestAnimationFrame()' instead of the simpler-to-use
    //	fixed-time setInterval() or setTimeout() functions?  Because:
    //		1) it draws the next animation frame 'at the next opportunity' instead
    //			of a fixed time interval. It allows your browser and operating system
    //			to manage its own processes, power, & computing loads, and to respond
    //			to on-screen window placement (to skip battery-draining animation in
    //			any window that was hidden behind others, or was scrolled off-screen)
    //		2) it helps your program avoid 'stuttering' or 'jittery' animation
    //			due to delayed or 'missed' frames.  Your program can read and respond
    //			to the ACTUAL time interval between displayed frames instead of fixed
    //		 	fixed-time 'setInterval()' calls that may take longer than expected.
    var tick = function () {
  //      timeStep = animate();  // get time passed since last screen redraw.
        timeStep = 16/1000;  // in seconds - JACK! CHANGE LATER
        currentAngle = animateA(currentAngle);
        xCamPos = animate2(xCamPos);
        yCamPos = animate3(yCamPos);
        zCamPos = animateZPos(zCamPos);
        g_currentAngle = makeSpin(g_currentAngle);  // Update the rotation angle
        zlook = animatez(zlook);
        if (g_show3 == 1) part3Box.resetSpring(partSys5);
        if (g_show4 == 1) part4Box.resetSpring(partSys5);
        if (g_show5 == 1) part5Box.resetSpring(partSys5);
        if (g_show6 == 1) part6Box.resetSpring(partSys5);
        if (g_show7 == 1) part7Box.resetSpring(partSys5);

        //    draw(gl, myVerts, currentAngle, modelMatrix, u_ModelMatrix);
        draw();	// compute new particle state at current time
        requestAnimationFrame(tick, g_canvasID);  // Call us again 'at next opportunity',
        // within the 'canvas' HTML-5 element.
    };
    tick();
}

function makeSpin(angle) {
//=============================================================================
// Find the next rotation angle to use for on-screen drawing:
    // Calculate the elapsed time.
    var now = Date.now();
    var elapsed = now - g_last;
    g_last = now;
    // Return the next rotation angle by adjusting it for the elapsed time.
    var newAngle = angle + (g_angleStep * elapsed) / 1000.0;
    return newAngle %= 360.0;					// keep angle >=0.0 and <360.0 degrees
}


function draw() {
//=============================================================================

    // Clear on-screen HTML-5 <canvas> object:
    if (g_show0 == 1) {	// IF user didn't press HTML button to 'hide' VBO0:
        worldBox.adjust(gl);		// Send new values for uniforms to the GPU, and
        worldBox.draw(gl);			// draw our VBO's contents using our shaders.
    }

    if (g_show1 == 1) { // IF user didn't press HTML button to 'hide' VBO1:
        part1Box.adjust(gl);		// Send new values for uniforms to the GPU, and
        part1Box.PartSys_render(gl);			// draw our VBO's contents using our shaders.
    }

//PartSys_render


    if (g_show2 == 1) { // IF user didn't press HTML button to 'hide' VBO2:
        part2Box.adjust(gl);		// Send new values for uniforms to the GPU, and
        part2Box.draw(gl);			// draw our VBO's contents using our shaders.
    }

    if (g_show3 == 1) {

        //	part3Box.adjust(gl);
        //part3Box.PartSys_render(gl);
        //}
        /*
        part3Box.applyForces(gl);
      part3Box.dotFinder(gl);
      part3Box.render(gl);
      part3Box.PartSys_constrain();
      part3Box.PartSys_render(gl);
      */
        if (part1 == 1) {
            part3Box.adjust1(gl, partSys1);
        }
        if (part2 == 1) {
            part3Box.adjust1(gl, partSys2);
        }
        if (part3 == 1) {
            part3Box.adjust1(gl, partSys3);
        }
        if (part4 == 1) {
            part3Box.adjust1(gl, partSys4);
        }
        if (part5 == 1) {
            part3Box.adjust1(gl, partSys5);
        }

    }

    if (g_show4 == 1) {

        //	part3Box.adjust(gl);
        //part3Box.PartSys_render(gl);
        //}
        /*
        part3Box.applyForces(gl);
      part3Box.dotFinder(gl);
      part3Box.render(gl);
      part3Box.PartSys_constrain();
      part3Box.PartSys_render(gl);
      */
        if (part1 == 1) {
            part4Box.adjust1(gl, partSys1);
        }
        if (part2 == 1) {
            part4Box.adjust1(gl, partSys2);
        }
        if (part3 == 1) {
            part4Box.adjust1(gl, partSys3);
        }
        if (part4 == 1) {
            part4Box.adjust1(gl, partSys4);
        }
        if (part5 == 1) {
            part4Box.adjust1(gl, partSys5);
        }

    }

    if (g_show5 == 1) {

        //	part3Box.adjust(gl);
        //part3Box.PartSys_render(gl);
        //}
        /*
        part3Box.applyForces(gl);
      part3Box.dotFinder(gl);
      part3Box.render(gl);
      part3Box.PartSys_constrain();
      part3Box.PartSys_render(gl);
      */
        if (part1 == 1) {
            part5Box.adjust1(gl, partSys1);
        }
        if (part2 == 1) {
            part5Box.adjust1(gl, partSys2);
        }
        if (part3 == 1) {
            part5Box.adjust1(gl, partSys3);
        }
        if (part4 == 1) {
            part5Box.adjust1(gl, partSys4);
        }
        if (part5 == 1) {
            part5Box.adjust1(gl, partSys5);
        }

    }
    if (g_show6 == 1) {

        //	part3Box.adjust(gl);
        //part3Box.PartSys_render(gl);
        //}
        /*
        part3Box.applyForces(gl);
      part3Box.dotFinder(gl);
      part3Box.render(gl);
      part3Box.PartSys_constrain();
      part3Box.PartSys_render(gl);
      */
        if (part1 == 1) {
            part6Box.adjust1(gl, partSys1);
        }
        if (part2 == 1) {
            part6Box.adjust1(gl, partSys2);
        }
        if (part3 == 1) {
            part6Box.adjust1(gl, partSys3);
        }
        if (part4 == 1) {
            part6Box.adjust1(gl, partSys4);
        }
        if (part5 == 1) {
            part6Box.adjust1(gl, partSys5);
        }

    }
    if (g_show7 == 1) {

        //	part3Box.adjust(gl);
        //part3Box.PartSys_render(gl);
        //}
        /*
        part3Box.applyForces(gl);
      part3Box.dotFinder(gl);
      part3Box.render(gl);
      part3Box.PartSys_constrain();
      part3Box.PartSys_render(gl);
      */
        if (part1 == 1) {
            part7Box.adjust1(gl, partSys1);
        }
        if (part2 == 1) {
            part7Box.adjust1(gl, partSys2);
        }
        if (part3 == 1) {
            part7Box.adjust1(gl, partSys3);
        }
        if (part4 == 1) {
            part7Box.adjust1(gl, partSys4);
        }
        if (part5 == 1) {
            part7Box.adjust1(gl, partSys5);
        }

    }
}

function VBO0toggle() {
//=============================================================================
// Called when user presses HTML-5 button 'Show/Hide VBO0'.
    if (g_show0 != 1) g_show0 = 1;				// show,
    else g_show0 = 0;										// hide.
    console.log('g_show0: ' + g_show0);
}

function VBO1toggle() {
//=============================================================================
// Called when user presses HTML-5 button 'Show/Hide VBO1'.
    if (g_show1 != 1) g_show1 = 1;			// show,
    else g_show1 = 0;									// hide.
    console.log('g_show1: ' + g_show1);
}

function VBO2toggle() {
//=============================================================================
// Called when user presses HTML-5 button 'Show/Hide VBO2'.
    if (g_show2 != 1) g_show2 = 1;			// show,
    else g_show2 = 0;									// hide.
    console.log('g_show2: ' + g_show2);
}

function VBO3toggle() {
//=============================================================================
// Called when user presses HTML-5 button 'Show/Hide VBO2'.
    //if(g_show3 != 1) g_show3 = 1;			// show,
    //else g_show3 = 0;									// hide.
    g_show1 = 0;
    g_show2 = 0;
    g_show3 = 1;
    g_show4 = 0;
    g_show5 = 0;
    g_show6 = 0;
    g_show7 = 0;
    console.log('g_show3: ' + g_show3);
}

function VBO4toggle() {
//=============================================================================
// Called when user presses HTML-5 button 'Show/Hide VBO2'.
    /*if(g_show4 != 1) g_show4 = 1;			// show,
    else g_show4 = 0;
                    */
    g_show1 = 0;
    g_show2 = 0;
    g_show3 = 0;
    g_show4 = 1;
    g_show5 = 0;
    g_show6 = 0;
    g_show7 = 0;			// hide.
    console.log('g_show4: ' + g_show4);
}

function VBO5toggle() {
//=============================================================================
// Called when user presses HTML-5 button 'Show/Hide VBO2'.
    /*if(g_show4 != 1) g_show4 = 1;			// show,
    else g_show4 = 0;
                    */
    g_show1 = 0;
    g_show2 = 0;
    g_show3 = 0;
    g_show4 = 0;
    g_show5 = 1;
    g_show6 = 0;
    g_show7 = 0;		// hide.
    console.log('g_show4: ' + g_show4);
}

function VBO6toggle() {
//=============================================================================
// Called when user presses HTML-5 button 'Show/Hide VBO2'.
    /*if(g_show4 != 1) g_show4 = 1;			// show,
    else g_show4 = 0;
                    */
    g_show1 = 0;
    g_show2 = 0;
    g_show3 = 0;
    g_show4 = 0;
    g_show5 = 0;
    g_show6 = 1;
    g_show7 = 0;		// hide.
    console.log('g_show4: ' + g_show4);
}

function VBO7toggle() {
//=============================================================================
// Called when user presses HTML-5 button 'Show/Hide VBO2'.
    /*if(g_show4 != 1) g_show4 = 1;			// show,
    else g_show4 = 0;
                    */
    g_show1 = 0;
    g_show2 = 0;
    g_show3 = 0;
    g_show4 = 0;
    g_show5 = 0;
    g_show6 = 0;
    g_show7 = 1;		// hide.
    console.log('g_show4: ' + g_show4);
}

function Part0toggle() {
    part1 = 1 - part1;
}

function Part1toggle() {
    part2 = 1 - part2;
}

function Part2toggle() {
    part3 = 1 - part3;
}

function Part3toggle() {
    part4 = 1 - part4;
}

function Part4toggle() {
    part5 = 1 - part5;
}

function animate() {
//==============================================================================  
// How much time passed since we last updated the 'canvas' screen elements?
    var now = Date.now();
    var elapsed = now - g_last;
    g_last = now;
 //   g_stepCount = (g_stepCount + 1) % 1000;		// count 0,1,2,...999,0,1,2,...

    // Return the amount of time passed, in integer milliseconds
  //  console.log(elapsed);
    return elapsed/2000;
}

//Change Camera X Position 
var g_last2 = Date.now();
animate2 = function () {
//==============================================================================
    // Calculate the elapsed time
    var now = Date.now();
    var elapsed = now - g_last2;
    g_last2 = now;

    var newx = xCamPos + (moveSpeed * (Math.cos(Math.PI * (currentAngle / 180)))) +
        (moveSpeed2 * (Math.cos(Math.PI * ((currentAngle - 90) / 180))));
    xCamPos = newx;
    return newx;
}
//Change Camera Y Position
var g_last3 = Date.now();
animate3 = function () {
//==============================================================================
    // Calculate the elapsed time
    var now = Date.now();
    var elapsed = now - g_last3;
    g_last3 = now;
    var newy = yCamPos + (moveSpeed * (Math.sin(Math.PI * (currentAngle / 180)))) +
        (moveSpeed2 * (Math.sin(Math.PI * ((currentAngle - 90) / 180))));

    return newy;
}
/*
var g_last4 = Date.now();
animate4 = function () {
//==============================================================================
    // Calculate the elapsed time
    var now = Date.now();
    var elapsed = now - g_last4;
    g_last4 = now;
    var newz = zCamPos + (moveSpeed * (Math.sin(Math.PI * (currentAngle / 180)))) +
        (moveSpeed2 * (Math.sin(Math.PI * ((currentAngle - 90) / 180))));

    return newy;
}*/


//Animate Angle of Camera
var g_lastA = Date.now();
animateA = function () {
//==============================================================================
    // Calculate the elapsed time
    var now = Date.now();
    var elapsed = now - g_lastA;
    g_lastA = now;


    var newAngle = currentAngle + ((ANGLE3_STEP * elapsed) / 1000.0);
    currentAngle = newAngle;
    return currentAngle %= 360;

}

var g_last4 = Date.now();

function animatez(z) {
//==============================================================================
    // Calculate the elapsed time
    var now = Date.now();
  //  var elapsed = now - g_last4;
    g_last4 = now;

    // Update the current rotation angle (adjusted by the elapsed time)
    //  limit the angle to move smoothly between +20 and -85 degrees:
    if (z > 10.0 && zStep > 0) zStep = -zStep;
    if (z < -10.0 && zStep < 0) zStep = -zStep;

    var newz = z + ((zStep)/ 100.0);

 //   console.log(elapsed);
    return newz;

}

var g_lastz = Date.now();
function animateZPos(z){
    var now = Date.now();
    var elapsed = now - g_last4;
    g_last4 = now;


    var newPos = z + zMoveStep/50;
    return newPos;
}

function PartSys_init() {
//==============================================================================
// set initial values of all particle-system state.
// sel==0 for 'hard' reset (user pressed 'R') that inits entire state-vector
// sel==1 to 'soft' reset (user pressed 'r') that only adds velocity to all 
//						particles

    var doit = 1;
    for (var i = 0; i < partCount; i++) {
        var pOff = i * PART_MAXVAR;			// starting index of each particle
        var xcyc = roundRand3D();
        if (doit == 1) {
            console.log('xc,yc= ' + xcyc[0] + ', ' + xcyc[1]);
            doit = 0;
        }
        s0[pOff + PART_XPOS] = 0.2 + 0.2 * xcyc[0];		// 0.0 <= randomRound() < 1.0
        s0[pOff + PART_YPOS] = 0.2 + 0.2 * xcyc[1];
        s0[pOff + PART_ZPOS] = 0.2 + 0.2 * xcyc[2];
        xcyc = roundRand3D();
        s0[pOff + PART_XVEL] = INIT_VEL * (0.4 + 0.2 * xcyc[0]);
        s0[pOff + PART_YVEL] = INIT_VEL * (0.4 + 0.2 * xcyc[1]);
        s0[pOff + PART_ZVEL] = INIT_VEL * (0.4 + 0.2 * xcyc[2]);
        s0[pOff + PART_X_FTOT] = 0.0;
        s0[pOff + PART_Y_FTOT] = 0.0;
        s0[pOff + PART_Z_FTOT] = 0.0;
        s0[pOff + PART_R] = 0.2 + 0.8 * Math.random();
        s0[pOff + PART_G] = 0.2 + 0.8 * Math.random();
        s0[pOff + PART_B] = 0.2 + 0.8 * Math.random();
        s0[pOff + PART_MASS] = 1 / (0.9 + 0.2 * Math.random());
        s0[pOff + PART_DIAM] = 1.0 + 10.0 * Math.random();
        s0[pOff + PART_RENDMODE] = Math.floor(4.0 * Math.random()); // 0,1,2 or 3.
    }
}

function roundRand3D() {
//==============================================================================
// On each call, find a different 3D point (xball, yball, zball) chosen 
// 'randomly' and 'uniformly' inside a sphere of radius 1.0 centered at origin.  
// More formally: 
//  	--xball*xball + yball*yball + zball*zball < 1.0, and 
//		--uniform probability density function inside this radius=1 circle.
//		(within this sphere, all regions of equal volume are equally likely to
//		contain the the point (xball,yball,zball)).
    do {			// 0.0 <= Math.random() < 1.0 with uniform PDF.
        xball = Math.random();			// choose an equally-likely 2D point
        yball = Math.random();			// within the +/-1, +/-1 square.
        zball = Math.random();
    }
    while (xball * xball + yball * yball + zball * zball >= 1.0);	// keep 1st point inside sphere.
    ret = new Array(xball, yball, zball);
    return ret;
}