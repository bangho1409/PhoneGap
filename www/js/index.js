$(document).on('vclick', '#btnalert', ConfirmApp);
function ConfirmApp() {
    var message = 'Confirmation.';
    var title = 'Confirm';
    var buttonLabel = 'Ring A Bell, Vibrate';

    navigator.notification.confirm(message, callback, title, buttonLabel);

    function callback(selectbtn) {
        if (selectbtn == 0) {
            alert('Confirm is dismissed.');
        }

        else if (selectbtn == 1) {
            Beep();
        }

        else if (selectbtn == 2) {
            Vibration();
        }
    }
}

function Beep() {
    navigator.notification.beep(2);
}


function Vibration() {
    navigator.vibrate(1000, 1000, 1000, 1000, 1000);
}
