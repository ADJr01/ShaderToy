#define PI 3.1415926535



float plot(vec2 uv){
    return smoothstep(0.02,0.0,abs(uv.x-uv.y));
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 R = iResolution.xy;
    vec2 uv = (2. * fragCoord - R) / R.y;  // normalizing uv coordinates
    float y = uv.x;
    float line = plot(uv);
    vec3  color = vec3(y);
    color = (1.0 - line)*color+line*vec3(0.,0.,1.);
    fragColor =   vec4(color,1.);
}
