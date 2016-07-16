// https://www.shadertoy.com/view/Xdy3Rd

AFRAME.registerShader("running-figure-shader", {

	schema: [],

	vertexShader: [
		"float TIME = iGlobalTime * 6.2;",
		"float TORSO_LEAN = -0.1;",
		"float TORSO_TWIST = 0.15 * sin(0.5 + TIME);",
		"float TORSO_BOUNCE = 0.9 * abs(sin(TIME + 0.4));",
		"float HEAD_BOB = -0.05 * (1.0 - (sin(2.0 * (TIME - 1.0))));",
		"float L_LEG_SWING = .6 * sin(TIME);",
		"float R_LEG_SWING = -.6 * sin(TIME);",
		"float L_KNEE_BEND = -0.8 * (1.0 + sin(TIME + 1.7));",
		"float R_KNEE_BEND = -0.8 * (1.0 - sin(TIME + 1.7));",
		"float L_ANKLE_BEND = 0.3 * (1.0 + sin(TIME + 1.));",
		"float R_ANKLE_BEND = 0.3 * (1.0 - sin(TIME + 1.));",
		"vec3 L_ARM_SWING = vec3(-0.6 * sin(TIME), 0.1, -0.4);",
		"vec3 R_ARM_SWING = vec3(0.6 * sin(TIME), -0.1, 0.4);",
		"float L_ELBOW_BEND = mix(0.9, 1.5, 1.0 - (sin(TIME + 0.3) + 0.3 * sin(2.0 * (TIME + 0.3))));",
		"float R_ELBOW_BEND = mix(0.9, 1.5, 1.0 + (sin(TIME + 0.3) + 0.3 * sin(2.0 * (TIME + 0.3))));",
		
	].join("\n"),

});