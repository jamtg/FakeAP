/********************  公用配置参数  ********************/
var pageVersion=2;// 页面版本(1-标准版；2-商务版；3-二维码版；4-混合版；5-保活版；其他-未定义，保留)

var companyInfo="本宽带计费系统由城市热点提供";// 公司信息(底部文字)

var companyLink="http://www.doctorcom.com";// 公司链接

var redirectLink="";// 登录重定向

var accountSuffix="@1001";// 账号后缀

var enPortal=0;// 是否支持Portal协议，进行第三方AC认证(0-不支持；1-支持)

var enPerceive=0;// 是否支持快速登录(0-不支持；1-支持)

var autoPerceive=0;// 快速登录是否允许自提交(0-显示快速登陆；1-直接无感知)

var enHttps=0;// 是否需要Https(0-不需要；1-需要)

var enMd5=0;// 是否需要MD5(0-不需要；1-需要)

var enAdvert=0;// 是否显示广告(0-不显示；1-显示)

var enSlideshow=0;// 是否显示幻灯片(0-不显示；1-显示)

var regURL="http://121.194.63.7/CloudSelf";// 短信自服务地址，如:http://cloud.doctorcom.com/CloudSelf/

var machineno="DR15NM8800642";// 设备编号

/********************  登录页匹配参数  ********************/
var loginMatchMode=2;// VLAN登录页匹配模式：0-默认；1-VLAN ID；2-IP(处理方式为0才生效)

var matchVlanArr = new Array(4);// VLAN ID匹配数组
matchVlanArr[0]="201|201";
matchVlanArr[1]="3|4";
matchVlanArr[2]="5|6";
matchVlanArr[3]="7|8";

var matchIPArr = new Array(4);// IP匹配数组
matchIPArr[0]="172.30.128.1|172.30.191.254";
matchIPArr[1]="|";
matchIPArr[2]="|";
matchIPArr[3]="|";

/********************  幻灯片参数  ********************/
var advertNum=2;// 广告个数(最少1个，最大5个，默认3个)

var rvtPCImgArr = new Array(5);// 广告图片(PC)
rvtPCImgArr[0]="a04.jpg";
rvtPCImgArr[1]="a05.jpg";
rvtPCImgArr[2]="";
rvtPCImgArr[3]="";
rvtPCImgArr[4]="";

var rvtMobileImgArr = new Array(5);// 广告图片(手机)
rvtMobileImgArr[0]="a34.jpg";
rvtMobileImgArr[1]="a35.jpg";
rvtMobileImgArr[2]="";
rvtMobileImgArr[3]="";
rvtMobileImgArr[4]="";

var rvtTextArr = new Array(5);// 广告文字
rvtTextArr[0]="广告测试图1";
rvtTextArr[1]="广告测试图2";
rvtTextArr[2]="";
rvtTextArr[3]="";
rvtTextArr[4]="";

var rvtLinkArr = new Array(5);// 广告链接
rvtLinkArr[0]="http://www.bjtu.edu.cn";
rvtLinkArr[1]="http://www.bjtu.edu.cn";
rvtLinkArr[2]="";
rvtLinkArr[3]="";
rvtLinkArr[4]="";

/********************  VLAN广告参数  ********************/
var vlanTitleArr = new Array(4);// VLAN层说明
vlanTitleArr[0]="F1";
vlanTitleArr[1]="F2";
vlanTitleArr[2]="F3";
vlanTitleArr[3]="F4";

var matchAdvertNumArr = new Array(4);// VLAN层广告个数
matchAdvertNumArr[0]=4;
matchAdvertNumArr[1]=4;
matchAdvertNumArr[2]=4;
matchAdvertNumArr[3]=4;

var firstImgArr = new Array(4);// 首层图片
firstImgArr[0]="a47.jpg";
firstImgArr[1]="a48.jpg";
firstImgArr[2]="a49.jpg";
firstImgArr[3]="a50.jpg";

var firstTextArr = new Array(4);// 首层文字
firstTextArr[0]="H&M";
firstTextArr[1]="VIGOSS";
firstTextArr[2]="Pull&Bear";
firstTextArr[3]="ONLY";

var firstHrefArr = new Array(4);// 首层链接
firstHrefArr[0]="http://www.bjtu.edu.cn";
firstHrefArr[1]="http://www.bjtu.edu.cn";
firstHrefArr[2]="http://www.bjtu.edu.cn";
firstHrefArr[3]="http://www.bjtu.edu.cn";

var secondImgArr = new Array(4);// 第2层图片
secondImgArr[0]="a51.jpg";
secondImgArr[1]="a52.jpg";
secondImgArr[2]="a53.jpg";
secondImgArr[3]="a54.jpg";

var secondTextArr = new Array(4);// 第2层文字
secondTextArr[0]="星巴克";
secondTextArr[1]="汉拿山";
secondTextArr[2]="必胜客";
secondTextArr[3]="和民居食屋";

var secondHrefArr = new Array(4);// 第2层链接
secondHrefArr[0]="http://www.bjtu.edu.cn";
secondHrefArr[1]="http://www.bjtu.edu.cn";
secondHrefArr[2]="http://www.bjtu.edu.cn";
secondHrefArr[3]="http://www.bjtu.edu.cn";

var thirdImgArr = new Array(4);// 第3层图片
thirdImgArr[0]="a55.jpg";
thirdImgArr[1]="a56.jpg";
thirdImgArr[2]="a57.jpg";
thirdImgArr[3]="a58.jpg";

var thirdTextArr = new Array(4);// 第3层文字
thirdTextArr[0]="GUESS";
thirdTextArr[1]="LEVIS";
thirdTextArr[2]="CK";
thirdTextArr[3]="NOVO百货";

var thirdHrefArr = new Array(4);// 第3层链接
thirdHrefArr[0]="http://www.bjtu.edu.cn";
thirdHrefArr[1]="http://www.bjtu.edu.cn";
thirdHrefArr[2]="http://www.bjtu.edu.cn";
thirdHrefArr[3]="http://www.bjtu.edu.cn";

var fourthImgArr = new Array(4);// 第4层图片
fourthImgArr[0]="a59.jpg";
fourthImgArr[1]="a60.jpg";
fourthImgArr[2]="a61.jpg";
fourthImgArr[3]="a62.jpg";

var fourthTextArr = new Array(4);// 第4层文字
fourthTextArr[0]="EMU服饰";
fourthTextArr[1]="HIM汉崇";
fourthTextArr[2]="汉堡王";
fourthTextArr[3]="华润万家";

var fourthHrefArr = new Array(4);// 第4层链接
fourthHrefArr[0]="http://www.bjtu.edu.cn";
fourthHrefArr[1]="http://www.bjtu.edu.cn";
fourthHrefArr[2]="http://www.bjtu.edu.cn";
fourthHrefArr[3]="http://www.bjtu.edu.cn";

var matchImgArr = new Array(4);// 图片匹配数组
matchImgArr[0]=firstImgArr;
matchImgArr[1]=secondImgArr;
matchImgArr[2]=thirdImgArr;
matchImgArr[3]=fourthImgArr;

var matchTextArr = new Array(4);// 文字匹配数组
matchTextArr[0]=firstTextArr;
matchTextArr[1]=secondTextArr;
matchTextArr[2]=thirdTextArr;
matchTextArr[3]=fourthTextArr;

var matchHrefArr = new Array(4);// 链接匹配数组
matchHrefArr[0]=firstHrefArr;
matchHrefArr[1]=secondHrefArr;
matchHrefArr[2]=thirdHrefArr;
matchHrefArr[3]=fourthHrefArr;


/********************  公用函数  ********************/
//提示框显示时间(默认3秒)
var display_time = 3000;

// 重写alert方法
window.alert = function(message){
  ui.alert(message, display_time, true);
};

