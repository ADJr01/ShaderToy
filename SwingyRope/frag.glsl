float plot(vec2 uv,float pct){
    float a = smoothstep(pct+0.02,pct,uv.x);
    float b = smoothstep(pct,pct-0.02,uv.x);
    return a-b;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy; // normalizing uv coordinates
    float y = pow(uv.y,sin(iTime));
    float x = uv.x;
    vec3 color = vec3(uv.y);
    float pct = plot(uv,y-x);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    // Output to screen
    fragColor = vec4(color,1.0);
}