function generateSchedule(classes, professors, params) {
    var sortedClasses = sortTimes(classes, params);
    sortOtherParams(sortedClasses, professors, params);
    var scheduleData = addClasses(sortedClasses, params, totalCredits);
    var classList = scheduleData[0];
    var totalCredits = scheduleData[1];

    var finalSchedule = createSchedule(classList, totalCredits);
    console.log(finalSchedule);
    return finalSchedule;
}

function createSchedule(classList, totalCredits) {
    var finalSchedule = {
        name: "Untitled Schedule",
        savedTime: "Not Saved",
        creditHours: totalCredits,
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: []
    };
    for (var i = 0; i < classList.length; i++) {
        var c = classList[i];
        var ts = c['timeSlots'];
        for (var t in ts) {
            if (ts[t].length > 0) {
                var cc = finalClass(c, ts[t]);
                finalSchedule[t].push(cc);
            }
        }
    }
    return finalSchedule;
}

function finalClass(c, t) {
    cTitle = c['title'];
    if (c['section'][0] == 'R') {
        cTitle = '(Recitation) ' + c['title'];
    }
    else if (c['section'][0] == 'L') {
        cTitle = '(Lab) ' + c['title'];
    }
    return {
        title: cTitle,
        subject: c['subject'],
        course: c['course'],
        CRN: c['CRN'],
        section: c['section'],
        location: c['location'],
        credits: c['credits'],
        timeSlot: t,
        classType: c['classType'],
        requires: c['requires'],
        professor: c['professor']
    }
}

function addClasses(classes, params) {
    var creditsIdx = {0: [3,6], 1: [6,9], 2: [9,12], 3: [12,15], 4: [15,18], 5: [18,21], 6: [0,18]};    
    var chosenClasses = [];
    var credits = 0;
    for (var i = 0; i < classes.length; i++) {
        if (!(classes[i][0]['section'][0] == "R" || classes[i][0]['section'][0] == "L")) {
            if (checkDuplicate(classes[i][0], chosenClasses)) {
                addCredits = credits + classes[i][0]['credits'];
                if (addCredits <= creditsIdx[params['credits']][1]) {
                    if (classes[i][0]['requires'] == null) {
                        if (checkTimeConflict(classes[i][0], chosenClasses)) {
                            chosenClasses.push(classes[i][0]);
                            credits = addCredits;
                        }
                    }
                    else {
                        if (i + 1 < classes.length) {
                            if (checkTimeConflict(classes[i][0], chosenClasses) && checkTimeConflict(classes[i+1][0], chosenClasses)) {
                                chosenClasses.push(classes[i][0]);
                                chosenClasses.push(classes[i+1][0]);
                                credits = addCredits;
                            }
                            i++;
                        }
                    }
                }
            }
      }
    }
    return [chosenClasses, credits];
}

