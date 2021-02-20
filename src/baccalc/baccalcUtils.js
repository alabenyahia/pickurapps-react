import sectionData from "./sectionData";


// calculate moyenne of principal session
function calcPrincMoy(marks, section) {
    let diviser = 0;
    let moy = 0;

    // loop through marks object
    for (const prop in marks) {
        // add option mark-10 without adding its coef to the diviser
        if (prop !== `${section}-opt`) {
            // get the matiere coef & add it to the diviser
            let coef = parseFloat(sectionData[section].matiere.sesPrin[prop.substring(prop.indexOf('-') + 1)].coef);
            diviser += coef;
            // add matiere mark * coef to the moyenne
            moy += parseFloat(marks[prop]) * coef;
        } else if (parseFloat(marks[prop]) > 10) moy += parseFloat(marks[prop]) - 10;
    }

    // divide moyenne by the diviser
    return moy / diviser;
}

// calculate moyenne of controle session
function calcContMoy(prinInputs, contInputs, section, inputsToDisable) {
    // replace controle higher marks by principal less marks
    function replaceHigherMarks() {
        let savePrinMarks = {...prinInputs};
        const saveContMarks = {...contInputs};
        // loop through the saved controle marks
        for (let prop in saveContMarks) {
            // replace marks if input not disabled and controle mark > principale mark
            if (!isInputDisabled(inputsToDisable, prop) && (parseFloat(saveContMarks[prop]) > savePrinMarks[prop.replace('Ctrl', '')]))
                savePrinMarks[prop.replace('Ctrl', '')] = saveContMarks[prop];
        }
        return savePrinMarks;
    }

    // replace higher notes then calculate moyenne normally using the principale method
    let changedMarks = replaceHigherMarks();
    return calcPrincMoy(changedMarks, section);
}

// return true if the input is disabled
function isInputDisabled(inputsToDisable, prop) {
    let check = false
    if (inputsToDisable.length > 0) {
        for (let i = 0; i < inputsToDisable.length; i++) {
            if (inputsToDisable[i].toDisable === prop && inputsToDisable[i].disabled) {
                check = true;
                break;
            }
        }
    }

    return check;
}

// calculate score
function calcScore(isPrincipale, prinInputs, contInputs, section, inputsToDisable) {
    // replace marks with (principal mark * 2 + controle mark)
    function replaceMarksPrinX2PlusCont() {
        let savePrinMarks = {...prinInputs};
        const saveContMarks = {...contInputs};
        for (let prop in saveContMarks) {
            // only replace if input is not disabled
            if (!isInputDisabled(inputsToDisable, prop)) {
                let prinProp = prop.replace('Ctrl', '');
                savePrinMarks[prinProp] = (((parseFloat(savePrinMarks[prinProp]) * 2) + parseFloat(saveContMarks[prop])) / 3);
            }
        }
        return savePrinMarks;
    }

    let score = 0;

    // save moyenne & marks
    let moye = isPrincipale ? calcPrincMoy(prinInputs, section) : (((calcPrincMoy(prinInputs, section) * 2) + calcContMoy(prinInputs, contInputs, section, inputsToDisable)) / 3);
    let marks = isPrincipale ? prinInputs : replaceMarksPrinX2PlusCont();

    // loop through marks
    for (let prop in marks) {
        if (sectionData[section].matiere.sesPrin[prop.substring(prop.indexOf('-') + 1)].hasOwnProperty('coefScr'))
            score += parseFloat(marks[prop]) * parseFloat(sectionData[section].matiere.sesPrin[prop.substring(prop.indexOf('-') + 1)].coefScr);
    }

    score += parseFloat(moye) * 4;
    return score;
}

// return true if all inputs are valid
function validateInputs(sessionRadio, prinInputs, contInputs, inputsToDisable) {
    for (let prop in prinInputs) {
        if (prinInputs[prop].length <= 0 || parseFloat(prinInputs[prop]) < 0 || parseFloat(prinInputs[prop]) > 20 || isNaN(prinInputs[prop])) return false;
    }

    if (sessionRadio === 'controle') {
        for (let prop in contInputs) {
            if (!isInputDisabled(inputsToDisable, prop) && (contInputs[prop].length <= 0 || parseFloat(contInputs[prop]) < 0 || parseFloat(contInputs[prop]) > 20 || isNaN(contInputs[prop]))) return false;
        }
    }

    return true;
}

export {calcPrincMoy, calcContMoy, calcScore, validateInputs}