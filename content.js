function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
sleep(5000).then(() => {

const load = async () => {
	 console.log('[FlickerLoader] Injecting...');
	const response = await fetch("https://raw.githubusercontent.com/FlickerMod/dist/main/build.js");
	const text = await response.text()
	eval(text);
}
const el = document.createElement('script');
el.appendChild(document.createTextNode(`(${load.toString()})();`));
document.body.appendChild(el);
});
