function generateSchedule(classes, professors, params) {
    var sortedClasses = sortTimes(classes, params);
    if ((params['difficulty'] != null && params['difficulty'] != 3) || params['optimize'][2] || params['optimize'][4]) {
        sortedClasses = sortOtherParams(sortedClasses, professors, params);
    }
    var scheduleData = addClasses(sortedClasses, params, totalCredits);
    var classList = scheduleData[0];
    var totalCredits = scheduleData[1];

    var finalSchedule = createSchedule(classList, totalCredits);
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

    function findRequired(c, crn) {
        for (var i = 0; i < c['sections'].length; i++) {
            if (c['sections'][i]['CRN'] == crn) {
                return c['sections'][i];
            }
        }
    }

    function addSections(lowerBound, upperBound) {
        var tmpAC = ac.slice();
        var requiredIdx;
        for (var i = 0; i < tmpAC.length; i++) {
            requiredIdx = [];
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                if (section['location'] != 'IN') {
                    var timesOption = false;
                    for (day in section['timeSlots']) {
                        dayArr = section['timeSlots'][day];
                        for (var d = 0; d < dayArr.length; d++) {
                            if ((dayArr[d] == lowerBound || dayArr[d] == upperBound) && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                                timesOption = true;
                            }
                        }
                    }
                    if (timesOption) {
                        sortedClasses.push([createClass(tmpAC[i], section), 1]);
                        if (section['requires'] != null) {
                            requiredSection = findRequired(tmpAC[i], section['requires']);
                            requiredIdx.push(j);
                            sortedClasses.push([createClass(tmpAC[i], requiredSection), 1]);
                        }
                        ac[i]['sections'].splice(j, 1);
                    }
                }
                else {
                    ac[i]['sections'].splice(j, 1);
                }
            }
            if (requiredIdx != null) {
                for (var k = 0; k < requiredIdx.length; k++) {
                    ac[i]['sections'].splice(requiredIdx[k]);
                }
            }
        }
    }

    function removeEmptyClasses() {
        var tmpAC = ac.slice();
        for (var i = 0; i < tmpAC.length; i++) {
            if (tmpAC[i]['sections'] == null || tmpAC[i]['sections'] == undefined || tmpAC[i]['sections'].length == 0) {
                ac.splice(i, 1);
            }
        }
    }

    if (params['optimize'][3]) {
        var tmpAC = ac.slice();
        var requiredIdx;
        for (var i = 0; i < tmpAC.length; i++) {
            requiredIdx = [];
            for (var j = 0; j < tmpAC[i]['sections'].length; j++) {
                var section = tmpAC[i]['sections'][j];
                if (section['location'] == 'IN' && !(section['section'][0] == 'L' ||  section['section'][0] == 'R')) {
                    sortedClasses.push([createClass(tmpAC[i], section), 1]);
                    if (section['requires'] != null) {
                        var requiredSection = findRequired(tmpAC[i], section['requires']);
                        requiredIdx.push(j);
                        sortedClasses.push([createClass(tmpAC[i], requiredSection), 1]);
                    }
                    ac[i]['sections'].splice(j, 1);
                }
            }
            if (requiredIdx != null) {
                for (var k = 0; k < requiredIdx.length; k++) {
                    ac[i]['sections'].splice(requiredIdx[k]);
                }
            }
        }
    }
    if (params['times'][0]) {
        addSections(0, 1);
    }
    if (params['times'][1]) {
        addSections(2, 3);
    }
    if (params['times'][2]) {
        addSections(4, 5);
    }
    if (params['times'][3]) {
        addSections(6, 7);
    }
    if (params['times'][4]) {
        addSections(0, 7);
    }
    removeEmptyClasses();
    if (params['times'][0] && !params['times'][1] && !params['times'][2] && !params['times'][3]) {
        addSections(2, 3);
        addSections(4, 5);
        addSections(6, 7);
    }
    else if (params['times'][1] && !params['times'][0] && !params['times'][2] && !params['times'][3]) {
        addSections(0, 1);
        addSections(4, 5);
        addSections(6, 7);
    }
    else if (params['times'][2] && !params['times'][0] && !params['times'][1] && !params['times'][3]) {
        addSections(2, 3);
        addSections(6, 7);
        addSections(0, 1);
    }
    else if (params['times'][3] && !params['times'][0] && !params['times'][1] && !params['times'][2]) {
        addSections(4, 5);
        addSections(2, 3);
        addSections(0, 1);
    }
    else if (params['times'][0] && params['times'][1] && !params['times'][2] && !params['times'][3]) {
        addSections(4, 5);
        addSections(6, 7);
    }
    else if (!params['times'][0] && !params['times'][1] && params['times'][2] && params['times'][3]) {
        addSections(2, 3);
        addSections(0, 1);
    }
    else {
        addSections(0, 7);
    }
    return sortedClasses;
}

function sortOtherParams(classes, professors, params) {
    var ac = classes;
    var profs = ratedProfessors(professors);
    for (var i = 0; i < ac.length; i++) {
        if (profs.hasOwnProperty(ac[i][0]['professor'])) {
            if (params['difficulty'] == 0) {
                if (profs[ac[i][0]['professor']][1] <= 2.5) {
                    ac[i][1] += (5 - profs[ac[i][0]['professor']][1]) / 5;
                }
            }
            else if (params['difficulty'] == 1) {
                if (profs[ac[i][0]['professor']][1] > 2.5 && profs[ac[i][0]['professor']][1] <= 3.5) {
                    ac[i][1] += profs[ac[i][0]['professor']][1] / 5;
                }
            }
            else if (params['difficulty'] == 2) {
                if (profs[ac[i][0]['professor']][1] > 3.5) {
                    ac[i][1] += profs[ac[i][0]['professor']][1] / 5;
                }
            }
            if (params['optimize'][2]) {
                ac[i][1] += profs[ac[i][0]['professor']][2] / 5;
            }
            if (params['optimize'][4]) {
                ac[i][1] += profs[ac[i][0]['professor']][0] / 5;
            }
        }
    }
    ac = ac.sort(function(a, b) {
        if (a[0]['section'][0] == 'L' || a[0]['section'][0] == 'R') {
            return 1;
        }
        else if (b[0]['section'][0] == 'L' || b[0]['section'][0] == 'R') {
            return 0;
        }
        return parseFloat(b[1]) - parseFloat(a[1]);
    });
    requiredUnsorted = [];
    for (var i = ac.length - 1; i >= 0; i--) {
        if (!(ac[i][0]['section'][0] == 'L' || ac[i][0]['section'][0] == 'R')) {
            requiredUnsorted = ac.slice(i+1, ac.length);
            ac = ac.slice(0, i+1);
            break;
        }
    }
    for (var i = 0; i < requiredUnsorted.length; i++) {
        for (var j = 0; j < ac.length - 1; j++) {
            if (ac[j][0]['requires'] == requiredUnsorted[i][0]['CRN']) {
                ac.splice(j + 1, 0, requiredUnsorted[i]);
                break;
            }
        }
    }
    return ac
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
