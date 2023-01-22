class Commands extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commands: [],
    };

    // Initial data
    this.state.commands = Object.values(this.props);

    this.ref = React.createRef();
  }

  handleClick(commands, event) {
    var repositoryName = document.getElementById("repositoryName").value;
    var branch = document.getElementById("branch").value;

    var title = commands.title;

    // Replace placeholders
    var command = commands.content.replace("<repositoryName>", repositoryName);
    command = command.replace("<branch>", branch);

    var element = document.createElement("textarea");
    element.value = command;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);

    document.getElementById("clipboard").innerHTML = `${title}:\n\n${command}`;

    this.setState({});

    var quicklogExists = document.getElementById("quicklog");

    if (quicklogExists) {
      document.getElementById("quicklog").remove();
    }

    var QuickLog = `Command copied to clipboard`; var q = document.createElement("div"); q.setAttribute("id", "quicklog"); document.body.appendChild( Object.assign(q, { textContent: QuickLog }) ).style.cssText = "z-index: 1000; filter: invert(0%); color: black !important; background-color: #FFF000; font: bold 25px Comic Sans MS; box-shadow: 0px 0px 5px 1px white; padding: 5px; border: 3px solid black; border-radius: 10px; top: 10px; left: 10px; position: fixed;";

    const timeout = setTimeout(() => {
      q.remove();
    }, 2000);
  }

  reloop(commands) {
    let commandsContainer = [];
    for (let i = 0; i < commands.length; i++) {
      commandsContainer.push(
        React.createElement(
          "div",
          {
            key: i + 1,
            className: "command",
            onClick: this.handleClick.bind(this, commands[i]),
          },
          commands[i].title
        )
      );
    }
    return commandsContainer;
  }

  render() {
    let commandsContainer = this.reloop(this.state.commands);

    // return commandsContainer; // Render without parent element

    return React.createElement(
      "div",
      {
        // Render with parent element
        ref: this.ref,
        className: "command-box",
      },
      commandsContainer
    );
  }
}
