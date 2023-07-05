const input=document.getElementById("noofwords");

const container=document.querySelector(".container");
let noofwords;
const generatetext=(n)=>{
    let text="";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < n; ++i) {
        const random = (Math.random() * 25).toFixed(0);
        text += letters[random];
      }
    return text;
};

function generatepara() {
    noofwords = Number(input.value);

    let data = "";
    const para = document.createElement("p");
    for (let i = 0; i < noofwords; i++) {
        const random = (Math.random() * 25).toFixed(0);
        data += generatetext(random);
        data += " ";

    }
    para.innerText = data;
    para.setAttribute("class", "paras");
    container.append(para);
}