// 加载自定义提示框操作
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('8 F={1k:q(1R,2q,2F){7(1R.3Z){1R.3Z("1k"+2q,q(){2F.4n(1R,4o)})}G{1R.45(2q,2F,L)}},1v:q(d,H){8 H=H||6.H,1a=d.1D.1i(/\\s{2,}/g,\' \').2E(\' \'),c=O;14(8 i=0,l=1a.X;i<l;i++){7(1a[i]==H){c=L;1g}};7(c){d.1D=1a.2a(\' \')+\' \'+H};7(H==6.H){6.2n=O}},48:q(d,H){8 H=H||6.H,1a=d.1D.1i(/\\s{2,}/g,\' \').2E(\' \'),c=L;14(8 i=0,l=1a.X;i<l;i++){7(1a[i]==H){c=O;1g}};Z c},1t:q(d,H){8 H=H||6.H,1a=d.1D.1i(/\\s{2,}/g,\' \').2E(\' \'),c=[];14(8 i=0,l=1a.X;i<l;i++){7(1a[i]!=H){c.1w(1a[i])}};d.1D=c.2a(\' \')},H:\'4a\',1b:\'\',2n:L,2w:q(D){1y(\'8 2r = V 3b(/\'+D.I(\'1M\')+\'/)\');7(!2r.3a(D.U)){6.1v(D);6.1b+=6.1F(D,\'38！\')}G{6.1t(D)}},2t:q(D){7(D.1h==\'2s\'&&D.1Y==L){6.1v(D);6.1b+=\'4G\'+6.1F(D,\'\')+\'！<2D>\'}G 7(D.U.1i(/\\s/g,\'\')==\'\'||(J(D.I(\'1u\'))==\'W\'&&D.U==D.I(\'1u\'))){6.1v(D);6.1b+=6.1F(D,\'3v！\')}G 7(D.1h==\'2s\'&&D.1Y==O){6.1t(D)}G 7(D.U.1i(/\\s/g,\'\')!=\'\'){6.1t(D)}},2B:q(D){7(D.U!=\'\'){1y(\'8 2r = V 3b(/\'+D.I(\'1M\')+\'/)\');7(2r.3a(D.U)){6.1t(D);6.1b+=6.1F(D,\'38！\')}G{6.1v(D)}}G{6.1t(D)}},35:q(D){7(D.U==\'\'){D.U=D.I(\'1u\');7(J(D.1j.I(\'2h\'))==\'W\'){6.1v(D,D.1j.I(\'2h\'))}}},3q:q(D){7(D.U==D.I(\'1u\')){D.U=\'\';7(J(D.1j.I(\'2h\'))==\'W\'){6.1t(D,D.1j.I(\'2h\'))}}},1F:q(a,b){7(J(a.I(\'1b\'))==\'W\'){8 s=a.I(\'1b\');7(s){Z s+\'<2D>\'}G{Z\'\'}}G{Z A.s(a.1p).11+b+\'<2D>\'}},4O:q(){8 K=R.2I;14(8 a=0,l=K.X;a<l;a++){7(J(K[a].f)!=\'1f\'){4w};K[a].f=L;14(8 b=0,j=K[a].X;b<j;b++){7(J(K[a][b])!=\'1f\'){7(J(K[a][b].I(\'2j\'))==\'W\'&&K[a][b].I(\'2j\')=="O"){7(J(K[a][b].I(\'1M\'))==\'W\'){6.1k(K[a][b],\'2f\',q(){F.2w(6)})}G{6.1k(K[a][b],\'2f\',q(){F.2t(6)})}}G 7(J(K[a][b].I(\'1M\'))==\'W\'){6.1k(K[a][b],\'2f\',q(){F.2B(6)})};7(J(K[a][b].I(\'3t\'))==\'W\'){6.3i(K[a][b])};7(K[a][b]&&J(K[a][b].I(\'1u\'))==\'W\'){6.1k(K[a][b],\'2f\',q(){F.35(6)});6.1k(K[a][b],\'3M\',q(){F.3q(6)})}}};6.1k(K[a],\'3s\',q(e){F.2n=L;F.1b=\'\';14(8 i=0,j=6.X;i<j;i++){7(J(6[i].I(\'2j\'))==\'W\'&&6[i].I(\'2j\')=="O"){7(6[i].1h==\'3g\'){8 1Z=6[6[i].1c],z=O;14(8 r=0;r<1Z.X;r++){7(1Z[r].1Y){z=L;1g}};7(z){F.1v(1Z[0]);F.1b+=F.1F(6[i],\'3v！\',O)};i+=(1Z.X-1)}G 7(J(6[i].I(\'1M\'))==\'W\'){F.2w(6[i])}G{F.2t(6[i])}}G 7(J(6[i].I(\'1M\'))==\'W\'){F.2B(6[i])};7(6[i]&&J(6[i].I(\'1u\'))==\'W\'){7(6[i].U==6[i].I(\'1u\')){6[i].U=\'\'}}};7(F.2n){7(F.1b){16.37(F.1b.1i(/：/g,\'\'))};7(e.2G)e.2G();G e.3e=L}G{6.f=O;7(6.1m){6.1m()}}});7(J(K[a].I(\'2Q\'))!=\'1f\'){K[a].1m=K[a].2Q;K[a].2Q=\'\'}}},3i:q(o){8 n=o.I(\'3t\');8 1m=o.I(\'4j\');8 3p=o.I(\'4H\')||L;8 u=o.I(\'4x\')||21.4y.4t;8 f=A.$$(\'S\');8 w=o.2L+4u;1e(f.Q){2K=\'1Q\';3D=3C;3r=\'1W\';1S=\'2m(1o=0)\';1o=\'0.0\';2k=\'2S\'};7(A.$(n+\'1I\')){A.d(A.$(n+\'1I\').1p)};f.11=\'<1j 4D="3w" 4C="4B/1j-1r" 4A="\'+u+\'" 4F="\'+n+\'1I" ><1G 1h="4E" 4z="6.1j.3s();F.2Z(\\\'\'+n+\'1I\\\',\\\'\'+1m+\'\\\',\'+3p+\');" 1c="\'+n+\'" Q="2W-1H:-4N;4S:4R; 1N:\'+w+\'Y;" /></1j><3o 1c="\'+n+\'1I" 4Q="\'+n+\'1I" Q="2k:2S"></3o>\';o.B=f;F.1k(o,\'4K\',q(){8 1B=A.1B(6);8 w=6.2L;8 h=6.1P;8 s=0,p=6.1p;3j(p&&p.3k.2u()!=\'18\'){7(p.1n)s+=4J(p.1n);p=p.1p};1e(6.B.Q){2k=\'4s\';1V=1B.y-s+\'Y\';1H=1B.x+\'Y\';1s=h+\'Y\';1N=w+\'Y\'};8 2T=6.B.E[0];1e(2T.Q){1s=h+\'Y\';1N=w+\'Y\';3r=\'1W\'};2T.E[0].Q.1s=h+\'Y\';8 1E=6;7(J(6.f)==\'1f\'||!6.f){6.f=49(q(){7(J(1E.1P)==\'1f\'||!1E.1P){1E.B.Q.2k=\'2S\';4c(1E.f);1E.f=\'\'}},2C)}});R.18.3E(f);f.E[0].f=O},2Z:q(a,b,f){7(f){f()};2o{8 s=21.3d[a].R.18.11}2g(2q){8 s=\'\'};7(s){1y(\'s=\'+s);21.3d[a].R.18.11=\'\';7(J(b)==\'W\'){1y(b+\'(s)\')}G{b(s)}}G{1q(q(){F.2Z(a,b,L)},46)}}};8 A={$:q(a){Z R.44(a)},$$:q(a){7(a.22(\'<\')==-1){Z R.2M(a)}G{8 30=R.2M(\'S\');30.11=a;Z 30.E[0]}},r:q(n,m,f){7(f){Z 1x.34()*(m-n)+n}G{Z 1x.4m(1x.34()*(m-n)+n)}},d:q(a){a.1p.2H(a)},4q:q(n,v,h){8 25=V 3c((V 3c()).4i()+4h*h);25="; 4g="+25.4l();R.1J=n+"="+4k(v)+25},s:q(a){Z a.4T||a.5s},x:q(a){Z a.5w||a.5z},5x:q(n){8 v="";8 s=n+"=";7(R.1J.X>0){w=R.1J.22(s);7(w!=-1){w+=s.X;2b=R.1J.22(";",w);7(2b==-1)2b=R.1J.X;v=5B(R.1J.5v(w,2b))}};Z v},29:[],42:q(2O,1r,f,2N){8 13=6;8 k=2O.1i(/[^\\w]/g,\'\');7(J(13.29[k])==\'1f\'){13.29[k]=O;7(21.36){8 15=V 36()}G{8 M=[\'2d.1O\',\'2c.1O\',\'2d.1O.5.0\',\'2d.1O.4.0\',\'2d.1O.3.0\'];14(n=0;n<M.X;n++){2o{8 15=V 5y(M[n]);1g}2g(e){}}};15.5r("3w",2O,O);15.3f("5t","1");15.5u=q(){7(15.5C==4){7(15.5I==5J){3P 13.29[k];7(f){7(J(f)==\'W\')A.$(f).11=15.2R;G{7(2N&&2N==\'5D\'){1y(\'8 3u=\'+15.2R);1y(f(3u))}G 1y(f(15.2R))}}}}};15.3f("5F-5K","5q/x-54-1j-52;");15.53(1r)}},1B:q(a){8 y=a.3m;8 x=a.31;e=a.3l;3j(e){y+=e.3m;x+=e.31;e=e.3l};Z{\'y\':y,\'x\':x}},2J:q(f){8 s=[];14(8 i=0,l=f.X;i<l;i++){7(f[i].1c&&f[i].1c!=\'\'){3n(f[i].3k.2u()){2A\'58\':14(8 a=0;a<f[i].X;a++){7(f[i][a].59){s.1w(f[i].1c+\'=\'+28(f[i][a].U))}};1g;3h:3n(f[i].1h.2u()){2A\'3g\':8 1L=f[f[i].1c];14(8 a=0;a<1L.X;a++){7(1L[a].1Y){s.1w(1L[a].1c+\'=\'+28(1L[a].U));1g}};i+=(1L.X-1);1g;2A\'2s\':7(f[i].1Y){s.1w(f[i].1c+\'=\'+28(f[i].U))};1g;3h:s.1w(f[i].1c+\'=\'+28(f[i].U));1g}}}};Z s.2a(\'&\')},4Y:q(K){8 s=[];14(8 i=0,l=K.X;i<l;i++){7(J(K[i])==\'2U\'){s.1w(6.2J(K[i]))}G{7(R.2I[K[i]]){s.1w(6.2J(R.2I[K[i]]))}}};Z s.2a(\'&\')}};(q(w){8 d=w.R;8 16=w.16={};8 m=L,2Y=L;16.37=q(s,t,c){7(J(c)==\'1f\'||c==O){V S({\'c\':O,\'t\':t})};V S({\'c\':O,\'s\':s,\'H\':\'5j\',\'t\':t})};16.5o=q(s,t,c){7(J(c)==\'1f\'||c==O){V S({\'c\':O,\'t\':t})};V S({\'c\':O,\'s\':s,\'H\':\'5p\',\'t\':t})};16.5m=q(s,t,c){7(J(c)==\'1f\'||c==O){V S({\'c\':O,\'t\':t})};V S({\'c\':O,\'s\':s,\'H\':\'5n\',\'t\':t})};16.5c=q(s,t,c){7(J(c)==\'1f\'||c==O){V S({\'c\':O,\'t\':t})};V S({\'c\':O,\'s\':s,\'H\':\'5a\',\'t\':t})};16.5b=q(s,f,c){7(c){m=V S({\'c\':L})}G{m=L};V S({\'c\':L,\'s\':s,\'H\':\'3H\',\'f\':f})};16.5g=q(s,f,c){7(c){m=V S({\'c\':L})}G{m=L};V S({\'c\':L,\'s\':s,\'H\':\'3O\',\'f\':f})};16.5h=q(24,1l,1r,c,f,19){7(c){m=V S({\'c\':L})}G{m=L};Z 2Y=V S({\'c\':L,\'24\':24,\'1l\':1l,\'H\':\'1T\',\'1r\':1r,\'1m\':f,\'19\':19})};16.3J=q(B,17,1C){q a(B,17,1C){8 13=6;13.17=17;13.B=B;B.5e=q(e){8 e=e||32;8 w=A.1B(6);13.x=e.3Y-w.x;8 23=1C==\'1Q\'?R.18.1n+R.1d.1n:0;13.y=e.33+23-w.y;13.17.Q.2K=1C;2o{e.2G()}2g(o){e.3e=L};R.40=q(e){8 e=e||32;8 23=1C==\'1Q\'?R.18.1n+R.1d.1n:0;13.17.Q.1V=e.33+23-13.y+\'Y\';13.17.Q.1H=e.3Y-13.x+\'Y\'}};B.5f=q(){R.40=\'\'}};7(J(B)!=\'2U\'){B=A.$(B)};7(J(17)==\'W\'){17=A.$(17)};V a(B,17||B.1p,1C||\'1Q\')};8 1X=R.5d(\'5i\');14(8 i=0;i<1X.X;i++){7(1X[i].I(\'2l\')&&1X[i].I(\'2l\').22(\'5l.5k\')>-1){8 3N=1X[i].I(\'2l\').1i(/\\/[^\\/]*$/,\'\').1i(/(\\/?)[^\\/]*$/,\'$1\');1g}};q S(B){6.3X=q(){6.C=d.2M(\'S\');1e(6.C.Q){2K=\'1Q\';3D=3C;1V=\'1K\';1H=\'1K\';1S=\'2m(1o=0)\';1o=0;1N=1x.2p(d.1d.4Z,d.1d.3V)+\'Y\';1s=1x.2p(d.1d.51,d.1d.3U)+\'Y\';2W=\'1K\';50=\'1K\';2P=\'#4V\'};6.1U=\'\';d.18.3E(6.C);7(J(B.H)==\'W\'){7(d.3W&&B.H!=\'1T\'){6.1U=\' 2y:2x.2c.3G(3F=4, 3y=3x, 3z="#3B",3A=1) 2y:2x.2c.4U(4X="#4W", 57="#56")\';7(B.H==\'1T\'){6.1U=\' 2y:2x.2c.3G(3F=4, 3y=3x, 3z="#3B",3A=1)\'}};1e(6.C.Q){1N=\'2e\';1s=\'2e\';2P=\'55\'};6.C.1D=B.H;7(B.H==\'3H\'){6.C.11=\'<p 12="41">\'+B.s+\'</p><p 12="3R"><1G 1h="26" 12="27" U="3Q" /><1G 1h="26" 12="27 3I" U="3K" /></p>\';8 N=6.C.E[1];N.E[0].C=6.C;N.E[0].P=6.P;N.E[0].f=B.f;7(m){N.E[0].c=m};N.E[0].1A=q(){6.P(1);7(6.c){6.c.P(0.5)};6.f(O)};N.E[1].C=6.C;N.E[1].P=6.P;N.E[1].f=B.f;7(m){N.E[1].c=m};N.E[1].1A=q(){6.P(1);7(6.c){6.c.P(0.5)};6.f(L)}}G 7(B.H==\'3O\'){6.C.11=\'<p 12="5G">\'+B.s+\'</p><p 12="5H"><1G 1h="5E" 12="5L" /></p><p 12="3R"><1G 1h="26" 12="27" U="3Q" /><1G 1h="26" 12="27 3I" U="3K" /></p>\';8 N=6.C.E[2];N.E[0].C=6.C;N.E[0].P=6.P;N.E[0].f=B.f;7(m){N.E[0].c=m};N.E[0].1A=q(){6.P(1);7(6.c){6.c.P(0.5)};6.f(6.1p.1p.E[1].E[0].U)};N.E[1].C=6.C;N.E[1].P=6.P;N.E[1].f=B.f;7(m){N.E[1].c=m};N.E[1].1A=q(){6.P(1);7(6.c){6.c.P(0.5)};6.f(L)};6.C.E[1].E[0].3M()}G 7(B.H==\'1T\'){6.C.11=\'<S 12="5A"><3L></3L></S><S 12="4p"></S><2V 12="2V"></2V>\';6.C.Q.2P=\'#4r\';8 N=6.C.E[0];16.3J(N);8 1z=6.C.E[1];N.E[0].11=B.24;6.C.E[2].C=6.C;6.C.E[2].P=6.P;7(m){6.C.E[2].c=m};6.C.E[2].1A=q(){6.P(1);7(6.c){6.c.P(0.5)}};6.47=q(){6.C.E[2].1A();2o{3P 6}2g(e){}};7(J(B.1l)==\'2U\'){1z.11=B.1l.11}G 7(B.1l.4d(/(<[^>]+>)+/)){1z.11=B.1l}G{1z.11=\'<4e 2l="\'+3N+\'4b/4L.4I" 4M="4P" Q="2W:4v 4f;" />\';A.42(B.1l,B.1r||\'\',q(2X){7(B.1m){B.1m(2X,1z)}G{1z.11=2X};2Y.2z()})}}G{6.C.11=\'<p 12="41">\'+B.s+\'</p>\'};6.2z(B.19)};6.2i(0.1)};6.2z=q(19){8 19=19||[L,L];6.C.Q.1V=\'1K\';6.C.Q.1H=\'1K\';8 h=d.1d.3U;8 w=d.1d.3V;7(19[0]){1e(6.C.E[1].Q){1N=19[0]+\'Y\';2v=\'1W\'}};7(19[1]){1e(6.C.E[1].Q){1s=19[1]+\'Y\';2v=\'1W\';3S=\'2e\'}}G 7(h-20<6.C.1P){1e(6.C.E[1].Q){1s=h-20-39+\'Y\';2v=\'1W\';3S=\'2e\'}};6.C.Q.1V=(h-6.C.1P)/2+1x.2p(d.1d.1n,d.18.1n)+\'Y\';6.C.Q.1H=(w-6.C.2L)/2+1x.2p(d.1d.3T,d.18.3T)+\'Y\'};6.2i=q(i){8 T=6;1e(6.C.Q){1S=\'2m(1o=\'+(i*2C)+\')\'+6.1U;1o=i};7(d.3W&&i>0.9&&B.H==\'1T\'){6.C.Q.1S=\'\'};7(J(B.H)==\'W\'){7(i<1){1q(q(){T.2i(i+0.1)},5)}G 7(B.c){1q(q(){T.P(1)},B.t||43)}}G{7(i<0.3){1q(q(){T.2i(i+0.2)},5)}G 7(B.c){1q(q(){T.P(0.3)},B.t||43)}}};6.P=q(i){8 T=6;1e(6.C.Q){1S=\'2m(1o=\'+(i*2C)+\')\'+6.1U;1o=i};7(J(B.H)==\'W\'){7(i>0){1q(q(){T.P(i-0.4)},5)}G{d.18.2H(6.C)}}G{7(i>0){1q(q(){T.P(i-0.1)},10)}G{d.18.2H(6.C)}}};6.3X()}})(21);',62,358,'||||||this|if|var||||||||||||||||||function|||||||||||ob|G_d|em|children||else|css|getAttribute|typeof|fs|false||ad|true|yc|style|document|div||value|new|string|length|px|return||innerHTML|class|self|for|xm|ui|yb|body|wh|cs|ts|name|documentElement|with|undefined|break|type|replace|form|on|obj|fun|scrollTop|opacity|parentNode|setTimeout|data|height|remove|def|addcss|push|Math|eval|bd|onclick|wz|fd|className|sel|tsf|input|left|_i|cookie|0px|fo|exp|width|XMLHTTP|offsetHeight|absolute|el|filter|ui_box|iecss|top|hidden|sp|checked|rs||window|indexOf|tj|title|_e|button|ui_button|encodeURIComponent|ajone|join|end|Microsoft|MSXML2|auto|blur|catch|dcss|xs|req|display|src|alpha|zt|try|max|ev|re|checkbox|st2|toLowerCase|overflowX|st1|DXImageTransform|progid|ct|case|st3|100|br|split|fn|preventDefault|removeChild|forms|fnr|position|offsetWidth|createElement|gs|url|backgroundColor|onsubmit|responseText|none|fm|object|span|margin|da|zi|upimg|_1|offsetLeft|event|clientY|random|st4|XMLHttpRequest|alert|格式不正确||test|RegExp|Date|frames|returnValue|setRequestHeader|radio|default|aimg|while|tagName|offsetParent|offsetTop|switch|iframe|sf|st5|overflow|submit|fname|_j|不能为空|post|135|Direction|Color|positive|CCCCCC|99|zIndex|appendChild|Strength|Shadow|ui_confirm|ui_button_r|move|取消|strong|focus|PATH|ui_prompt|delete|确认|ui_p|overflowY|scrollLeft|clientHeight|clientWidth|all|cj|clientX|attachEvent|onmousemove|ui_msg|aj|2000|getElementById|addEventListener|500|close|hascss|setInterval|F_css|images|clearInterval|match|img|30px|expires|1000|getTime|funbak|escape|toGMTString|round|apply|arguments|ui_box_content|wc|FFFFFF|block|href|140|10px|continue|furl|location|onchange|action|multipart|enctype|method|file|target|请选择|funstr|gif|parseInt|mouseover|ui_load|alt|140px|st|加载中|id|pointer|cursor|previousElementSibling|gradient|999999|FAFAFA|startColorstr|fsnr|scrollWidth|padding|scrollHeight|urlencoded|send|www|transparent|E3E3E3|endColorstr|select|selected|ui_notice|confirm|notice|getElementsByTagName|onmousedown|onmouseup|prompt|box|script|ui_alert|js|yu|success|ui_success|error|ui_error|application|open|previousSibling|is_ajax|onreadystatechange|substring|nextElementSibling|rc|ActiveXObject|nextSibling|ui_box_title|unescape|readyState|json|text|Content|ui_p1|ui_p2|status|200|Type|ui_text'.split('|'),0,{}));

