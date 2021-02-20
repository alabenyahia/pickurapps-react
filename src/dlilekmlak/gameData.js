import shuffle from "lodash/shuffle"
import boxOpeningAudio from "./audio/box_opening_sound.mp3"
import clappingAudio from "./audio/clapping_sound.mp3"
import goodClappingAudio from "./audio/good_clapping_sound.mp3"
import laughingAudio from "./audio/laughing_sound.mp3"
import oneOrTwoMillAudio from "./audio/one_or_two_m_sound.mp3"
import phoneAudio from "./audio/phone_sound.mp3"
import boxChosen from "./audio/box_chosen_sound.mp3"

class GameData {
    constructor() {
        this.things = shuffle([...things]);
        this.boxes = [...boxes];
        this.boxes[1].value = this.things[0];
        this.boxes[5].value = this.things[1];
        this.boxes[9].value = this.things[2];
        this.boxes[11].value = this.things[3];
        this.shuffledBoxes = shuffle(this.boxes);

    }
}

class GameAudio {
    constructor() {
        this.boxOpeningAudio = new Audio(boxOpeningAudio);
        this.boxOpeningAudio.load();
        this.clappingAudio = new Audio(clappingAudio);
        this.clappingAudio.load();
        this.goodClappingAudio = new Audio(goodClappingAudio);
        this.goodClappingAudio.load();
        this.laughingAudio = new Audio(laughingAudio);
        this.laughingAudio.load();
        this.oneOrTwoMillAudio = new Audio(oneOrTwoMillAudio);
        this.oneOrTwoMillAudio.load();
        this.phoneAudio = new Audio(phoneAudio);
        this.phoneAudio.load();
        this.boxChosen = new Audio(boxChosen);
        this.boxChosen.load();
    }

    stopAllAudio() {
        this.boxOpeningAudio.pause();
        this.boxOpeningAudio.currentTime = 0;

        this.goodClappingAudio.pause();
        this.goodClappingAudio.currentTime = 0;

        this.clappingAudio.pause();
        this.clappingAudio.currentTime = 0;

        this.laughingAudio.pause();
        this.laughingAudio.currentTime = 0;

        this.oneOrTwoMillAudio.pause();
        this.oneOrTwoMillAudio.currentTime = 0;

        this.phoneAudio.pause();
        this.phoneAudio.currentTime = 0;

        this.boxChosen.pause();
        this.boxChosen.currentTime = 0;

    }
}


let things = [
    "كلسيتة", "براية", "بلايستايشن", "بافات", "كاسكات", "تلفاز", "مخدة", "شمعة", "براد تاي ", "أمبوبة", "شارجور", "100ج قلوب ", "بريكية", "قازوزة", "صحفة لبلابي", "شيشة"
];

let boxes = [
    {index: 0, id: "lwc-01", value: "0.1"},
    {index: 1, id: "lwc-02", value: ""},
    {index: 2, id: "lwc-03", value: "1"},
    {index: 3, id: "lwc-04", value: "10"},
    {index: 4, id: "lwc-05", value: "50"},
    {index: 5, id: "lwc-06", value: ""},
    {index: 6, id: "lwc-07", value: "100"},
    {index: 7, id: "lwc-08", value: "250"},
    {index: 8, id: "lwc-09", value: "500"},
    {index: 9, id: "lwc-10", value: ""},
    {index: 10, id: "lwc-11", value: "1000"},
    {index: 11, id: "lwc-12", value: ""},
    {index: 12, id: "rwc-01", value: "5.000"},
    {index: 13, id: "rwc-02", value: "10.000"},
    {index: 14, id: "rwc-03", value: "15.000"},
    {index: 15, id: "rwc-04", value: "20.000"},
    {index: 16, id: "rwc-05", value: "25.000"},
    {index: 17, id: "rwc-06", value: "30.000"},
    {index: 18, id: "rwc-07", value: "50.000"},
    {index: 19, id: "rwc-08", value: "100.000"},
    {index: 20, id: "rwc-09", value: "200.000"},
    {index: 21, id: "rwc-10", value: "300.000"},
    {index: 22, id: "rwc-11", value: "1.000.000"},
    {index: 23, id: "rwc-12", value: "2.000.000"}
];

export {GameData, GameAudio}