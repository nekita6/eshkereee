const questions = [
	{
		"category": "stringed",
		"answerName": "скрипка",
		"answerId": "skrip",
		"variants": {
			"skrip": "скрипка",
			"violo": "виолончель",
			"alt": "альт",
			"kontrabass": "контрабас"
		}
	},
	{
		"category": "stringed",
		"answerName": "гитара",
		"answerId": "guitar",
		"variants": {
			"skrip": "скрипка",
			"alt": "альт",
			"kontrabass": "контрабас",
			"guitar": "гитара"
		}
	},
	{
		"category": "stringed",
		"answerName": "виолончель",
		"answerId": "violo",
		"variants": {
			"violo": "виолончель",
			"skrip": "скрипка",
			"alt": "альт",
			"kontrabass": "контрабас"
		}
	},
	{
		"category": "stringed",
		"answerName": "контрабас",
		"answerId": "kontrabass",
		"variants": {
			"guitar": "гитара",
			"skrip": "скрипка",
			"kontrabass": "контрабас",
			"trumbon": "трамбон"
		}
	},
	{
		"category": "stringed",
		"answerName": "арфа",
		"answerId": "arfa",
		"variants": {
			"guitar": "гитара",
			"alt": "альт",
			"arfa": "арфа",
			"kontrabass": "контрабас"
		}
	},
	{
		"category": "stringed",
		"answerName": "альт",
		"answerId": "alt",
		"variants": {
			"alt": "альт",
			"ksilofon": "ксилофон",
			"skrip": "скрипка",
			"trumbon": "трамбон"
		}
	},
	{
		"category": "wind",
		"answerName": "фагот",
		"answerId": "fagot",
		"variants": {
			"fleyta": "флейта",
			"goboy": "гобой",
			"fagot": "фагот",
			"klarnet": "кларнет"
		}
	},
	{
		"category": "wind",
		"answerName": "флейта",
		"answerId": "fleyta",
		"variants": {
			"truba": "труба",
			"trumbon": "трамбон",
			"fleyta": "флейта",
			"valtorna": "валторна"
		}
	},
	{
		"category": "wind",
		"answerName": "кларнет",
		"answerId": "klarnet",
		"variants": {
			"fleyta": "флейта",
			"klarnet": "кларнет",
			"ksilofon": "ксилофон",
			"fagot": "фагот"
		}
	},
	{
		"category": "wind",
		"answerName": "гобой",
		"answerId": "goboy",
		"variants": {
			"goboy": "гобой",
			"truba": "труба",
			"fleyta": "флейта",
			"trumbon": "трамбон"
		}
	},
	{
		"category": "wind",
		"answerName": "труба",
		"answerId": "truba",
		"variants": {
			"truba": "труба",
			"valtorna": "валторна",
			"fagot": "фагот",
			"klarnet": "кларнет"
		}
	},
	{
		"category": "wind",
		"answerName": "валторна",
		"answerId": "valtorna",
		"variants": {
			"fleyta": "флейта",
			"alt": "альт",
			"goboy": "гобой",
			"valtorna": "валторна"
		}
	},
	{
		"category": "wind",
		"answerName": "трамбон",
		"answerId": "trumbon",
		"variants": {
			"kontrabass": "контрабас",
			"guitar": "гитара",
			"trumbon": "трамбон",
			"violo": "виолончель"
		}
	},
	{
		"category": "drums",
		"answerName": "тарелки",
		"answerId": "tarelki",
		"variants": {
			"vibrafon": "вибрафон",
			"tarelki": "тарелки",
			"ksilofon": "ксилофон",
			"litavri": "литавры"
		}
	},
	{
		"category": "drums",
		"answerName": "ксилофон",
		"answerId": "ksilofon",
		"variants": {
			"alt": "альт",
			"valtorna": "валторна",
			"goboy": "гобой",
			"ksilofon": "ксилофон"
		}
	},
	{
		"category": "drums",
		"answerName": "вибрафон",
		"answerId": "vibrafon",
		"variants": {
			"trumbon": "трамбон",
			"vibrafon": "вибрафон",
			"valtorna": "валторна",
			"litavri": "литавры"
		}
	},
	{
		"category": "drums",
		"answerName": "барабан",
		"answerId": "baraban",
		"variants": {
			"litavri": "литавры",
			"baraban": "барабан",
			"trumbon": "трамбон",
			"vibrafon": "вибрафон"
		}
	},
	{
		"category": "drums",
		"answerName": "литавры",
		"answerId": "litavri",
		"variants": {
			"fleyta": "флейта",
			"tarelki": "тарелки",
			"litavri": "литавры",
			"klavesin": "клавесин"
		}
	},
	{
		"category": "keyboard",
		"answerName": "фортепиано",
		"answerId": "forte",
		"variants": {
			"forte": "фортепиано",
			"ksilofon": "ксилофон",
			"vibrafon": "вибрафон",
			"klavesin": "клавесин"
		}
	},
	{
		"category": "keyboard",
		"answerName": "клавесин",
		"answerId": "klavesin",
		"variants": {
			"ksilofon": "ксилофон",
			"klavesin": "клавесин",
			"alt": "альт",
			"vibrafon": "вибрафон"
		}
	},
	{
		"category": "extra",
		"answerName": "гитара",
		"answerId": "guitar",
		"variants": {
			"skrip": "скрипка",
			"kontrabass": "контрабас",
			"violo": "виолончель",
			"guitar": "гитара"
		}
	},
	{
		"category": "extra",
		"answerName": "фортепиано",
		"answerId": "forte",
		"variants": {
			"forte": "фортепиано",
			"ksilofon": "ксилофон",
			"vibrafon": "вибрафон",
			"klavesin": "клавесин"
		}
	},
	{
		"category": "extra",
		"answerName": "барабан",
		"answerId": "baraban",
		"variants": {
			"litavri": "литавры",
			"klarnet": "кларнет",
			"baraban": "барабан",
			"vibrafon": "вибрафон"
		}
	}
]