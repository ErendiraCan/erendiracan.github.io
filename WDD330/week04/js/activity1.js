//This function like its name says it's for count the steps of each robot
function countingSteps(state, robot, memory) {
  //This FOR refers to the robot started at step 0 and the ++ is because it's increasing
    for (let steps = 0;; steps++) {
      //The state and parcels are from the files I download for the activity
      if (state.parcels.length == 0) return steps;
      //The parameters give the robot a direction
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }
  //This function is for count the robot steps
  function compareRobots(robot1, memory1, robot2, memory2) {
    //Both robots starts at 0
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
      //The village State is from the files I downloaded in the activity
      let state = VillageState.random();
      //Comparing both robots steps
      total1 += countingSteps(state, robot1, memory1);
      total2 += countingSteps(state, robot2, memory2);
    }
    //The concatenation for the output
    console.log(`Robot 1 needed ${total1 / 100} steps per task`)
    console.log(`Robot 2 needed ${total2 / 100}`)
  }
  //This is calling other functions inside the files I download additionally to this activity
  compareRobots(routeRobot, [], goalOrientedRobot, []);