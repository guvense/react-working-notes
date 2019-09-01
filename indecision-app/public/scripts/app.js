'use strict';

var buttonName = 'Show';
var pVis = false;

var onButtonClick = function onButtonClick() {

    if (buttonName == 'Hide') {
        buttonName = 'Show';
        pVis = false;
    } else {
        buttonName = 'Hide';
        pVis = true;
    }

    render();
};

var render = function render() {

    var temp = React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: onButtonClick },
            buttonName
        ),
        pVis && React.createElement(
            'p',
            null,
            'Nisan'
        )
    );

    var tempText = document.getElementById('apptext');
    ReactDOM.render(temp, tempText);
};

render();
