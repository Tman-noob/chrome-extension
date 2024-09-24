let myLeads = []
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem(("myLeads")))
const ulEl = document.getElementById("ul-el")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputEl.addEventListener("keypress", function () {
    if (event.key === "Enter") {
        inputBtn.click()
    }
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
    console.log(myLeads)
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
                <li>
                    <a href="${myLeads[i]}" target="_blank">
                        ${myLeads[i]}
                    </a>
                </li>
        `
    }
    ulEl.innerHTML = listItems
}