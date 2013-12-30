/*
 * jquery.kerning.js
 * @version 0.0.1 (2013/12/27)
 *
 * @author Yu Ishida
 * @requires jQuery
 */
!function($) {

	var WILD_CARD = '*';

	/*
	 * 呼び出された jQuery オブジェクト内のエレメントのテキストノードに対して、字詰めを適用する。
	 * 字詰めはスタイルシートのletter-spacingによって実現される。
	 * 適用されるカーニングペア情報は、レンダリングされているフォントファミリーによって決定する。
	 * ただし、フォントファミリーに紐づくカーニングペア情報がない場合には、font/default.js で読み込まれる情報が使用される。
	 * （フォントファミリーによる処理は未実装）
	 */
	$.fn.karning = function() {
		this.each(function(idx, element) {
			loop(element, true)
		});
	};

	var loop = function(element, isBOL, fontFamily) {
		var $element = $(element);
		var childrenNode = $element.contents();
		var newHtmlData = '';

		for (var i = 0, len = childrenNode.length; i < len; i++) {
			var childElement = childrenNode[i];

			if (childElement.nodeType === Node.TEXT_NODE) {
				var textData = childElement.textContent || childElement.innerText;
				textData = textData.trim();

				if (textData) {
					newHtmlData = karning(textData, isBOL, fontFamily);
					$(childElement).after(newHtmlData).remove();
					isBOL = false;
				}
			} else if (childElement.tagName === 'BR') {
				// BR タグの場合、行頭フラグをONにする
				isBOL = true;

			} else {
				var childFontFamily = childElement.style.fontFamily || fontFamily;
				loop(childElement, isBOL, childFontFamily);
			}
		}
	};

	var getRenderingFontFamily = function() {

	};

	var karning = function(textData, isBOL, fontFamily) {
		var chars = textData.split('');
		var newHtmlData = '';
		var pairData = PAIR_DATA[fontFamily] || PAIR_DATA['default'];
		var space = 0;
		var spaceBOL = 0;

		for(var i = 0, len = chars.length; i < len; i++) {
			var targetChar = chars[i];
			var nextChar = chars[i + 1];
			space = 0;

			if (targetChar === ' ' || targetChar === '\t') {
				newHtmlData += targetChar;
				continue;
			}

			// 行頭での処理
			if (isBOL) {
				var p = pairData[targetChar];
				if (p) { spaceBOL += p; }

				if (spaceBOL !== 0) {
					newHtmlData += ('<span style="margin-left:' + spaceBOL + 'em" />');
				}

				isBOL = false;
			}

			// ペアによる処理

			// letter space の情報を取得
			// 優先順位は ('a', 'b') , ( ('a', '*') + ('*', 'b') ) の順で適用される
			var p1 = pairData[targetChar + nextChar];
			var p2 = pairData[targetChar + WILD_CARD];
			var p3 = pairData[WILD_CARD + nextChar];
			if (p1) {
				space += p1;
			} else {
				if (p2) { space += p2; }
				if (p3) { space += p3; }
			}

			if (space === 0) {
				newHtmlData += targetChar;
			} else {
				newHtmlData += ('<span style="letter-spacing:' + space + 'em">' + targetChar + '</span>');
			}
		}

		return newHtmlData;
	};


	/*
	 * カーニングペアの定義
	 * 単位はem。 -0.5(em) でボックス0.5個分詰まる。
	 * "*く" と定義した場合、"あく"、"いく"、"うく"、というように、全ての"○く"の組み合わせにカーニングが設定される。
	 * "あく" と定義をした場合、 "あく"という文字のペアのみにカーニングが設定される。
	 * ワイルドカードペアと直接指定のペアが衝突する場合、直接指定のペアが優先される。
	 */
	var PAIR_DATA = new Object;

	/*
	 * デフォルトのカーニング情報を格納した定数。
	 * ユーザーが任意のカーニング情報を適用しない場合は、この情報を基準にカーニングが設定される。
	 */

	$.fn.karning.setPair = function(fontFamily, str, value) {
		PAIR_DATA[fontFamily] = PAIR_DATA[fontFamily] || new Object;
		PAIR_DATA[fontFamily][str] = value;
	}

}(jQuery);