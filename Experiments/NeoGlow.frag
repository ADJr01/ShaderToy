#define PI 3.1415926535


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    // Normalized pixel coordinates (from 0 to 1)
     vec2 R = iResolution.xy;
    vec2 uv = (2. * fragCoord - R) / R.y;  // normalizing uv coordinates
    uv*=(PI/sin(iTime))*cos(length(uv)*1.78);
    float d = length(uv);
    float c = smoothstep(0.5,.085,d);
    vec3 ColorR =  vec3(
        smoothstep(0.0,0.8,cos(d*c))/d,
        vec2(0.)
        );
    vec3 ColorG =  vec3(
        0.0,
        smoothstep(0.0,0.8,cos(d*c))/d,
        0.0
        );
    vec3 ColorB =  vec3(
        vec2(0.),
        smoothstep(0.0,0.8,cos(d*c))/d
        );
    vec3 finalColor = mix(ColorR-ColorG,ColorR*ColorB+ColorG,sin(iTime * 1.5) * 0.2 + 0.8);
    fragColor =   vec4(finalColor,1.);
}
