#define PI 3.1415926535





void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    // Normalized pixel coordinates (from 0 to 1)
     vec2 R = iResolution.xy;
    vec2 uv = (2. * fragCoord - R) / R.y;  // normalizing uv coordinates
    uv*=PI/sin(iTime);
    float d = length(uv);
    float c = smoothstep(0.5,1.0,d);
    vec3 finalColor =  vec3(
        smoothstep(c-0.09,c+.8,sin(d/PI)),
        smoothstep(sin(c+0.02),sin(c+0.02),d*PI),
        smoothstep(cos(c),sin(c*2.),abs(d*iTime)));
    fragColor =   vec4(finalColor,1.);
}
