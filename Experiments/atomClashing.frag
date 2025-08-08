
#define PI 3.1415926535

//my implementation of length function
float euclideanDist(vec2 coord){
    float dist;
    for(int i =-2;i < int(coord.x);i++){
        dist+=pow(coord.x,2.)+pow(coord.y,2.);
    }
    return sqrt(dist);

}

vec3 mixRGB(float blendAmount,vec2 uv){
        float d = euclideanDist(uv);
        float c = smoothstep(0.5,.085,d*PI);
        vec3 ColorR =  vec3(
        smoothstep(0.0,0.8,cos(d*c))/d,
        vec2(0.)
        );
    vec3 ColorG =  vec3(
        0.0,
        smoothstep(0.0,0.8,cos(d*c))/d,
        0.0
        );
    vec3 ColorB =  vec3(
        vec2(0.),
        smoothstep(0.0,0.8,cos(d*c))/d
        );
        return mix(ColorB-ColorG,ColorR+ColorG,blendAmount);
}

vec2 normalizeXY(vec2 uv){

    return vec2(
        clamp(uv.x,-1.,1.),
         clamp(uv.y,-1.,1.)
    );
}

vec3 createColorBall(float index,vec2 coord, vec3 color){
    float r = 0.09;
    coord = normalizeXY((coord*sqrt(index))+cos(iTime)-sin(iTime));
    float x_axis = tan(coord.x);
    float y_axis = atan(coord.y);
    vec2 randomPos = vec2(x_axis,y_axis);
    float mask  =  euclideanDist(randomPos);
    mask = smoothstep(r,r-0.01,mask);
    return mask * color;
}



void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    int n = 10;
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (2.*fragCoord - iResolution.xy) / iResolution.y;  // normalizing uv coordinates
    vec3 finalColor = vec3(0.);
    for(int i =1;i<n;i++){
        float f = float(i)/PI * 2.0;
        vec2 coord =  sin(sqrt(iTime*f)*uv);
        finalColor +=  createColorBall(f,coord,mixRGB(sin(iTime * 1.6180) * 0.2 + 0.8,uv));
        //sin(iTime * 1.5) * 0.2 + 0.8
    }

    // Output to screen
    fragColor = vec4(finalColor,1.0);


}
