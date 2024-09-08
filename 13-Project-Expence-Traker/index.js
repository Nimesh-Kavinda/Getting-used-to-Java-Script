//** Add transaction */

const form = document.querySelector(".add");
const incomeList = document.querySelector("ul.income-list");
const expenseList = document.querySelector("ul.expense-list");
let transactions = localStorage.getItem("transactions") !== null ? JSON.parse(localStorage.getItem("transactions")) : [];

incomeList.addEventListener("click", event => {
    console.log("nimesh");
});

function genarateTemplate(id, source, amount, time){
    return `<li data-id="${id}">
                                <p>
                                    <span>${source}</span>
                                    <span id="time">${time}</span>
                                </p>
                                $<span>${Math.abs(amount)}</span> 
                                <i class="bi bi-trash-fill delete"></i>
                            </li>`
}

function addTransactionDOM(id, source, amount, time){
    if(amount > 0){
        incomeList.innerHTML += genarateTemplate(id, source, amount, time);
    }else{
        expenseList.innerHTML += genarateTemplate(id, source, amount, time);
    }
};


function addTransaction(source, amount){
    const time = new Date();
    const transaction = {
        id:Math.floor(Math.random()*10000),
        source: source,
        amount: amount,
        time: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`
    };
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    addTransactionDOM(transaction.id, source, amount, transaction.time);
};




form.addEventListener("submit", event =>{
    event.preventDefault();
    addTransaction(form.source.value, form.amount.value);
    form.reset();
  
});

