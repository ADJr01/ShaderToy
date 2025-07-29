void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (fragCoord/iResolution.xy);
    uv-=0.5; // normalizing pixel to -0.5 to 0.5
    uv.x*=iResolution.x/iResolution.y;
    
    float d = length(uv);
    float r = 0.3;

    vec3 red = smoothstep(r,r-0.001,d)*vec3(1.0,0.0,0.0);
    vec3 color = red+smoothstep(r,r+0.001,d)*vec3(0.0,1.0,0.2);
    //if (d<0.314) color=0.0; else color=1.0;
    // Output to screen
    fragColor = vec4(color,1.0);
}