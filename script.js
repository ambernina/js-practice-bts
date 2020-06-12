$(document).ready(function() {
	const startBtn = document.querySelector("#startBtn");
	const startContainer = document.querySelector("#startContainer");
	const results = document.querySelector("#resultGif");
	const end = document.querySelector("#end");
	const didnt = document.querySelector("#didnt");

	startBtn.addEventListener("click", function() {
		var name = prompt("What is your name?");
		console.log(name);

		function meet() {
			alert("Nice to meet you " + name + "!");
			startContainer.style.display = "none";
		}

		if (!name) {
			alert("Please enter a name!");
		} else {
			meet();
			var age = prompt("How old are you?");
			console.log(age);

			function brain() {
				if (age >= 25 && age <= 27) {
					alert("Congratulations! You have a fully developed brain!");
				} else if (age >= 21 && age <= 24) {
					alert(
						"An adult! But you're not 25 yet... you've got some maturing to do..."
					);
				} else if (age >= 28) {
					alert("A Noona! Hey, me too!");
				} else if (age < 21) {
					alert("Awww! A little one, how cute!")
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
					if (
						bias === "rm" ||
						bias === "namjoon" ||
						bias === "rap monster" ||
						bias === "joon" ||
						bias === "joonie" ||
						bias === "kim namjoon"
					) {
						alert("Hey! " + bias + " is my bias too!");
						var img = document.createElement("img");
						img.src = "assets/namjoon.gif";
						results.appendChild(img);
					} else if (
						bias === "jin" ||
						bias === "seokjin" ||
						bias === "kim seokjin"
					) {
						alert("Worldwide Handsome in the HOUSE!");
						var img = document.createElement("img");
						img.src = "assets/jin.gif";
						results.appendChild(img);
					} else if (
						bias === "yoongi" ||
						bias === "yunki" ||
						bias === "suga" ||
						bias === "agust d"
					) {
						alert("Ah! So Tongue Technology is your thing?");
						var img = document.createElement("img");
						img.src = "assets/yoongi.gif";
						results.appendChild(img);
					} else if (
						bias === "jhope" ||
						bias === "hobi" ||
						bias === "j-hope" ||
						bias === "hoseok" ||
						bias === "jung hoseok"
					) {
						alert("SUNSHINE INCOMING!!!");
						var img = document.createElement("img");
						img.src = "assets/hobi.gif";
						results.appendChild(img);
					} else if (
						bias === "jimin" ||
						bias === "park jimin" ||
						bias === "chimchim"
					) {
						alert(
							"Awwww our little Mochi is your bias?! (Don't tell anyone, but he's my wrecker :D )"
						);
						var img = document.createElement("img");
						img.src = "assets/jimin.gif";
						results.appendChild(img);
					} else if (
						bias === "taehyung" ||
						bias === "tae" ||
						bias === "v" ||
						bias === "kim taehyung" ||
						bias === "taetae"
					) {
						alert(
							"UGH He's so pretty and so adorable and all the things, you have good taste!"
						);
						var img = document.createElement("img");
						img.src = "assets/taehyung.gif";
						results.appendChild(img);
					} else if (
						bias === "jungkook" ||
						bias === "jk" ||
						bias === "kookie" ||
						bias === "jeon jungkook"
					) {
						alert("Golden Maknae in the HOUSE!!!");
						var img = document.createElement("img");
						img.src = "assets/jk.gif";
						results.appendChild(img);
					} else if (bias === "none" || !bias) {
						alert("No bias? That's okay! Here's some OT7 for you");
						var img = document.createElement("img");
						img.src = "assets/ot7.gif";
						results.appendChild(img);
					}
				}

				members();

				var h1 = document.createElement("h1");
				h1.textContent =
					"You made it through all the questions! Congratulations!";
				end.appendChild(h1);

				var h3 = document.createElement("h3");
				h3.textContent = "As a present, here's a gif of your bias";
				end.appendChild(h3);

				var p = document.createElement("p");
				p.textContent =
					"Didn't get a gif? If you typed in something that didn't make sense that can happen... if you think you deserve a gif, refresh the page and try typing your bias' name a little more...  conventionally?";
				didnt.appendChild(p);
			}
		}
	});
});
