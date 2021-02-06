import sectionData from "./sectionData";

function calcPrincMoy(marks, section) {
    let diviser = 0;
    let moy = 0;

    for (const prop in marks) {
        if (prop !== `${section}-opt`) {
            let coef = parseFloat(sectionData[section].matiere.sesPrin[prop.substring(prop.indexOf('-') + 1)].coef);
            diviser += coef;
            moy+= parseFloat(marks[prop]) * coef;
        } else if (parseFloat(marks[prop]) > 10) moy+= parseFloat(marks[prop]) - 10;
    }
    console.log('divider ', diviser, 'moy ', moy);
    return moy / diviser;
}

function calcContMoy(prinInputs, contInputs, section, inputsToDisable) {
    function replaceHigherMarks() {
        let savePrinMarks = {...prinInputs};
        const saveContMarks = {...contInputs};
        for (let prop in saveContMarks) {

            if (!isInputDisabled(inputsToDisable, prop) && (parseFloat(saveContMarks[prop]) > savePrinMarks[prop.replace('Ctrl', '')]))
                savePrinMarks[prop.replace('Ctrl', '')] = saveContMarks[prop];
        }
        return savePrinMarks;
    }

    let changedMarks = replaceHigherMarks();
    return calcPrincMoy(changedMarks, section);
}

function isInputDisabled(inputsToDisable, prop) {
    let check = false
    if (inputsToDisable.length > 0) {
        for (let i=0; i<inputsToDisable.length; i++) {
            if (inputsToDisable[i].toDisable === prop && inputsToDisable[i].disabled) {
                check = true;
                break;
            }
        }
    }

    return check;
}

function calcScore(isPrincipale, prinInputs, contInputs, section, inputsToDisable) {
    function replaceMarksPrinX2PlusCont() {
        let savePrinMarks = {...prinInputs};
        const saveContMarks = {...contInputs};
        for (let prop in saveContMarks) {
            if (!isInputDisabled(inputsToDisable, prop)) {
                let prinProp = prop.replace('Ctrl', '');
                savePrinMarks[prinProp] = (((parseFloat(savePrinMarks[prinProp]) * 2) + parseFloat(saveContMarks[prop])) / 3);
            }
        }
        return savePrinMarks;
    }

    let score = 0;

    let moye = isPrincipale ? calcPrincMoy(prinInputs, section) : (((calcPrincMoy(prinInputs, section) * 2) + calcContMoy(prinInputs, contInputs, section, inputsToDisable)) / 3) ;
    let marks = isPrincipale ? prinInputs : replaceMarksPrinX2PlusCont();

    for (let prop in marks) {
        if (sectionData[section].matiere.sesPrin[prop.substring(prop.indexOf('-') + 1)].hasOwnProperty('coefScr'))
            score += parseFloat(marks[prop]) * parseFloat(sectionData[section].matiere.sesPrin[prop.substring(prop.indexOf('-') + 1)].coefScr);
    }

    score += parseFloat(moye) * 4;
    return score;
}

function validateInputs(sessionRadio, prinInputs, contInputs, inputsToDisable){
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