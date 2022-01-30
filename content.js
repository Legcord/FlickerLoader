const extVersion = chrome.runtime.getManifest().version;

const inject = async (branch, version) => {
  console.log('[FlickerLoader] Injecting...');

  const js = await (await fetch("https://raw.githubusercontent.com/FlickerMod/dist/main/build.js")).text(); // JSON.parse(localStorage.getItem('goosemodCoreJSCache'));

  const el = document.createElement('script');
  
  el.appendChild(document.createTextNode(js));
  
  document.body.appendChild(el);

  console.log('[FlickerLoader] Injected fetched JS');
};



