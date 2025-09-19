function res() {
      let t1 = document.getElementById("input1").value;
      let t2 = document.getElementById("input2").value;

      let [h1, m1, s1] = t1.split(":").map(Number);
      let [h2, m2, s2] = t2.split(":").map(Number);

      let total1 = h1 * 3600 + m1 * 60 + s1;
      let total2 = h2 * 3600 + m2 * 60 + s2;

      let message = "";
      if (total1 < total2) {
        message = "le premier instant vient avant le deuxieme.";
      } else if (total1 > total2) {
        message = "le deuxieme instant vient avant le premier.";
      } else {
        message = "Il s agit du meme instant.";
      }

      document.getElementById("rest").innerText = message;
    }