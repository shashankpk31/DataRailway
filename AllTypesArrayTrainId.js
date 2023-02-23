const fs = require("fs");

let ACExpres = require("./ACExpres.json"),
    EMUKolkata = require("./EMUKolkata.json"), MailOrExpress = require("./MailOrExpress.json"),
    Suvidha = require("./Suvidha.json"),
    ACSuperFast = require("./ACSuperFast.json"), EMUMumbai = require("./EMUMumbai.json"),
    MemuTrains = require("./MemuTrains.json"), Tejas = require("./Tejas.json"),
    Antyodaya = require("./Antyodaya.json"), EMUPune = require("./EMUPune.json"),
    passengerTrainData = require("./passengerTrainData.json"), ToBeIntroduced = require("./ToBeIntroduced.json"),
    DEMU = require("./DEMU.json"), GaribRath = require("./GaribRath.json"),
    Uday = require("./Uday.json"),
    DoubleDecker = require("./DoubleDecker.json"), HamSafar = require("./HamSafar.json"),
    Rajdhani = require("./Rajdhani.json"), VandeBharat = require("./VandeBharat.json"),
    Duronto = require("./Duronto.json"), HillTrain = require("./HillTrain.json"),
    SamparkKranti = require("./SamparkKranti.json"),
    EMUChennai = require("./EMUChennai.json"), HyderabadSuburban = require("./HyderabadSuburban.json"),
    Shatabdi = require("./Shatabdi.json"),
    EMUDelhi = require("./EMUDelhi.json"), JanShatabdi = require("./JanShatabdi.json"),
    SuperFastTrainData = require("./SuperFastTrainData.json");


let LargeData = [], notinserted =[],lengthData={};


ACExpres.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
    lengthData.ACExpres=ACExpres.length;
});


MailOrExpress.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
    lengthData.MailOrExpress=MailOrExpress.length;
});

Shatabdi.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
    lengthData.Shatabdi=Shatabdi.length;
});
Suvidha.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
    lengthData.Suvidha=Suvidha.length;
});
ACSuperFast.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
    lengthData.Suvidha=Suvidha.length;
});
EMUChennai.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
EMUDelhi.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});

EMUKolkata.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
EMUMumbai.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
MemuTrains.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
DEMU.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
Tejas.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
EMUPune.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
passengerTrainData.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});

ToBeIntroduced.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
GaribRath.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});

Uday.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
DoubleDecker.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
HamSafar.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
Rajdhani.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
VandeBharat.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
Duronto.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
HillTrain.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
SamparkKranti.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});

HyderabadSuburban.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
JanShatabdi.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
SuperFastTrainData.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});
Antyodaya.forEach(elm => {
    if (!LargeData.some((obj) => obj.train_no === elm.train_no)) {
        LargeData.push(elm);
    } else {
        notinserted.push(elm)

    }
});



fs.writeFileSync('LargeData.json', JSON.stringify(LargeData), (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Large Data created");

})

fs.writeFileSync('NotInsertedData.json', JSON.stringify(notinserted), (err) => {
    if (err) {
        console.log(err);
    }
    console.log("notinserted Data created");

})

// console.log(
//     "ACExpres", ACExpres.length,
//     "EMUKolkata",EMUKolkata.length,
//     "MailOrExpress",MailOrExpress.length,
//     "Shatabdi",Shatabdi.length,
//     "Suvidha",Suvidha.length,
//     "ACSuperFast",ACSuperFast.length,
//     "EMUChennai",EMUChennai.length,
//     "EMUDelhi",EMUDelhi.length,
//     "EMUMumbai",EMUMumbai.length,
//     "MemuTrains",MemuTrains.length,
//     "DEMU",DEMU.length,
//     "Tejas",Tejas.length,
//     "EMUPune",EMUPune.length,
//     "passengerTrainData",passengerTrainData.length,
//     "ToBeIntroduced",ToBeIntroduced.length,
//     "GaribRath",GaribRath.length,
//     "Uday",Uday.length,
//     "DoubleDecker",DoubleDecker.length,
//     "HamSafar",HamSafar.length,
//     "Rajdhani",Rajdhani.length,
//     "VandeBharat",VandeBharat.length,
//     "Duronto",Duronto.length,
//     "HillTrain",HillTrain.length,
//     "SamparkKranti",SamparkKranti.length,
//     "HyderabadSuburban",HyderabadSuburban.length,
//     "JanShatabdi",JanShatabdi.length,
//     "SuperFastTrainData",SuperFastTrainData.length,
//     "Antyodaya",Antyodaya.length
// );

