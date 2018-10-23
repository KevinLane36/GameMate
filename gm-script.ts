import "introcs";
let names: HTMLInputElement = document.getElementById("names") as HTMLInputElement;
let age: HTMLInputElement =  document.getElementById("age") as HTMLInputElement;
let form: HTMLButtonElement = document.getElementById("button") as HTMLButtonElement;
let testingdiv: HTMLElement =  document.getElementById("testingdiv") as HTMLElement;
let r1: HTMLInputElement = document.getElementById("r1") as HTMLInputElement;
let r2: HTMLInputElement = document.getElementById("r2") as HTMLInputElement;
let r3: HTMLInputElement = document.getElementById("r3") as HTMLInputElement;
let inputbody1: HTMLElement = document.getElementById("inputbody1") as HTMLElement;
let inputbody2: HTMLElement = document.getElementById("inputbody2") as HTMLElement;
let inputbody3: HTMLElement = document.getElementById("inputbody3") as HTMLElement;
let gamedivs: HTMLElement = document.getElementById("gamediv") as HTMLElement;
let bodydiv: HTMLElement = document.getElementById("bodydiv")  as HTMLElement;
let p1: HTMLInputElement = document.getElementById("p1") as HTMLInputElement;
let p2: HTMLInputElement = document.getElementById("p2") as HTMLInputElement;
let p3: HTMLInputElement = document.getElementById("p3") as HTMLInputElement;
let p4: HTMLInputElement = document.getElementById("p4") as HTMLInputElement;
let p5: HTMLInputElement = document.getElementById("p5") as HTMLInputElement;
let p6: HTMLInputElement = document.getElementById("p6") as HTMLInputElement;
let p7: HTMLInputElement = document.getElementById("p7") as HTMLInputElement;
let p8: HTMLInputElement = document.getElementById("p8") as HTMLInputElement;
let p9: HTMLInputElement = document.getElementById("p9") as HTMLInputElement;
let p10: HTMLInputElement = document.getElementById("p10") as HTMLInputElement;
let gameimg: HTMLImageElement = document.getElementById("gameimg") as HTMLImageElement;

// TODO:
// Pass value through to game function call
// If then statements for values 

let pagecounter: number = 0;
let ageData: number = 0;
let expData: number = 0;
let per: number[] = [];
export function main(): void {
console.log("main");

form.onclick = page1holdData;
}

function page1holdData(event: Event): void {
    event.preventDefault();
    if (pagecounter === 0) {
    // Names
    let nameData: string;
    nameData = names.value;



    // Ages
    ageData = 0;
    // tslint:disable-next-line:radix
    ageData = parseInt(age.value);


    // Experience
    expData = 0;
    if (r1.checked) {
        expData = 1;
    }
    if (r2.checked) {
        expData = 2;
    }
    if (r3.checked) {
        expData = 3;
    }
    }

    // Personality

    
    // Alone or Team
    if (p1.checked) {
            per[0] = 1;
        } 
    if (p2.checked) {
            per[0] = 2;
        }
    // fantasy and Realism
    if (p3.checked) {
            per[1] = 1;
    }
    if (p4.checked) {
            per[1] = 2;
    }
    // Guns or no Guns
  
    if (p5.checked) {
            per[2] = 1;
    }
    if (p6.checked) {
            per[2] = 2;
    }
    // PVP or PVE
 
    if (p7.checked) {
            per[3] = 1;
    }
    if (p8.checked) {
        per[3] = 2;
    }

    // Action or Sports
    if (p9.checked) {
        per[4] = 1;
    }
    if (p10.checked) {
    per[4] = 2;
    }


    pagecounter++;



    if (pagecounter === 1) {
    nextPage1();

    }

    if (pagecounter === 2) {
        gameResult(ageData, expData, per);
    }
}
    // future pages

    

function nextPage1(): void {
// Change div displays
    inputbody2.style.display = "inline";
    inputbody1.style.display = "none";
  
}


function gameResult(ages: number, exp: number, pers: number[]): void {
    gamedivs.style.display = "inline";
    inputbody2.style.display = "none";
    inputbody1.style.display = "none";
    bodydiv.style.display = "none";
    // print(ages);
    // print(exp);
    // print(pers);

    if (ages <= 6) {
        gameimg.src = "lego.jpg";
    } else if (ages > 6 && ages <= 10) {
        if (exp === 1) {
            gameimg.src = "mariok.jpg";
        } else {
            print(exp);
            gameimg.src = "minecraft.jpg";
        }
    } else if (ages > 10 && ages <= 12) {
        // print(pers[4]);
        if (exp === 1) {
            gameimg.src = "smario.jpg";
            } else if (pers[0] === 1  && pers[1] === 2) {
                gameimg.src = "zelda.jpg";
            } else if (pers[1] === 2 && pers[3] === 1) {
                gameimg.src = "splat.jpg";
            } else {
            gameimg.src = "minecraft.jpg";
            }
    } else if (ages > 13 && ages <= 15) {
        if (exp === 1) {
            if (pers[4] === 2) {
            gameimg.src = "smario.jpg";
            } else if (pers[4] === 3) {
                gameimg.src = "mariok.jpg";
            }
        }
        if (exp === (2 || 3)) {
            if (pers[1] === 1 && pers[2] === 2 && pers[3] === 2) {
                gameimg.src = "skyrim.jpg";
            } else if (pers[2] === 2 && pers [3] === 1) {
                gameimg.src = "cod.jpg";
            } else if (pers[3] === 1) {
                gameimg.src = "ow.jpg";
            }
        } else {
            gameimg.src = "minecraft.jpg";
        }
    }
    if (ages > 15 && ages <= 50) {
        // print("reached age test");
        if (exp === 1) {
                gameimg.src = "smario.jpg";
            }
        if (arraysEqual(pers, [1, 2, 2, 2, 1])) {
                gameimg.src = "skyrim.jpg";
            } 
        if (arraysEqual(pers, [1, 2, 1, 2, 1])) {
                gameimg.src = "fallout.jpg";
            }
        if (arraysEqual(pers, [1, 1, 1, 2, 1])) {
                gameimg.src = "lastouf.jpg";
            }
        if (arraysEqual(pers, [2, 1, 1, 2, 1])) {
                gameimg.src = "bf.jpg";
            } else if (arraysEqual(pers, [2, 2, 2, 2, 1])) {
                gameimg.src = "lol.png";
            } else if (arraysEqual(pers, [2, 1, 1, 2, 1])) {
                gameimg.src = "fhonor.jpg";
            } else if (arraysEqual(pers, [1, 1, 2, 2, 2])) {
                gameimg.src = "sims.jpg";
            } else if (arraysEqual(pers, [2, 1, 1, 1, 1])) {
                gameimg.src = "ow.jpg";
            } else if (arraysEqual(pers, [2, 1, 1, 1, 2])) {
                gameimg.src = "gta.jpg";
            } else if (arraysEqual(pers, [2, 1, 1, 2, 2])) {
                gameimg.src = "rl.jpg";
            } else if (arraysEqual(pers, [1, 2, 2, 1, 2])) {
                gameimg.src = "rl.jpg";
            } else if (arraysEqual(pers, [1, 1, 2, 1, 2])) {
                gameimg.src = "fifa.jpg";
            }
    }

    if (ages > 50) {
        gameimg.src = "pong.png";
    }
    }








function arraysEqual(a: number[], b: number[]): boolean {
    
    if (a.length !== b.length) {
        return false;
    }
    for (let i: number = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    
    return true;
}

main();





// Game List

// Mario Games
// PUBG
// Elmo's learning game
// Skyrim
// Fallout
// Minecraft