$(document).ready(function() {
	const startBtn = document.querySelector("#startBtn");

	startBtn.addEventListener("click", function() {
		startBtn.style.display = "none";

		var name = prompt("What is your name?");
		console.log(name);

		function meet() {
			alert("Nice to meet you " + name + "!");
		}

		if (!name) {
			alert("Please enter a name!");
			var name = prompt("What is your name?");
		} else {
			meet();
			var age = prompt("How old are you?");
			console.log(age);

			function brain() {
				if (age >= 25) {
					alert("Congratulations! You have a fully developed brain!");
				} else {
					alert("You've got some maturing to do...");
				}
			}

			brain();

			var bts = prompt("Do you know BTS?");
			console.log(bts);

			bts = bts.toLowerCase();

			function educate() {
				if (bts === "yes") {
					alert("Oh good! You can be my friend then :)");
					return true;
				} else {
					window.open("https://youtu.be/Y_B-keu9owQ", "_blank");
					return false;
				}
			}

			if (educate()) {
				var bias = prompt("So you know BTS! Who is your bias?");
				console.log(bias);

				bias = bias.toLowerCase();

				function members() {
					if (bias === "rm" || bias === "namjoon" || bias === "rap monster") {
						alert("Hey! " + bias + " is my bias too!");
						var img = document.createElement("img");
						img.src = "assets/namjoon.gif";
						document.body.appendChild(img);
					} else if (bias === "jin") {
						alert("Worldwide Handsome in the HOUSE!");
						var img = document.createElement("img");
						img.src = "assets/jin.gif";
						document.body.appendChild(img);
					} else if (bias === "yoongi" || bias === "yunki" || bias === "suga") {
						alert("Ah! So Tongue Technology is your thing?");
						var img = document.createElement("img");
						img.src = "assets/yoongi.gif";
						document.body.appendChild(img);
					} else if (
						bias === "jhope" ||
						bias === "hobi" ||
						bias === "j-hope" ||
						bias === "hoseok"
					) {
						alert("SUNSHINE INCOMING!!!");
						var img = document.createElement("img");
						img.src = "assets/hobi.gif";
						document.body.appendChild(img);
					} else if (bias === "jimin") {
						alert(
							"Awwww our little Mochi is your bias?! (Don't tell anyone, but he's my wrecker :D )"
						);
						var img = document.createElement("img");
						img.src = "assets/jimin.gif";
						document.body.appendChild(img);
					} else if (bias === "taehyung" || bias === "tae" || bias === "v") {
						alert(
							"UGH He's so pretty and so adorable and all the things, you have good taste!"
						);
						var img = document.createElement("img");
						img.src = "assets/taehyung.gif";
						document.body.appendChild(img);
					} else if (bias === "jungkook" || bias === "jk") {
						alert("Golden Maknae in the HOUSE!!!");
						var img = document.createElement("img");
						img.src = "assets/jk.gif";
						document.body.appendChild(img);
					}
				}

				members();

				var h1 = document.createElement("h1");
				h1.textContent =
					"You made it through all the questions! Congratulations!";
				document.body.appendChild(h1);

				var h2 = document.createElement("h2");
				h2.textContent = "As a present, here's a gif of your bias";
				document.body.appendChild(h2);

				var p = document.createElement("p");
				p.textContent =
					"Didn't get a gif of your bias? If you typed in something that didn't make sense that will happen... if you think you deserve a gif, refresh the page and try typing in your bias name a little more normally?";
				document.body.appendChild(p);
			}
		}
	});
});
