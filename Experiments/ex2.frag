#define PI 3.1415926535

float createLine(float axis,float start,float thickNess){ 
    float line =0.0;
    float n = start+thickNess;
    if(axis>start && axis<n){
        line=smoothstep(start,n,1.0);
    }
    return line;
}

bool getQ1(vec2 uv){
    return uv.x>0.0 && uv.y>0.0;
}

bool getQ2(vec2 uv){
    return uv.x<0.0 && uv.y>0.0;
}

bool getQ3(vec2 uv){
    return uv.x<0.0 && uv.y<0.0;
}

bool getQ4(vec2 uv){
    return uv.x>0.0 && uv.y<0.0;
}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (fragCoord/iResolution.xy) * 2.0 - 1.0; // normalizing uv coordinates
    uv.x*=iResolution.x/iResolution.y;
    uv.x = sin(uv.x);
    float line = createLine(uv.x,0.0,0.02);
    line += createLine(uv.y,0.0,0.02);

    vec3 color = vec3(0.0);
    if(getQ1(uv)){
        color=smoothstep(0.0,0.01,line)+vec3(1.0,0.0,0.0);
    }else if(getQ2(uv)){
        color=smoothstep(0.0,0.01,line)+vec3(0.0,1.0,0.0);
    }else if(getQ3(uv)){
        color=smoothstep(0.0,0.01,line)+vec3(0.0,0.0,1.0);
    }else if(getQ4(uv)){
        color=smoothstep(0.0,0.01,line)+vec3(1.0,1.0,0.0);
    }else{
        color=line*vec3(1.0,1.0,1.0);
    }

    // Output to screen
    fragColor = vec4(color,1.0);
}
