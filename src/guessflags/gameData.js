import shuffle from "lodash/shuffle";
import {africaImgs, asiaImgs, europeImgs, northAmericaImgs, southAmericaImgs} from "./imgs/flags";

const contDB = {
    sa: {
        flags: [
            {
                corrAnsw: ['A', 'R', 'G', 'E', 'N', 'T', 'I', 'N', 'A'],
                randChars: ['A', 'R', 'G', 'E', 'N', 'T', 'I', 'N', 'A', 'Q', 'A', 'L', 'O', 'M'],
                imgSrc: southAmericaImgs[0]
            },
            {
                corrAnsw: ['B', 'O', 'L', 'I', 'V', 'I', 'A'],
                randChars: ['B', 'O', 'L', 'I', 'V', 'I', 'A', 'O', 'B', 'K', 'L', 'I', 'J', 'S'],
                imgSrc: southAmericaImgs[1]
            },
            {
                corrAnsw: ['B', 'R', 'A', 'Z', 'I', 'L'],
                randChars: ['B', 'R', 'A', 'Z', 'I', 'L', 'S', 'C', 'R', 'A', 'O', 'P', 'M', 'W'],
                imgSrc: southAmericaImgs[2]
            },
            {
                corrAnsw: ['C', 'H', 'I', 'L', 'E'],
                randChars: ['C', 'H', 'I', 'L', 'E', 'A', 'J', 'B', 'C', 'A', 'G', 'D', 'X', 'N'],
                imgSrc: southAmericaImgs[3]
            },
            {
                corrAnsw: ['C', 'O', 'L', 'O', 'M', 'B', 'I', 'A'],
                randChars: ['C', 'O', 'L', 'O', 'M', 'B', 'I', 'A', 'B', 'L', 'C', 'T', 'E', 'A'],
                imgSrc: southAmericaImgs[4]
            },
            {
                corrAnsw: ['E', 'C', 'U', 'A', 'D', 'O', 'R'],
                randChars: ['E', 'C', 'U', 'A', 'D', 'O', 'R', 'Q', 'D', 'C', 'B', 'U', 'K', 'P'],
                imgSrc: southAmericaImgs[5]
            },
            {
                corrAnsw: ['P', 'A', 'R', 'A', 'G', 'U', 'A', 'Y'],
                randChars: ['P', 'A', 'R', 'A', 'G', 'U', 'A', 'Y', 'N', 'Q', 'S', 'L', 'P', 'V'],
                imgSrc: southAmericaImgs[6]
            },
            {
                corrAnsw: ['P', 'E', 'R', 'U'],
                randChars: ['P', 'E', 'R', 'U', 'W', 'Z', 'U', 'N', 'N', 'L', 'U', 'H', 'G', 'T'],
                imgSrc: southAmericaImgs[7]
            },
            {
                corrAnsw: ['U', 'R', 'U', 'G', 'U', 'A', 'Y'],
                randChars: ['U', 'R', 'U', 'G', 'U', 'A', 'Y', 'V', 'J', 'K', 'S', 'O', 'P', 'M'],
                imgSrc: southAmericaImgs[8]
            },
            {
                corrAnsw: ['V', 'E', 'N', 'E', 'Z', 'U', 'E', 'L', 'A'],
                randChars: ['V', 'E', 'N', 'E', 'Z', 'U', 'E', 'L', 'A', 'V', 'S', 'B', 'T', 'C'],
                imgSrc: southAmericaImgs[9]
            },
        ],
    },

    na: {
        flags: [
            {
                corrAnsw: ['B', 'A', 'H', 'A', 'M', 'A', 'S'],
                randChars: ['B', 'A', 'H', 'A', 'M', 'A', 'S', 'N', 'A', 'Q', 'A', 'L', 'O', 'M'],
                imgSrc: northAmericaImgs[0]
            },
            {
                corrAnsw: ['C', 'A', 'N', 'A', 'D', 'A'],
                randChars: ['C', 'A', 'N', 'A', 'D', 'A', 'A', 'O', 'B', 'K', 'L', 'I', 'J', 'S'],
                imgSrc: northAmericaImgs[1]
            },
            {
                corrAnsw: ['C', 'O', 'S', 'T', 'A', 'R', 'I', 'C', 'A'],
                randChars: ['C', 'O', 'S', 'T', 'A', 'R', 'I', 'C', 'A', 'A', 'O', 'P', 'M', 'W'],
                imgSrc: northAmericaImgs[2]
            },
            {
                corrAnsw: ['C', 'U', 'B', 'A'],
                randChars: ['C', 'U', 'B', 'A', 'E', 'A', 'J', 'B', 'C', 'A', 'G', 'D', 'X', 'N'],
                imgSrc: northAmericaImgs[3]
            },
            {
                corrAnsw: ['H', 'A', 'I', 'T', 'I'],
                randChars: ['H', 'A', 'I', 'T', 'I', 'B', 'I', 'A', 'B', 'L', 'C', 'T', 'E', 'A'],
                imgSrc: northAmericaImgs[4]
            },
            {
                corrAnsw: ['H', 'O', 'N', 'D', 'U', 'R', 'A', 'S'],
                randChars: ['H', 'O', 'N', 'D', 'U', 'R', 'A', 'S', 'D', 'C', 'B', 'U', 'K', 'P'],
                imgSrc: northAmericaImgs[5]
            },
            {
                corrAnsw: ['J', 'A', 'M', 'A', 'I', 'C', 'A'],
                randChars: ['J', 'A', 'M', 'A', 'I', 'C', 'A', 'Y', 'N', 'Q', 'S', 'L', 'P', 'V'],
                imgSrc: northAmericaImgs[6]
            },
            {
                corrAnsw: ['M', 'E', 'X', 'I', 'C', 'O'],
                randChars: ['M', 'E', 'X', 'I', 'C', 'O', 'U', 'N', 'N', 'L', 'U', 'H', 'G', 'T'],
                imgSrc: northAmericaImgs[7]
            },
            {
                corrAnsw: ['P', 'A', 'N', 'A', 'M', 'A'],
                randChars: ['P', 'A', 'N', 'A', 'M', 'A', 'Y', 'V', 'J', 'K', 'S', 'O', 'P', 'M'],
                imgSrc: northAmericaImgs[8]
            },
            {
                corrAnsw: ['U', 'N', 'I', 'T', 'E', 'D', 'S', 'T', 'A', 'T', 'E', 'S'],
                randChars: ['U', 'N', 'I', 'T', 'E', 'D', 'S', 'T', 'A', 'T', 'E', 'S', 'T', 'C'],
                imgSrc: northAmericaImgs[9]
            },
        ],
    },

    eur: {
        flags: [
            {
                corrAnsw: ['B', 'E', 'L', 'G', 'I', 'U', 'M'],
                randChars: ['B', 'E', 'L', 'G', 'I', 'U', 'M', 'N', 'A', 'Q', 'A', 'L', 'O', 'M'],
                imgSrc: europeImgs[0]
            },
            {
                corrAnsw: ['C', 'R', 'O', 'A', 'T', 'I', 'A'],
                randChars: ['C', 'R', 'O', 'A', 'T', 'I', 'A', 'O', 'B', 'K', 'L', 'I', 'J', 'S'],
                imgSrc: europeImgs[1]
            },
            {
                corrAnsw: ['D', 'E', 'N', 'M', 'A', 'R', 'K'],
                randChars: ['D', 'E', 'N', 'M', 'A', 'R', 'K', 'C', 'R', 'A', 'O', 'P', 'M', 'W'],
                imgSrc: europeImgs[2]
            },
            {
                corrAnsw: ['F', 'R', 'A', 'N', 'C', 'E'],
                randChars: ['F', 'R', 'A', 'N', 'C', 'E', 'J', 'B', 'C', 'A', 'G', 'D', 'X', 'N'],
                imgSrc: europeImgs[3]
            },
            {
                corrAnsw: ['G', 'R', 'E', 'E', 'C', 'E'],
                randChars: ['G', 'R', 'E', 'E', 'C', 'E', 'I', 'A', 'B', 'L', 'C', 'T', 'E', 'A'],
                imgSrc: europeImgs[4]
            },
            {
                corrAnsw: ['N', 'O', 'R', 'W', 'A', 'Y'],
                randChars: ['N', 'O', 'R', 'W', 'A', 'Y', 'A', 'S', 'D', 'C', 'B', 'U', 'K', 'P'],
                imgSrc: europeImgs[5]
            },
            {
                corrAnsw: ['P', 'O', 'R', 'T', 'U', 'G', 'A', 'L'],
                randChars: ['P', 'O', 'R', 'T', 'U', 'G', 'A', 'L', 'N', 'Q', 'S', 'L', 'P', 'V'],
                imgSrc: europeImgs[6]
            },
            {
                corrAnsw: ['S', 'L', 'O', 'V', 'E', 'N', 'I', 'A'],
                randChars: ['S', 'L', 'O', 'V', 'E', 'N', 'I', 'A', 'N', 'L', 'U', 'H', 'G', 'T'],
                imgSrc: europeImgs[7]
            },
            {
                corrAnsw: ['S', 'W', 'E', 'D', 'E', 'N'],
                randChars: ['S', 'W', 'E', 'D', 'E', 'N', 'Y', 'V', 'J', 'K', 'S', 'O', 'P', 'M'],
                imgSrc: europeImgs[8]
            },
            {
                corrAnsw: ['S', 'W', 'I', 'T', 'Z', 'E', 'R', 'L', 'A', 'N', 'D'],
                randChars: ['S', 'W', 'I', 'T', 'Z', 'E', 'R', 'L', 'A', 'N', 'D', 'S', 'T', 'C'],
                imgSrc: europeImgs[9]
            },
        ],
    },

    asi: {
        flags: [
            {
                corrAnsw: ['C', 'H', 'I', 'N', 'A'],
                randChars: ['C', 'H', 'I', 'N', 'A', 'U', 'M', 'N', 'A', 'Q', 'A', 'L', 'O', 'M'],
                imgSrc: asiaImgs[0]
            },
            {
                corrAnsw: ['I', 'N', 'D', 'I', 'A'],
                randChars: ['I', 'N', 'D', 'I', 'A', 'I', 'A', 'O', 'B', 'K', 'L', 'I', 'J', 'S'],
                imgSrc: asiaImgs[1]
            },
            {
                corrAnsw: ['I', 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A'],
                randChars: ['I', 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A', 'A', 'O', 'P', 'M', 'W'],
                imgSrc: asiaImgs[2]
            },
            {
                corrAnsw: ['J', 'A', 'P', 'A', 'N'],
                randChars: ['J', 'A', 'P', 'A', 'N', 'E', 'J', 'B', 'C', 'A', 'G', 'D', 'X', 'N'],
                imgSrc: asiaImgs[3]
            },
            {
                corrAnsw: ['K', 'U', 'W', 'A', 'I', 'T'],
                randChars: ['K', 'U', 'W', 'A', 'I', 'T', 'I', 'A', 'B', 'L', 'C', 'T', 'E', 'A'],
                imgSrc: asiaImgs[4]
            },
            {
                corrAnsw: ['L', 'E', 'B', 'A', 'N', 'O', 'N'],
                randChars: ['L', 'E', 'B', 'A', 'N', 'O', 'N', 'S', 'D', 'C', 'B', 'U', 'K', 'P'],
                imgSrc: asiaImgs[5]
            },
            {
                corrAnsw: ['P', 'A', 'K', 'I', 'S', 'T', 'A', 'N'],
                randChars: ['P', 'A', 'K', 'I', 'S', 'T', 'A', 'N', 'N', 'Q', 'S', 'L', 'P', 'V'],
                imgSrc: asiaImgs[6]
            },
            {
                corrAnsw: ['Q', 'A', 'T', 'A', 'R'],
                randChars: ['Q', 'A', 'T', 'A', 'R', 'N', 'I', 'A', 'N', 'L', 'U', 'H', 'G', 'T'],
                imgSrc: asiaImgs[7]
            },
            {
                corrAnsw: ['T', 'H', 'A', 'I', 'L', 'A', 'N', 'D'],
                randChars: ['T', 'H', 'A', 'I', 'L', 'A', 'N', 'D', 'J', 'K', 'S', 'O', 'P', 'M'],
                imgSrc: asiaImgs[8]
            },
            {
                corrAnsw: ['Y', 'E', 'M', 'E', 'N'],
                randChars: ['Y', 'E', 'M', 'E', 'N', 'E', 'R', 'L', 'A', 'N', 'D', 'S', 'T', 'C'],
                imgSrc: asiaImgs[9]
            },
        ],
    },

    afr: {
        flags: [
            {
                corrAnsw: ['A', 'L', 'G', 'E', 'R', 'I', 'A'],
                randChars: ['A', 'L', 'G', 'E', 'R', 'I', 'A', 'N', 'A', 'Q', 'S', 'L', 'O', 'M'],
                imgSrc: africaImgs[0]
            },
            {
                corrAnsw: ['A', 'N', 'G', 'O', 'L', 'A'],
                randChars: ['A', 'N', 'G', 'O', 'L', 'A', 'A', 'O', 'B', 'K', 'L', 'I', 'J', 'S'],
                imgSrc: africaImgs[1]
            },
            {
                corrAnsw: ['E', 'G', 'Y', 'P', 'T'],
                randChars: ['E', 'G', 'Y', 'P', 'T', 'E', 'S', 'I', 'A', 'A', 'O', 'P', 'M', 'W'],
                imgSrc: africaImgs[2]
            },
            {
                corrAnsw: ['K', 'E', 'N', 'Y', 'A'],
                randChars: ['K', 'E', 'N', 'Y', 'A', 'E', 'J', 'B', 'C', 'A', 'G', 'D', 'X', 'N'],
                imgSrc: africaImgs[3]
            },
            {
                corrAnsw: ['M', 'O', 'R', 'O', 'C', 'C', 'O'],
                randChars: ['M', 'O', 'R', 'O', 'C', 'C', 'O', 'A', 'B', 'L', 'C', 'T', 'E', 'A'],
                imgSrc: africaImgs[4]
            },
            {
                corrAnsw: ['M', 'O', 'Z', 'A', 'M', 'B', 'I', 'Q', 'U', 'E'],
                randChars: ['M', 'O', 'Z', 'A', 'M', 'B', 'I', 'Q', 'U', 'E', 'B', 'U', 'K', 'P'],
                imgSrc: africaImgs[5]
            },
            {
                corrAnsw: ['N', 'I', 'G', 'E', 'R', 'I', 'A'],
                randChars: ['N', 'I', 'G', 'E', 'R', 'I', 'A', 'N', 'N', 'Q', 'S', 'L', 'P', 'V'],
                imgSrc: africaImgs[6]
            },
            {
                corrAnsw: ['S', 'O', 'U', 'T', 'H', 'A', 'F', 'R', 'I', 'C', 'A'],
                randChars: ['S', 'O', 'U', 'T', 'H', 'A', 'F', 'R', 'I', 'C', 'A', 'H', 'G', 'T'],
                imgSrc: africaImgs[7]
            },
            {
                corrAnsw: ['S', 'U', 'D', 'A', 'N'],
                randChars: ['S', 'U', 'D', 'A', 'N', 'A', 'N', 'D', 'J', 'K', 'S', 'O', 'P', 'M'],
                imgSrc: africaImgs[8]
            },
            {
                corrAnsw: ['T', 'U', 'N', 'I', 'S', 'I', 'A'],
                randChars: ['T', 'U', 'N', 'I', 'S', 'I', 'A', 'L', 'A', 'N', 'D', 'S', 'T', 'C'],
                imgSrc: africaImgs[9]
            },
        ],
    },
};

class Flag {
    imgSrc;
    correctAnsw = [];
    randomChars = [];

    constructor(imgSrc, correctAnsw, randomChars) {
        this.imgSrc = imgSrc;
        this.correctAnsw = correctAnsw;
        this.randomChars = randomChars;
    }
}

class Continent {
    flags = [];
    id;
}

class SouthAmerica extends Continent {

    constructor() {
        super();
        this.id = 'sa';

        let correctAnswerArgentina = ['A', 'R', 'G', 'E', 'N', 'T', 'I', 'N', 'A'];
        let randomCharsArgentina = ['A', 'R', 'G', 'E', 'N', 'T', 'I', 'N', 'A', 'Q', 'A', 'L', 'O', 'M'];
        randomCharsArgentina = shuffle(randomCharsArgentina);
        this.flags.push(new Flag(southAmericaImgs[0], correctAnswerArgentina, randomCharsArgentina));


        let correctAnswerBolivia = ['B', 'O', 'L', 'I', 'V', 'I', 'A'];
        let randomCharsBolivia = ['B', 'O', 'L', 'I', 'V', 'I', 'A', 'O', 'B', 'K', 'L', 'I', 'J', 'S'];
        randomCharsBolivia = shuffle(randomCharsBolivia);
        this.flags.push(new Flag(southAmericaImgs[1], correctAnswerBolivia, randomCharsBolivia));

        let correctAnswerBrazil = ['B', 'R', 'A', 'Z', 'I', 'L'];
        let randomCharsBrazil = ['B', 'R', 'A', 'Z', 'I', 'L', 'S', 'C', 'R', 'A', 'O', 'P', 'M', 'W'];
        randomCharsBrazil = shuffle(randomCharsBrazil);
        this.flags.push(new Flag(southAmericaImgs[2], correctAnswerBrazil, randomCharsBrazil));


        let correctAnswerChile = ['C', 'H', 'I', 'L', 'E']
        let randomCharsChile = ['C', 'H', 'I', 'L', 'E', 'A', 'J', 'B', 'C', 'A', 'G', 'D', 'X', 'N'];
        randomCharsChile = shuffle(randomCharsChile);
        this.flags.push(new Flag(southAmericaImgs[3], correctAnswerChile, randomCharsChile));


        let correctAnswerColombia = ['C', 'O', 'L', 'O', 'M', 'B', 'I', 'A'];
        let randomCharsColombia = ['C', 'O', 'L', 'O', 'M', 'B', 'I', 'A', 'B', 'L', 'C', 'T', 'E', 'A'];
        randomCharsColombia = shuffle(randomCharsColombia);
        this.flags.push(new Flag(southAmericaImgs[4], correctAnswerColombia, randomCharsColombia));


        let correctAnswerEcuador = ['E', 'C', 'U', 'A', 'D', 'O', 'R'];
        let randomCharsEcuador = ['E', 'C', 'U', 'A', 'D', 'O', 'R', 'Q', 'D', 'C', 'B', 'U', 'K', 'P'];
        randomCharsEcuador = shuffle(randomCharsEcuador);
        this.flags.push(new Flag(southAmericaImgs[5], correctAnswerEcuador, randomCharsEcuador));


        let correctAnswerParaguay = ['P', 'A', 'R', 'A', 'G', 'U', 'A', 'Y'];
        let randomCharsParaguay = ['P', 'A', 'R', 'A', 'G', 'U', 'A', 'Y', 'N', 'Q', 'S', 'L', 'P', 'V'];
        randomCharsParaguay = shuffle(randomCharsParaguay);
        this.flags.push(new Flag(southAmericaImgs[6], correctAnswerParaguay, randomCharsParaguay));


        let correctAnswerPeru = ['P', 'E', 'R', 'U'];
        let randomCharsPeru = ['P', 'E', 'R', 'U', 'W', 'Z', 'U', 'N', 'N', 'L', 'U', 'H', 'G', 'T'];
        randomCharsPeru = shuffle(randomCharsPeru);
        this.flags.push(new Flag(southAmericaImgs[7], correctAnswerPeru, randomCharsPeru));


        let correctAnswerUruguay = ['U', 'R', 'U', 'G', 'U', 'A', 'Y'];
        let randomCharsUruguay = ['U', 'R', 'U', 'G', 'U', 'A', 'Y', 'V', 'J', 'K', 'S', 'O', 'P', 'M'];
        randomCharsUruguay = shuffle(randomCharsUruguay);
        this.flags.push(new Flag(southAmericaImgs[8], correctAnswerUruguay, randomCharsUruguay));


        let correctAnswerVenezuela = ['V', 'E', 'N', 'E', 'Z', 'U', 'E', 'L', 'A'];
        let randomCharsVenezuela = ['V', 'E', 'N', 'E', 'Z', 'U', 'E', 'L', 'A', 'V', 'S', 'B', 'T', 'C'];
        randomCharsVenezuela = shuffle(randomCharsVenezuela);
        this.flags.push(new Flag(southAmericaImgs[9], correctAnswerVenezuela, randomCharsVenezuela));

    }
}

class NorthAmerica extends Continent {

    constructor() {
        super();
        this.id = 'na';

        let correctAnswerBahamas = ['B', 'A', 'H', 'A', 'M', 'A', 'S'];
        let randomCharsBahamas = ['B', 'A', 'H', 'A', 'M', 'A', 'S', 'N', 'A', 'Q', 'A', 'L', 'O', 'M'];
        randomCharsBahamas = shuffle(randomCharsBahamas);
        this.flags.push(new Flag(northAmericaImgs[0], correctAnswerBahamas, randomCharsBahamas));

        let correctAnswerCanada = ['C', 'A', 'N', 'A', 'D', 'A'];
        let randomCharsCanada = ['C', 'A', 'N', 'A', 'D', 'A', 'A', 'O', 'B', 'K', 'L', 'I', 'J', 'S'];
        randomCharsCanada = shuffle(randomCharsCanada);
        this.flags.push(new Flag(northAmericaImgs[1], correctAnswerCanada, randomCharsCanada));

        let correctAnswerCostaRica = ['C', 'O', 'S', 'T', 'A', 'R', 'I', 'C', 'A'];
        let randomCharsCostaRica = ['C', 'O', 'S', 'T', 'A', 'R', 'I', 'C', 'A', 'A', 'O', 'P', 'M', 'W'];
        randomCharsCostaRica = shuffle(randomCharsCostaRica);
        this.flags.push(new Flag(northAmericaImgs[2], correctAnswerCostaRica, randomCharsCostaRica));

        let correctAnswerCuba = ['C', 'U', 'B', 'A'];
        let randomCharsCuba = ['C', 'U', 'B', 'A', 'E', 'A', 'J', 'B', 'C', 'A', 'G', 'D', 'X', 'N'];
        randomCharsCuba = shuffle(randomCharsCuba);
        this.flags.push(new Flag(northAmericaImgs[3], correctAnswerCuba, randomCharsCuba));

        let correctAnswerHaiti = ['H', 'A', 'I', 'T', 'I'];
        let randomCharsHaiti = ['H', 'A', 'I', 'T', 'I', 'B', 'I', 'A', 'B', 'L', 'C', 'T', 'E', 'A'];
        randomCharsHaiti = shuffle(randomCharsHaiti);
        this.flags.push(new Flag(northAmericaImgs[4], correctAnswerHaiti, randomCharsHaiti));

        let correctAnswerHonduras = ['H', 'O', 'N', 'D', 'U', 'R', 'A', 'S'];
        let randomCharsHonduras = ['H', 'O', 'N', 'D', 'U', 'R', 'A', 'S', 'D', 'C', 'B', 'U', 'K', 'P'];
        randomCharsHonduras = shuffle(randomCharsHonduras);
        this.flags.push(new Flag(northAmericaImgs[5], correctAnswerHonduras, randomCharsHonduras));

        let correctAnswerJamaica = ['J', 'A', 'M', 'A', 'I', 'C', 'A'];
        let randomCharsJamaica = ['J', 'A', 'M', 'A', 'I', 'C', 'A', 'Y', 'N', 'Q', 'S', 'L', 'P', 'V'];
        randomCharsJamaica = shuffle(randomCharsJamaica);
        this.flags.push(new Flag(northAmericaImgs[6], correctAnswerJamaica, randomCharsJamaica));

        let correctAnswerMexico = ['M', 'E', 'X', 'I', 'C', 'O'];
        let randomCharsMexico = ['M', 'E', 'X', 'I', 'C', 'O', 'U', 'N', 'N', 'L', 'U', 'H', 'G', 'T'];
        randomCharsMexico = shuffle(randomCharsMexico);
        this.flags.push(new Flag(northAmericaImgs[7], correctAnswerMexico, randomCharsMexico));

        let correctAnswerPanama = ['P', 'A', 'N', 'A', 'M', 'A'];
        let randomCharsPanama = ['P', 'A', 'N', 'A', 'M', 'A', 'Y', 'V', 'J', 'K', 'S', 'O', 'P', 'M'];
        randomCharsPanama = shuffle(randomCharsPanama);
        this.flags.push(new Flag(northAmericaImgs[8], correctAnswerPanama, randomCharsPanama));

        let correctAnswerUnitedStates = ['U', 'N', 'I', 'T', 'E', 'D', 'S', 'T', 'A', 'T', 'E', 'S'];
        let randomCharsUnitedStates = ['U', 'N', 'I', 'T', 'E', 'D', 'S', 'T', 'A', 'T', 'E', 'S', 'T', 'C'];
        randomCharsUnitedStates = shuffle(randomCharsUnitedStates);
        this.flags.push(new Flag(northAmericaImgs[9], correctAnswerUnitedStates, randomCharsUnitedStates));

    }
}


class Europe extends Continent {

    constructor() {
        super();
        this.id = 'eur';

        let correctAnswerBelgium = ['B', 'E', 'L', 'G', 'I', 'U', 'M'];
        let randomCharsBelgium = ['B', 'E', 'L', 'G', 'I', 'U', 'M', 'N', 'A', 'Q', 'A', 'L', 'O', 'M'];
        randomCharsBelgium = shuffle(randomCharsBelgium);
        this.flags.push(new Flag(europeImgs[0], correctAnswerBelgium, randomCharsBelgium));

        let correctAnswerCroatia = ['C', 'R', 'O', 'A', 'T', 'I', 'A'];
        let randomCharsCroatia = ['C', 'R', 'O', 'A', 'T', 'I', 'A', 'O', 'B', 'K', 'L', 'I', 'J', 'S'];
        randomCharsCroatia = shuffle(randomCharsCroatia);
        this.flags.push(new Flag(europeImgs[1], correctAnswerCroatia, randomCharsCroatia));

        let correctAnswerDenmark = ['D', 'E', 'N', 'M', 'A', 'R', 'K'];
        let randomCharsDenmark = ['D', 'E', 'N', 'M', 'A', 'R', 'K', 'C', 'R', 'A', 'O', 'P', 'M', 'W'];
        randomCharsDenmark = shuffle(randomCharsDenmark);
        this.flags.push(new Flag(europeImgs[2], correctAnswerDenmark, randomCharsDenmark));

        let correctAnswerFrance = ['F', 'R', 'A', 'N', 'C', 'E'];
        let randomCharsFrance = ['F', 'R', 'A', 'N', 'C', 'E', 'J', 'B', 'C', 'A', 'G', 'D', 'X', 'N'];
        randomCharsFrance = shuffle(randomCharsFrance);
        this.flags.push(new Flag(europeImgs[3], correctAnswerFrance, randomCharsFrance));

        let correctAnswerGreece = ['G', 'R', 'E', 'E', 'C', 'E'];
        let randomCharsGreece = ['G', 'R', 'E', 'E', 'C', 'E', 'I', 'A', 'B', 'L', 'C', 'T', 'E', 'A'];
        randomCharsGreece = shuffle(randomCharsGreece);
        this.flags.push(new Flag(europeImgs[4], correctAnswerGreece, randomCharsGreece));

        let correctAnswerNorway = ['N', 'O', 'R', 'W', 'A', 'Y'];
        let randomCharsNorway = ['N', 'O', 'R', 'W', 'A', 'Y', 'A', 'S', 'D', 'C', 'B', 'U', 'K', 'P'];
        randomCharsNorway = shuffle(randomCharsNorway);
        this.flags.push(new Flag(europeImgs[5], correctAnswerNorway, randomCharsNorway));

        let correctAnswerPortugal = ['P', 'O', 'R', 'T', 'U', 'G', 'A', 'L'];
        let randomCharsPortugal = ['P', 'O', 'R', 'T', 'U', 'G', 'A', 'L', 'N', 'Q', 'S', 'L', 'P', 'V'];
        randomCharsPortugal = shuffle(randomCharsPortugal);
        this.flags.push(new Flag(europeImgs[6], correctAnswerPortugal, randomCharsPortugal));

        let correctAnswerSlovenia = ['S', 'L', 'O', 'V', 'E', 'N', 'I', 'A'];
        let randomCharsSlovenia = ['S', 'L', 'O', 'V', 'E', 'N', 'I', 'A', 'N', 'L', 'U', 'H', 'G', 'T'];
        randomCharsSlovenia = shuffle(randomCharsSlovenia);
        this.flags.push(new Flag(europeImgs[7], correctAnswerSlovenia, randomCharsSlovenia));

        let correctAnswerSweden = ['S', 'W', 'E', 'D', 'E', 'N'];
        let randomCharsSweden = ['S', 'W', 'E', 'D', 'E', 'N', 'Y', 'V', 'J', 'K', 'S', 'O', 'P', 'M'];
        randomCharsSweden = shuffle(randomCharsSweden);
        this.flags.push(new Flag(europeImgs[8], correctAnswerSweden, randomCharsSweden));

        let correctAnswerSwitzerland = ['S', 'W', 'I', 'T', 'Z', 'E', 'R', 'L', 'A', 'N', 'D'];
        let randomCharsSwitzerland = ['S', 'W', 'I', 'T', 'Z', 'E', 'R', 'L', 'A', 'N', 'D', 'S', 'T', 'C'];
        randomCharsSwitzerland = shuffle(randomCharsSwitzerland);
        this.flags.push(new Flag(europeImgs[9], correctAnswerSwitzerland, randomCharsSwitzerland));

    }

}

class Asia extends Continent {

    constructor() {
        super();
        this.id = 'asi';

        let correctAnswerChina = ['C', 'H', 'I', 'N', 'A'];
        let randomCharsChina = ['C', 'H', 'I', 'N', 'A', 'U', 'M', 'N', 'A', 'Q', 'A', 'L', 'O', 'M'];
        randomCharsChina = shuffle(randomCharsChina);
        this.flags.push(new Flag(asiaImgs[0], correctAnswerChina, randomCharsChina));

        let correctAnswerIndia = ['I', 'N', 'D', 'I', 'A'];
        let randomCharsIndia = ['I', 'N', 'D', 'I', 'A', 'I', 'A', 'O', 'B', 'K', 'L', 'I', 'J', 'S'];
        randomCharsIndia = shuffle(randomCharsIndia);
        this.flags.push(new Flag(asiaImgs[1], correctAnswerIndia, randomCharsIndia));

        let correctAnswerIndonesia = ['I', 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A'];
        let randomCharsIndonesia = ['I', 'N', 'D', 'O', 'N', 'E', 'S', 'I', 'A', 'A', 'O', 'P', 'M', 'W'];
        randomCharsIndonesia = shuffle(randomCharsIndonesia);
        this.flags.push(new Flag(asiaImgs[2], correctAnswerIndonesia, randomCharsIndonesia));

        let correctAnswerJapan = ['J', 'A', 'P', 'A', 'N'];
        let randomCharsJapan = ['J', 'A', 'P', 'A', 'N', 'E', 'J', 'B', 'C', 'A', 'G', 'D', 'X', 'N'];
        randomCharsJapan = shuffle(randomCharsJapan);
        this.flags.push(new Flag(asiaImgs[3], correctAnswerJapan, randomCharsJapan));

        let correctAnswerKuwait = ['K', 'U', 'W', 'A', 'I', 'T'];
        let randomCharsKuwait = ['K', 'U', 'W', 'A', 'I', 'T', 'I', 'A', 'B', 'L', 'C', 'T', 'E', 'A'];
        randomCharsKuwait = shuffle(randomCharsKuwait);
        this.flags.push(new Flag(asiaImgs[4], correctAnswerKuwait, randomCharsKuwait));

        let correctAnswerLebanon = ['L', 'E', 'B', 'A', 'N', 'O', 'N'];
        let randomCharsLebanon = ['L', 'E', 'B', 'A', 'N', 'O', 'N', 'S', 'D', 'C', 'B', 'U', 'K', 'P'];
        randomCharsLebanon = shuffle(randomCharsLebanon);
        this.flags.push(new Flag(asiaImgs[5], correctAnswerLebanon, randomCharsLebanon));

        let correctAnswerPakistan = ['P', 'A', 'K', 'I', 'S', 'T', 'A', 'N'];
        let randomCharsPakistan = ['P', 'A', 'K', 'I', 'S', 'T', 'A', 'N', 'N', 'Q', 'S', 'L', 'P', 'V'];
        randomCharsPakistan = shuffle(randomCharsPakistan);
        this.flags.push(new Flag(asiaImgs[6], correctAnswerPakistan, randomCharsPakistan));

        let correctAnswerQatar = ['Q', 'A', 'T', 'A', 'R'];
        let randomCharsQatar = ['Q', 'A', 'T', 'A', 'R', 'N', 'I', 'A', 'N', 'L', 'U', 'H', 'G', 'T'];
        randomCharsQatar = shuffle(randomCharsQatar);
        this.flags.push(new Flag(asiaImgs[7], correctAnswerQatar, randomCharsQatar));

        let correctAnswerThailand = ['T', 'H', 'A', 'I', 'L', 'A', 'N', 'D'];
        let randomCharsThailand = ['T', 'H', 'A', 'I', 'L', 'A', 'N', 'D', 'J', 'K', 'S', 'O', 'P', 'M'];
        randomCharsThailand = shuffle(randomCharsThailand);
        this.flags.push(new Flag(asiaImgs[8], correctAnswerThailand, randomCharsThailand));

        let correctAnswerYemen = ['Y', 'E', 'M', 'E', 'N'];
        let randomCharsYemen = ['Y', 'E', 'M', 'E', 'N', 'E', 'R', 'L', 'A', 'N', 'D', 'S', 'T', 'C'];
        randomCharsYemen = shuffle(randomCharsYemen);
        this.flags.push(new Flag(asiaImgs[9], correctAnswerYemen, randomCharsYemen));
    }
}

class Africa extends Continent {

    constructor() {
        super();
        this.id = 'afr';

        let correctAnswerAlgeria = ['A', 'L', 'G', 'E', 'R', 'I', 'A'];
        let randomCharsAlgeria = ['A', 'L', 'G', 'E', 'R', 'I', 'A', 'N', 'A', 'Q', 'S', 'L', 'O', 'M'];
        randomCharsAlgeria = shuffle(randomCharsAlgeria);
        this.flags.push(new Flag(africaImgs[0], correctAnswerAlgeria, randomCharsAlgeria));

        let correctAnswerAngola = ['A', 'N', 'G', 'O', 'L', 'A'];
        let randomCharsAngola = ['A', 'N', 'G', 'O', 'L', 'A', 'A', 'O', 'B', 'K', 'L', 'I', 'J', 'S'];
        randomCharsAngola = shuffle(randomCharsAngola);
        this.flags.push(new Flag(africaImgs[1], correctAnswerAngola, randomCharsAngola));

        let correctAnswerEgypt = ['E', 'G', 'Y', 'P', 'T'];
        let randomCharsEgypt = ['E', 'G', 'Y', 'P', 'T', 'E', 'S', 'I', 'A', 'A', 'O', 'P', 'M', 'W'];
        randomCharsEgypt = shuffle(randomCharsEgypt);
        this.flags.push(new Flag(africaImgs[2], correctAnswerEgypt, randomCharsEgypt));

        let correctAnswerKenya = ['K', 'E', 'N', 'Y', 'A'];
        let randomCharsKenya = ['K', 'E', 'N', 'Y', 'A', 'E', 'J', 'B', 'C', 'A', 'G', 'D', 'X', 'N'];
        randomCharsKenya = shuffle(randomCharsKenya);
        this.flags.push(new Flag(africaImgs[3], correctAnswerKenya, randomCharsKenya));

        let correctAnswerMorocco = ['M', 'O', 'R', 'O', 'C', 'C', 'O'];
        let randomCharsMorocco = ['M', 'O', 'R', 'O', 'C', 'C', 'O', 'A', 'B', 'L', 'C', 'T', 'E', 'A'];
        randomCharsMorocco = shuffle(randomCharsMorocco);
        this.flags.push(new Flag(africaImgs[4], correctAnswerMorocco, randomCharsMorocco));

        let correctAnswerMozambique = ['M', 'O', 'Z', 'A', 'M', 'B', 'I', 'Q', 'U', 'E'];
        let randomCharsMozambique = ['M', 'O', 'Z', 'A', 'M', 'B', 'I', 'Q', 'U', 'E', 'B', 'U', 'K', 'P'];
        randomCharsMozambique = shuffle(randomCharsMozambique);
        this.flags.push(new Flag(africaImgs[5], correctAnswerMozambique, randomCharsMozambique));

        let correctAnswerNigeria = ['N', 'I', 'G', 'E', 'R', 'I', 'A'];
        let randomCharsNigeria = ['N', 'I', 'G', 'E', 'R', 'I', 'A', 'N', 'N', 'Q', 'S', 'L', 'P', 'V'];
        randomCharsNigeria = shuffle(randomCharsNigeria);
        this.flags.push(new Flag(africaImgs[6], correctAnswerNigeria, randomCharsNigeria));

        let correctAnswerSouthAfrica = ['S', 'O', 'U', 'T', 'H', 'A', 'F', 'R', 'I', 'C', 'A'];
        let randomCharsSouthAfrica = ['S', 'O', 'U', 'T', 'H', 'A', 'F', 'R', 'I', 'C', 'A', 'H', 'G', 'T'];
        randomCharsSouthAfrica = shuffle(randomCharsSouthAfrica);
        this.flags.push(new Flag(africaImgs[7], correctAnswerSouthAfrica, randomCharsSouthAfrica));

        let correctAnswerSudan = ['S', 'U', 'D', 'A', 'N'];
        let randomCharsSudan = ['S', 'U', 'D', 'A', 'N', 'A', 'N', 'D', 'J', 'K', 'S', 'O', 'P', 'M'];
        randomCharsSudan = shuffle(randomCharsSudan);
        this.flags.push(new Flag(africaImgs[8], correctAnswerSudan, randomCharsSudan));

        let correctAnswerTunisia = ['T', 'U', 'N', 'I', 'S', 'I', 'A'];
        let randomCharsTunisia = ['T', 'U', 'N', 'I', 'S', 'I', 'A', 'L', 'A', 'N', 'D', 'S', 'T', 'C'];
        randomCharsTunisia = shuffle(randomCharsTunisia);
        this.flags.push(new Flag(africaImgs[9], correctAnswerTunisia, randomCharsTunisia));

    }
}

const continentsDefaultData = {
    sa: {
        isLocked: false,
        currFlagNum: 1,
        isCompleted: false,
    },
    na: {
        isLocked: true,
        currFlagNum: 1,
        isCompleted: false,
    },
    eur: {
        isLocked: true,
        currFlagNum: 1,
        isCompleted: false,
    },
    asi: {
        isLocked: true,
        currFlagNum: 1,
        isCompleted: false,
    },
    afr: {
        isLocked: true,
        currFlagNum: 1,
        isCompleted: false,
    }
};

export {SouthAmerica, NorthAmerica, Europe, Asia, Africa, continentsDefaultData, contDB};

