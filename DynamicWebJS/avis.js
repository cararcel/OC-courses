export function ajoutListenerAvis() {
    const piecesElement = document.querySelectorAll(".fiches articles button");

    for (let i = 0; i < piecesElement.length; i++) {
        piecesElement[i].addEventListener("click", function (event) {
            const id = event.target.dataset.id;
            fetch(`http://localhost:8081/pieces/${id}/avis`);
        });
    }
}
