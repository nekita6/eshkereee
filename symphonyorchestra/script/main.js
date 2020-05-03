const menuSong = new Audio('./audio/menuSong.mp3');
const loseSong = new Audio('./audio/loseSong.mp3');
const clickBtn = new Audio('./audio/clickBtn.mp3');

menuSong.addEventListener("load", function() {
  menuSong.play();
}, true);

const zeroBtn = document.getElementById('zeroBtn');
const beginBtn = document.getElementById('beginBtn');
const goGameBtn = document.getElementById('goGameBtn');
const closeTestBtn = document.getElementById('closeTest');
const continueTestBtn = document.getElementById('continueTestBtn');
const chooseOtherCategoryBtn = document.getElementById('chooseOtherCategoryBtn');
const backPassTestBtn = document.getElementById('backPassTestBtn');
const sectionUno = document.getElementById('sectionUno');
const sectionDos = document.getElementById('sectionDos');
const testSection = document.getElementById('testSection');
const sectionSupport = document.getElementById('sectionSupport');
const sectionBadResult = document.getElementById('sectionBadResult');
const sectionGoodResult = document.getElementById('sectionGoodResult');
const sectionCategoryWin = document.getElementById('sectionCategoryWin');
const playCurrentSongBtn = document.getElementById('playCurrentSongBtn');
const currentInstrumentSection = document.getElementById('currentInstrumentSection');
const instrumentsSupportSection = document.getElementById('instrumentsSupportSection');
const sectionGameMenu = document.getElementById('sectionGameMenu');
const variantSection = document.getElementById('variantSection');
const sectionGame = document.getElementById('sectionGame');

const livesStatus = document.getElementById('livesStatus');
const completeStatus = document.getElementById('completeStatus');
const topScoreStatus = document.getElementById('topScoreStatus');
const unoOpenGameMenuBtn = document.getElementById('unoOpenGameMenuBtn');
const dosOpenGameMenuBtn = document.getElementById('dosOpenGameMenuBtn');

const btns = document.querySelectorAll('button')
const sections = document.querySelectorAll('section')
const supportDetails = document.querySelectorAll('details');
const categoryBtns = document.querySelectorAll('.categoryBtn');
const openGameMenuBtns = document.querySelectorAll('.openGameMenuBtn');
const supportBtns = document.querySelectorAll('.supportBtn');
const homeBtns = document.querySelectorAll('.homeBtn');

let step = 0;
let lives = 0;
let complete = 0;
let topScore = 0;
let toggle = false;
let currentQuestions = [];
let quest = "";
let variants = "";
let answerId = "";
let answerName = "";
let currentCategory = "";

function statusUpdate() {
	if (localStorage.getItem('lives') != undefined && localStorage.getItem('lives') > 0) {
		lives = localStorage.getItem('lives');
		livesStatus.innerHTML = 'жизней в игре: '+lives;
	}

	if (localStorage.getItem('complete') != undefined && localStorage.getItem('complete') > 0) {
		complete = localStorage.getItem('complete');
		completeStatus.innerHTML = 'изучено инструментов: '+complete;
	}

	if (localStorage.getItem('topScore') != undefined && localStorage.getItem('topScore') > 0) {
		topScore = localStorage.getItem('topScore');
		topScoreStatus.innerHTML = 'рекорд в игре: '+topScore;
	}
}

statusUpdate();

function suggestZeroApp() {
	categoryBtns.forEach(function(btn) {
		if (btn.style.display == 'none') {
			toggle = true;
		}
	})
	if (toggle) {
		zeroBtn.style.display = 'inline-block';
	}
}

function zeroApp() {
	let tempLives = localStorage.getItem('lives');
	let tempTopScore = localStorage.getItem('topScore');
	localStorage.clear();
	localStorage.setItem('lives', tempLives);
	localStorage.setItem('topScore', tempTopScore);
	location.reload();
}

beginBtn.onclick = chooseOtherCategoryBtn.onclick = function() {
	protectLives();
	markCategoryBtns();
	closeSections();
	suggestZeroApp();
	menuSong.play();
	sectionUno.style.display = "none";
	sectionDos.style.display = "flex";
}

backPassTestBtn.addEventListener('click', backPassTest, {passive: true});
continueTestBtn.addEventListener('click', continueTest, {passive: true});
zeroBtn.addEventListener('click', zeroApp, {passive: true});
currentInstrumentImg.addEventListener('click', playCurrentInstrumentSong, {passive: true});
playCurrentSongBtn.addEventListener('click', playCurrentInstrumentSong, {passive: true});
closeTestBtn.addEventListener('click', closeTest, {passive: true});

openGameMenuBtns.forEach(function(btn) {
	btn.onclick = function() {
		document.querySelector('#sectionGameMenu p').innerHTML = 'для управления используй стрелки на клавиатуре<br>у тебя есть '+lives+' попытки';
		closeSections();
		sectionGameMenu.style.display = "block";
	}
})

function zeroStep() {
	step = 0;
	currentQuestions = [];
}

function playCurrentInstrumentSong() {
	let currentInstrumentSong = document.getElementById('currentInstrumentSong');
	let currentInstrumentImg = document.getElementById('currentInstrumentImg');
	if (currentInstrumentSong.paused) {
		currentInstrumentSong.play();
		currentInstrumentImg.classList.add('animated');
	}
	else {
		currentInstrumentSong.pause();
		currentInstrumentImg.classList.remove('animated');
	}
}

function continueTest() {
	sectionGoodResult.style.display = 'none';
	playCurrentInstrumentSong();
	stopMenuSong();
}

