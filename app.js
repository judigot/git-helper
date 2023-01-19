window.onload = function () {
  document.getElementById("repositoryName").focus();

  const pageName = window.location.pathname.split("/").pop();

  let commands = [];

  //==========Ajax==========//
  $.ajax({
    url: "gitCommands.json",
    type: "GET",
    async: false,
    dataType: "json",
  })
    .done(function (gitCommands) {
      if (pageName === "index.html") {
        commands = gitCommands;
      }
      if (pageName === "delete.html") {
        $.ajax({
          url: "deleteCommands.json",
          type: "GET",
          async: false,
          dataType: "json",
        })
          .done(function (deleteCommands) {
            // Version 1
            // commands = gitCommands.concat(deleteCommands);

            // Version 2 (avoid accidental deletions)
            commands = deleteCommands;
          })
          .fail(function (data) {});
      }
    })
    .fail(function (data) {});
  //==========Ajax==========//

  renderCommands(commands);
};

function renderCommands(people) {
  var element = React.createElement("h1", null, "Hello, world");

  ReactDOM.render(
    React.createElement(Commands, people),
    document.getElementById("root")
  );
}
