<?php
if ($_FILES['SelectedFile']){
	$tmp = $_FILES['SelectedFile']['tmp_name'];
	$file = preg_replace("/[\s\-_~,;:\[\]\(\)]/", '',strtolower($_FILES['SelectedFile']['name']));
	$try = move_uploaded_file($tmp, "/home/content/30/4465930/html/upload/files/".$file);
	if($try)
		die();
}
?>
<!DOCTYPE html>
<html>
<head>
<title>file upload test</title>
<link rel="stylesheet" type="text/css" href="/css/header-footer.css" />
<link rel="stylesheet" type="text/css" href="/css/standardize.css" />
<link href="//fonts.googleapis.com/css?family=Open+Sans:400,300,400,600,800,inherit" rel="stylesheet" type="text/css">
<script type="text/javascript">
function upload(){
	var file=document.getElementById('file');
	if (file.files.length < 1)
		return;
	var data=new FormData();
	data.append("SelectedFile", file.files[0]);
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState == 4){
			document.getElementsByClassName('progressBox')[0].style.opacity = "0";
		}
	}
	request.upload.addEventListener('progress', function(e){
		var progress = document.getElementsByClassName('progress')[0];
		progress.innerHTML = Number(e.loaded/1048576).toFixed(2)+"MB/"+Number(e.total/1048576).toFixed(2)+"MB";
		var progressBar = document.getElementsByClassName('progressBar')[0];
		progressBar.style.width = (e.loaded/e.total)*100+"%";
		var fileName = document.getElementsByClassName('fileName')[0];
		fileName.innerHTML = file.files[0].name;
	})
	request.open('post', '/upload/test.php');
	request.send(data);
	document.getElementsByClassName('progressBox')[0].style.opacity = "1";
}
window.addEventListener('load', function(){
	document.getElementById('file').addEventListener('change', upload);
})
</script>
<style type="text/css">
* {
	position: relative;
	margin: 0; 
	padding: 0;
}
body{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 62px 0;
	line-height: 1.38;
	font-family: 'Open Sans';
}
#uploadBox{
	width: 400px;
	margin: 30px auto 0;
	text-align: center;
}
#syntheticButton {
	position: relative;
	overflow: hidden;
	color: #fff;
	border-radius: 5px;
	width: 144px;
	height: 46px;
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	line-height: 46px;
	background-color: #3d7dda;
	background-image: linear-gradient(rgba(255, 255, 255, 0.247059) 0%, rgba(0, 0, 0, 0) 50.476190476190474%, rgba(0, 0, 0, 0.2) 100%);
	margin: 0 auto 10px;
}
#syntheticButton input {
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	opacity: 0;
	height: 100%;
}
.progressBox{
	opacity: 0;
	width: 100%;
	border-radius: 5px;
	background-color: #eee;
	padding: 5px;
	transition: all 1s;

}
.progress{
	color: #fff;
	text-shadow: 0px 0px 5px black;
	height: 20px;
	line-height: 20px;
	margin-top: -21px;
	border: 1px solid #999;
	box-sizing: content-box;
}
.progressBar {
	width: 0;
	height: 20px;;
	background-color: #3d7dda;
	background-image: linear-gradient(rgba(255, 255, 255, 0.247059) 0%, rgba(0, 0, 0, 0) 50.476190476190474%, rgba(0, 0, 0, 0.2) 100%);
}
footer{
	position: absolute;
	bottom:-62px;
	width: 100%;
}
</style>
</head>
<body>
	<nav id="persistant">
		<ul>
			<li><a href="/products">PRODUCTS</a></li>
			<li><a href="/process">PROCESS</a></li>
			<li id="homeLink"><h1><a href="/">MPG MEDIA</a></h1></li>
			<li><a href="/results">RESULTS</a></li>
			<li><a href="/contact">CONTACT</a></li>
		</ul>
	</nav>
	<div id="uploadBox">
		<div id="syntheticButton">
			Select File
			<input id="file" type="file" name="file" />
		</div>
		<div class="progressBox">
			<p class="fileName">&nbsp;</p>
			<div class="progressBar"></div>
			<p class="progress"></p>
		</div>
	</div>
	<footer>
		<p><span>MPG Media Services</span><span>451 Baxter Avenue, Suite 200</span><span>Louisville, KY 40204</span><span>502.589.0042</span></p>
		<p><span>© Copyright MPG Media Services, 2014. All Rights Reserved.</span> Created by <img src="/images/OTTweb_white.png" alt="Ott Communications"/></p>
	</footer>
</body>
</html>