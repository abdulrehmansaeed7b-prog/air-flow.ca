;(function(){
  function swapImg(img){
    var u=img.getAttribute('src');
    if(u && window.__AIRFLOW_IMGS && window.__AIRFLOW_IMGS[u]){ img.src=window.__AIRFLOW_IMGS[u]; }
  }
  function sweep(root){
    if(!root || root.nodeType!==1) return;
    if(root.tagName==='IMG') swapImg(root);
    var imgs=root.querySelectorAll?root.querySelectorAll('img'):[];
    for(var i=0;i<imgs.length;i++) swapImg(imgs[i]);
  }
  function init(){
    sweep(document.documentElement);
    if(window.MutationObserver){
      var obs=new MutationObserver(function(muts){
        for(var m=0;m<muts.length;m++){
          var nodes=muts[m].addedNodes;
          for(var n=0;n<nodes.length;n++) sweep(nodes[n]);
        }
      });
      obs.observe(document.documentElement,{childList:true,subtree:true});
    }
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
  init();
})();
