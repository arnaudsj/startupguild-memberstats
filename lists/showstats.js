function(head, req) {
	start({ "headers": {"Content-Type": "text/html"} });
	var acc = 0;
	var output = '';
	while (row = getRow()) {
		if (acc>0) output = output + ",";
		acc = row.value + acc;
		output = output + acc;
	}
	send('<img src="http://chart.apis.google.com/chart?chxr=0,0,'+acc+'&chxt=y&chxs=0,676767,11.5,0,lt,676767&chs=440x220&cht=ls&chco=3072F3&chds=0,'+acc+'&chd=t:'+output+'&chdl=Startup+Guild+Membership+Trend&chdlp=b&chls=2,4,1&chma=5,5,5,25" width="440" height="220" alt="" />')
}