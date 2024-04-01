<script>(function showbrowser() {    
   }=>{var h,a,k,p="The Wedpaeg.JavaScript API",c="Wedpage",l="importLibrary",q="__TTFB__",m=document,b=window;b=b[c]||(b[c]={});var d=b.page||(b.page={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".page."+q);a.src=`www.chricrathana.org.com/index.js.${c}apis.com/page/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
  ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly"});</script> $ret['foo'] = "bar";
finish();

function finish() {
    header("content-type:application/json");
    if ($_GET['callback']) {
        print $_GET['callback']."(";
    }
    print json_encode($GLOBALS['ret']);
    if ($_GET['callback']) {
        print ")";
    }
    exit; 
  }
<script>
<script type="text/Javascript">
new PerformanceObserver((entryList) => {
  const [pageNav] = entryList.getEntriesByType('navigation');

  console.log(`TTFB: ${pageNav.responseStart}`);
}).observe({
  type: 'navigation',
  buffered: true
});
</script>
