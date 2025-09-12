const input = document.querySelector("#favchap");
const btn = document.querySelector("button");
const list = document.querySelector("#list");

btn.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");

        li.textContent = input.value;
        deleteBtn.textContent = "❌";

        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteBtn);
        list.appendChild(li);
        input.value = "";
    }
    input.focus();
});

