'use strict';

console.log('js is running!');

var template = React.createElement(
                        'div',
                        null,
                        React.createElement(
                                                'h1',
                                                null,
                                                'Indsecision app.'
                        ),
                        React.createElement(
                                                'p',
                                                null,
                                                'One test'
                        )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
