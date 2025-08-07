
#define PI 3.1415926535
float euclideanDist(vec2 coord){
    float dist;
    for(int i =-1;i < int(coord.x);i++){
        dist+=(pow(coord.x,2.)+pow(coord.y,2.));
    }
    return sqrt(dist);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (2.*fragCoord - iResolution.xy) / iResolution.y;  // normalizing uv coordinates

    float f = euclideanDist(uv);

    f=smoothstep(0.08,0.1,f);

    vec3 color = f*vec3(1.);

    // Output to screen
    fragColor = vec4(color,1.0);
}
