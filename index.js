//Arrow funcction
// const names = ["Chanel", "Raxona", "Jhon", "Carmen"];

// const fullName = names.map(function(name) {
//   return `${name} Chai`;
// });

// console.log(fullName);

// const fullName1 = names.map(name => `${name} Chai`);
// console.log(fullName1);

// const fullName2 = names.map(() => "cool bos");
// console.log(fullName2);

/* More arrow function examples*/
// const race = ["100m Dash ", "200m Dash ", "150m Dash", "600m Dash"];
// const winners = ["Hunter Gath", "singa Song ", "Inda bos"];

// const wine = winners.map((winner, i) => ({
//   name: winner,
//   race: race[i],
//   place: i + 1
// }));
// console.log(wine);

// const age = new Array(12, 34, 45, 89, 23, 45, 23, 14);

// const old = age.filter(age => age >= 34);
// console.log(old);
const dict = {
  HTML: "Hyper text markup language lenguaje de marcado de inpert texto",
  CSS: "Cascading Style  Sheets  Hohas de istilo en cadcada",
  JS: "JavaScripst da funcionlidad a el sitio web"
};

function addAbbreviations(strings, ...values) {
  const abbreviate = values.map(value => {
    if (dict[value]) {
      return `<abbr title="${dict[value]}">${value}</abbr>`;
    }
    return value;
  });
  return strings.reduce((sentence, string, i) => {
    return `${sentence}${string}${abbreviate[i] || ""}`;
  }, "");
}

const firts = "Wes";
const last = "Bos";

const sentence = addAbbreviations`Hello my is name ${firts} ${last} and I
 love code ${"HTML"}, ${"CSS"} and ${"JS"}`;

const bio = document.querySelector(".bio");
const p = document.createElement("p");
p.innerHTML = sentence;
bio.appendChild(p);
