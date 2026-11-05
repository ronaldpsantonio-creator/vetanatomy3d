const descriptions = {
  "óseo": "Estudia la organización del esqueleto, sus principales huesos y su función de sostén y protección.",
  "muscular": "Explora los grupos musculares, sus inserciones y su participación en el movimiento.",
  "digestivo": "Conoce los órganos digestivos y las particularidades anatómicas de cada especie.",
  "respiratorio": "Identifica las vías respiratorias, pulmones y estructuras relacionadas con la ventilación.",
  "circulatorio": "Estudia el corazón, los vasos sanguíneos y la circulación de la sangre.",
  "nervioso": "Reconoce el encéfalo, la médula espinal, los nervios y sus funciones generales.",
  "urinario": "Conoce los riñones, uréteres, vejiga y uretra.",
  "reproductor": "Explora los órganos reproductores masculinos y femeninos."
};
let species = "equino";
let system = "óseo";
function updateStudy(){
  document.getElementById("study-title").textContent = `Sistema ${system} · ${species[0].toUpperCase()+species.slice(1)}`;
  document.getElementById("study-description").textContent = descriptions[system];
}
document.querySelectorAll("#species button").forEach(button=>{
  button.addEventListener("click",()=>{
    species=button.dataset.value;
    document.querySelectorAll("#species button").forEach(b=>b.classList.toggle("active",b===button));
    updateStudy();
  });
});
document.querySelectorAll("#systems button").forEach(button=>{
  button.addEventListener("click",()=>{
    system=button.dataset.value;
    document.querySelectorAll("#systems button").forEach(b=>b.classList.toggle("active",b===button));
    updateStudy();
  });
});
