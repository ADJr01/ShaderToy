#define PI 3.1415926535
float euclideanDist(vec2 coord){
    float dist;
    dist+=pow(coord.x,2.)+pow(coord.y,2.);
    return sqrt(dist);

}

vec3 mixRGB(float blendAmount, vec2 uv) {
    float d = euclideanDist(uv);
    float t = sqrt(iTime*d) ; 
    float wave = sin(d * PI * 2.0 - t) * 0.5 + 0.5;
    float fade = smoothstep(0.1, 0.9, wave);
    float detail = smoothstep(0.0, 1.0, cos(d * PI * 3.0 + t));
    vec3 ColorR = vec3(smoothstep(0.0, 1.0, cos(d * 2.0 + t)) * fade, vec2(0));
    vec3 ColorG = vec3(0.0, smoothstep(0.0, 1.0, cos(d * 2.0 + t + 2.094)) * detail, 0.0);
    vec3 ColorB = vec3(0.0, 0.0, smoothstep(0.0, 1.0, cos(d * 2.0 + t + PI)) * fade);
    vec3 coolMix = ColorB + ColorR * 0.5;
    vec3 warmMix = ColorG + ColorR * 0.7;

    return mix(warmMix,coolMix, blendAmount);
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
    for(int i =1;i<=n;i++){
        float f = float(i);
        vec2 coord =  cos(sqrt(iTime)*f*uv);
        finalColor +=  createColorBall(f,coord,mixRGB(sin(iTime * fract(f)) * 0.5 + 0.5,uv));
    }

    // Output to screen
    fragColor = vec4(finalColor,1.0);


}
