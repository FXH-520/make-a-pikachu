! function() {
	var duration = 50
	$('.actions').on('click', 'button', function(e) {
		let $button = $(e.currentTarget)
		let speed = $button.attr('data-speed')
		$button.addClass('active')
			.siblings('.active').removeClass('active')
		switch(speed) {
			case 'slow':
				duration = 100
				break
			case 'normal':
				duration = 50
				break
			case 'fast':
				duration = 10
				break
		}
	})

	function writeCode(prefix, code, fn) {
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		let id
		id = setTimeout(function run() {
			n += 1
			container.innerHTML = code.substring(0, n)
			styleTag.innerHTML = code.substring(0, n)
			container.scrollTop = container.scrollHeight
			if (n < code.length) {
				id = setTimeout(run, duration)
			} else {
				fn && fn.call()
			}
		}, duration)
	}
	let code =
		`
/*
* 来，首先准备皮卡丘的皮
*/	
.preview {
  height: 100%;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffdc2b;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 165px;
}
/*
* 接下来，画皮卡丘的鼻子
*/
.nose {
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px;
  border-style: solid;
  border-color: black transparent transparent;
  border-width: 12px;
  border-radius: 11px;
}
/*
* 然后，画皮卡丘的眼睛
*/
.eye {
  width: 49px;
  height: 49px;
  background: #2e2e2e;
  border: 2px solid #000000;
  border-radius: 50%;
  position: absolute;
}
/*
* 接下来，画皮卡丘眼睛里面的眼珠子
*/
.eye::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 6px;
  top: 2px;
}
/*
* 哈哈，左眼在左边（废话）
*/
.eye.left {
  right: 50%;
  margin-right: 90px;
}
/*
* 哈哈，右眼在右边（废话）
*/
.eye.right {
  left: 50%;
  margin-left: 90px;
}
/*
* 然后，画皮卡丘的小脸蛋
*/
.face {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: #ff251a;
  border: 2px solid #000000;
  position: absolute;
}
/*
* 将脸蛋放到正确的位置
*/
.face.left {
  right: 50%;
  top: 85px;
  margin-right: 116px;
}
.face.right {
  left: 50%;
  top: 85px;
  margin-left: 116px;
}
/*
* 画皮卡丘的上嘴唇
*/
.upperLip {
  width: 64px;
  height: 18px;
  position: absolute;
  background: #ffdc2b;
  top: 52px;
  border: 3px solid black;
}
.upperLip.left {
  border-top: none;
  border-right: none;
  border-bottom-left-radius: 30px 20px;
  transform: rotate(-20deg);
  right: 50%;
}	
.upperLip.right {
  border-top: none;
  border-left: none;
  border-bottom-right-radius: 30px 20px;
  transform: rotate(20deg);
  left: 50%;
}
/*
* 画皮卡丘的下嘴唇
*/
.lowerLip-wrapper {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -68px;
  overflow: hidden;
  height: 107px;
  width: 300px;
}
.lowerLip {
  width: 136px;
  height: 1000px;
  border-radius: 100px/500px;
  border: 2px solid black;
  background: #990513;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}	
/*
* 画皮卡丘的小舌头
*/
.lowerLip::after {
  content: '';
  position: absolute;
  bottom: -20px;
  margin-left: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #fc4a62;
}`
	writeCode('', code)
}.call()