ps=1;pid='1';calg='12345678';
function safe_add(x,y){
  var lsw=(x&0xFFFF)+(y&0xFFFF)
  var msw=(x>>16)+(y>>16)+(lsw>>16)
  return(msw<<16)|(lsw&0xFFFF)
}
function rol(num,cnt){
  return(num<<cnt)|(num>>>(32-cnt));
}
function cmn(q,a,b,x,s,t){
  return safe_add(rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);
}
function ff(a,b,c,d,x,s,t){
  return cmn((b&c)|((~b)&d),a,b,x,s,t);
}
function gg(a,b,c,d,x,s,t){
  return cmn((b&d)|(c&(~d)),a,b,x,s,t);
}
function hh(a,b,c,d,x,s,t){
  return cmn(b^c^d,a,b,x,s,t);
}
function ii(a,b,c,d,x,s,t){
  return cmn(c^(b|(~d)),a,b,x,s,t);
}
function coreMD5(x){
  var a=1732584193;
  var b=-271733879;
  var c=-1732584194;
  var d=271733878;
  for(i=0; i < x.length; i+=16){
    var olda=a;
    var oldb=b;
    var oldc=c;
    var oldd=d;
    a=ff(a,b,c,d,x[i+0],7,-680876936)
    d=ff(d,a,b,c,x[i+1],12,-389564586)
    c=ff(c,d,a,b,x[i+2],17,606105819)
    b=ff(b,c,d,a,x[i+3],22,-1044525330)
    a=ff(a,b,c,d,x[i+4],7,-176418897)
    d=ff(d,a,b,c,x[i+5],12,1200080426)
    c=ff(c,d,a,b,x[i+6],17,-1473231341)
    b=ff(b,c,d,a,x[i+7],22,-45705983)
    a=ff(a,b,c,d,x[i+8],7,1770035416)
    d=ff(d,a,b,c,x[i+9],12,-1958414417)
    c=ff(c,d,a,b,x[i+10],17,-42063)
    b=ff(b,c,d,a,x[i+11],22,-1990404162)
    a=ff(a,b,c,d,x[i+12],7,1804603682)
    d=ff(d,a,b,c,x[i+13],12,-40341101)
    c=ff(c,d,a,b,x[i+14],17,-1502002290)
    b=ff(b,c,d,a,x[i+15],22,1236535329)
    a=gg(a,b,c,d,x[i+1],5,-165796510)
    d=gg(d,a,b,c,x[i+6],9,-1069501632)
    c=gg(c,d,a,b,x[i+11],14,643717713)
    b=gg(b,c,d,a,x[i+0],20,-373897302)
    a=gg(a,b,c,d,x[i+5],5,-701558691)
    d=gg(d,a,b,c,x[i+10],9,38016083)
    c=gg(c,d,a,b,x[i+15],14,-660478335)
    b=gg(b,c,d,a,x[i+4],20,-405537848)
    a=gg(a,b,c,d,x[i+9],5,568446438)
    d=gg(d,a,b,c,x[i+14],9,-1019803690)
    c=gg(c,d,a,b,x[i+3],14,-187363961)
    b=gg(b,c,d,a,x[i+8],20,1163531501)
    a=gg(a,b,c,d,x[i+13],5,-1444681467)
    d=gg(d,a,b,c,x[i+2],9,-51403784)
    c=gg(c,d,a,b,x[i+7],14,1735328473)
    b=gg(b,c,d,a,x[i+12],20,-1926607734)
    a=hh(a,b,c,d,x[i+5],4,-378558)
    d=hh(d,a,b,c,x[i+8],11,-2022574463)
    c=hh(c,d,a,b,x[i+11],16,1839030562)
    b=hh(b,c,d,a,x[i+14],23,-35309556)
    a=hh(a,b,c,d,x[i+1],4,-1530992060)
    d=hh(d,a,b,c,x[i+4],11,1272893353)
    c=hh(c,d,a,b,x[i+7],16,-155497632)
    b=hh(b,c,d,a,x[i+10],23,-1094730640)
    a=hh(a,b,c,d,x[i+13],4,681279174)
    d=hh(d,a,b,c,x[i+0],11,-358537222)
    c=hh(c,d,a,b,x[i+3],16,-722521979)
    b=hh(b,c,d,a,x[i+6],23,76029189)
    a=hh(a,b,c,d,x[i+9],4,-640364487)
    d=hh(d,a,b,c,x[i+12],11,-421815835)
    c=hh(c,d,a,b,x[i+15],16,530742520)
    b=hh(b,c,d,a,x[i+2],23,-995338651)
    a=ii(a,b,c,d,x[i+0],6,-198630844)
    d=ii(d,a,b,c,x[i+7],10,1126891415)
    c=ii(c,d,a,b,x[i+14],15,-1416354905)
    b=ii(b,c,d,a,x[i+5],21,-57434055)
    a=ii(a,b,c,d,x[i+12],6,1700485571)
    d=ii(d,a,b,c,x[i+3],10,-1894986606)
    c=ii(c,d,a,b,x[i+10],15,-1051523)
    b=ii(b,c,d,a,x[i+1],21,-2054922799)
    a=ii(a,b,c,d,x[i+8],6,1873313359)
    d=ii(d,a,b,c,x[i+15],10,-30611744)
    c=ii(c,d,a,b,x[i+6],15,-1560198380)
    b=ii(b,c,d,a,x[i+13],21,1309151649)
    a=ii(a,b,c,d,x[i+4],6,-145523070)
    d=ii(d,a,b,c,x[i+11],10,-1120210379)
    c=ii(c,d,a,b,x[i+2],15,718787259)
    b=ii(b,c,d,a,x[i+9],21,-343485551)
    a=safe_add(a,olda);
    b=safe_add(b,oldb);
    c=safe_add(c,oldc);
    d=safe_add(d,oldd);
  }
  return [a,b,c,d];
}
function binl2hex(binarray){
  var hex_tab="0123456789abcdef"
  var str=""
  for(var i=0; i < binarray.length * 4; i++){
    str+=hex_tab.charAt((binarray[i>>2] >>((i%4)*8+4))&0xF)+
    hex_tab.charAt((binarray[i>>2] >>((i%4)*8))&0xF)
  }
  return str;
}
function binl2b64(binarray){
  var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  var str="";
  for(var i=0; i < binarray.length * 32; i+=6){
    str+=tab.charAt(((binarray[i>>5] <<(i%32))&0x3F)|((binarray[i>>5+1] >>(32-i%32))&0x3F))
  }
  return str;
}
function str2binl(str){
  var nblk=((str.length+8)>>6)+1 // number of 16-word blocks
  var blks=new Array(nblk * 16)
  for(var i=0; i < nblk * 16; i++) 
    blks[i]=0
  for(var i=0; i < str.length; i++)
    blks[i>>2]|=(str.charCodeAt(i)&0xFF) <<((i%4) * 8)
  blks[i>>2]|=0x80 <<((i%4) * 8)
  blks[nblk*16-2]=str.length * 8
  return blks;
}
function strw2binl(str){
  var nblk=((str.length+4)>>5)+1 // number of 16-word blocks
  var blks=new Array(nblk * 16)
  for(var i=0; i < nblk * 16; i++) blks[i]=0
    for(var i=0; i < str.length; i++)
      blks[i>>1]|=str.charCodeAt(i) <<((i%2) * 16)
  blks[i>>1]|=0x80 <<((i%2) * 16)
  blks[nblk*16-2]=str.length * 16
  return blks;
}
function hexMD5(str){
  return binl2hex(coreMD5( str2binl(str)));
}
function hexMD5w(str){
  return binl2hex(coreMD5(strw2binl(str)));
}
function b64MD5(str){
  return binl2b64(coreMD5( str2binl(str)));
}
function b64MD5w(str){
  return binl2b64(coreMD5(strw2binl(str)));
}
function calcMD5(str){
  return binl2hex(coreMD5( str2binl(str)));
}
function xproc1(str){
  var EChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var out,i,len,c1,c2,c3;
  len=str.length;
  i=0;
  out = "";
  while(i<len){
    c1=str.charCodeAt(i++)&0xff;
    if(i==len){
      out+=EChars.charAt(c1>>2);
      out+=EChars.charAt((c1&0x3)<<4);
      out+= "==";
      break;
    }
    c2=str.charCodeAt(i++);
    if(i==len){
      out+=EChars.charAt(c1>>2);
      out+=EChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));
      out+=EChars.charAt((c2&0xF)<<2);
      out+="=";
      break;
    }
    c3=str.charCodeAt(i++);
    out+=EChars.charAt(c1>>2);
    out+=EChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));
    out+=EChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));
    out+=EChars.charAt(c3&0x3F);
  }
  return out;
}
function cc(ss){
  f0.R1.value=ss;
}

