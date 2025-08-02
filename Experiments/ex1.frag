float plot(vec2 uv,float pct){
    float a = smoothstep(pct+0.01,pct,uv.x);
    float b = smoothstep(pct,pct-0.01,uv.x);
    return a-b;
}
#define PI 3.1415926535
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (fragCoord/iResolution.xy) * 2.0 - 1.0; // normalizing uv coordinates
    uv.x*=iResolution.x/iResolution.y;
    float dense = 5.0; // intensity of wave 
    float  y= abs((length(uv)+iTime)*PI)*dense;
    y = sin(y)*0.02;
    y+=floor(y)+1.0;
    
    vec3 color = vec3(y);

    // Output to screen
    fragColor = vec4(color,1.0);
}
