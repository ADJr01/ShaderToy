#define PI 3.1415926535




void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (fragCoord/iResolution.xy) * 2.0 - 1.0; // normalizing uv coordinates
    uv.x*=iResolution.x/iResolution.y;
    float dense = 5.0; // intensity of wave 
    float  y= abs((length(uv)+iTime)*PI)*dense;
    y = sin(y)*0.02;
    y+=max(floor(y)+1.0,0.35);
    
    vec3 color = vec3(y);

    // Output to screen
    fragColor = vec4(color,1.0);
}
