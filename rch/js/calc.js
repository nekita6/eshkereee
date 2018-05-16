(function( $ ){ 
  $.fn.recalc = function(obj_) { //метод расширяющий прототип $.fn для создания новых методов

    units = {  // индексация единиц измерения в подмассивах начинается с 0
      '1':{'title':'Длина', 'u': [[' м',1],[' мм',0.001],[' дюйм',0.0254],[' фут',0.3048]]},
      '2':{'title':'Площадь', 'u': [[' м&sup2;',1],[' мм&sup2;',0.000001],[' дюйм&sup2;',0.00064516],[' фут&sup2;',0.09290304]]},
      '3':{'title':'Объём', 'u': [[' м&sup3;',1],[' мм&sup3;',0.000000001],[' литр',0.001],[' дюйм&sup3;',0.000016387064],[' фут&sup3;',0.028316846592]]},
      '4':{'title':'Вес', 'u': [[' кг',1],[' г', 0.001],[' т',1000]]},
      '5':{'title':'Плотность', 'u': [[' кг/м&sup3;',1],[' г/см&sup3;', 1000]]},
      '6':{'title':'Сила', 'u': [[' H',1],[' кгс', 9.80665]]},
      '7':{'title':'Давление', 'u': [[' Па',1],[' МПа',1000000],[' бар', 100000],[' ат', 98066.5],[' мм рт.ст.', 133.322]]},
      '8':{'title':'Частота', 'u': [[' 1/мин',1],[' 1/сек',60]]},
      '9':{'title':'Скорость', 'u': [[' м/с',1],[' км/ч',0.277778]]},
      '10':{'title':'Электроемкость', 'u': [[' ф',1],[' см',898755178736]]},
      '11':{'title':'Освещенность', 'u': [[' люкс',1],[' фот',10000]]},
      '12':{'title':'Угол', 'u': [[' градус',1],[' мин',60],[' сек',3600],[' рад',0.017453]]},
      '13':{'title':'Время', 'u': [[' с',1],[' ч',3600],[' м',60]]},
      '14':{'title':'Индуктивность', 'u': [[' см',1000000000],[' гн',1]]},
      '15':{'title':'Звук', 'u': [[' дБ',1],[' Нп',1.1512925465]]},
      '16':{'title':'Момент силы', 'u': [[' н·м',1],[' кгс·м',0.1019716212978],[' гс·м',10197.16212978]]},
      '17':{'title':'Энергия и работа', 'u': [[' дж',1],[' МДж',0.000001],[' эрг',10000000],[' Вт·ч',0.0002777],[' а.е.м.',6700535853.03]]},
      '18':{'title':'Магнитная индукция', 'u': [[' Тл',1],[' гаусс', 10000],[' гамма',1000000000]]},
      '19':{'title':'Кинетическая вязкость', 'u': [[' м&sup2/с',1],[' Ст', 10000]]},
      '20':{'title':'Эл.сопротивление', 'u': [[' ом',1],[' МОм',0.000001],[' мкОм',1000000], [' абс.ед.',0.002654]]}
    };
    
    numberFormat = function (_number,_decimal){ // форматирует число, по умолчанию выводит 6 знаков после запятой
      var decimal=(typeof(_decimal)!='undefined')?_decimal:6;
      var r=parseFloat(_number)
      var exp10=Math.pow(10,decimal);
      r=Math.round(r*exp10)/exp10;
      return r;
    };
    
    outValue = function (v) {  // выводит значение
      var k = obj[v].unit_type ? (units[ obj[v].unit_type ].u[ obj[v].unit ][1]) : 1;
      if (k == 0 || k == undefined ) k = 1;
      form.find('input#recalc_'+v).val($.isNumeric(obj[v].val) ? numberFormat(obj[v].val / k) : null);
    };

    outValues = function() { // выводит все значения
      for (var v in obj) outValue(v);
    }

    setUnits = function(e) {  // изменение единиц измерения
      var v = $(e).parent().attr('data-index');
      obj[v].unit = $(e)[0].selectedIndex;
      outValue(v);
    }
    
    clear = function(e) {  // очистка
      var v = $(e).parent().attr('data-index');
      clear_(v);
    };
    
    change = function(e) {  // при изменеии значения полей
      var t = $(e);
      var v = t.parent().attr('data-index');    
      var k = obj[v].unit_type ? units[ obj[v].unit_type ].u[ obj[v].unit ][1] : 1;
      obj[v].from = null;
      obj[v].val = t.val() * k;
      check_stop();  
      if (!obj[v].stop && $.isNumeric(t.val())) {
        recalc_(v);
      } else
        clear(e);
    };
    
    changeUnitType = function(si) {  // конвертер - выбор физической величины  
      var u = $($('#calc_conv_type').children()[si]).attr('data-unit');
      var str = '';
      for (var i in units[u].u)
        str += '<div data-index="'+i+'"><input type="number" min="0" id="calc_conv_'+i+'" /><span>'+units[u].u[i][0]+'</span></div>';
      str += '<div class="reset"><a class="vis">Очистить</a></div>';
      $('#calc_conv_content').html(str);
    }
    
    changeUnitValue = function(e) {  // конвертер - при вводе значения
      var v = $(e).parent().attr('data-index');
      var u = $($('#calc_conv_type').children()[$('#calc_conv_type')[0].selectedIndex]).attr('data-unit'); 
      var val = $(e).val();
      var uni = units[u].u[v][1];
      console.log (uni);
      for (var i in units[u].u)
        if (i != v) {
          var k = units[u].u[i][1];
          if (k == 0 || k == undefined ) k = 1;
          form.find('input#calc_conv_'+i).val($.isNumeric(val) ? numberFormat(val * uni / k) : null);
        }
    }
    
    init = function() {  // инициация полей, переменных и т.д.
      switch (mode) {
        // режим конвертера физических величин
        case 'conv': 
            var str = '';
            var ar = [];
            for (var i in units)
              if (units[i].title && units[i].u.length > 1) {
                str+= '<option data-unit="'+i+'">'+units[i].title+'</option>';
              }
            if (str) {
              var str = '<select class="conv type" id="calc_conv_type">' + str + '</select><div id="calc_conv_content"></div>';
              form.append(str)
                .on('change', 'select', function(){ changeUnitType(this.selectedIndex) })
                .on('keyup change input', 'input', function(){changeUnitValue(this)})
                .on('click', '.reset a', function(){ form.find('input').val(null); })
              changeUnitType(0);
            } else
              form.append('Массив единиц измерения не содержит подходящих записей');
          break;
        default: // обычный режим - расчет
          for (var v in obj) {
            var str = '<div data-index="'+v+'"><label for="recalc_'+v+'">'+(obj[v].title || 'Поле '+v)+'</label><input type="number" min="0" id="recalc_'+v+'" />';
            if (obj[v].unit_type) {
              str += '<select id="recalc_'+v+'_unit">';          
              for (var u in units[obj[v].unit_type].u)
                str += '<option>'+units[obj[v].unit_type].u[u][0]+'</option>';
              str += '</select>';
              obj[v].unit = obj[v].unit_def || 0;
            }
            if (obj[v].def) str += '<a class="default calc_button" title="Восстановить значение по умолчанию"></a>';
            else str += '<a class="clear calc_button" title="Сбросить значение"></a></div>';
            form.append(str);
            obj[v].val = obj[v].def;
            obj[v].lock = false;
            if (obj[v].unit_type) form.find('#recalc_'+v+'_unit')[0].selectedIndex = obj[v].unit;
          }; 
          // назначение обработчиков событий
          form.append('<div class="reset"><a class="vis">Сбросить все</a></div>')
            .on('click', '.reset a', function(){ for (var i in obj) clear_(i); })
            .on('click', '.clear', function(){clear(this)})
          outValues(); //вызов функции вывода всех значений
        break;
      }
    }
    
    form =  $(this).html('');
    obj = obj_;
    mode = obj.mode;
    delete obj.mode;
    init();
  }
})( jQuery );