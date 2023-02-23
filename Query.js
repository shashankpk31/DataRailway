let train = [];
for (let i = 2; i < document.querySelector(".srhres").childElementCount; i += 2) {
    let data={};
    let check1=document.querySelector(".srhres").children[i];
    let check2=document.querySelector(".srhres").children[i].children[0];
    if (check1 && check2) {
        data.train_no=document.querySelector(".srhres").children[i].children[0].innerText;
        data.train_name=document.querySelector(".srhres").children[i].children[1].innerText;
        data.train_type=document.querySelector(".srhres").children[i].children[2].innerText;
        data.train_zone=document.querySelector(".srhres").children[i].children[3].innerText;
        data.train_src=document.querySelector(".srhres").children[i].children[6].innerText;
        data.train_dep=document.querySelector(".srhres").children[i].children[7].innerText;
        data.train_dst=document.querySelector(".srhres").children[i].children[8].innerText;
        data.train_arr=document.querySelector(".srhres").children[i].children[9].innerText;
        data.train_duration=document.querySelector(".srhres").children[i].children[10].innerText;
        data.train_halts=document.querySelector(".srhres").children[i].children[11].innerText;
        data.train_weekdays=document.querySelector(".srhres").children[i].children[12].innerText;
        data.train_Classes=document.querySelector(".srhres").children[i].children[13].innerText;
        data.train_dist=document.querySelector(".srhres").children[i].children[14].innerText;
        data.train_Speed=document.querySelector(".srhres").children[i].children[15].innerText;
        data.train_return=document.querySelector(".srhres").children[i].children[16].innerText;
        train.push(data);
    }
}
console.log(train);

