import afr01 from "./africa/01.svg";
import afr02 from "./africa/02.svg";
import afr03 from "./africa/03.svg";
import afr04 from "./africa/04.svg";
import afr05 from "./africa/05.svg";
import afr06 from "./africa/06.svg";
import afr07 from "./africa/07.svg";
import afr08 from "./africa/08.svg";
import afr09 from "./africa/09.svg";
import afr10 from "./africa/10.svg";

import asi01 from "./asia/01.svg";
import asi02 from "./asia/02.svg";
import asi03 from "./asia/03.svg";
import asi04 from "./asia/04.svg";
import asi05 from "./asia/05.svg";
import asi06 from "./asia/06.svg";
import asi07 from "./asia/07.svg";
import asi08 from "./asia/08.svg";
import asi09 from "./asia/09.svg";
import asi10 from "./asia/10.svg";

import eur01 from "./europe/01.svg";
import eur02 from "./europe/02.svg";
import eur03 from "./europe/03.svg";
import eur04 from "./europe/04.svg";
import eur05 from "./europe/05.svg";
import eur06 from "./europe/06.svg";
import eur07 from "./europe/07.svg";
import eur08 from "./europe/08.svg";
import eur09 from "./europe/09.svg";
import eur10 from "./europe/10.svg";

import na01 from "./north-america/01.svg";
import na02 from "./north-america/02.svg";
import na03 from "./north-america/03.svg";
import na04 from "./north-america/04.svg";
import na05 from "./north-america/05.svg";
import na06 from "./north-america/06.svg";
import na07 from "./north-america/07.svg";
import na08 from "./north-america/08.svg";
import na09 from "./north-america/09.svg";
import na10 from "./north-america/10.svg";

import sa01 from "./south-america/01.svg";
import sa02 from "./south-america/02.svg";
import sa03 from "./south-america/03.svg";
import sa04 from "./south-america/04.svg";
import sa05 from "./south-america/05.svg";
import sa06 from "./south-america/06.svg";
import sa07 from "./south-america/07.svg";
import sa08 from "./south-america/08.svg";
import sa09 from "./south-america/09.svg";
import sa10 from "./south-america/10.svg";

const africaImgs = [afr01, afr02, afr03, afr04, afr05, afr06, afr07, afr08, afr09, afr10];

const asiaImgs = [asi01, asi02, asi03, asi04, asi05, asi06, asi07, asi08, asi09, asi10];

const europeImgs = [eur01, eur02, eur03, eur04, eur05, eur06, eur07, eur08, eur09, eur10];

const northAmericaImgs = [na01, na02, na03, na04, na05, na06, na07, na08, na09, na10];

const southAmericaImgs = [sa01, sa02, sa03, sa04, sa05, sa06, sa07, sa08, sa09, sa10];


export {africaImgs, asiaImgs, europeImgs, northAmericaImgs, southAmericaImgs};

/*function exportFunc(continent) {
    let arr = [];
    for (let i=1; i<=10; i++) {
        let url = './'+continent+'/';
        url += i===10 ? i : '0'+i;
        url += '.svg';
        arr[i-1] = require(url);
    }
    return arr;
}

let africaImgs = exportFunc('africa');
let asiaImgs = exportFunc('asia');
let europeImgs = exportFunc('europe');
let northAmericaImgs = exportFunc('north-america');
let southAmericaImgs = exportFunc('south-america');

export {africaImgs, asiaImgs, europeImgs, northAmericaImgs, southAmericaImgs};
export const argentinaImg = require('./north-america/01.svg');

export { default as ArgentinaImg } from './north-america/01.svg';*/
