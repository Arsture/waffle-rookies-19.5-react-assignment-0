const nameForm = document.querySelector('form');
const input = document.querySelector('#writeName');

console.dir(input);

function addName(event){
    event.preventDefault();
    if (input.value !== ""){
        const list = document.querySelector('ul');
        const inputValue = input.value;
        input.value = "";
        const plusName = document.createElement('li');
        plusName.innerText = inputValue;
        list.appendChild(plusName);
    } else{
        window.alert("이름을 입력해주세요!");
    }
}

nameForm.addEventListener('submit',addName);
