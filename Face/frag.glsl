float createCircle(vec2 area,float radius){
    float d = length(area);
    float circle = smoothstep(radius+0.02,radius,d);
    return circle;

}



void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (fragCoord/iResolution.xy) * 2.0 - 1.0;//center to 0.5 and all corners to 0.1;
    uv.x*=iResolution.x /iResolution.y; // To maintain aspect ratio
    float mask = createCircle(uv,0.5);
    mask-= createCircle(uv-vec2(-0.2,0.13),0.08); //eye 1
    mask-= createCircle(uv-vec2(0.2,0.13),0.08); //eye 2

    //mouth
    float mouth = createCircle(uv-vec2(-0.001,-0.2),0.2);
    float mouthSub = createCircle(uv-vec2(-0.001,-0.15),0.2);
    mouth-=mouthSub;
    mask-=mouth;
    vec3 color = mask*vec3(1., 1., 0.0);

    // Output to screen
    fragColor = vec4(color,1.0);
}
