const cursos = [
    { nome: "HTML", area: "Estrutura" },
    { nome: "CSS", area: "Estilo" },
    { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

function render(texto = "") {
    const filtrados = cursos.filter(curso =>
        curso.nome.toLowerCase().includes(texto.toLowerCase())
    );

    if (filtrados.length === 0) {
        lista.innerHTML = "<li>Nada encontrado</li>";
        return;
    }

    lista.innerHTML = filtrados.map(curso =>
        `<li>${curso.nome}</li>`
    ).join("");
}

render();

busca.addEventListener("input", () => render(busca.value));
