$(document).ready(function() {
	let cart = {};
	let goods = {};
	var cc = '';


	$(document).on('click', function goJson(e) {
			
		if ($(e.target).closest("#one").length) {

			jQuery('#wrap').css('display', 'none');
			$.getJSON("https://spreadsheets.google.com/feeds/list/1QGz1rmb7EymY1CWZhVOQK1IU-cUXy_WR5s_WU3Stygo/od6/public/values?alt=json", function(data) {
				data = data['feed']['entry'];
				goods = arrayHelper(data);
				$('main').html(showGoods(data));
				console.log(goods);

				$("div").click(function(e){
					var open_id;
					var open_name;
					var open_descriptions;
					var open_image;
					var open_price;

					var h = document.body.scrollHeight;

					if ($(this).attr('name') == 'buy') {
						$('#cart').css( { display: 'flex' } );
						$('main').css( { display: 'none' } );
						$(window).scrollTop(0);
						open_id = $(this).attr('data');
						open_name = goods[open_id].name;
						open_descriptions = goods[open_id].descriptions;
						open_image = goods[open_id].image;
						open_price = goods[open_id].price;
						
						$('#cart-title').html(open_name);
						$('#cart-description').html(open_descriptions);
						$('#gallery1').css('background-image', 'url("' + open_image + '")');
						$('#cart-btn').val('Заказать за ' + open_price);

						if ($(this).attr('data') == undefined) {
							open_id = $('.goods').attr('data');	
						}
						console.log(open_id);
						console.log(open_name);
						console.log(open_descriptions);
						console.log(open_image);
						console.log(open_price);			
					}

				})
			})
			e.stopPropagation();

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

				$('#cat-btn').css( { display: 'block' } );
				let out = '';

					for (var i = 0; i < data.length; i++) {	
						if (data[i]['gsx$category']['$t'] == 'one') {
							out += '<div class="goods" name="buy" data="' + data[i]['gsx$id']['$t'] + '">';
							out += '<img src="' + data[i]['gsx$image']['$t'] + '" alt="' + data[i]['gsx$name']['$t'] +'">';
							out += '<h3>' + data[i]['gsx$name']['$t'] +'</h3>';
							out += '<p>' + data[i]['gsx$price']['$t'] + 'Р</p>';
							out += '<div class="buy-btn">заказать</div>';
							out += '</div></div>';
						}
					}

				return out;

			}
		}

		else if ($(e.target).closest("#two").length) {
			
			jQuery('#wrap').css('display', 'none');
			$.getJSON("https://spreadsheets.google.com/feeds/list/1QGz1rmb7EymY1CWZhVOQK1IU-cUXy_WR5s_WU3Stygo/od6/public/values?alt=json", function(data) {
				data = data['feed']['entry'];
				goods = arrayHelper(data);
				$('main').html(showGoods(data));
				console.log(goods);

				$("div").click(function(e){
					var open_id;
					var open_name;
					var open_descriptions;
					var open_image;
					var open_price;

					var h = document.body.scrollHeight;

					if ($(this).attr('name') == 'buy') {
						$('#cart').css( { display: 'flex' } );
						$('main').css( { display: 'none' } );
						$(window).scrollTop(0);
						open_id = $(this).attr('data');
						open_name = goods[open_id].name;
						open_descriptions = goods[open_id].descriptions;
						open_image = goods[open_id].image;
						open_price = goods[open_id].price;
						
						$('#cart-title').html(open_name);
						$('#cart-description').html(open_descriptions);
						$('#gallery1').css('background-image', 'url("' + open_image + '")');
						$('#cart-btn').val('Заказать за ' + open_price);

						if ($(this).attr('data') == undefined) {
							open_id = $('.goods').attr('data');	
						}
						console.log(open_id);
						console.log(open_name);
						console.log(open_descriptions);
						console.log(open_image);
						console.log(open_price);			
					}

				})
			})
			e.stopPropagation();

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

				$('#cat-btn').css( { display: 'block' } );
				let out = '';

					for (var i = 0; i < data.length; i++) {	
						if (data[i]['gsx$category']['$t'] == 'two') {
							out += '<div class="goods" name="buy" data="' + data[i]['gsx$id']['$t'] + '">';
							out += '<img src="' + data[i]['gsx$image']['$t'] + '" alt="' + data[i]['gsx$name']['$t'] +'">';
							out += '<h3>' + data[i]['gsx$name']['$t'] +'</h3>';
							out += '<p>' + data[i]['gsx$price']['$t'] + 'Р</p>';
							out += '<div class="buy-btn">заказать</div>';
							out += '</div></div>';
						}
					}

				return out;
				
			}
		}

	});
	
	$('#close-cart').on('click', function(e)
	{
		$('#cart').css( { display: 'none' } );
		$('main').css( { display: 'flex' } );
		$(window).scrollTop(0);
	})

	$('#about-btn').on('click', function(e)
	{
		$('#about').css( { display: 'flex' } );
	})

	$('#close-about').on('click', function(e)
	{
		$('#about').css( { display: 'none' } );
	})
	/*
		$('#logo').on('click', function(e)
		{
			document.location.reload(false);
		})*/

})