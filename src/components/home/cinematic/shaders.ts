// GLSL copied verbatim from the approved reference.
export const VS = '#version 300 es\nin vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
export const FS = `#version 300 es
precision highp float;
out vec4 o;
uniform vec2 uRes; uniform float uT,uP,uIn,uSun,uN,uAsp,uNi;
uniform vec3 uRo,uF,uR,uU; uniform vec4 uTR; uniform sampler2D uTx; uniform vec2 uBay; uniform float uOpen,uLit,uSg,uScr,uQ;
float gTm=0.; vec3 gTc=vec3(.984,.973,.957);
vec3 gSun=vec3(0.,.2,.98); vec3 gHaze=vec3(.9,.8,.7); float gLod=0.,gDist=0.;
const float W=42.,H=162.,D=30.,PW=1.5,FH=3.6,SP=.2;
float sst(float a,float b,float x){float t=clamp((x-a)/(b-a),0.,1.);return t*t*(3.-2.*t);}
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float hb(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+1.),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*vn(p);p=mat2(1.6,1.2,-1.2,1.6)*p+11.;a*=.5;}return s;}
vec3 horizon(vec3 rd){
  vec2 hz=normalize(rd.xz+1e-5);
  float glow=pow(max(dot(hz,vec2(sin(uSun),cos(uSun))),0.),2.2);
  return mix(vec3(.95,.8,.66),vec3(1.7,1.1,.62),glow);
}
// one layer of neighbouring towers as a function of horizontal angle a and height y above the horizon
vec4 bl(float a,float y,float N,float sd,float h0,float h1){
  float u=a*N*.159155+sd*3.7, id=floor(u), fu=fract(u), im=mod(id,N);
  float r=h21(vec2(im,sd)), r2=h21(vec2(im+13.,sd+5.)), r3=h21(vec2(im+29.,sd+9.)), r4=h21(vec2(im+51.,sd+2.));
  float lo=.06+.3*r2, hi=min(lo+.35+.45*r3,.96), split=lo+(hi-lo)*(.35+.3*r4);
  float hh=(h0+(h1-h0)*r*r)*(fu<split?mix(1.,.8,step(.5,r4)):1.);
  float cov=sst(lo,lo+.012,fu)*sst(hi,hi-.012,fu)*sst(hh+.003,hh-.003,y);
  float wu=(fu-lo)/(hi-lo)*floor(3.+r3*5.), wy=y/.0055;
  return vec4(cov,(fu-lo)/(hi-lo)*.6+.4*sst(0.,hh,y),step(.28,fract(wu))*step(.3,fract(wy)),0.);
}
vec3 skyline(vec3 c,float a,float y,vec3 hor){
  vec4 b=bl(a,y,34.,1.,.016,.055);
  vec3 col=mix(vec3(.5,.55,.62),hor*.96,.72)*(.92+.16*b.y);
  c=mix(c,col,b.x*.9);
  b=bl(a,y,20.,2.3,.022,.092);
  col=mix(vec3(.3,.35,.43),hor*.96,.46)*(.88+.24*b.y);
  c=mix(c,col,b.x*.92);
  b=bl(a,y,12.,3.9,.03,.14);
  col=mix(vec3(.22,.26,.32),hor*.96,.2)*(.84+.3*b.y)*vec3(1.06,1.01,.94);
  if(uQ>.75) col*=1.-.24*(1.-b.z)*(1.-gLod);
  col=mix(col,hor,exp(-y*26.)*.5);
  return mix(c,col,b.x*.95);
}
vec3 ground(vec3 rd,vec3 hor){
  float gy=-rd.y; vec2 gp=rd.xz/(gy+.04)*.8;
  vec3 pave=mix(vec3(.46,.43,.39),vec3(.58,.54,.47),fbm(gp*.18+7.));
  float can=sst(.47,.6,fbm(gp*.55+2.));
  vec3 cc=mix(vec3(.07,.085,.06),vec3(.16,.18,.11),vn(gp*3.1));
  vec3 g=mix(pave,cc,can)*vec3(1.05,1.,.92);
  return mix(hor*.95,g,sst(.02,.28,gy));
}
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
    if(y<.16) c=skyline(c,atan(rd.z,rd.x),y,hor);
  } else c=ground(rd,hor);
  return c;
}
float pint(float x,float w){return floor(x)*w+min(fract(x),w);}
float pulse(float x,float w,float fw){fw=max(fw,1e-4);return clamp((pint(x+.5*fw,w)-pint(x-.5*fw,w))/fw,0.,1.);}
vec3 facade(vec2 uv,vec3 n,vec3 tx,vec3 rd,bool front){
  vec2 g=uv/vec2(PW,FH), fw=fwidth(g), id=floor(g), f=fract(g);
  float lod=sst(.12,.7,max(fw.x,fw.y));
  float r1=h21(id),r2=h21(id+7.3),r5=h21(id+31.7),r6=h21(id+57.1),r7=h21(id+83.3);
  vec2 rid=vec2(floor(id.x*.5),id.y); float r3=h21(rid+19.1), r4=h21(rid+3.7);
  float mv=pulse(g.x+.024,.048,fw.x);
  float mh=max(pulse(g.y+.011,.022,fw.y),pulse(g.y-SP+.011,.022,fw.y));
  float mull=max(mv,mh);
  float spand=pulse(g.y,SP,fw.y);
  gLod=lod;
  // glass: per-panel tilt, roller wave and a centre-weighted pillow bow that differs from unit to unit
  vec2 v=f-.5;
  vec2 pert=((vec2(r1,r2)-.5)*.014+vec2(sin(f.y*9.+r1*6.)*.0035,sin(f.x*7.+r2*6.)*.002)+v*(1.4-1.6*abs(v))*vec2(.015,.009)*(.6+.9*r5))*(1.-lod);
  vec3 nn=normalize(n+tx*pert.x+vec3(0,1,0)*pert.y);
  vec3 R=reflect(rd,nn);
  float cs=clamp(dot(-rd,nn),0.,1.), gz=pow(1.-cs,4.5);
  float fb=.3+.1*r7, fr=fb+(1.-fb)*gz;
  // unit-to-unit tint and brightness, then the low-E coating
  float sh=r6-.5;
  vec3 unitT=(1.+(r5-.5)*.08)*vec3(1.,1.+.05*sh,1.-.05*sh);
  float graz=pow(1.-cs,3.);
  vec3 refl=sky(R)*mix(vec3(.92,.96,1.),vec3(1.),graz)*unitT;
  // low sun glint and a broad sheen on the face that looks at the sun
  float sI=clamp(dot(n,gSun),0.,1.);
  float gl=pow(max(dot(R,gSun),0.),400.)*(1.-lod*.7);
  refl+=vec3(1.5,1.1,.72)*gl*1.1+vec3(1.,.82,.6)*(pow(max(dot(R,gSun),0.),30.)*.05+sI*.035);
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
  float prob=.03+.26*sst(fl-.05,fl+.05,uP*1.3-.1)*(.55+.9*h21(vec2(floor(id.x/6.),floor(id.y/3.))));
  float tm=0.,glow=0.,inr=0.,shd=0.;
  if(front){
    vec2 tp=uv+l.xy/l.z*.55, t=(tp-uTR.xy)/uTR.zw, t2=(uv-uTR.xy)/uTR.zw;
    inr=step(-.14,t2.x)*step(t2.x,1.14)*step(-.02,t2.y)*step(t2.y,1.02);
    if(t.x>0.&&t.x<1.&&t.y>0.&&t.y<1.){
      float li=floor((1.-t.y)*uN);
      float on=clamp(uIn*(uN+1.6)-li,0.,1.); on*=on*(3.-2.*on);
      gTm=texture(uTx,vec2(t.x,1.-t.y)).r*on*uSg;
      if(li>uN-1.5){
        // last line: the warm logo gradient, left to right
        float ax=clamp(t.x*1.12,0.,1.)*2.;
        vec3 a0=vec3(.953,.851,.722), a1=vec3(.910,.706,.478), a2=vec3(.816,.541,.271);
        gTc=ax<1.?mix(a0,a1,ax):mix(a1,a2,ax-1.);
      }
    }
  }
  prob*=1.-inr;
  float isB=front?step(abs(id.x-uBay.x),.5)*step(abs(id.y-uBay.y),.5):0.;
  prob*=front?1.-step(abs(id.x-uBay.x),3.5)*step(abs(id.y-uBay.y),1.5):1.;
  float lit=max(step(r3,prob)*(.6+.4*r2)*.35,isB*uLit);
  // morning office: mostly dim cool rooms, a few warm ones, blinds at different heights
  float litn=clamp(lit*3.,0.,1.);
  vec3 rc=mix(vec3(.62,.68,.76),warm,litn);
  float cl=exp(-tt*.07);
  vec3 insN=rm.r*rc*(.36+lit*.34)+warm*fx*(.7*lit+.04*step(.88,r1))*cl;
  float gy=clamp((f.y-SP)/(1.-SP),0.,1.);
  float hasB=step(.4,hb(rid+17.9))*(1.-isB), drop=.1+.5*hb(rid+91.3);
  float blv=hasB*sst(1.-drop-fw.y*1.5,1.-drop+fw.y*1.5,gy);
  float slat=.5+.5*cos(gy*FH*(1.-SP)/.06*6.2832), sv=1.-sst(.15,.4,fw.y*60.);
  if(uQ<.75) sv=0.;
  float bar=sst(.012+fw.y,.0,abs(gy-(1.-drop)))*hasB;
  vec3 bc=mix(vec3(.42,.41,.39),vec3(.33,.33,.32),slat*sv)*(1.+litn*1.4)*mix(vec3(1.),warm,litn*.5);
  insN=mix(insN,bc,blv*.9);
  insN=mix(insN,vec3(.07,.065,.06),bar*.7*(1.-lod));
  vec3 insF=mix(vec3(.62,.68,.76)*.09,vec3(.42,.41,.39)*.7,hasB*drop*.8)+warm*prob*.1;
  vec3 lowE=mix(vec3(.78,.86,.88),vec3(1.),graz);
  vec3 inside=mix(insN,insF,lod)*lowE;
  float dE=min(min(f.x,1.-f.x),min(1.-f.y,max(f.y-SP,0.))*2.4);
  float ao=mix(.8+.2*sst(0.,.035,dE),1.,lod);
  vec3 glass=mix(inside,refl*ao,fr);
  vec3 sp=mix(vec3(.05,.045,.04),refl*ao,fr*.5+.04);
  vec3 c=mix(glass,sp,spand);
  // faint dirt streaks running down from each transom
  if(uQ>.75){
    float ds=f.y<SP?SP-f.y:1.-f.y;
    float stk=exp(-ds*5.)*sst(.35,.8,vn(vec2(uv.x*19.+r1*5.,1.7)))*(1.-lod);
    c*=1.-.03*stk;
  }
  // mullions as anodised bronze caps: lit edge on the sun side, darker far side
  float sSide=clamp((abs(tx.x)>.5?gSun.x:-gSun.z)*4.,-1.,1.);
  float xm=(fract(g.x+.5)-.5)/.024;
  float ym1=(fract(g.y+.5)-.5)/.011, ym2=(fract(g.y-SP+.5)-.5)/.011;
  float ym=abs(ym1)<abs(ym2)?ym1:ym2;
  float sI2=max(sI,.18), vis=1.-lod;
  float eV=sst(.45,1.,xm*sSide)*vis, dV=sst(-.2,-.9,xm*sSide)*vis;
  float eH=sst(.1,.9,ym)*vis, dH=sst(-.1,-.9,ym)*vis;
  float useV=step(mh,mv);
  float edge=mix(eH,eV,useV), dark=mix(dH,dV,useV);
  vec3 mc=vec3(.085,.062,.044)*(1.-.45*dark)+vec3(1.,.78,.55)*edge*.24*sI2+refl*.04;
  c=mix(c,mc,mull);
  // depth haze: a little more sky on the upper floors and far panels
  float hzA=clamp(.03+.13*sst(10.,H,uv.y)+(1.-exp(-gDist*.003))*.18,0.,.4);
  c=mix(c,gHaze,hzA);
  if(isB>.5){vec3 oc=rm*.2+vec3(.018,.014,.01)+warm*fx*.5*cl;oc=mix(oc,vec3(.22,.2,.18)*(.55+.45*f.x),step(f.y,.085));c=mix(c,oc,uOpen);}
  return c;
}
void main(){
  vec2 p=(gl_FragCoord.xy/uRes)*2.-1.;
  float tv=.3839;
  vec3 rd=normalize(uF+p.x*tv*uAsp*uR+p.y*tv*uU), ro=uRo;
  gSun=normalize(vec3(sin(uSun)*.978,.208,cos(uSun)*.978));
  gHaze=horizon(rd)*.9;
  vec3 bmin=vec3(-W*.5,-40.,-D), bmax=vec3(W*.5,H,0.);
  vec3 inv=1./rd, t0=(bmin-ro)*inv, t1=(bmax-ro)*inv, tn=min(t0,t1), tf=max(t0,t1);
  float tN=max(max(tn.x,tn.y),tn.z), tF=min(min(tf.x,tf.y),tf.z);
  vec3 c=vec3(0.);
  if(tN<tF&&tN>0.){
    vec3 q=ro+rd*tN;
    gDist=tN;
    if(tn.y>tn.x&&tn.y>tn.z) c=vec3(.03,.025,.02);
    else if(tn.z>=tn.x) c=facade(vec2(q.x+W*.5,q.y),vec3(0,0,-sign(rd.z)),vec3(1,0,0),rd,rd.z<0.);
    else c=facade(vec2(-q.z,q.y),vec3(-sign(rd.x),0,0),vec3(0,0,1),rd,false)*.82*vec3(.97,.99,1.03);
    c*=sst(H+.01,H-.5,q.y)*.4+.6;
    c=mix(c,horizon(rd)*.8,sst(30.,-6.,q.y)*.9);
  } else c=sky(rd);
  // filmic tone curve (ACES fit) with a soft highlight rolloff
  float lum=dot(c,vec3(.2126,.7152,.0722));
  c=mix(c,vec3(lum),sst(1.,3.,lum)*.35);
  c*=.65; c=clamp((c*(2.51*c+.03))/(c*(2.43*c+.59)+.14),0.,1.);
  c=pow(c,vec3(.4545));
  c*=1.-.2*dot(p*.7,p*.7);
  c*=sst(0.,.3,uIn);
  // soft dark scrim under the headline: left side on wide screens, bottom on phones
  vec2 sp2=gl_FragCoord.xy/uRes;
  float scr=uAsp<.85?1.-sst(.55,1.,sp2.y):1.-sst(.12,.55,sp2.x);
  c=mix(c,vec3(.078,.055,.035),.72*scr*uScr);
  c=mix(c,gTc,gTm);
  c+=(h21(gl_FragCoord.xy+fract(uT)*91.)-.5)/150.;
  o=vec4(c,1.);
}`;
