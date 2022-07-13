NIE ZAMIENIAC mathquill.js na nowszą wersję bo to nasz fork!!!

Przed zmianami:


```

...
// VanillaSymbol's
LatexCmds[' '] = LatexCmds.space = bind(VanillaSymbol, '\\ ', '&nbsp;');

LatexCmds["'"] = LatexCmds.prime = bind(VanillaSymbol, "'", '&prime;');
LatexCmds['\u2033'] = LatexCmds.dprime = bind(VanillaSymbol, '\u2033', '&Prime;');
...
```
Po zmianach:
```
...
// VanillaSymbol's
LatexCmds[' '] = LatexCmds.space = bind(VanillaSymbol, '\\ ', '&nbsp;');
LatexCmds['\u200a'] = LatexCmds.hairsp = bind(VanillaSymbol, '\\hairsp ', '&hairsp;');

LatexCmds["'"] = LatexCmds.prime = bind(VanillaSymbol, "'", '&prime;');
LatexCmds['\u2033'] = LatexCmds.dprime = bind(VanillaSymbol, '\u2033', '&Prime;');
...
```