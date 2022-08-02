/**
 * ! CREATING A SPRING ANIMATION
 * TODO todo means thingsToKnow ( thing's to know)
 * * stiffness refers to the elasticity of the  spring
 * * equilibrium refers to the state of the  spring
 * * damping refers to the rate at which the spring looses motion
 * * mass refers to the weight of an object attached to the spring
 * * Velocity refers to of change of the spring from it's equilibrium.
 * * Acceleration is the rate of change of velocity.
 * * position refers to the position of the object attached to a string at a given time
 * * FPS == frames per seconds
 *  TODO f = force
 *  TODO d = damping
 *  TODO p = position
 *  TODO v = velocity
 *  TODO k = stiffness
 *  TODO x = equilibrium
 *  TODO a = acceleration
 *  TODO m = massOfAnObject
 * 
 * TO CALCULATE FORCE 
 *      * Force (f) = massOfAnObject (m) * itAcceleration (a)
 * TO CALCULATE SPRING FORCE Hooke's Law
 *      * (Force) = negative stiffness (-k) * equilibrium (x)
 * TO CALCULATE DAMPING FORCE OF A SPRING
 *      * (FORCE) = negative damping (-d) * velocity (v)
 * TO CALCULATE ACCELERATION 
 *      * acceleration (a) = springForce / massOfAnObject (m)
 * TO CALCULATE VELOCITY
 *      * currentVelocity = oldVelocity + acceleration * timeInterval or FPS
 * 
 * TO CALCULATE POSITION
 *      * position = oldPosition + currentVelocity * timeInterval or FPS
 * 
 * 
 * TODO a spring animation needs the following
 * *    FORCE or springFORCE + dampindFORCE = acceleration (a) * massOfAnObject (m)
 * ? That Also Means 
 * *    acceleration (a) = (springFORCE + dampindFORCE) / massOfAnObject (m)
 * *        OR
 * *    acceleration =  (-k * x + d * v)  / massOfAnObject (where k = stiffness, d = damping ratio)
 */