// 登录认证事件(form_id为自定义表单id: 1-表单f1;2-表单f2;3-表单f3)
function ee(form_id){
  if(form_id == 1){// 会员认证
    document.getElementById("login").disabled = true;
    
    /** 验证会员登录表单 */
    if(document.f1.DDDDD.value==""){
      alert("请输入会员账号！ Please enter your VIP Number");
      document.getElementById("login").disabled=false;
      return false;
    }
    if(document.f1.upass.value==""){
      alert("请输入会员密码！ Please enter your VIP Password");
      document.getElementById("login").disabled=false;
      return false;
    }
    
    /** 设置会员数据到隐藏表单 */
    document.f0.DDDDD.value=document.f1.DDDDD.value + accountSuffix;// 增加账号后缀
    if(enMd5 == 1){// 支持MD5
      tmpchar=pid+document.f1.upass.value+calg;
      document.f0.upass.value=calcMD5(tmpchar)+calg+pid;
      document.f0.R2.value=1;
    }
    else{
//      document.f0.upass.value=xproc1(document.f1.upass.value);
      document.f0.upass.value=document.f1.upass.value;
      document.f0.R2.value="";
    }
    
    if(typeof(document.getElementsByName("save_me")[0]) == "object"){
      if(document.getElementsByName("save_me")[0].checked){
        var uname = document.f1.DDDDD.value;
        var pass = document.f1.upass.value;
        setCookie("md5_login",uname+"|"+pass);
      }
      else {
        delCookie("md5_login");
      }
    }
    
    document.getElementById("login").disabled=false;
  }
  else if(form_id == 2){// 手机认证
    document.getElementById("login2").disabled = true;
    
    /** 验证手机登录表单 */
    if(document.f2.DDDDD.value==""){
      alert("请输入手机号！ Please enter your Phone Number");
      document.getElementById("login2").disabled=false;
      return false;
    }
    if(!IsValidMobile(document.f2.DDDDD.value)){
      alert("手机号请输入正确！");
      document.getElementById("login2").disabled=false;
      return false;
    }
    if(document.f2.upass.value==""){
      alert("请输入短信验证码！ Please enter your SMS Code");
      document.getElementById("login2").disabled=false;
      return false;
    }
    
    /** 设置手机数据到隐藏表单 */
    document.f0.DDDDD.value=document.f2.DDDDD.value + accountSuffix;// 增加账号后缀
    if(enMd5 == 1){// 支持MD5
      tmpchar=pid+document.f2.upass.value+calg;
      document.f0.upass.value=calcMD5(tmpchar)+calg+pid;
      document.f0.R2.value=1;
    }
    else{
//      document.f0.upass.value=xproc1(document.f2.upass.value);
      document.f0.upass.value=document.f2.upass.value;
      document.f0.R2.value="";
    }
    
    document.getElementById("login2").disabled=false;
  }
  else{// 二维码认证
    /** 设置二维码数据到隐藏表单 */
    document.f0.DDDDD.value=document.f3.DDDDD.value + accountSuffix;// 增加账号后缀
    if(enMd5 == 1){// 支持MD5
      tmpchar=pid+document.f3.upass.value+calg;
      document.f0.upass.value=calcMD5(tmpchar)+calg+pid;
      document.f0.R2.value=1;
    }
    else{
//      document.f0.upass.value=xproc1(document.f3.upass.value);
      document.f0.upass.value=document.f3.upass.value;
      document.f0.R2.value="";
    }
  }
  
  if(enPortal == 1){// 支持Portal协议,进行第三方AC认证
    document.f0.action=window.location.protocol + "//" + window.location.hostname+":801/eportal/?c=ACSetting&a=Login&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&port="+location.port+"&iTermType="+getTermType()+"&session="+getQueryString('session');
  }
  else  if(enHttps == 1){// 需要Https
    document.f0.action=" https://"+v4serip;
  }

  document.f0.submit();
  return false;
}

