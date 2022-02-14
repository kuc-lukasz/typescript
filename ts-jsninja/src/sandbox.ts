const anchor = document.querySelector("a")!;

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const fromWho = document.querySelector("#tofrom") as HTMLInputElement;

console.log(form.children);

let arr: object[] = [];

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let invoice: Function;

    invoice = (client: string, details: string, amount: number) => {
        return `${client} owes ${amount}EUR for ${details}`;
    };

    arr.push({ to: fromWho.value, amount: amount.valueAsNumber });

    console.log(arr);
});
