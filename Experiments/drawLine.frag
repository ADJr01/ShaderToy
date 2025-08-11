#define PI 3.1415926535
float euclideanDist(vec2 coord){
    float dist;
    dist+=pow(coord.x,2.)+pow(coord.y,2.);
    return sqrt(dist);

}
float euclideanDist(float coord){
    float dist;
    dist+=pow(coord,2.)+pow(coord,2.);
    return sqrt(dist);

}


vec2 normalizeXY(vec2 uv){

    return vec2(
        clamp(uv.x,-1.,1.),
         clamp(uv.y,-1.,1.)
    );
}

float lineTowards(vec2 uv){
    float from = uv.x;
    float to = uv.y;
    float additional_fract = 0.02;
    float a  = smoothstep(from+additional_fract,from,(to));
    float b  = smoothstep(to,to-additional_fract,(from));
    return a-b;
}


void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (2.*fragCoord - iResolution.xy) / iResolution.y;  // normalizing uv coordinates
    uv.x = pow(uv.x,5.);
    uv.y = pow(uv.y,1.0);
    float smoothMask = 1.0 - pow(abs(uv.y),0.5);//lineTowards(uv);

    // Output to screen
    fragColor = smoothMask*vec4(vec3(1.),1.0);
}