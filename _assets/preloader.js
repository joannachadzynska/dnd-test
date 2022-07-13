var req = new XMLHttpRequest(); 

var scriptLoaded$ = rxjs
    .fromEvent(req, 'readystatechange')
    .pipe(
        rxjs.operators.first(function(e) { return e.target.readyState === 4 })
    );

var scriptLoadProgress$ = rxjs
    .fromEvent(req, 'progress')
    .pipe(
        rxjs.operators.map(function(e) { return e.loaded / e.total }),
        rxjs.operators.takeUntil(scriptLoaded$)
    );

function preload(script, onLoad) {
    var scriptPath = script + '?' + Math.floor(Math.random()*100000);
    req.open('GET', scriptPath, true);  
    req.send();

    scriptLoaded$.subscribe(scriptDidLoad);

    function scriptDidLoad() {
        var scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', scriptPath);
        scriptElement.addEventListener('load', onLoad);
        document.head.appendChild(scriptElement);
    }
}

window['loadProgress$'] = scriptLoadProgress$;
