var ctx = new Excel.ExcelClientContext();
var charts = ctx.workbook.worksheets.getItem("Charts").charts;
ctx.load(charts);
ctx.executeAsync().then(function () {
	for (var i = 0; i < charts.items.length; i++) {
		logComment(charts.items[i].name);
	}
});