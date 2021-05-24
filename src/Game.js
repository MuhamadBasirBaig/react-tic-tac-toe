import React, { useState } from "react";
import ReactDOM from "react-dom";

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: "",
    };
  }

  handleClick = () => {
    if (this.props.boxState == undefined) {
      this.props.changePlayer(
        this.props.boxNumber,
        this.props.currentPlayer === 1 ? "X" : "O"
      );
    }
  };

  render() {
    const { currentVal } = this.state;
    return (
      <div className="square" style={squareStyle} onClick={this.handleClick}>
        {this.props.boxState}
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 1,
      turnsCount: 0,
      winner: "",
      reRender: true,
      reset: false,
      box1: {
        val: "",
        madeBy: null,
      },
      box2: {
        val: "",
        madeBy: null,
      },
      box3: {
        val: "",
        madeBy: null,
      },
      box4: {
        val: "",
        madeBy: null,
      },
      box5: {
        val: "",
        madeBy: null,
      },
      box6: {
        val: "",
        madeBy: null,
      },
      box7: {
        val: "",
        madeBy: null,
      },
      box8: {
        val: "",
        madeBy: null,
      },
      box9: {
        val: "",
        madeBy: null,
      },
    };
  }

  changePlayer = (boxNumber, value) => {
    let { currentPlayer, turnsCount } = this.state;
    turnsCount = this.state.turnsCount + 1;

    this.setState({
      [boxNumber]: { value: value, madeBy: this.state.currentPlayer },
      turnsCount,
    });

    if (turnsCount < 9) {
      if (currentPlayer == 1) {
        this.setState({ currentPlayer: 2 });
      } else {
        this.setState({ currentPlayer: 1 });
      }
    }
  };
  componentDidUpdate() {
    const { box1, box5, box9, turnsCount, reRender } = this.state;

    if (
      box1.madeBy == 1 &&
      box1.value == "X" &&
      turnsCount == 9 &&
      box5.value == "X" &&
      box5.madeBy == 1 &&
      box9.value == "X" &&
      box9.madeBy == 1 &&
      reRender
    ) {
      this.setState({ winner: "Player 1", reRender: false });
    }
    if (
      turnsCount == 9 &&
      box1.value == "O" &&
      box1.madeBy == 2 &&
      box5.value == "O" &&
      box5.madeBy == 2 &&
      box9.value == "O" &&
      box9.madeBy == 2 &&
      reRender
    ) {
      this.setState({ winner: "Player 2", reRender: false });
    }
  }

  resetBoard = () => {
    this.setState({
      currentPlayer: 1,
      turnsCount: 0,
      winner: "",
      reset: true,
      box1: {
        val: "a",
        madeBy: null,
      },
      box2: {
        val: "",
        madeBy: null,
      },
      box3: {
        val: "",
        madeBy: null,
      },
      box4: {
        val: "",
        madeBy: null,
      },
      box5: {
        val: "",
        madeBy: null,
      },
      box6: {
        val: "",
        madeBy: null,
      },
      box7: {
        val: "",
        madeBy: null,
      },
      box8: {
        val: "",
        madeBy: null,
      },
      box9: {
        val: "",
        madeBy: null,
      },
    });
  };

  render() {
    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>
          Next player: <span>{this.state.currentPlayer === 1 ? "X" : "O"}</span>
        </div>
        <div id="winnerArea" className="winner" style={instructionsStyle}>
          Winner: <span>{this.state.winner}</span>
        </div>
        <button style={buttonStyle} onClick={this.resetBoard}>
          Reset
        </button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square
              changePlayer={this.changePlayer}
              currentPlayer={this.state.currentPlayer}
              boxNumber={"box1"}
              boxState={this.state.box1.value}
              reset={this.state.reset}
            />
            <Square
              changePlayer={this.changePlayer}
              currentPlayer={this.state.currentPlayer}
              boxNumber={"box2"}
              boxState={this.state.box2.value}
            />
            <Square
              changePlayer={this.changePlayer}
              currentPlayer={this.state.currentPlayer}
              boxNumber={"box3"}
              boxState={this.state.box3.value}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              changePlayer={this.changePlayer}
              currentPlayer={this.state.currentPlayer}
              boxNumber={"box4"}
              boxState={this.state.box4.value}
            />
            <Square
              changePlayer={this.changePlayer}
              currentPlayer={this.state.currentPlayer}
              boxNumber={"box5"}
              boxState={this.state.box5.value}
            />
            <Square
              changePlayer={this.changePlayer}
              currentPlayer={this.state.currentPlayer}
              boxNumber={"box6"}
              boxState={this.state.box6.value}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              changePlayer={this.changePlayer}
              currentPlayer={this.state.currentPlayer}
              boxNumber={"box7"}
              boxState={this.state.box7.value}
            />
            <Square
              changePlayer={this.changePlayer}
              currentPlayer={this.state.currentPlayer}
              boxNumber={"box8"}
              boxState={this.state.box8.value}
            />
            <Square
              changePlayer={this.changePlayer}
              currentPlayer={this.state.currentPlayer}
              boxNumber={"box9"}
              boxState={this.state.box9.value}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}
