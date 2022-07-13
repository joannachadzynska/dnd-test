createjs.Text.prototype._drawTextLine = function(ctx, text, y) {

    var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    var fontSize;
    if (this.__fontSize !== undefined) {
        fontSize = this.__fontSize;
    } else {
        const match = this.font.match(/([0-9]+)px/);
        if (match) {
            fontSize = Number(match[1]);
            this.__fontSize = fontSize
        }
    }

    var baselineModifier = 2;
    if (this.__baselineModifier !== undefined) {
        baselineModifier = this.__baselineModifier;
    } else {
        const isCambria = this.font.search('Cambria') !== -1;
        if (isCambria) baselineModifier = -1;
        this.__baselineModifier = baselineModifier;
    }

    if (this.textBaseline !== 'alphabetic') {
        this.textBaseline = 'alphabetic';
        ctx.textBaseline = this.textBaseline;
    }

    if (fontSize) {
        y += fontSize + baselineModifier;
    } else {
        y += lineHeight;
    }

    if (this.outline) { ctx.strokeText(text, 0, y, this.maxWidth||0xFFFF); }
    else { ctx.fillText(text, 0, y, this.maxWidth||0xFFFF); }
};

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
    document.body.classList.add('safari');
}

var resumeAudioContext = function() {
	// handler for fixing suspended audio context in Chrome
	try {
		if (createjs.WebAudioPlugin.context && createjs.WebAudioPlugin.context.state === "suspended") {
			createjs.WebAudioPlugin.context.resume();
			// Should only need to fire once
			window.removeEventListener("click", resumeAudioContext);
		}
	} catch (e) {
		// SoundJS context or web audio plugin may not exist
		console.error("There was an error while trying to resume the SoundJS Web Audio context...");
		console.error(e);
	}
};
window.addEventListener("click", resumeAudioContext);

window['getClip'] = function(parent, child) {
    return parent.children.find(function(item ) { return item.name ? item.name.slice(0, child.length) === child : false; });
}