function checkTimeConflict(currentSection, chosenClasses) {
    if (currentSection['location'] == 'IN') {
        return true;
    }
    var currentSectionTimes = currentSection['timeSlots'];
    for (var i = 0; i < chosenClasses.length; i++) {
        var chosenClassTimes = chosenClasses[i]['timeSlots'];
        if (compareTimes(currentSectionTimes['sunday'], chosenClassTimes['sunday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['monday'], chosenClassTimes['monday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['tuesday'], chosenClassTimes['tuesday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['wednesday'], chosenClassTimes['wednesday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['thursday'], chosenClassTimes['thursday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['friday'], chosenClassTimes['friday'])) {
            return false;
        }
        if (compareTimes(currentSectionTimes['saturday'], chosenClassTimes['saturday'])) {
            return false;
        }
    }
    return true;
}

function checkDuplicate(currentSection, chosenClasses) {
    var currentSectionSubject = currentSection['subject'];
    var currentSectionCourse = currentSection['course'];
    for (var i = 0; i < chosenClasses.length; i++) {
        var chosenSectionSubject = chosenClasses[i]['subject'];
        var chosenSectionCourse = chosenClasses[i]['course'];
        if (currentSectionSubject == chosenSectionSubject && currentSectionCourse == chosenSectionCourse) {
            return false;
        }
    }
    return true;
}

function compareTimes(current, chosen) {
    if (current.length > 0 && chosen.length > 0) {
        for (var i = 0; i < chosen.length; i++) {
            for (var j = 0; j < current.length; j++) {
                if (current[j] == chosen[i]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function sortTimes(classes, params) {
    var ac = JSON.parse(JSON.stringify(classes));
    var sortedClasses = [];
    if (params['optimize'][3]) {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                if (section['location'] == 'IN' && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                    sortedClasses.push([createClass(tmpAC[i], section), 1]);
                    if (section['requires'] != null) {
                        var requiredSection = findRequired(tmpAC[i], section['requires']);
                        sortedClasses.push([createClass(tmpAC[i], requiredSection), 1]);
                    }
                    ac[i]['sections'].splice(j, 1);
                }
            }
        }
    }
    if (params['times'][0]) {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                var timesOption = false;
                for (day in section['timeSlots']) {
                    dayArr = section['timeSlots'][day];
                    for (var d = 0; d < dayArr.length; d++) {
                        if (dayArr[d] < 3 && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                            timesOption = true;
                        }
                        else {
                            timesOption = false;
                        }
                    }
                }
                if (timesOption) {
                    sortedClasses.push([createClass(tmpAC[i], section), 1]);
                    if (section['requires'] != null) {
                        requiredSection = findRequired(tmpAC[i], section['requires']);
                        sortedClasses.push([createClass(tmpAC[i], requiredSection), 1]);
                    }        
                    ac[i]['sections'].splice(j, 1);
                }
            }
        }
    }
    if (params['times'][1]) {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                var timesOption = false;
                for (day in section['timeSlots']) {
                    dayArr = section['timeSlots'][day];
                    for (var d = 0; d < dayArr.length; d++) {
                        if ((dayArr[d] > 2 && dayArr[d] < 5) && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                            timesOption = true;
                        }
                        else {
                            timesOption = false;
                        }
                    }
                }
                if (timesOption) {
                    sortedClasses.push([createClass(tmpAC[i], section), 1]);
                    if (section['requires'] != null) {
                        requiredSection = findRequired(tmpAC[i], section['requires']);
                        sortedClasses.push([createClass(tmpAC[i], requiredSection), 1]);
                    }        
                    ac[i]['sections'].splice(j, 1);
                }
            }
        }
    }
    if (params['times'][2]) {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                var timesOption = false;
                for (day in section['timeSlots']) {
                    dayArr = section['timeSlots'][day];
                    for (var d = 0; d < dayArr.length; d++) {
                        if ((dayArr[d] > 4 && dayArr[d] < 7) && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                            timesOption = true;
                        }
                        else {
                            timesOption = false;
                        }
                    }
                }
                if (timesOption) {
                    sortedClasses.push([createClass(tmpAC[i], section), 1]);
                    if (section['requires'] != null) {
                        requiredSection = findRequired(tmpAC[i], section['requires']);
                        sortedClasses.push([createClass(tmpAC[i], requiredSection), 1]);
                    }        
                    ac[i]['sections'].splice(j, 1);
                }
            }
        }
    }
    if (params['times'][3]) {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                var timesOption = false;
                for (day in section['timeSlots']) {
                    dayArr = section['timeSlots'][day];
                    for (var d = 0; d < dayArr.length; d++) {
                        if (dayArr[d] > 6 && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                            timesOption = true;
                        }
                        else {
                            timesOption = false;
                        }
                    }
                }
                if (timesOption) {
                    sortedClasses.push([createClass(tmpAC[i], section), 1]);
                    if (section['requires'] != null) {
                        requiredSection = findRequired(tmpAC[i], section['requires']);
                        sortedClasses.push([createClass(tmpAC[i], requiredSection), 1]);
                    }        
                    ac[i]['sections'].splice(j, 1);
                }
            }
        }
    }
    for (var i = 0; i < ac.length; i++) {
        for (var j = 0; j < ac[i]['sections'].length; j++) {
            var section = ac[i]['sections'][j];
            if (!(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {                
                sortedClasses.push([createClass(ac[i], section), 0]);
                if (section['requires'] != null) {
                    requiredSection = findRequired(ac[i], section['requires']);
                    sortedClasses.push([createClass(ac[i], requiredSection), 0]);
                } 
            }  
        }
    }
    return sortedClasses;
}

function findRequired(c, crn) {
    for (var i = 0; i < c['sections'].length; i++) {
        if (c['sections'][i]['CRN'] == crn) {
            return c['sections'][i];
        }
    }
}

function sortOtherParams(classes, professors, params) {
    var ac = classes;
    var profs = ratedProfessors(professors);
    var sortedClasses = [];
    for (var i = 0; i < ac.length; i++) {
        if (profs.hasOwnProperty(ac[i][0]['professor'])) {
            if (params['difficulty'] == 0) {
                if (profs[ac[i][0]['professor']][1] <= 2.5) {
                    ac[i][1] += 1;
                }
            }
            else if (params['difficulty'] == 1) {
                if (profs[ac[i][0]['professor']][1] > 2.5 && profs[ac[i][0]['professor']][1] <= 3.5) {
                    ac[i][1] += 1;
                }
            }
            else if (params['difficulty'] == 2) {
                if (profs[ac[i][0]['professor']][1] > 3.5) {
                    ac[i][1] += 1;
                }
            }
            if (params['optimize'][2]) {
                if (profs[ac[i][0]['professor']][2] >= 2.5) {
                    ac[i][1] += 1;
                }
            }
            if (params['optimize'][4]) {
                if (profs[ac[i][0]['professor']][0] >= 3.5) {
                    ac[i][1] += 1;
                }
            }
        }
    }
}

function ratedProfessors(professors) {
    rated = {};
    for (var i = 0; i < professors.length; i++) {
        rating = professors[i]['rating'];
        difficulty = professors[i]['difficulty'];
        popularity = (rating + (5 - difficulty)) / 2;
        rated[professors[i]['professor']] = [rating, difficulty, popularity];
    }
    return rated;
}

function createClass(c, s) {
    return {
        title: c['title'],
        subject: c['subject'],
        course: c['course'],
        CRN: s['CRN'],
        section: s['section'],
        location: s['location'],
        credits: s['credits'],
        timeSlots: s['timeSlots'],
        classType: s['classType'],
        requires: s['requires'],
        professor: s['professor']
    }
}
