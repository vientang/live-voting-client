import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

// hoist properties on window object to the global object
// so we don't have to call window everytime
Object.keys(window).forEach((key) => {
	if (!(key in global)) {
		global[key] = window[key];
	}
});

chai.use(chaiImmutable);