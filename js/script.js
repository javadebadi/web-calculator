const PREFIX = {
  "Y": Math.pow(10, 24),  // yotta
  "Z": Math.pow(10, 21),  // zeta
  "E": Math.pow(10, 18),  // exa
  "P": Math.pow(10, 15),  // peta
  "T": Math.pow(10, 12),  // tera
  "G": Math.pow(10, 9),   // giga
  "M": Math.pow(10, 6),   // mega
  "k": Math.pow(10, 3),   // kilo
  "h": Math.pow(10, 2),   // hecto
  "da": Math.pow(10, 1),  // deca
  "1": Math.pow(10, 0),   // nothing
  "d": Math.pow(10, 0),   // deci
  "c": Math.pow(10, 0),   // centi
  "m": Math.pow(10, -3),  // mlli
  "mu": Math.pow(10, -6), //micro
  "n": Math.pow(10,-9),   // nano
  "p": Math.pow(10, -12), // pico
  "f": Math.pow(10, -15), // femto
  "a": Math.pow(10, -18), // atto
  "z": Math.pow(10, -21), // zepto
  "y": Math.pow(10, -24), // yocta
};

const PLANCK_MASS = {
  // Planck mass in eV (electron volt)
  "eV": 1.220910*Math.pow(10,19)*Math.pow(10,9),
  // Planck mass in g (gram)
  "g": 2.176435*Math.pow(10, -8)
};

function Prefix(prefix){
  this.prefix = prefix;
};




function Mass(value, unit, prefix){
  this.value = value;
  this.unit = unit;
  this.prefix = prefix;

  this.toNatural = function(){
    return this.value/PLANCK_MASS.GeV;
  };

};


var input_value = "";
var evPower = 0;

function addMeV(){
  evPower++;
}


function setPrefixMass(x){
  current = document.querySelector("#prefix-mass");
  current.textContent=x;
};

function printInfo(){
  let s = "MeV<sup>"+evPower+"</sup>";
  console.log(s);
}
