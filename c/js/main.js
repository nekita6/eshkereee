var s = Snap('#love');

var bigCircle1 = s.circle(150, 150, 50);
var bigCircle2 = s.circle(150, 150, 50);
var bigCircle3 = s.circle(150, 150, 50);
var bigCircle4 = s.circle(500, 150, 200);
var bigCircle5 = s.circle(500, 150, 200);
var bigCircle6 = s.circle(150, 150, 50);
var bigCircle7 = s.circle(150, 150, 50);

bigCircle1.drag().attr({fill: 'blue', stroke: "#fff", strokeWidth: 7});
bigCircle2.drag().attr({fill: 'blue', stroke: "#fff", strokeWidth: 7});
bigCircle3.drag().attr({fill: 'white', stroke: "#fff", strokeWidth: 7});
bigCircle4.drag().attr({fill: 'blue', stroke: "#fff", strokeWidth: 7});
bigCircle5.drag().attr({fill: 'yellow', stroke: "#fff", strokeWidth: 7});
bigCircle6.drag().attr({stroke: "#fff", strokeWidth: 7});
bigCircle7.drag().attr({stroke: "#fff", strokeWidth: 7});

bigCircle1.node.onclick = function () {
	bigCircle1.attr("fill", "red");
	console.log(bigCircle1)
}
