// GLSL copied verbatim from the approved reference.
export const VS = '#version 300 es\nin vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
export const FS = `#version 300 es
precision highp float;
out vec4 o;
uniform vec2 uRes; uniform float uT,uP,uIn,uSun,uN,uAsp,uNi;
uniform vec3 uRo,uF,uR,uU; uniform vec4 uTR; uniform sampler2D uTx; uniform vec2 uBay; uniform float uOpen,uLit,uSg,uScr;
float gTm=0.; vec3 gTc=vec3(.984,.973,.957);
const float W=42.,H=162.,D=30.,PW=1.5,FH=3.6,SP=.2;
float sst(float a,float b,float x){float t=clamp((x-a)/(b-a),0.,1.);return t*t*(3.-2.*t);}
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+1.),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*vn(p);p=mat2(1.6,1.2,-1.2,1.6)*p+11.;a*=.5;}return s;}
vec3 sky(vec3 rd){
  // clear early morning: pale blue overhead, cream and peach at the horizon, low sun, light haze
  float y=rd.y; vec2 hz=normalize(rd.xz+1e-5);
  float sd=max(dot(hz,vec2(sin(uSun),cos(uSun))),0.), glow=pow(sd,2.2);
  vec3 zen=vec3(.2,.4,.76);
  vec3 mid=vec3(.4,.62,.9);
  vec3 horC=vec3(.95,.8,.66);
  vec3 horW=vec3(1.7,1.1,.62);
  vec3 hor=mix(horC,horW,glow);
  float t=max(y,0.);
  vec3 c=mix(hor,mid,sst(0.,.3,t)); c=mix(c,zen,sst(.2,.85,t));
  c+=horW*glow*.22*exp(-t*7.);
  if(y>0.){
    vec2 q=rd.xz/(y+.16)*1.05+vec2(uT*.013,uT*.005);
    float w=fbm(q*.45+3.), d=fbm(q+w*1.3);
    float cl=sst(.4,.7,d)*sst(0.,.1,y);
    vec3 lit=mix(vec3(1.,.93,.88),vec3(1.7,1.2,.8),glow);
    vec3 shd=vec3(.62,.7,.84);
    vec3 cc=mix(lit,shd,clamp(sst(.5,.85,d)*.6+t*.25-glow*.3,0.,1.));
    c=mix(c,cc,cl*.6);
  } else c=mix(hor*.95,vec3(.62,.6,.56),sst(0.,-.32,y));
  return c;
}
float pint(float x,float w){return floor(x)*w+min(fract(x),w);}
float pulse(float x,float w,float fw){fw=max(fw,1e-4);return clamp((pint(x+.5*fw,w)-pint(x-.5*fw,w))/fw,0.,1.);}
vec3 facade(vec2 uv,vec3 n,vec3 tx,vec3 rd,bool front){
  vec2 g=uv/vec2(PW,FH), fw=fwidth(g), id=floor(g), f=fract(g);
  float lod=sst(.12,.7,max(fw.x,fw.y));
  float r1=h21(id),r2=h21(id+7.3);
  vec2 rid=vec2(floor(id.x*.5),id.y); float r3=h21(rid+19.1), r4=h21(rid+3.7);
  float mv=pulse(g.x+.024,.048,fw.x);
  float mh=max(pulse(g.y+.011,.022,fw.y),pulse(g.y-SP+.011,.022,fw.y));
  float mull=max(mv,mh);
  float spand=pulse(g.y,SP,fw.y);
  // glass: slight per-panel tilt and roller wave
  vec2 pert=((vec2(r1,r2)-.5)*.014+vec2(sin(f.y*9.+r1*6.)*.0035,sin(f.x*7.+r2*6.)*.002)+(f-.5)*vec2(.008,.004))*(1.-lod);
  vec3 nn=normalize(n+tx*pert.x+vec3(0,1,0)*pert.y);
  vec3 R=reflect(rd,nn);
  float cs=clamp(dot(-rd,nn),0.,1.), fr=.34+.66*pow(1.-cs,4.5);
  vec3 refl=sky(R);
  // interior mapping: a room two panels wide behind the glass
  vec3 l=vec3(dot(rd,tx),rd.y,max(dot(rd,-n),1e-3));
  float rw=PW*2., px=(mod(id.x,2.)+f.x)*PW, py=f.y*FH, y0=.35, y1=FH*.94, zd=5.5;
  float tzb=zd/l.z, txb=abs(l.x)>1e-4?(l.x>0.?(rw-px):-px)/l.x:1e9, tyb=abs(l.y)>1e-4?(l.y>0.?(y1-py):(y0-py))/l.y:1e9;
  float tt=min(tzb,min(txb,tyb)); vec3 hp=vec3(px,py,0.)+l*tt;
  vec3 warm=mix(vec3(1.,.64,.34),vec3(1.,.8,.56),step(.7,r4));
  vec3 rm; float fx=0.;
  if(tyb<=tzb&&tyb<=txb){
    if(l.y>0.){fx=sst(.36,.3,abs(fract(hp.x/1.5+r3)-.5))*sst(.2,.14,abs(fract(hp.z/(1.1+r4*.9)+r3)-.5)); rm=warm*.3;}
    else rm=warm*.16;
  } else if(tzb<=txb){ rm=warm*(.34+.3*hp.y/FH)*(.75+.25*step(.5,h21(rid+floor(hp.x/.9)))); }
  else rm=warm*.3;
  rm*=exp(-tt*.07);
  float fl=id.y/45.;
  float prob=.06+.3*sst(fl-.05,fl+.05,uP*1.3-.1)*(.55+.9*h21(vec2(floor(id.x/6.),floor(id.y/3.))));
  float tm=0.,glow=0.,inr=0.,shd=0.;
  if(front){
    vec2 tp=uv+l.xy/l.z*.55, t=(tp-uTR.xy)/uTR.zw, t2=(uv-uTR.xy)/uTR.zw;
    inr=step(-.14,t2.x)*step(t2.x,1.14)*step(-.02,t2.y)*step(t2.y,1.02);
    if(t.x>0.&&t.x<1.&&t.y>0.&&t.y<1.){
      float li=floor((1.-t.y)*uN);
      float on=clamp(uIn*(uN+1.6)-li,0.,1.); on*=on*(3.-2.*on);
      gTm=texture(uTx,vec2(t.x,1.-t.y)).r*on*uSg;
      if(li>uN-1.5){
        // last line: the light aurora spectrum, left to right
        float ax=clamp(t.x*1.12,0.,1.)*3.;
        vec3 a0=vec3(.663,.812,.910), a1=vec3(.765,.706,.902), a2=vec3(.953,.757,.643), a3=vec3(.914,.698,.478);
        gTc=ax<1.?mix(a0,a1,ax):(ax<2.?mix(a1,a2,ax-1.):mix(a2,a3,ax-2.));
      }
    }
  }
  prob*=1.-inr;
  float isB=front?step(abs(id.x-uBay.x),.5)*step(abs(id.y-uBay.y),.5):0.;
  prob*=front?1.-step(abs(id.x-uBay.x),3.5)*step(abs(id.y-uBay.y),1.5):1.;
  float lit=max(step(r3,prob)*(.6+.4*r2)*.35,isB*uLit);
  vec3 inside=mix(rm*(.03*vec3(1.,.7,.5)+lit*.34)+warm*fx*.7*lit*exp(-tt*.07),warm*prob*.1,lod);
    float ao=mix(.86+.14*sst(0.,.07,min(min(f.x,1.-f.x),min(f.y,1.-f.y)*2.4)),1.,lod);
  vec3 glass=mix(inside*vec3(.98,.9,.78),refl*ao,fr);
  vec3 sp=mix(vec3(.05,.045,.04),refl*ao,fr*.5+.04);
  vec3 c=mix(glass,sp,spand);
  vec3 mc=vec3(.02,.018,.016)+refl*.03+vec3(.08,.07,.06)*sst(.03,.0,abs(fract(g.x+.5)-.5-.012))*(1.-lod);
  c=mix(c,mc,mull);
  if(isB>.5){vec3 oc=rm*.2+vec3(.018,.014,.01)+warm*fx*.5*exp(-tt*.07);oc=mix(oc,vec3(.22,.2,.18)*(.55+.45*f.x),step(f.y,.085));c=mix(c,oc,uOpen);}
  return c;
}
void main(){
  vec2 p=(gl_FragCoord.xy/uRes)*2.-1.;
  float tv=.3839;
  vec3 rd=normalize(uF+p.x*tv*uAsp*uR+p.y*tv*uU), ro=uRo;
  vec3 bmin=vec3(-W*.5,-40.,-D), bmax=vec3(W*.5,H,0.);
  vec3 inv=1./rd, t0=(bmin-ro)*inv, t1=(bmax-ro)*inv, tn=min(t0,t1), tf=max(t0,t1);
  float tN=max(max(tn.x,tn.y),tn.z), tF=min(min(tf.x,tf.y),tf.z);
  vec3 c;
  if(tN<tF&&tN>0.){
    vec3 q=ro+rd*tN;
    if(tn.y>tn.x&&tn.y>tn.z) c=vec3(.03,.025,.02);
    else if(tn.z>=tn.x) c=facade(vec2(q.x+W*.5,q.y),vec3(0,0,-sign(rd.z)),vec3(1,0,0),rd,rd.z<0.);
    else c=facade(vec2(-q.z,q.y),vec3(-sign(rd.x),0,0),vec3(0,0,1),rd,false)*.82;
    c*=sst(H+.01,H-.5,q.y)*.4+.6;
    vec3 haze=sky(normalize(vec3(rd.x,.02,rd.z)));
    c=mix(c,haze*.8,sst(30.,-6.,q.y)*.9);
  } else c=sky(rd);
  c*=1.05; c=c/(1.+c*.62);
  c=pow(c,vec3(.4545));
  c=mix(c,c*c*(3.-2.*c),.35);
  c*=1.-.2*dot(p*.7,p*.7);
  c*=sst(0.,.3,uIn);
  // soft dark scrim under the headline: left side on wide screens, bottom on phones
  vec2 sp2=gl_FragCoord.xy/uRes;
  float scr=uAsp<.85?1.-sst(.55,1.,sp2.y):1.-sst(.12,.55,sp2.x);
  c=mix(c,vec3(.078,.055,.035),.62*scr*uScr);
  c=mix(c,gTc,gTm);
  c+=(h21(gl_FragCoord.xy+fract(uT)*91.)-.5)/150.;
  o=vec4(c,1.);
}`;
