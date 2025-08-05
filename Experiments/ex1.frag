
#define PI 3.1415926535
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (2.*fragCoord - iResolution.xy) / iResolution.y;  // normalizing uv coordinates
    float dense = 8.0; // intensity of wave 
    float  y= ((length(uv)+iTime)*PI)*dense;
    y = sin(y)*0.02;
    y+=ceil(y);
    
    vec3 color = vec3(y);

    // Output to screen
    fragColor = vec4(color,1.0);
}