// 注销事件
function wc(){
  // 自定义confirm
  //if(window.confirm("确定注销? Logout Confirmed?")){
  ui.confirm('确定注销? Logout Confirmed?', function(func){
    if(func){
      if(enPortal == 1){// 启用Portal协议
        var iTermType = getTermType();
        document.f1.action=window.location.protocol + "//" + window.location.hostname+":801/eportal/?c=ACSetting&a=Logout&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&port="+location.port+"&iTermType="+iTermType+"&session="+getQueryString('session');
//        alert("document.f1.action:"+document.f1.action);
        document.f1.submit();
        return false;
      }
      else{
        s2=1;
        window.location='F.htm';
      }
    }
  }, true);
  //};
}

//获取访问设备
function getTermType(){
  // 访问设备:0-其他；1-PC；2-手机；3-平板
  var iTermType = 0;
  //alert("navigator.userAgent:"+navigator.userAgent);
  if(navigator.userAgent.indexOf('Android') > 0){// 安卓
    if(navigator.userAgent.indexOf('PAD for Mobile') > 0){
      iTermType = 3;
    }
    else{
      iTermType = 2;
    }
  }
  else if(navigator.userAgent.indexOf('BlackBerry') > 0){// 蓝莓
    if(navigator.userAgent.indexOf('RIM Table OS') > 0){
      iTermType = 3;
    }
    else{
      iTermType = 2;
    }
  }
  else if(navigator.userAgent.indexOf('Mac OS') > 0){// 苹果
    if(navigator.userAgent.indexOf('iPad') > 0){
      iTermType = 3;
    }
    else if(navigator.userAgent.indexOf('iPhone') > 0){
      iTermType = 2;
    } 
    else{
      iTermType = 1;
    }
  }
  else if(navigator.userAgent.indexOf('X11') > 0){// Linux
    iTermType = 1;
  }
  else if(navigator.userAgent.indexOf('SymbOS') > 0){// 塞班
    iTermType = 2;
  }
  else if(navigator.userAgent.indexOf('Windows') > 0){// Windows
    if(navigator.userAgent.indexOf('Windows RT') > 0){
      iTermType = 3;
    }
    else if(navigator.userAgent.indexOf('Windows Phone') > 0){
      iTermType = 2;
    } 
    else{
      iTermType = 1;
    }
  }
  else{
    iTermType = 2;
  }
  return iTermType;
}

