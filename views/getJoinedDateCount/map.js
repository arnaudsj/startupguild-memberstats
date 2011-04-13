function(doc) {
	if(doc.hire_date!=null)
	{
		var joined_date = (new Date((new Date(doc.hire_date))-300*60000) ); // Because Cloudant is set to UTC
		emit( [joined_date.getFullYear(),
		joined_date.getMonth()+1,
		joined_date.getDate()],
		doc.hire_date );
	}
}
