document.addEventListener("DOMContentLoaded", () => {
    const inputTask = document.getElementById("new-task");
    const botaoAdd = document.getElementById("add-task");
    const listaTask = document.getElementById("list-task");

    function addTarefa() {
        const taskTexto = inputTask.value.trim();
        if (taskTexto !== "") {
            const li = document.createElement("li");
            li.draggable = "true";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            const label = document.createElement("label");
            label.textContent = taskTexto;

            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    label.classList.add("concluida");
                    li.classList.add("concluida");
                } else {
                    label.classList.remove("concluida");
                    li.classList.remove("concluida");
                }
            });

            const botaoRmv = document.createElement("button");
            botaoRmv.textContent = "Remover";
            botaoRmv.classList.add("remover");
            botaoRmv.addEventListener("click", () => {
                li.remove();
            });

            li.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(botaoRmv);
            listaTask.appendChild(li);
            inputTask.value = "";
        }
    }

    botaoAdd.addEventListener("click", addTarefa);

    inputTask.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTarefa();
        }
    });
});
