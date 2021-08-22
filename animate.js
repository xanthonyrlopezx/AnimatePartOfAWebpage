<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root" style="position: absolute; height: 1000px">Animate me!</div>

    <script type="application/javascript">
      const rectangle = document.querySelector("#root");

      let leftPosition = 0;

      function animateDiv() {
        console.log(`Start animateDiv ${leftPosition}`);

        leftPosition += 1;

        rectangle.style.left = `${leftPosition}px`;

        if (leftPosition < 200) {
          console.log(`Before animateDiv`);
          animateDiv();
          console.log(`After animateDiv`);
        }

        console.log(`End animateDiv`);
      }

      requestAnimationFrame(animateDiv);
    </script>
  </body>
</html>
