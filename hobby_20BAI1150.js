const btn = document.querySelector('button');
const main = document.querySelector('.container');
const url = "hobby.txt";

btn.onClick = reqData;

function output(Data)
{
	console.log(data);
	console.log(this.responseText);
}

function reqData()
{
	const xhr = new XMLHttpRequest();
	xhr.addEventListener('load', output);
	xhr.open('GET', url);
	xhr.send();
	console.log(xhr);
}