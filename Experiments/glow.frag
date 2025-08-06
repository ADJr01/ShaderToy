#define PI 3.1415926535

float createCircle(vec2 area,float radius,float glow){
    float d = length(area);
    float circle = smoothstep(radius+glow,radius,d);
    return circle;

}



void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 R = iResolution.xy;
    vec2 uv = (2. * fragCoord - R) / R.y;  // normalizing uv coordinates
    float blend = smoothstep(-0.35,0.75,uv.x);
    vec4 redToGreenColor = mix(
        vec4(1.0,0.0,0.0,1.0),
        vec4(0.0,1.0,0.0,1.0),
        blend);
    fragColor =   vec4(redToGreenColor);
}
