const formFieldRef = document.querySelector(".form-field");
const robotIconWrapperRef = document.querySelector(".robot-icon__wrapper");
const robotFieldRef = document.querySelector(".robot__field");

formFieldRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const submittedData = {};

  formData.forEach((value, key) => {
    submittedData[key] = Number(value);
  });

  if (
    submittedData["x"] > robotFieldRef.clientWidth - 50 ||
    submittedData["y"] > robotFieldRef.clientHeight - 50
  ) {
    return;
  }
  robotIconWrapperRef.style.transform = `translate(${submittedData["x"]}px, ${submittedData["y"]}px)`;
}

const r1 = {
    posX: 0,
    posY: 0,
}

// Go north, 10cm
// Go south, 5cm


const initRobot = (robot) => {
    this.moveNorth = (distance) => {
        robot.posY += distance;
    }
    this.moveSouth = (distance) => {
        robot.posY -= distance;    
    }
    this.moveEast = (distance) => {
        robot.posX += distance;
    }
    this.moveWest = (distance) => {
        robot.posX -= distance;    
    }
    return this;
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------

const runTests = () => {
  const getContext = () => {
    const myRobot = {
      posX: 0,
      posY: 0
    }
    const myRobotInterface = initRobot(myRobot);
    return {r: myRobot, i: myRobotInterface}
  }
  let ctx;

  // Test move north.
  console.log("Running test Move North")
  ctx = getContext();
  ctx.i.moveNorth(10);
  console.assert(ctx.r.posY == 10);

  // Test move South.
  console.log("Running test Move South")
  ctx = getContext();
  ctx.i.moveSouth(10);
  console.assert(ctx.r.posY == -10);

  // Test move East.
  console.log("Running test Move East")
  ctx = getContext();
  ctx.i.moveEast(10);
  console.assert(ctx.r.posX == 10);

  // Test move West.
  console.log("Running test Move West")
  ctx = getContext();
  ctx.i.moveWest(10);
  console.assert(ctx.r.posX == -10);
}

runTests();

class Robot {
  constructor () {
    this.x = 0;
    this.y = 0;
  }

  moveEast() {
    this.x += 1;
  }
}
