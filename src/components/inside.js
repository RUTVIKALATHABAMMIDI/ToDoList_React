import React, { Component } from "react";

class Inside extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submit = this.submit.bind(this);
    this.addElement = this.addElement.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  submit(e) {
    e.preventDefault();
    // var a = document.getElementById('insider');
    this.addElement();
  }

  addElement() {
    let main = document.createElement("div");
    let task = document.createElement("div");
    let done = document.createElement("input");
    let dele = document.createElement("input");

    main.setAttribute("className", "main");
    task.setAttribute("className", "task");
    done.setAttribute("className", "done");
    dele.setAttribute("className", "dele");

    done.setAttribute("type", "checkBox");
    dele.setAttribute("value", "Delete");
    dele.setAttribute("type", "submit");
    // dele.setAttribute("onClick", "deleteItem()");
    dele.addEventListener("click", this.deleteItem);

    let a = document.getElementById("inpBox").value;
    if (document.getElementById("inpBox").value == "") {
      alert("Enter a task!");
      return;
    }
    task.innerHTML = a;
    main.appendChild(done);
    main.appendChild(task);
    main.appendChild(dele);

    let insider = document.getElementById("insider");
    insider.appendChild(main);
    document.getElementById("inpBox").value = "";
  }

  deleteItem(e) {
    e.preventDefault();
    e.target.parentNode.remove();
  }

  render() {
    return (
      <div className="App">
        <div className="label">Enter your Task here :</div>
        <input
          type="text"
          name="name"
          id="inpBox"
          // value={this.state.name}
          className="inpBox"
        />
        <input
          type="submit"
          value="Submit"
          onClick={this.submit}
          className="submitBtn"
        />
        <div id="insider" className="insider">
          {/*
//             <div className = "main">
//               <input type="checkbox">
//               <div className = "task">
//                 this is a task
//               </div>
//               <input type="submit" value="Done" onClick = {this.delete}/>
//             </div>
//           */}
        </div>
      </div>
    );
  }
}

export default Inside;
