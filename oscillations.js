let osc = {

	meta : [
	'sin(x)'
	],

	sin : [
	'sin(x*.1)*20'
	,'abs(sin(x*.1))*20'
	,'abs(sin(x*.01+x*.1))*20'
	,'ceil(sin(x*.1))*10'
	,'abs(cos(x*.1))*15+sin(x*.1)*10'
	,'sin(x*.1)*10 % 5'
	,'sin(x*.1)*10-cos(x*.1)*10 % 5'
	,'ceil(cos(x*.1))*10-sin(x*.1)*10'
	,'ceil(sin(x*.1))*10'
	,'round(sin(-x*.1))*10'
	,'sq(sin(PI/2+x*.1))*10'
	,'sq(sin(x*.1))*10'
	],

	misc : [
	'x%10+2'
	,'-x%10+10'
	,'log(x)*3'
	,'noise(x*.1)*50-25'
	,'tan(x*h)'
	],
}