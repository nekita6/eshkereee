const instruments = [
	{
		"id": "skrip",
		"name": "скрипка",
		"description": "4-хструнный смычковый инструмент, самый высокий по звучанию в своём семействе и важнейший в оркестре. Скрипка обладает таким сочетанием красоты и выразительности звука, как, пожалуй, ни один другой инструмент. А вот скрипачи зачастую имеют репутацию нервных и скандальных людей"
	},
	{
		"id": "guitar",
		"name": "гитара",
		"description": "Струнный щипковый музыкальный инструмент. Изобретённая в XX веке электрическая гитара произвела значительные изменения в музыке и тем самым оказала сильное влияние на массовую культуру. Также есть классическая гитара, гитара фламенко, испанская гитара и некоторые другие виды"
	},
	{
		"id": "alt",
		"name": "альт",
		"description": "По внешнему виду копия скрипки, только чуть больших размеров, отчего звучит в более низком регистре и играть на нем немного сложнее, чем на скрипке. По сложившейся традиции альту отводится вспомогательная роль в оркестре. Альтисты зачастую являются мишенью для шуток и анекдотов в музыкальной среде. Было в семье три сына - два умных, а третий - альтист... Некоторые считают, что альт это улучшенный вариант скрипки"
	},
	{
		"id": "arfa",
		"name": "арфа",
		"description": "Струнный щипковый музыкальный инструмент, состоит из двух расположенных под углом рам, между которыми натянуто множество струн"
	},
	{
		"id": "violo",
		"name": "виолончель",
		"description": "Большая скрипка, на которой играют сидя, удерживая инструмент между коленями и упирая его шпилем в пол. Виолончель имеет богатый низкий звук, широкие выразительные способности и детально проработанную технику исполнения. Исполнительские качества виолончели покорили сердца огромного числа поклонников"
	},
	{
		"id": "kontrabass",
		"name": "контрабас",
		"description": "Самый низкий по звучанию и самый большой по размеру (до 2-х метров) среди семейства смычковых струнных инструментов. Контрабасисты должны стоять или сидеть на высоком стуле, чтобы дотянуться до верха инструмента. Контрабас обладает густым, хриплым и несколько глуховатым тембром и является басовым фундаментом всего оркестра"
	},
	{
		"id": "fleyta",
		"name": "флейта",
		"description": "Один из самых высоких по звучанию инструментов в оркестре. Самый виртуозный и технически подвижный инструмент в семействе духовых, благодаря этим её достоинствам ей часто поручается оркестровое соло. Современные флейты очень редко бывают из дерева, чаще из металла (в т.ч. драгоценных металлов), иногда из пластика и стекла. Флейту держат горизонтально"
	},
	{
		"id": "goboy",
		"name": "гобой",
		"description": "Мелодичный инструмент с диапазоном ниже, чем у флейты. По форме немного конический, гобой обладает певучим, однако несколько гнусавым тембром, а в верхнем регистре даже резким. Он в основном используется как оркестровый сольный инструмент. Поскольку во время игры гобоисты должны перекашивать своё лицо, их иногда воспринимают как ненормальных людей"
	},
	{
		"id": "fagot",
		"name": "фагот",
		"description": "Самый низкий по звучанию из деревянных духовых инструментов, используется как для басовой линии, так в качестве альтернативного инструмента мелодии. В оркестре обычно три-четыре фагота. Играть на фаготе в силу его размеров тяжелее, чем на остальных инструментах этого семейства"
	},
	{
		"id": "klarnet",
		"name": "кларнет",
		"description": "Бывает нескольких размеров, в зависимости от требуемой высоты звучания. Кларнет использует только один язычок (трость), а не двойной как у флейты или фагота. Кларнет обладает широким диапазоном, тёплым, мягким тембром и предоставляет исполнителю широкие выразительные возможности"
	},
	{
		"id": "valtorna",
		"name": "валторна",
		"description": "Изначально произошла от охотничьего рожка, валторна может быть мягкой и выразительной или резкой и скрипучей. Обычно в оркестре используется от 2 до 8 валторн в зависимости от произведения"
	},
	{
		"id": "truba",
		"name": "труба",
		"description": "Инструмент с высоким чистым звуком, очень подходит для фанфар. Как и кларнет, труба может быть разных размеров, каждая со своим тембром. Отличаясь большой технической подвижностью, труба блестяще выполняет свою роль в оркестре, на ней возможно исполнение широких, яркого тембра и большой протяжённости мелодических фраз"
	},
	{
		"id": "trumbon",
		"name": "трамбон",
		"description": "Исполняет больше басовую линию, чем мелодическую. От других медных духовых инструментов отличается наличием особой передвижной U-образной трубки - кулисы, двигая которую вперед и назад музыкант изменяет звучание инструмента"
	},
	{
		"id": "baraban",
		"name": "барабан",
		"description": "Барабаны бывают разными по размеру (самые большие достигают 90 см в диаметре) и используются музыкантами в зависимости оттого, какой звук надо «выбить» – низкий или повыше"
	},
	{
		"id": "litavri",
		"name": "литавры",
		"description": "Подобие барабана. полусферический металлический корпус, обтянутый кожаной мембраной, литавры могут звучать очень громко или, наоборот, мягко, как далёкий раскат грома, для извлечения разных звуков используются палочки с головками из разных материалов: дерево, войлок, кожа. В оркестре обычно от двух до пяти литавр, очень интересно наблюдать за игрой на литаврах"
	},
	{
		"id": "tarelki",
		"name": "тарелки",
		"description": "Выпуклые круглые металлические диски разного размера и с неопределенной высотой звучания. Как подмечено, симфония может длиться девяносто минут, а ударить в тарелки придётся только один раз, представляете какая ответственность за точный результат"
	},
	{
		"id": "ksilofon",
		"name": "ксилофон",
		"description": "Ударный музыкальный инструмент с определённой высотой звучания. Представляет собой ряд деревянных брусков разной величины, настроенных на определённые ноты. По брускам ударяют палочками с шарообразными наконечниками (малетами) или специальными молоточками, похожими на небольшие ложки"
	},
	{
		"id": "vibrafon",
		"name": "вибрафон",
		"description": "Инструмент обладает широкими виртуозными возможностями и используется в джазе, на эстраде и в ансамблях ударных инструментов, реже — в симфоническом оркестре и как сольный инструмент"
	},
	{
		"id": "forte",
		"name": "фортепиано",
		"description": "Клавишный струнный инструмент. используется для многих задач в музыке. На нем исполняют сольные произведения, играют концерты для фортепиано с оркестром. есть несколько разновидностей фортепиано: пианино и рояль. форте в названии означает громко — пиано тихо. игра как громких так и тихих, звонких и глугих звуков является одной из главных особенностей этого инструмента"
	},
	{
		"id": "klavesin",
		"name": "клавесин",
		"description": "Клавишный струнный музыкальный инструмент со щипковым способом звукоизвлечения. предок фортепиано"
	}
]