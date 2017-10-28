(function(){

function dateFunc(){
	let date = new Date(),
		options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',	
		};
		return date.toLocaleString('ru', options);
}

function onClick() {

	event.preventDefault();

	let elem = document.getElementById('b_comments'),
		textarea = document.getElementById('textarea'),
		div = document.getElementById('comment_item').cloneNode(true);
			
	
	div.querySelector('.b-item-comment__author').innerHTML = 'Богдан Жмай';
	div.querySelector('.b-item-comment__date').innerHTML = dateFunc();
	div.querySelector('.b-item-comment__text').innerHTML = textarea.value;

	elem.appendChild(div);

	document.getElementById('textarea').value = '';
}

addBtn = document.getElementById('add_btn');
addBtn.addEventListener('click', onClick)

})()