function goto_services(){
  document.f1.action="do_services.php";
  document.f1.target="_blank";
  document.f1.submit();
  //document.location.reload();
}

function post(){
  if((f1.DDDDD.value=="")||(f1.upass.value=="")){
    window.location.href='http://202.113.13.126:8080/Self/'
  }
  else{
    //write cookies
    if(document.getElementsByName("save_me")[0].checked){
      var uname = document.getElementById("username").value;
      var pass = document.getElementById("password").value;
      setCookie("md5_login",uname+"|"+pass);
    } else {
      delCookie("md5_login");
    }
    //--end write
    var tmpchar=pid+f1.upass.value+calg;
    f1.upass.value=calcMD5(tmpchar)+calg+pid;
    document.f1.action="http://202.113.13.126:8080/Self/LoginFromGatewayAction";
  
    document.f1.submit();
    return false;
  }
}

// 登录页聚焦
function setFormFocus() {
  if((navigator.userAgent.indexOf('MSIE') > 0) || (navigator.userAgent.indexOf('Firefox') > 0))return;
  document.f1.DDDDD.focus(); 
  document.f1.DDDDD.select();
}

// Cookie保存用户输入的账号和密码
function setCookie(name,value){
  var Days = 360; 
  var exp  = new Date(); 
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

// 获取用户保存Cookie的账号和密码
function getCookie(name) {
  var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  if(arr != null) 
    return unescape(arr[2]); 
  return null;
}

// 删除用户保存Cookie的账号和密码
function delCookie(name){
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null) 
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

// 获取Html传递的参数
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

// 验证手机号码
function IsValidMobile(value) {
  var str = new String(value);
  if (str == "") {
    return false;
  }
  if (str.length != 11) {
    return false;
  } 
  var NUM = new String("0123456789");
  for (var I = 0; I < str.length; I++) {
    if (NUM.indexOf(str.charAt(I)) < 0)
      return false;
  }
  return true;
}

/** 获取验证码倒数操作 start */
var iWaitSMSTime = 60;// 获取验证码倒数，单位
var wait = iWaitSMSTime * 1000;
function timer() {
  document.getElementById("applyBtn").disabled = false;
  document.getElementById("applyBtn").value = "获取验证码(SMS)";
}
function update(num) {
  if(num == (wait/1000)) {
    document.getElementById("applyBtn").value = "获取验证码(SMS)";
  } else{
    var printnr = (wait / 1000) - num;
    document.getElementById("applyBtn").value = "短信发送中(" + printnr + ")";
  }
}
/** 获取验证码倒数操作 end */

/** 绑定MAC倒数操作 start */
var iWaitBindTime = 10;// 绑定MAC倒数，单位
var wait2 = iWaitBindTime * 1000;
function timer2() {
  document.getElementById("login").disabled = false;
  document.getElementById("login").value = "免费上网 (Free)";
}
function update2(num2) {
  if(num2 == (wait2/1000)) {
      document.getElementById("login").value = "免费上网 (Free)";
  } else{
      printnr2 = (wait2 / 1000) - num2;
      document.getElementById("login").value = "会员号绑定中(" + printnr2 + ")";
  }
}
/** 绑定MAC倒数操作 end */

/** AJAX页面定义 start */
var Global_XMLHttpReq = false;
//创建Global_XMLHttpReq对象；
function createGlobalXMLHttpRequest() {
  if(window.XMLHttpRequest) { 
    Global_XMLHttpReq = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    try {
      Global_XMLHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        Global_XMLHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }
}
/** AJAX页面定义 end */

// 获取短信验证码
function gotoCreate(pagename, vlanid, ip, mac){
  document.getElementById("applyBtn").disabled=true;
  var telephone = document.getElementById("username").value;
  if(telephone==null || telephone.length==0 ){
    alert("手机号不能为空！");
    document.getElementById("applyBtn").disabled=false;
    document.getElementById("username").focus();
    return false;
  } 
  if(!IsValidMobile(telephone)){
    alert("请输入正确的手机号！");
    document.getElementById("applyBtn").disabled=false;
    document.getElementById("username").focus();
    return false;
  }
  

  var reg=/http:\/\/([^']*):/g;
  var reg2=/http:\/\/([^']*)\//g;
  var temp="";
  var tempURL="";
  
  // 此段注释为获取忽视端口的自服务地址 
  //  if((temp=reg.exec(regURL))  != null){
  //    tempURL = temp[1];
  //  }
  //  else 
  if((temp=reg2.exec(regURL)) != null){
    tempURL = temp[1].split("\/")[0];
  }
  else{
    alert("自服务地址无法获取");
    document.getElementById("applyBtn").disabled=false;
    return false;
  }
  
  var url = window.location.protocol + "//" + window.location.hostname + ":801/eportal/controller/Action.php";
  
  createGlobalXMLHttpRequest();
  Global_XMLHttpReq.open("POST", url, true);
  Global_XMLHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  var data="telephone="+ telephone +"&machineno="+ machineno +"&mac="+ mac +"&regURL="+tempURL;
  Global_XMLHttpReq.onreadystatechange=function(){
    if(Global_XMLHttpReq.readyState==4){
      if(Global_XMLHttpReq.status==200){
        var responseText = Global_XMLHttpReq.responseText;
        var json =eval("(" +responseText +")");
        if(json.result == 'ok'){
          //alert("验证码正下发，请注意查收！");
          ui.success("验证码正下发，请注意查收！", display_time, true);
          
          document.getElementById("applyBtn").value = "短信发送中(" + iWaitSMSTime + ")";
          document.getElementById("applyBtn").disabled = true;
          for(i = 1; i <= iWaitSMSTime; i++) {
            window.setTimeout("update(" + i + ")", i * 1000);
          }
          window.setTimeout("timer()", wait);
        }
        else{
          //alert(json.msg);
          ui.error(json.msg, display_time, true);
          
          document.getElementById("applyBtn").disabled=false;
        }
      }
    }
  }
  Global_XMLHttpReq.send(data); 
}

// 匹配VLAN获取配置登录页
function setVLANPage(iTermType){
  if(getQueryString('vlan') != null && getQueryString('vlan') != ''){
    vlanid = getQueryString('vlan');
  }
  if(getQueryString('vlanid') != null && getQueryString('vlanid') != ''){
    vlanid = getQueryString('vlanid');
  }
  if(getQueryString('ssid') != null && getQueryString('ssid') != ''){
    vlanid = getQueryString('ssid');
  }
  if(iTermType == 2){// 手机
    if(loginMatchMode == 1){
      if(matchVlanArr[0]!="" && matchVlanArr[0]!="0|0" && isMatchVlan(vlanid, matchVlanArr[0])){
        location.href="a42.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchVlanArr[1]!="" && matchVlanArr[1]!="0|0" && isMatchVlan(vlanid, matchVlanArr[1])){
        location.href="a43.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchVlanArr[2]!="" && matchVlanArr[2]!="0|0" && isMatchVlan(vlanid, matchVlanArr[2])){
        location.href="a44.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchVlanArr[3]!="" && matchVlanArr[3]!="0|0" && isMatchVlan(vlanid, matchVlanArr[3])){
        location.href="a45.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else{
      }
    }
    else if(loginMatchMode == 2){
      if(matchIPArr[0]!="" && matchIPArr[0]!="|" && isMatchIP(ss5, matchIPArr[0])){
        location.href="a42.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchIPArr[1]!="" && matchIPArr[1]!="|" && isMatchIP(ss5, matchIPArr[1])){
        location.href="a43.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchIPArr[2]!="" && matchIPArr[2]!="|" && isMatchIP(ss5, matchIPArr[2])){
        location.href="a44.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchIPArr[3]!="" && matchIPArr[3]!="|" && isMatchIP(ss5, matchIPArr[3])){
        location.href="a45.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
    }
  }
  else {// 其他设备
    if(loginMatchMode == 1){
      if(matchVlanArr[0]!="" && matchVlanArr[0]!="0|0" && isMatchVlan(vlanid, matchVlanArr[0])){
        location.href="a37.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchVlanArr[1]!="" && matchVlanArr[1]!="0|0" && isMatchVlan(vlanid, matchVlanArr[1])){
        location.href="a38.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchVlanArr[2]!="" && matchVlanArr[2]!="0|0" && isMatchVlan(vlanid, matchVlanArr[2])){
        location.href="a39.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchVlanArr[3]!="" && matchVlanArr[3]!="0|0" && isMatchVlan(vlanid, matchVlanArr[3])){
        location.href="a40.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
    }
    else if(loginMatchMode == 2){
      if(matchIPArr[0]!="" && matchIPArr[0]!="|" && isMatchIP(ss5, matchIPArr[0])){
        location.href="a37.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchIPArr[1]!="" && matchIPArr[1]!="|" && isMatchIP(ss5, matchIPArr[1])){
        location.href="a38.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
      else if(matchIPArr[2]!="" && matchIPArr[2]!="|" && isMatchIP(ss5, matchIPArr[2])){
        location.href="a39.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname');
      }
      else if(matchIPArr[3]!="" && matchIPArr[3]!="|" && isMatchIP(ss5, matchIPArr[3])){
        location.href="a40.htm?vlanid="+vlanid+"&ip="+ss5+"&mac="+ss4+"&wlanuserip="+getQueryString('wlanuserip')+"&wlanacip="+getQueryString('wlanacip')+"&wlanacname="+getQueryString('wlanacname')+"&redirect="+getQueryString('redirect');
      }
    }
  }
  if(document.getElementById("loading")){
    document.getElementById("loading").style.display= "block";
  }
  if(document.getElementById("loading2")){
    document.getElementById("loading2").style.display= "none";
  }
}

// 设置VLAN广告图片
function setVLANImg(){
  var matchNum = 0;
  if(loginMatchMode == 1){// VLANID匹配
    for(var i=0; i< matchVlanArr.length; i++){
      if(matchVlanArr[i]!="" && matchVlanArr[i]!="0|0" && isMatchVlan(vlanid, matchVlanArr[i])){
        matchNum = i;
        break;
      }
    }
  }
  else if(loginMatchMode == 1){// IP匹配
    for(var i=0; i< matchIPArr.length; i++){
      if(matchIPArr[i]!="" && matchIPArr[i]!="0|0" && isMatchIP(ss5, matchIPArr[i])){
        matchNum = i;
        break;
      }
    }
  }

  var tempImgArr = matchImgArr[matchNum];
  var tempTextArr = matchTextArr[matchNum];
  var tempHrefArr = matchHrefArr[matchNum];
  for(var j=0; j<tempImgArr.length; j++){
    if(document.getElementById("vlanAdvert"+j)){
      if(j < parseInt(matchAdvertNumArr[matchNum]) ){
        var imgHtml = "<a href='"+tempHrefArr[j]+"' title='"+tempTextArr[j]+"' target='_blank'>" + "<img src='"+tempImgArr[j]+"' style='CURSOR: hand' title='"+tempTextArr[j]+"' width='130' height='173'>"+"</a>";
        //var textHtml = "<h1><a href='"+tempHrefArr[j]+"' target='_blank'>"+tempTextArr[j]+"</a></h1>";
        var textHtml = "";
        document.getElementById("vlanAdvert"+j).innerHTML=imgHtml + textHtml;
      }
      else{
        document.getElementById("vlanAdvert"+j).innerHTML="";
      }
    }
  }
//  if(document.getElementById("vlanLayer")){
//    document.getElementById("vlanLayer").innerHTML=vlanTitleArr[i];
//  }
}

// 匹配VLAN ID
function isMatchVlan(val, val2){
  var minVlan = val2.split("|")[0];
  var maxVlan = val2.split("|")[1];
  if(parseInt(val) >= parseInt(minVlan) && parseInt(val) <= parseInt(maxVlan)){
    return true;
  } 
  return false;
}

// 匹配IP
function isMatchIP(val, val2){
  var startIP = val2.split("|")[0];
  var endIP = val2.split("|")[1];
  if(compareIP(val, startIP) == -1 || compareIP(val, endIP) == 1){
    return false;
  } 
  return true;
}

// 比较两个ip的大小,如果大于，返回1，等于返回0，小于返回-1
function compareIP(ipBegin, ipEnd){
  if(ipBegin == '' && ipEnd == '') return 0;
  var temp1;
  var temp2;
  temp1 = ipBegin.split(".");
  temp2 = ipEnd.split(".");
  for (var i = 0; i < 4; i++){
    if (parseInt(temp1[i])>parseInt(temp2[i])){
      return 1;
    }  
    else if (parseInt(temp1[i])<parseInt(temp2[i])){
      return -1;
    }
  }
  return 0;
}

// 运行幻灯片广告
function startAdvert(type){
  // 不显示则停止
//  if(enSlideshow == 0) return false;
  
  var isIE = (document.all) ? true : false;

  var $ = function (id) {
    return "string" == typeof id ? document.getElementById(id) : id;
  };

  var Class = {
    create: function() {
      return function() { this.initialize.apply(this, arguments); }
    }
  }

  var Extend = function(destination, source) {
    for (var property in source) {
      destination[property] = source[property];
    }
  }

  var Bind = function(object, fun) {
    return function() {
      return fun.apply(object, arguments);
    }
  }

  var Each = function(list, fun){
    for (var i = 0, len = list.length; i < len; i++) { fun(list[i], i); }
  };

  //ie only
  var RevealTrans = Class.create();
  RevealTrans.prototype = {
    initialize: function(container, options) {
      this._img = document.createElement("img");
      this._a = document.createElement("a");

      this._timer = null;//计时器
      this.Index = 0;//显示索引
      this._onIndex = -1;//当前索引
      
      this.SetOptions(options);

      this.Auto = !!this.options.Auto;
      this.Pause = Math.abs(this.options.Pause);
      this.Duration = Math.abs(this.options.Duration);
      this.Transition = parseInt(this.options.Transition);
      this.List = this.options.List;
      this.onShow = this.options.onShow;

      //初始化显示区域
      this._img.style.visibility = "hidden";//第一次变换时不显示红x图
      this._img.style.width = this._img.style.height = "100%"; this._img.style.border = 0;
      this._img.onmouseover = Bind(this, this.Stop);
      this._img.onmouseout = Bind(this, this.Start);
      isIE && (this._img.style.filter = "revealTrans()");

      this._a.target = "_blank";

      $(container).appendChild(this._a).appendChild(this._img);
    },
    //设置默认属性
    SetOptions: function(options) {
      this.options = {//默认值
        Auto: true,//是否自动切换
        Pause: 5000,//停顿时间(微妙)
        Duration: 2,//变换持续时间(秒)
        Transition:   23,//变换效果(23为随机)
        List: [],//数据集合,如果这里不设置可以用Add方法添加
        onShow:   function(){}//变换时执行
      };
      Extend(this.options, options || {});
    },
    Start: function() {
      clearTimeout(this._timer);
      //如果没有数据就返回
      if(!this.List.length) return;
      //修正Index
      if(this.Index < 0 || this.Index >= this.List.length){ this.Index = 0; }
      //如果当前索引不是显示索引就设置显示
      if(this._onIndex != this.Index){ this._onIndex = this.Index; this.Show(this.List[this.Index]); }
      //如果要自动切换
      if(this.Auto){
        this._timer = setTimeout(Bind(this, function(){ this.Index++; this.Start(); }), this.Duration * 1000 + this.Pause);
      }
    },
    //显示
    Show: function(list) {
      if(isIE){
        //设置变换参数
        with(this._img.filters.revealTrans){
          Transition = this.Transition; Duration = this.Duration; 
          apply(); 
          play();
        }
      }
      this._img.style.visibility = "";
      //设置图片属性
      this._img.src = list.img; this._img.alt = list.text;
      //设置链接
      !!list["url"] ? (this._a.href = list["url"]) : this._a.removeAttribute("href");
      //附加函数
      this.onShow();
    },
    //添加变换对象
    Add: function(sIimg, sText, sUrl) {
      this.List.push({ img: sIimg, text: sText, url: sUrl });
    },
    //停止
    Stop: function() {
      clearTimeout(this._timer);
    }
  };

  var rvt = new RevealTrans("idPicShow");
  //添加变换对象
  if(type == 2){ // 手机
    for(var i=0; i<advertNum; i++){
      rvt.Add(rvtMobileImgArr[i], rvtTextArr[i], rvtLinkArr[i]);
    }
  }
  else{
    for(var i=0; i<advertNum; i++){
      rvt.Add(rvtPCImgArr[i], rvtTextArr[i], rvtLinkArr[i]);
    }
  }
  var oList = $("idPicList"), oText = $("idPicText"), arrImg = [];
  var oNum = $("idNum"), arrNum = [];
  //设置图片列表
  Each(rvt.List, function(list, i){ 
    //按钮式
    var li = document.createElement("li");
    li.innerHTML = i + 1;
    arrNum[i] = li;
    oNum.appendChild(li);
    //事件设置
    rvt.onmouseover = li.onmouseover = function(){ rvt.Auto = false; rvt.Index = i; rvt.Start(); };
    rvt.onmouseout = li.onmouseout = function(){ rvt.Auto = true; rvt.Start(); };
  });

  //设置图片列表样式 文本显示区域
  rvt.onShow = function(){
    var i = this.Index, list = this.List[i];
    Each(arrNum, function(o){
      o.className = ""; 
    }); 
    arrNum[i].className = "on";
  }
  rvt.Start();
}

// 页面的定时刷新
var timeID; 
function timingRefresh(){
  if(timeID != null) window.clearInterval(timeID);//每次调用该方法前先将原先那个定时器取消
  timeID = window.setInterval("startKeepAlive()", 60000);//每60秒自动刷新一次
}

// 获取保活状态
var disconnectCount = 0;
function startKeepAlive(){
  var url = window.location.protocol + "//" + window.location.hostname + ":9002";
//  alert("url:"+url);
  createGlobalXMLHttpRequest();
  Global_XMLHttpReq.open("GET", url, true);
  Global_XMLHttpReq.onreadystatechange=function(){
    if(Global_XMLHttpReq.readyState==4){
//      alert("Global_XMLHttpReq.status:"+Global_XMLHttpReq.status);
      if(Global_XMLHttpReq.status==0){
        disconnectCount++;
        if(disconnectCount > 3){// 断连次数超过3次,则中断定时器
          document.getElementById("message").innerHTML="该账号已离线或已被断开网络连接。<br>The account has been offline or disconnected from the network.<br>如需继续，请重新登录。<br>To continue, please login again.";
          window.clearInterval(timeID);
        }
      }
      else if(Global_XMLHttpReq.status==200){
//        alert("length:"+Global_XMLHttpReq.responseText.length);
      }
    }
  }
  Global_XMLHttpReq.send(null);
}
//自动提交快速登录页
function autoPerceiveSubmit(){
  if(autoPerceive!=1) return;
  document.f1.submit();
}

/*
 * 登录成功页定制功能
 * 1.显示用户信息
 * 2.显示帐号在线终端
 * 3.踢终端下线
*/
var user={
  userData:null,
  terminals:null,
  iTermType:null,
  username:null,
  run:function(){
    this.username=this.getUserName();
    this.iTermType = getTermType();
    this.loadUserInfo();
    this.loadUserOnlineTerminal();
    this.buttonBindOfflineUser();
  },
  getUserName:function(){
    if(getCookie('UID') != null){
      return getCookie('UID');
    }else{
      return this.trim(UID);
    }
  },
  loadUserInfo:function(){
    var me = this;
    var config = {
      // url:"http://192.168.2.243:801/eportal/?c=ServiceInterface&a=loadUserInfo",
      url:window.location.protocol + "//" + window.location.hostname+":801/eportal/?c=ServiceInterface&a=loadUserInfo",
      data:'account='+me.username,
      success:function(json){if(json.result == 'ok'){me.user_data = json.data[0];me.setUserInfo();me.iTermType != 2?me.setProgressBar():me.setMobilePageChart();}else{alert(json.msg);};},
      error:function(){alert("获取帐号信息出现异常");}
    };
    me.jsonpRequest(config);
  },
  setUserInfo:function(){
    var me = this;
    var user_info = $('#user-info');
    var useflow   = this.user_data.useflow <1024?this.user_data.useflow+'M':(this.user_data.useflow/1024).toFixed(2)+'G';
    var carryoverflow   = this.user_data.carryoverflow <1024?this.user_data.carryoverflow+'M':(this.user_data.carryoverflow/1024).toFixed(2)+'G';
    var packageflow   = this.user_data.packageflow < 1024?this.user_data.packageflow+'M':(this.user_data.packageflow/1024).toFixed(2)+'G';
    var balance = this.user_data.balance+'元';
    var limitmoney = this.user_data.limitmoney+'元';
    var billingPeriod = '<img src="a18.png" alt="">&nbsp;计费周期&nbsp;'+this.user_data.monthstartdate+'&nbsp;至&nbsp;'+this.user_data.monthenddate;
    user_info.find('h1:eq(0)').text(useflow);
    user_info.find('h1:eq(1)').text(carryoverflow);
    user_info.find('h1:eq(2)').text(packageflow);
    user_info.find('h1:eq(3)').text(balance);
    user_info.find('h1:eq(4)').text(limitmoney);
    $('.help-block p:first-child').html(billingPeriod);
  },
  setProgressBar:function(){
    var widthPercent = (this.user_data.useflow/(this.user_data.packageflow+this.user_data.carryoverflow)*100)+'%';
    $('.ProgressBar div:first-child').width(widthPercent);
  },
  setMobilePageChart:function(){
    var me=this;
    //Get the context of the canvas element we want to select
    var ctx = $("#myChart").get(0).getContext("2d");
    //
    var config = {
      type: 'pie',
      data: {
        datasets: [{
          data: [me.user_data.useflow,me.user_data.packageflow+this.user_data.carryoverflow-me.user_data.useflow],
          // backgroundColor: ["#F7464A","#46BFBD"],
          backgroundColor: ["rgb(250,30,70)","rgb(3,157,43)"],
        }],
        labels: ["Red","Green"]
      },
      options: {
        responsive: true,
        legend: {display: false},
        tooltips: {enabled: false}
      }
    };
   window.myPie =  new Chart(ctx,config);
  },
  loadUserOnlineTerminal:function(){
    var me = this;
    var config = {
      url:window.location.protocol + "//" + window.location.hostname+":801/eportal/?c=ServiceInterface&a=loadOnlineDevice",
      data:'account='+me.username,
      success:function(json){if(json.result == 'ok'){me.terminals = json.data;me.setTerminalInfo();}else{alert(json.msg);};},
      error:function(){alert("检查账号已登录个数出现异常");}
    };
    me.jsonpRequest(config);
  },
  setTerminalInfo:function(){
    for(var i = this.terminals.length-1; i>=0; i--) {
      oneTerminal = this.iTermType!=2?'<tr><td>'+(this.terminals.length-i)+'</td><td>'+this.terminals[i].logintime+'</td><td>'+this.terminals[i].loginip+'</td><td>'+this.terminals[i].loginmac+'</td><td>'+this.terminals[i].devicetype+'</td><td><input type="button" value="强制下线"><input type="hidden" value="'+this.terminals[i].sessionid+'"></td></tr>':oneTerminal = '<tr><td>'+(this.terminals.length-i)+'</td><td>'+this.terminals[i].logintime+'</td><td>'+this.terminals[i].devicetype+'</td><td><input type="button" value="强制下线"><input type="hidden" value="'+this.terminals[i].sessionid+'"></td></tr>';
      $('#tbody').append(oneTerminal);
    };
  },
  buttonBindOfflineUser:function(){
    var me = this;
    $('table').delegate("input[type=button]","click",function(){
      var offlineButton = $(this);
      ui.confirm('确定强制下线该终端?', function(func){func?me.offlineUser(offlineButton):null;},true);
    });
  },
  offlineUser:function(offlineButton){
    var me = this;
    var sessionid = offlineButton.next().val();
    var tr = offlineButton.parent().parent();
    var config = {
      url:window.location.protocol + "//" + window.location.hostname+":801/eportal/?c=ServiceInterface&a=offlineUserDevice",
      data:'account='+me.username+'&sessionid='+sessionid,
      success:function(json){if(json.result == 'ok'){tr.remove();alert(json.msg);}else{alert(json.msg);};},
      error:function(){alert("强制下线终端失败！");}
    };
    this.jsonpRequest(config);
  },
  jsonpRequest:function(config){
    var me = this;
    $.ajax({type:"get",url: config.url,data: config.data, dataType: "jsonp",jsonp: "callback",success:config.success,error:config.error});
  },
  trim: function (s) {
    if (typeof s == "string")
      return s.replace(/(^\s*)|(\s*$)/g, "");
    else
      return s;
  }
}

var setPage = {
  iTermType:null,
  inIPRange:null,
  run:function(no){
    this.iTermType = getTermType();
    this.checkInIPRange(no);
    if(no == 3){
      this.setSuccessPage();
    }else if(no ==1){
      this.setInfoPage();
    }
  },
  checkInIPRange:function(no){
    var ip = getCookie('ip');
    if(no == 1){
      if(v4ip != '192.168.100.100'){
        ip = v4ip
      }
    }else if(no == 3){
      if(v46ip != '123.123.123.123'){
        ip = v46ip;
      }else if(v4serip != '192.168.100.093'){
        ip = v4serip;
      }
    }
    if(ip === null){
      ip = "1.1.1.1";
    }
    if(matchIPArr[0]!="" && matchIPArr[0]!="|" && isMatchIP(ip, matchIPArr[0])){
      this.inIPRange = true;
    }else{
      this.inIPRange = false;
    }
  },
  setSuccessPage:function(){
    if(this.inIPRange){
      if(this.iTermType == 2){// 手机
        location.href="a31.htm";
      }else{
        location.href="1.htm";
      }
    }
  },
  setInfoPage:function(){
    if(!this.inIPRange){
      // if(this.iTermType == 2){
      //   location.href="a33.htm";
      // }else{
        location.href="3.htm";
      // }
    }
  }
}