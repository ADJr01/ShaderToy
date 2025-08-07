
#define PI 3.1415926535

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (2.*fragCoord - iResolution.xy) / iResolution.y;  // normalizing uv coordinates

    float f = 0.0;

    float dist = 0.;
    for(float i =0.;i < uv.x;i++){
        dist+= pow( uv.x,2.)+pow( uv.y,2.);
    }
    f= sqrt(dst.);


    
    vec3 color = f*vec3(1.);

    // Output to screen
    fragColor = vec4(color,1.0);
}