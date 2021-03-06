$(document).ready(function() {
	let cart = {};
	let goods = {};
	var cc = '';

	$.getJSON("https://spreadsheets.google.com/feeds/list/1QGz1rmb7EymY1CWZhVOQK1IU-cUXy_WR5s_WU3Stygo/od6/public/values?alt=json", function(data) {
		data = data['feed']['entry'];
		goods = arrayHelper(data);
		$('main').html(showGoods(data));
		console.log(goods);

		var img = 0;

		$("div").click(function(e){
			var open_id;
			var open_name;
			var open_image;
			var open_price;

			if ($(this).attr('name') == 'buy') {

				open_id = $(this).attr('data');
				open_name = goods[open_id].name;
				open_image = goods[open_id].image;
				open_price = goods[open_id].price;

				if ($(this).attr('data') == undefined) {
					open_id = $('.goods').attr('data');	
				}
				console.log(open_id);
				console.log(open_name);
				console.log(open_image);
				console.log(open_price);
			}

		})
	})

	

	function arrayHelper(arr) {

		let out = {};
		for( let i = 0; i < arr.length; i++ ) {
			let temp = {};
			temp['articul'] = arr[i]['gsx$articul']['$t'];
			temp['name'] = arr[i]['gsx$name']['$t'];
			temp['price'] = arr[i]['gsx$price']['$t'];
			temp['category'] = arr[i]['gsx$category']['$t'];
			temp['descriptions'] = arr[i]['gsx$descriptions']['$t'];
			temp['image'] = arr[i]['gsx$image']['$t'];
			temp['last'] = arr[i]['gsx$last']['$t'];
			out[ arr[i]['gsx$id']['$t'] ] = temp;
		}
		
		return out;
	}

	function showGoods(data) {
	
		var button_two = document.getElementById('two');
		let out = '';


		$(document).on('click', function cChange(e) {
			
			if ($(e.target).closest("#two").length) {
				var cc = 'two'
			}
			else if ($(e.target).closest("#one").length) {
				var cc = 'one'
			}
			else {
				var cc = '___';
			}
		
			e.stopPropagation();
			console.log(cc);
			return cc;

		});
		
		
		for (var i = 0; i < data.length; i++) {	
			if (data[i]['gsx$category']['$t'] == cc) {
				out += '<div class="goods" name="buy" data="' + data[i]['gsx$id']['$t'] + '">';
				out += '<img src="' + data[i]['gsx$image']['$t'] + '" alt="' + data[i]['gsx$name']['$t'] +'">';
				out += '<h3>' + data[i]['gsx$name']['$t'] +'</h3>';
				out += '<p>' + data[i]['gsx$price']['$t'] + 'Р</p>';
				out += '<p>' + data[i]['gsx$descriptions']['$t'] + '</p>';
				out += '<button type="button" >buy</button>';
				out += '</div></div>';
			}
		}

		return out;
	}
	
})