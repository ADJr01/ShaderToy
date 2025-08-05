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
    float c1 = createCircle(uv,0.0325,0.2);
    vec3 color = vec3(0.0);
    color+=smoothstep(c1+0.2,c1,1.0)*vec3(1.0);
    fragColor = vec4(color,1.0);
}