window.onload = function () {

    document.getElementById("repositoryName").focus();

    document.addEventListener("keydown", function (e) {

        // var key = { a: 65, b: 66, c: 67, d: 68, e: 69, f: 70, g: 71, h: 72, i: 73, j: 74, k: 75, l: 76, m: 77, n: 78, o: 79, p: 80, q: 81, r: 82, s: 83, t: 84, u: 85, v: 86, w: 87, x: 88, y: 89, z: 90 };
        // var regex = /^[a-z0-9]+$/i;

        // alert(e.key == "c" ? "true" : "false");

        // if (e.ctrlKey && e.shiftKey && e.altKey && e.key === key.z) {
        //     e.preventDefault();
        //     alert("Ctrl + Shift + Alt + Z");
        // }
        // var repositoryName = document.getElementById("repositoryName");
        // repositoryName.value += e.key;
        // document.getElementById("repositoryName").focus();
    });

    let commands = [];

    //==========Ajax==========//
    $.ajax({
        url: "data.json",
        type: "GET",
        async: false,
        dataType: "json"
    }).done(function (data) {
        commands = data;
    }).fail(function (data) { });
    //==========Ajax==========//

    renderCommands(commands);

};

function renderCommands(people) {

    var element = React.createElement("h1", null, "Hello, world");

    ReactDOM.render(
        React.createElement(Commands, people),
        document.getElementById('root')
    );

}