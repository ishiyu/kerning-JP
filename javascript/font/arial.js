!function($) {

	var plugin = $.fn.karning;

	// not defined
	if (!plugin) { return; }

	// 1文字指定は、行頭専用のカーニングペア
	plugin.setPair('Arial', '「', -0.5);
	plugin.setPair('Arial', '『', -0.5);
	plugin.setPair('Arial', '（', -0.5);
	plugin.setPair('Arial', '【', -0.5);
	plugin.setPair('Arial', '“',  -0.5);


	//直接指定のカーニングペア（優先順位: 1）
	plugin.setPair('Arial', 'して', -0.12);
	plugin.setPair('Arial', 'す。', -0.15);
	plugin.setPair('Arial', 'タク', -0.12);
	plugin.setPair('Arial', 'タグ', -0.12);
	plugin.setPair('Arial', 'ット', -0.2);
	plugin.setPair('Arial', 'ラム', -0.1);
	plugin.setPair('Arial', 'プル', -0.1);
	plugin.setPair('Arial', 'ンプ', -0.15);
	plugin.setPair('Arial', 'ング', -0.05);
	plugin.setPair('Arial', 'ード', -0.15);
	plugin.setPair('Arial', '」「', -0.75);
	plugin.setPair('Arial', '」。', -0.25);
	plugin.setPair('Arial', '」、', -0.25);
	plugin.setPair('Arial', '、「', -0.75);
	plugin.setPair('Arial', '。「', -0.75);
	plugin.setPair('Arial', '、『', -0.75);
	plugin.setPair('Arial', '。『', -0.75);
	plugin.setPair('Arial', '、（', -0.75);
	plugin.setPair('Arial', '。（', -0.75);

	// 後ろの文字をワイルドカード指定した汎用のカーニングペア（優先順位: 2）
	plugin.setPair('Arial', 'う*', -0.02);
	plugin.setPair('Arial', 'く*', -0.075);
	plugin.setPair('Arial', 'し*', -0.075);
	plugin.setPair('Arial', 'ぁ*', -0.075);
	plugin.setPair('Arial', 'ぃ*', -0.075);
	plugin.setPair('Arial', 'ぅ*', -0.075);
	plugin.setPair('Arial', 'ぇ*', -0.075);
	plugin.setPair('Arial', 'ぉ*', -0.075);
	plugin.setPair('Arial', 'っ*', -0.075);
	plugin.setPair('Arial', 'ゃ*', -0.075);
	plugin.setPair('Arial', 'ゅ*', -0.075);
	plugin.setPair('Arial', 'ょ*', -0.075);
	plugin.setPair('Arial', 'ト*', -0.075);
	plugin.setPair('Arial', 'ド*', -0.075);
	plugin.setPair('Arial', 'リ*', -0.075);
	plugin.setPair('Arial', 'ッ*', -0.075);
	plugin.setPair('Arial', 'ャ*', -0.05);
	plugin.setPair('Arial', 'ュ*', -0.05);
	plugin.setPair('Arial', 'ョ*', -0.08);
	plugin.setPair('Arial', '」*', -0.25);
	plugin.setPair('Arial', '）*', -0.25);
	plugin.setPair('Arial', '、*', -0.25);
	plugin.setPair('Arial', '。*', -0.25);
	plugin.setPair('Arial', '・*', -0.25);
	plugin.setPair('Arial', '：*', -0.25);

	// 前の文字をワイルドカード指定した汎用のカーニングペア（優先順位: 3）
	plugin.setPair('Arial', '*う', -0.03);
	plugin.setPair('Arial', '*く', -0.075);
	plugin.setPair('Arial', '*し', -0.075);
	plugin.setPair('Arial', '*ぁ', -0.05);
	plugin.setPair('Arial', '*ぃ', -0.05);
	plugin.setPair('Arial', '*ぅ', -0.05);
	plugin.setPair('Arial', '*ぇ', -0.05);
	plugin.setPair('Arial', '*ぉ', -0.05);
	plugin.setPair('Arial', '*っ', -0.075);
	plugin.setPair('Arial', '*ゃ', -0.05);
	plugin.setPair('Arial', '*ゅ', -0.05);
	plugin.setPair('Arial', '*ょ', -0.075);
	plugin.setPair('Arial', '*ト', -0.075);
	plugin.setPair('Arial', '*ド', -0.075);
	plugin.setPair('Arial', '*リ', -0.075);
	plugin.setPair('Arial', '*ッ', -0.05);
	plugin.setPair('Arial', '*ャ', -0.05);
	plugin.setPair('Arial', '*ュ', -0.05);
	plugin.setPair('Arial', '*ョ', -0.08);
	plugin.setPair('Arial', '*「', -0.25);
	plugin.setPair('Arial', '*（', -0.25);
	plugin.setPair('Arial', '*・', -0.25);
	plugin.setPair('Arial', '*：', -0.25);

}(jQuery);
