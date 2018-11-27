'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Autocomplete = _interopDefault(require('../src/A/Autocomplete.js'));

function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'React Autocomplete Demo'
        ),
        React.createElement(
            'h2',
            null,
            'Start typing and experience the autocomplete wizardry!'
        ),
        React.createElement(Autocomplete, {
            suggestions: [{ country: 'argentina', code: 'ar' }, { country: 'brasil', code: 'br' }, { country: 'chile', code: 'cl' }, { country: 'uruguay', code: 'uy' }]
        })
    );
}

module.exports = App;
