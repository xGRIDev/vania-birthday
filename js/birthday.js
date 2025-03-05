window.addEventListener("load", () => {
  Swal.fire({
    title: "Coba Tap/Click button Background Music nya dibawah ini Sayank",
    showClass: {
      popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
    },
    hideClass: {
      popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
    },
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});
