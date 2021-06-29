class Commands extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            commands: []
        };

        // Initial data
        this.state.commands = Object.values(this.props);

        this.ref = React.createRef();

    }

    handleClick(commands, event) {
        var repository = document.getElementById("repositoryName").value;
        var title = commands.title;
        var command = commands.content.replace("(?)", repository);

        var element = document.createElement('textarea');
        element.value = command;
        document.body.appendChild(element);
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);

        document.getElementById("clipboard").innerHTML = `${title}:\n\n${command}`;

        this.setState({});
    }

    reloop(commands) {
        let commandsContainer = [];
        for (let i = 0; i < commands.length; i++) {
            commandsContainer.push(
                React.createElement('div', {
                    key: i + 1,
                    className: "command",
                    onClick: this.handleClick.bind(this, commands[i])
                }, commands[i].title)
            );
        }
        return commandsContainer;
    }

    render() {

        let commandsContainer = this.reloop(this.state.commands);

        // return commandsContainer; // Render without parent element

        return React.createElement('div', { // Render with parent element
            ref: this.ref,
            className: "command-box"
        }, commandsContainer);

    }
}