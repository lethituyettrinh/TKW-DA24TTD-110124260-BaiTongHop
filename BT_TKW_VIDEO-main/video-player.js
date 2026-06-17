function chayVideoTrongTrang(nutVideo) {
  var maVideo = nutVideo.getAttribute("data-video-id");
  var tieuDe = nutVideo.getAttribute("data-title") || "Video YouTube";
  var khungVideo = nutVideo.parentElement;

  var diaChiGoc = window.location.origin;
  var diaChiTrang = window.location.href.split("#")[0];

  if (diaChiGoc === "null" || window.location.protocol === "file:") {
    diaChiGoc = "https://tuyet-trinh.local";
    diaChiTrang = diaChiGoc + "/" + window.location.pathname.split("/").pop();
  }

  var diaChiNhung = "https://www.youtube.com/embed/" + maVideo +
    "?autoplay=1&rel=0&playsinline=1&enablejsapi=1&origin=" + encodeURIComponent(diaChiGoc) +
    "&widget_referrer=" + encodeURIComponent(diaChiTrang);

  khungVideo.innerHTML =
    '<iframe src="' + diaChiNhung + '" ' +
    'title="' + tieuDe + '" ' +
    'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
    'referrerpolicy="strict-origin-when-cross-origin" ' +
    'allowfullscreen></iframe>';
}
