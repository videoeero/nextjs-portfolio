export default function checkUrl(url, pathname) {
  if (!(pathname == '/' && (url == '#contact' || url == '#whoami'))) {
    const hash = url.split('#')[1];

    setTimeout(function() {
      const anchor = document.getElementsByName(hash);
      const header = document.getElementsByTagName('header');

      const offSet = anchor[0].offsetTop + header[0].offsetHeight - 30;

      window.scrollTo(0, offSet);
    }, 600);
  }
}
