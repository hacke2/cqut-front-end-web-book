(function() {

	var $head = {
		$search_key : $('#search_key')
	};
	$head.$search_key.focus(function() {
		if ($(this).val() == '请输入关键词') {
			$(this).val("");
		}
	});
	$head.$search_key.blur(function() {
		if ($(this).val() == "") {
			$(this).val('请输入关键词');
		}
	});

	/*
	$(function() {
	});*/

})();