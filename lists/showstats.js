function(head, req) {
	start({ "headers": {"Content-Type": "text/html"} });
	var acc = 0
		, output = ''
		, xLegend = ''
		, xLegendPos = ''
		, xIndex = 0.25;
	while (row = getRow())
	{
		xLegend = xLegend + '|' + row.key[1] + '%2F' + row.key[2];
		if (acc>0) output = output + "," ;
		acc = acc + row.value;
		output = output + acc;
		xIndex = xIndex + 1;
	}

	var xLegendScale = 416 / (xIndex*4);
	for(var i=0.25; i<xIndex; i++)
	{
		xLegendPos = xLegendPos + ',' + (xLegendScale*i);
	}

	acc = acc * 1.2; // to add a nice padding to Y-scale
	send('<img src="http://chart.apis.google.com/chart?chxl=1:'+ xLegend +'&chxp=1'+ xLegendPos +'&chxr=0,0,'+acc+'&chxt=y,x&chxs=0,676767,11.5,0,lt,676767&chs=440x220&cht=ls&chco=3072F3&chds=0,'+acc+'&chd=t:'+output+'&chdl=Startup+Guild+Membership+Trend&chdlp=b&chls=2,4,1&chma=5,5,5,25" width="440" height="220" alt="" />');
}