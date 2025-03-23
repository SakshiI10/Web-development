const log = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set timeout fired </b>";
    console.log("I'm your log");
};

let st1 = setTimeout(() => {
    log();
    clearTimeout(st1); // Stop the timeout (though it only runs once anyway)
}, 2000);
