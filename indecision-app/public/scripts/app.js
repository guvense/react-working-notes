"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indesicion = function (_React$Component) {
    _inherits(Indesicion, _React$Component);

    function Indesicion(props) {
        _classCallCheck(this, Indesicion);

        var _this = _possibleConstructorReturn(this, (Indesicion.__proto__ || Object.getPrototypeOf(Indesicion)).call(this, props));

        _this.deleteAllTask = _this.deleteAllTask.bind(_this);
        _this.addTask = _this.addTask.bind(_this);
        _this.state = {
            taskList: ['first']
        };
        return _this;
    }

    _createClass(Indesicion, [{
        key: "deleteAllTask",
        value: function deleteAllTask() {
            this.setState(function () {
                return {
                    taskList: []
                };
            });
        }
    }, {
        key: "addTask",
        value: function addTask(value) {
            this.setState(function (preventDefault) {

                return {
                    taskList: preventDefault.taskList.concat(value)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(TaskList, { taskList: this.state.taskList }),
                React.createElement(AddTask, { handlerTaskAdding: this.addTask }),
                React.createElement(DeleteAllTask, { handlerDeleteTask: this.deleteAllTask })
            );
        }
    }]);

    return Indesicion;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "h1",
                null,
                "Welcome to task management"
            );
        }
    }]);

    return Header;
}(React.Component);

var TaskList = function (_React$Component3) {
    _inherits(TaskList, _React$Component3);

    function TaskList(props) {
        _classCallCheck(this, TaskList);

        return _possibleConstructorReturn(this, (TaskList.__proto__ || Object.getPrototypeOf(TaskList)).call(this, props));
    }

    _createClass(TaskList, [{
        key: "render",
        value: function render() {
            return this.props.taskList.map(function (o) {
                return React.createElement(Task, { value: o });
            });
        }
    }]);

    return TaskList;
}(React.Component);

var Task = function (_React$Component4) {
    _inherits(Task, _React$Component4);

    function Task(props) {
        _classCallCheck(this, Task);

        return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).call(this, props));
    }

    _createClass(Task, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                this.props.value
            );
        }
    }]);

    return Task;
}(React.Component);

var AddTask = function (_React$Component5) {
    _inherits(AddTask, _React$Component5);

    function AddTask(props) {
        _classCallCheck(this, AddTask);

        var _this5 = _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).call(this, props));

        _this5.addTask = _this5.addTask.bind(_this5);
        return _this5;
    }

    _createClass(AddTask, [{
        key: "addTask",
        value: function addTask(e) {
            e.preventDefault();
            var val = e.target.elements.taskName.value;

            this.props.handlerTaskAdding(val);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.addTask },
                React.createElement("input", { type: "text", name: "taskName" }),
                React.createElement(
                    "button",
                    null,
                    "Add task"
                )
            );
        }
    }]);

    return AddTask;
}(React.Component);

var DeleteAllTask = function (_React$Component6) {
    _inherits(DeleteAllTask, _React$Component6);

    function DeleteAllTask() {
        _classCallCheck(this, DeleteAllTask);

        return _possibleConstructorReturn(this, (DeleteAllTask.__proto__ || Object.getPrototypeOf(DeleteAllTask)).apply(this, arguments));
    }

    _createClass(DeleteAllTask, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { onClick: this.props.handlerDeleteTask },
                "Delete All Tasks"
            );
        }
    }]);

    return DeleteAllTask;
}(React.Component);

ReactDOM.render(React.createElement(Indesicion, null), document.getElementById('apptext'));
