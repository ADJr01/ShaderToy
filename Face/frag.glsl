
float negateCoord(float coord){return (1.0 - coord);}

vec3 createCircle(vec2 area,float radius,vec3 color){
    float d = length(area);
    float circle = smoothstep(radius+0.02,radius,d);
    return circle*color;

}



void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (fragCoord/iResolution.xy) * 2.0 - 1.0;//center to 0.5 and all corners to 0.1;
    uv.x*=iResolution.x /iResolution.y; // To maintain aspect ratio
    vec3 color = createCircle(uv,0.5,vec3(1., 1., 1.));
    color-= createCircle(uv-vec2(-0.2,0.13),0.08,vec3(0.32, 0.32, 0.91));
    color-= createCircle(uv-vec2(0.2,0.13),0.08,vec3(0.32, 0.32, 0.91));
    // Output to screen
    fragColor = vec4(color,1.0);
}