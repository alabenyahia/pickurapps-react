import shuffle from "lodash/shuffle"

class GameData {
    constructor() {
        this.things = shuffle([...things]);
        this.boxes = [...boxes];
        this.boxes[1].value = this.things[0];
        this.boxes[5].value = this.things[1];
        this.boxes[9].value = this.things[2];
        this.boxes[11].value = this.things[3];
        this.shuffledBoxes = shuffle(this.boxes);
        console.log("ruuuun");
    }
}

const things = [
    "كلسيتة", "براية", "بلايستايشن", "بافات", "كاسكات", "تلفاز", "مخدة", "شمعة", "براد تاي ", "أمبوبة", "شارجور", "100ج قلوب ", "بريكية", "قازوزة", "صحفة لبلابي", "شيشة"
];

const boxes = [
    {id: "lwc-01", value: "0.1"},
    {id: "lwc-02", value: ""},
    {id: "lwc-03", value: "1"},
    {id: "lwc-04", value: "10"},
    {id: "lwc-05", value: "50"},
    {id: "lwc-06", value: ""},
    {id: "lwc-07", value: "100"},
    {id: "lwc-08", value: "250"},
    {id: "lwc-09", value: "500"},
    {id: "lwc-10", value: ""},
    {id: "lwc-11", value: "1000"},
    {id: "lwc-12", value: ""},
    {id: "rwc-01", value: "5.000"},
    {id: "rwc-02", value: "10.000"},
    {id: "rwc-03", value: "15.000"},
    {id: "rwc-04", value: "20.000"},
    {id: "rwc-05", value: "25.000"},
    {id: "rwc-06", value: "30.000"},
    {id: "rwc-07", value: "50.000"},
    {id: "rwc-08", value: "100.000"},
    {id: "rwc-09", value: "200.000"},
    {id: "rwc-10", value: "300.000"},
    {id: "rwc-11", value: "1.000.000"},
    {id: "rwc-12", value: "2.000.000"}
];

export {GameData}