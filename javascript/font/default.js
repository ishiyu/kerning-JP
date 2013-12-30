!function($) {

	var plugin = $.fn.karning;

	// not defined
	if (!plugin) { return; }

	// 1文字指定は、行頭専用のカーニングペア
	plugin.setPair('default', '「', -0.5);
	plugin.setPair('default', '『', -0.5);
	plugin.setPair('default', '（', -0.5);
	plugin.setPair('default', '【', -0.5);
	plugin.setPair('default', '“',  -0.5);

	// 直接指定のカーニングペア（優先順位: 1）
	plugin.setPair('default', 'して', -0.12);
	plugin.setPair('default', 'す。', -0.15);
	plugin.setPair('default', 'タク', -0.12);
	plugin.setPair('default', 'タグ', -0.12);
	plugin.setPair('default', 'ット', -0.2);
	plugin.setPair('default', 'ラム', -0.1);
	plugin.setPair('default', 'プル', -0.1);
	plugin.setPair('default', 'ンプ', -0.15);
	plugin.setPair('default', 'ング', -0.05);
	plugin.setPair('default', 'ード', -0.15);
	plugin.setPair('default', '」「', -0.75);
	plugin.setPair('default', '」。', -0.25);
	plugin.setPair('default', '」、', -0.25);
	plugin.setPair('default', '、「', -0.75);
	plugin.setPair('default', '。「', -0.75);
	plugin.setPair('default', '、『', -0.75);
	plugin.setPair('default', '。『', -0.75);
	plugin.setPair('default', '、（', -0.75);
	plugin.setPair('default', '。（', -0.75);

	// 後ろの文字をワイルドカード指定した汎用のカーニングペア（優先順位: 2）
	plugin.setPair('default', 'う*', -0.02);
	plugin.setPair('default', 'く*', -0.075);
	plugin.setPair('default', 'し*', -0.075);
	plugin.setPair('default', 'ぁ*', -0.075);
	plugin.setPair('default', 'ぃ*', -0.075);
	plugin.setPair('default', 'ぅ*', -0.075);
	plugin.setPair('default', 'ぇ*', -0.075);
	plugin.setPair('default', 'ぉ*', -0.075);
	plugin.setPair('default', 'っ*', -0.075);
	plugin.setPair('default', 'ゃ*', -0.075);
	plugin.setPair('default', 'ゅ*', -0.075);
	plugin.setPair('default', 'ょ*', -0.075);
	plugin.setPair('default', 'ト*', -0.075);
	plugin.setPair('default', 'ド*', -0.075);
	plugin.setPair('default', 'リ*', -0.075);
	plugin.setPair('default', 'ッ*', -0.075);
	plugin.setPair('default', 'ャ*', -0.05);
	plugin.setPair('default', 'ュ*', -0.05);
	plugin.setPair('default', 'ョ*', -0.08);
	plugin.setPair('default', '」*', -0.25);
	plugin.setPair('default', '）*', -0.25);
	plugin.setPair('default', '、*', -0.25);
	plugin.setPair('default', '。*', -0.25);
	plugin.setPair('default', '・*', -0.25);
	plugin.setPair('default', '：*', -0.25);

	// 前の文字をワイルドカード指定した汎用のカーニングペア（優先順位: 3）
	plugin.setPair('default', '*う', -0.03);
	plugin.setPair('default', '*く', -0.075);
	plugin.setPair('default', '*し', -0.075);
	plugin.setPair('default', '*ぁ', -0.05);
	plugin.setPair('default', '*ぃ', -0.05);
	plugin.setPair('default', '*ぅ', -0.05);
	plugin.setPair('default', '*ぇ', -0.05);
	plugin.setPair('default', '*ぉ', -0.05);
	plugin.setPair('default', '*っ', -0.075);
	plugin.setPair('default', '*ゃ', -0.05);
	plugin.setPair('default', '*ゅ', -0.05);
	plugin.setPair('default', '*ょ', -0.075);
	plugin.setPair('default', '*ト', -0.075);
	plugin.setPair('default', '*ド', -0.075);
	plugin.setPair('default', '*リ', -0.075);
	plugin.setPair('default', '*ッ', -0.05);
	plugin.setPair('default', '*ャ', -0.05);
	plugin.setPair('default', '*ュ', -0.05);
	plugin.setPair('default', '*ョ', -0.08);
	plugin.setPair('default', '*「', -0.25);
	plugin.setPair('default', '*（', -0.25);
	plugin.setPair('default', '*・', -0.25);
	plugin.setPair('default', '*：', -0.25);

}(jQuery);