function backPassTest() {
	addQuestToTestSection(currentQuestions, step);
	sectionBadResult.style.display='none';
	playCurrentInstrumentSong();
}

function closeTest() {
	protectLives();
	markCategoryBtns();
	testSection.style.display='none'; 
	sectionDos.style.display='flex';
	stopCurrentInstrumentSong();
	menuSong.play()
}

function stopCurrentInstrumentSong() {
	currentInstrumentSong.pause();
	currentInstrumentSong.currentTime = 0;
}

function closeSections() {
	sections.forEach(function(section) {
		section.style.display = "none";
	})
}

function stopMenuSong() {
	menuSong.pause();
	menuSong.currentTime = 0;
}

function addInstrumentsToSupport() {
	let html = "";
	for(let i=0; i<instruments.length; i++) {
		let data = instruments[i];
		html += '<details><summary>'+ data["name"] +'</summary>';
		html += '<audio src="audio/instruments/'+data["id"]+'.mp3" controls></audio>';
		html += '<div class="cover"><img src="img/instruments/'+data["id"]+'.png" alt="'+data["id"]+'"></div>';
		html += data["description"] +'</details>';
	}
	instrumentsSupportSection.innerHTML = html;
}

btns.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		clickBtn.play();
		statusUpdate();
	})
})

homeBtns.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		protectLives();
		closeSections();
		stopMenuSong();
		sectionUno.style.display = "flex";
	})
})

supportBtns.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		stopMenuSong();
		sectionSupport.style.display = "block";
	})
})

function protectLives() {
	categoryBtns.forEach(function(btn) {
		for (var i = 0; i < localStorage.length; i++) {
			if(localStorage.key(i) == btn.getAttribute("var")) {
				step = localStorage.getItem(btn.getAttribute("var"));
				if(step == 'complete') {
					btn.style.display = "none";
					return;
				}
			}
			else {
				beginBtn.innerHTML = 'продолжить';
				if (lives>0) {
					unoOpenGameMenuBtn.style.display = 'block';
				}
				else {
					unoOpenGameMenuBtn.style.display = 'none';
				}
				zeroStep();
			}
		}
	})
}

categoryBtns.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		zeroStep();
		currentCategory = this.getAttribute("var");
		for (var i = 0; i < localStorage.length; i++) {
			if(localStorage.key(i) == currentCategory) {
				step = localStorage.getItem(currentCategory);
			}
		}
		questions.forEach(function(quest) {
			if (quest.category == currentCategory) {
				currentQuestions.push(quest)
			}
		})
		addQuestToTestSection(currentQuestions, step);
		closeSections();
		stopMenuSong();
		playCurrentInstrumentSong();
		testSection.style.display = "flex";
	})
})

function markCategoryBtns() {
	categoryBtns.forEach(function(btn) {
		for (var i = 0; i < localStorage.length; i++) {
			if(localStorage.key(i) == btn.getAttribute("var")) {
				btn.classList.add('markBtn');
			}
		}
	})
}

function addQuestToTestSection(currentQuestions, step) {
	let variantHtml = "";
	let instrumentHtml = "";
	quest = currentQuestions[step];
	variants = quest.variants;
	answerId = quest.answerId;
	answerName = quest.answerName;
	for(let key in variants) {variantHtml += '<button var="'+key+'" class="variantBtn">'+variants[key]+'</button>'}
	instrumentHtml += '<img id="currentInstrumentImg" src="img/instruments/'+answerId+'.png" alt='+answerId+' onclick="playCurrentInstrumentSong()">';
	instrumentHtml += '<audio id="currentInstrumentSong" src="audio/instruments/'+answerId+'.mp3"></audio>';
	playCurrentSongBtn.onclick = playCurrentInstrumentSong();
	currentInstrumentSection.innerHTML = instrumentHtml;
	variantSection.innerHTML = variantHtml;
	currentInstrumentSong.loop = true;
	addEventToVariantBtns(answerId, answerName, variants);
}

function addEventToVariantBtns(answerId, answerName, variants) {
	document.querySelectorAll('.variantBtn').forEach(function(btn) {
		btn.addEventListener('click', function(e) {
			stopCurrentInstrumentSong();
			if (this.getAttribute("var") == answerId) {
				let tempLength = currentQuestions.length;tempLength--;
				if (step<tempLength) {
					step++;
					addQuestToTestSection(currentQuestions, step);
					localStorage.setItem(currentCategory, step);
				}
				else {
					document.querySelector('#sectionCategoryWin p').innerHTML = 'теперь ты знаешь целую группу<br>инструментов симфонического оркестра<br>можешь сыграть в игру или учиться дальше';
					sectionCategoryWin.style.display = 'block';
					localStorage.setItem(currentCategory,'complete');
				}
				lives++;
				complete++;
				menuSong.play();
				document.querySelector('#sectionGoodResult p').innerHTML = 'молодец! это действительно '+answerName+'!<br>продолжай в том же духе ;)';
				sectionGoodResult.style.display = "block";
				localStorage.setItem('complete', complete);
				localStorage.setItem('lives', lives);
				statusUpdate();
			}
			else {
				document.querySelector('#sectionBadResult p').innerHTML = 'неправильно :(<br>ты выбрал '+variants[this.getAttribute("var")]+'...<br>вот, как она звучит';
				document.querySelector('#sectionBadResult audio').setAttribute("src","audio/instruments/"+this.getAttribute("var")+".mp3");
				sectionBadResult.style.display = "block";
				loseSong.play();
			}
		})
	})
}

zeroStep();
protectLives();
addInstrumentsToSupport();

menuSong.loop = true;