export default function createFunctions(buttonsFormat, buttonsAttr) {

    var show = false;

    const functions = {
        link() {
            let url = prompt("Enter the URL");
            document.execCommand('createLink', false, url);
        },
        unlink() {
            format('unlink', false);
        },
        copyAll() {
            const currentFocusElement = window.getSelection().anchorNode.parentNode;
            if (currentFocusElement.id != 'textEditor') textEditor.focus();
            format('selectAll');
            document.getSelection().empty();
        },
        image() {
            let url = prompt("Enter the URL");
            format('insertImage', url)
        }
    }

    function format(command, attr = '') {
        document.execCommand(command, false, attr);
    }
    let buttonsToCreate = buttonsFormat;
    let counter;
    let buttonListLength = buttonsToCreate.length;
    for (counter = 0; counter < buttonListLength; counter++) {
        let newButton = buttonsToCreate[counter];
        let attr = '';
        let name = newButton.name;
        //add text format functions
        if (name.includes(',')) {
            let values = name.split(',');
            name = values[0];
            attr = values[1];
        }
        newButton.addEventListener('click', function () {
            format(name, attr);
        })
    }
    buttonsToCreate = buttonsAttr;
    buttonListLength = buttonsToCreate.length;
    for (counter = 0; counter < buttonListLength; counter++) {
        let bt = buttonsToCreate[counter];
        bt.onclick = functions[bt.name];

    }
}