/******************* 
 * Lexical_Pm *
 *******************/


// store info about the experiment session:
let expName = 'Lexical_PM';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'Geschlecht': '',
    'Alter': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const Instr_OT_PM_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Instr_OT_PM_loopLoopBegin(Instr_OT_PM_loopLoopScheduler));
flowScheduler.add(Instr_OT_PM_loopLoopScheduler);
flowScheduler.add(Instr_OT_PM_loopLoopEnd);


const OT_Part2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(OT_Part2LoopBegin(OT_Part2LoopScheduler));
flowScheduler.add(OT_Part2LoopScheduler);
flowScheduler.add(OT_Part2LoopEnd);




flowScheduler.add(ThanksRoutineBegin());
flowScheduler.add(ThanksRoutineEachFrame());
flowScheduler.add(ThanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Instr_OT_PMClock;
var text_Instr_OT_PM;
var key_resp;
var FixationClock;
var Fix;
var trialClock;
var key_resp_3;
var key_resp_pm;
var Words;
var feedback_dataClock;
var feedback;
var ThanksClock;
var text_thanks;
var key_resp_10;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instr_OT_PM"
  Instr_OT_PMClock = new util.Clock();
  text_Instr_OT_PM = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Instr_OT_PM',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Fixation"
  FixationClock = new util.Clock();
  Fix = new visual.TextStim({
    win: psychoJS.window,
    name: 'Fix',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_pm = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Words = new visual.TextStim({
    win: psychoJS.window,
    name: 'Words',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "feedback_data"
  feedback_dataClock = new util.Clock();
  feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Thanks"
  ThanksClock = new util.Clock();
  text_thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_thanks',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var Instr_OT_PM_loop;
function Instr_OT_PM_loopLoopBegin(Instr_OT_PM_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Instr_OT_PM_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'instruct.xlsx', '2'),
      seed: undefined, name: 'Instr_OT_PM_loop'
    });
    psychoJS.experiment.addLoop(Instr_OT_PM_loop); // add the loop to the experiment
    currentLoop = Instr_OT_PM_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Instr_OT_PM_loop.forEach(function() {
      snapshot = Instr_OT_PM_loop.getSnapshot();
    
      Instr_OT_PM_loopLoopScheduler.add(importConditions(snapshot));
      Instr_OT_PM_loopLoopScheduler.add(Instr_OT_PMRoutineBegin(snapshot));
      Instr_OT_PM_loopLoopScheduler.add(Instr_OT_PMRoutineEachFrame());
      Instr_OT_PM_loopLoopScheduler.add(Instr_OT_PMRoutineEnd(snapshot));
      Instr_OT_PM_loopLoopScheduler.add(Instr_OT_PM_loopLoopEndIteration(Instr_OT_PM_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function Instr_OT_PM_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Instr_OT_PM_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Instr_OT_PM_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var OT_Part2;
function OT_Part2LoopBegin(OT_Part2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    OT_Part2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'OT_Post.xlsx',
      seed: undefined, name: 'OT_Part2'
    });
    psychoJS.experiment.addLoop(OT_Part2); // add the loop to the experiment
    currentLoop = OT_Part2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    OT_Part2.forEach(function() {
      snapshot = OT_Part2.getSnapshot();
    
      OT_Part2LoopScheduler.add(importConditions(snapshot));
      OT_Part2LoopScheduler.add(FixationRoutineBegin(snapshot));
      OT_Part2LoopScheduler.add(FixationRoutineEachFrame());
      OT_Part2LoopScheduler.add(FixationRoutineEnd(snapshot));
      OT_Part2LoopScheduler.add(trialRoutineBegin(snapshot));
      OT_Part2LoopScheduler.add(trialRoutineEachFrame());
      OT_Part2LoopScheduler.add(trialRoutineEnd(snapshot));
      OT_Part2LoopScheduler.add(feedback_dataRoutineBegin(snapshot));
      OT_Part2LoopScheduler.add(feedback_dataRoutineEachFrame());
      OT_Part2LoopScheduler.add(feedback_dataRoutineEnd(snapshot));
      OT_Part2LoopScheduler.add(OT_Part2LoopEndIteration(OT_Part2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function OT_Part2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(OT_Part2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function OT_Part2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var Instr_OT_PMMaxDurationReached;
var _key_resp_allKeys;
var Instr_OT_PMMaxDuration;
var Instr_OT_PMComponents;
function Instr_OT_PMRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instr_OT_PM' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Instr_OT_PMClock.reset();
    routineTimer.reset();
    Instr_OT_PMMaxDurationReached = false;
    // update component parameters for each repeat
    text_Instr_OT_PM.setText(instr_text);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Instr_OT_PM.started', globalClock.getTime());
    Instr_OT_PMMaxDuration = null
    // keep track of which components have finished
    Instr_OT_PMComponents = [];
    Instr_OT_PMComponents.push(text_Instr_OT_PM);
    Instr_OT_PMComponents.push(key_resp);
    
    Instr_OT_PMComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instr_OT_PMRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instr_OT_PM' ---
    // get current time
    t = Instr_OT_PMClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Instr_OT_PM* updates
    if (t >= 0.0 && text_Instr_OT_PM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Instr_OT_PM.tStart = t;  // (not accounting for frame time here)
      text_Instr_OT_PM.frameNStart = frameN;  // exact frame index
      
      text_Instr_OT_PM.setAutoDraw(true);
    }
    
    
    // if text_Instr_OT_PM is active this frame...
    if (text_Instr_OT_PM.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instr_OT_PMComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instr_OT_PMRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instr_OT_PM' ---
    Instr_OT_PMComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instr_OT_PM.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Instr_OT_PM" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var FixationMaxDurationReached;
var FixationMaxDuration;
var FixationComponents;
function FixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    FixationClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    FixationMaxDurationReached = false;
    // update component parameters for each repeat
    Fix.setColor(new util.Color('white'));
    Fix.setPos([0, 0]);
    Fix.setText('+');
    Fix.setFont('Arial');
    Fix.setHeight(0.1);
    psychoJS.experiment.addData('Fixation.started', globalClock.getTime());
    FixationMaxDuration = null
    // keep track of which components have finished
    FixationComponents = [];
    FixationComponents.push(Fix);
    
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function FixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fixation' ---
    // get current time
    t = FixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Fix* updates
    if (t >= 0.0 && Fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fix.tStart = t;  // (not accounting for frame time here)
      Fix.frameNStart = frameN;  // exact frame index
      
      Fix.setAutoDraw(true);
    }
    
    
    // if Fix is active this frame...
    if (Fix.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Fix.tStop = t;  // not accounting for scr refresh
      Fix.frameNStop = frameN;  // exact frame index
      // update status
      Fix.status = PsychoJS.Status.FINISHED;
      Fix.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fixation' ---
    FixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Fixation.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (FixationMaxDurationReached) {
        FixationClock.add(FixationMaxDuration);
    } else {
        FixationClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var _key_resp_3_allKeys;
var _key_resp_pm_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    key_resp_pm.keys = undefined;
    key_resp_pm.rt = undefined;
    _key_resp_pm_allKeys = [];
    Words.setText(word_lex);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(key_resp_3);
    trialComponents.push(key_resp_pm);
    trialComponents.push(Words);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_3.tStop = t;  // not accounting for scr refresh
      key_resp_3.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_3.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_3.tStop = t;  // not accounting for scr refresh
        key_resp_3.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_3.status = PsychoJS.Status.FINISHED;
        key_resp_3.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_3 is active this frame...
      if (key_resp_3.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_3.getKeys({keyList: ['y','n','x','c','s'], waitRelease: false});
        _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
        if (_key_resp_3_allKeys.length > 0) {
          key_resp_3.keys = _key_resp_3_allKeys.map((key) => key.name);  // storing all keys
          key_resp_3.rt = _key_resp_3_allKeys.map((key) => key.rt);
          key_resp_3.duration = _key_resp_3_allKeys.map((key) => key.duration);
          // was this correct?
          if (key_resp_3.keys == corresp) {
              key_resp_3.corr = 1;
          } else {
              key_resp_3.corr = 0;
          }
        }
      }
      
      
      // *key_resp_pm* updates
      if (t >= 0.0 && key_resp_pm.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_pm.tStart = t;  // (not accounting for frame time here)
        key_resp_pm.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_pm.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_pm.start(); }); // start on screen flip
      }
      frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_pm.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_pm.tStop = t;  // not accounting for scr refresh
        key_resp_pm.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_pm.status = PsychoJS.Status.FINISHED;
        frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (key_resp_pm.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          key_resp_pm.tStop = t;  // not accounting for scr refresh
          key_resp_pm.frameNStop = frameN;  // exact frame index
          // update status
          key_resp_pm.status = PsychoJS.Status.FINISHED;
          key_resp_pm.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if key_resp_pm is active this frame...
        if (key_resp_pm.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_pm.getKeys({keyList: ['space','q'], waitRelease: false});
          _key_resp_pm_allKeys = _key_resp_pm_allKeys.concat(theseKeys);
          if (_key_resp_pm_allKeys.length > 0) {
            key_resp_pm.keys = _key_resp_pm_allKeys.map((key) => key.name);  // storing all keys
            key_resp_pm.rt = _key_resp_pm_allKeys.map((key) => key.rt);
            key_resp_pm.duration = _key_resp_pm_allKeys.map((key) => key.duration);
            // was this correct?
            if (key_resp_pm.keys == corresppm) {
                key_resp_pm.corr = 1;
            } else {
                key_resp_pm.corr = 0;
            }
          }
        }
        
        
        // *Words* updates
        if (t >= 0.0 && Words.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          Words.tStart = t;  // (not accounting for frame time here)
          Words.frameNStart = frameN;  // exact frame index
          
          Words.setAutoDraw(true);
        }
        
        
        // if Words is active this frame...
        if (Words.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (Words.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          Words.tStop = t;  // not accounting for scr refresh
          Words.frameNStop = frameN;  // exact frame index
          // update status
          Words.status = PsychoJS.Status.FINISHED;
          Words.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        trialComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function trialRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'trial' ---
        trialComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
        // was no response the correct answer?!
        if (key_resp_3.keys === undefined) {
          if (['None','none',undefined].includes(corresp)) {
             key_resp_3.corr = 1;  // correct non-response
          } else {
             key_resp_3.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_3.corr, level);
        }
        psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
        psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
        if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
            psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
            }
        
        key_resp_3.stop();
        // was no response the correct answer?!
        if (key_resp_pm.keys === undefined) {
          if (['None','none',undefined].includes(corresppm)) {
             key_resp_pm.corr = 1;  // correct non-response
          } else {
             key_resp_pm.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_pm.corr, level);
        }
        psychoJS.experiment.addData('key_resp_pm.keys', key_resp_pm.keys);
        psychoJS.experiment.addData('key_resp_pm.corr', key_resp_pm.corr);
        if (typeof key_resp_pm.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_pm.rt', key_resp_pm.rt);
            psychoJS.experiment.addData('key_resp_pm.duration', key_resp_pm.duration);
            }
        
        key_resp_pm.stop();
        if (routineForceEnded) {
            routineTimer.reset();} else if (trialMaxDurationReached) {
            trialClock.add(trialMaxDuration);
        } else {
            trialClock.add(2.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var feedback_dataMaxDurationReached;
var feedback_dataMaxDuration;
var feedback_dataComponents;
function feedback_dataRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'feedback_data' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        feedback_dataClock.reset(routineTimer.getTime());
        routineTimer.add(0.100000);
        feedback_dataMaxDurationReached = false;
        // update component parameters for each repeat
        feedback.setText(' ');
        psychoJS.experiment.addData('feedback_data.started', globalClock.getTime());
        feedback_dataMaxDuration = null
        // keep track of which components have finished
        feedback_dataComponents = [];
        feedback_dataComponents.push(feedback);
        
        feedback_dataComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function feedback_dataRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'feedback_data' ---
        // get current time
        t = feedback_dataClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *feedback* updates
        if (t >= 0.0 && feedback.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          feedback.tStart = t;  // (not accounting for frame time here)
          feedback.frameNStart = frameN;  // exact frame index
          
          feedback.setAutoDraw(true);
        }
        
        
        // if feedback is active this frame...
        if (feedback.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          feedback.tStop = t;  // not accounting for scr refresh
          feedback.frameNStop = frameN;  // exact frame index
          // update status
          feedback.status = PsychoJS.Status.FINISHED;
          feedback.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        feedback_dataComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function feedback_dataRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'feedback_data' ---
        feedback_dataComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('feedback_data.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (feedback_dataMaxDurationReached) {
            feedback_dataClock.add(feedback_dataMaxDuration);
        } else {
            feedback_dataClock.add(0.100000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var ThanksMaxDurationReached;
var _key_resp_10_allKeys;
var ThanksMaxDuration;
var ThanksComponents;
function ThanksRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'Thanks' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        ThanksClock.reset();
        routineTimer.reset();
        ThanksMaxDurationReached = false;
        // update component parameters for each repeat
        text_thanks.setText('Vielen Dank, das Speichern dauert kurz etwas');
        key_resp_10.keys = undefined;
        key_resp_10.rt = undefined;
        _key_resp_10_allKeys = [];
        // Disable downloading results to browser
        psychoJS._saveResults = 0;
        
        // Generate filename für results
        let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
        
        //Extract data object from experiment
        let dataObj = psychoJS._experiment._trialsData;
        
        // Convert data object to CSV
        let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
            return Object.values(it).toString()
        }).join('\n')
        
        // Send data to OSF via DataPipe
        console.log('Saving data...');
        fetch('https://pipe.jspsych.org/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
            },
            body: JSON.stringify({
                experimentID: 'B7tjwK0fhZpu', // *Update with your Datapipe Experiment ID*
                filename: filename,
                data: data,
             }),
        }).then(response => response.json()).then(data => {
            // Log response and force experiument to end
            console.log(data);
            quitPsychoJS();
        })
        psychoJS.experiment.addData('Thanks.started', globalClock.getTime());
        ThanksMaxDuration = null
        // keep track of which components have finished
        ThanksComponents = [];
        ThanksComponents.push(text_thanks);
        ThanksComponents.push(key_resp_10);
        
        ThanksComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
           });
        return Scheduler.Event.NEXT;
      }
    }
    
    
function ThanksRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'Thanks' ---
        // get current time
        t = ThanksClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_thanks* updates
        if (t >= 0.0 && text_thanks.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_thanks.tStart = t;  // (not accounting for frame time here)
          text_thanks.frameNStart = frameN;  // exact frame index
          
          text_thanks.setAutoDraw(true);
        }
        
        
        // if text_thanks is active this frame...
        if (text_thanks.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *key_resp_10* updates
        if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          key_resp_10.tStart = t;  // (not accounting for frame time here)
          key_resp_10.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
        }
        
        // if key_resp_10 is active this frame...
        if (key_resp_10.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_10.getKeys({keyList: 'space', waitRelease: false});
          _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
          if (_key_resp_10_allKeys.length > 0) {
            key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
            key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        ThanksComponents.forEach( function(thisComponent) {
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
          }
        });
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function ThanksRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'Thanks' ---
        ThanksComponents.forEach( function(thisComponent) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        });
        psychoJS.experiment.addData('Thanks.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_10.corr, level);
        }
        psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
        if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
            psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
            routineTimer.reset();
            }
        
        key_resp_10.stop();
        // the Routine "Thanks" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
function importConditions(currentLoop) {
      return async function () {
        psychoJS.importAttributes(currentLoop.getCurrentTrial());
        return Scheduler.Event.NEXT;
        };
    }
    
    
async function quitPsychoJS(message, isCompleted) {
      // Check for and save orphaned data
      if (psychoJS.experiment.isEntryEmpty()) {
        psychoJS.experiment.nextEntry();
      }
      psychoJS.window.close();
      psychoJS.quit({message: message, isCompleted: isCompleted});
      
      return Scheduler.Event.QUIT;
    }
