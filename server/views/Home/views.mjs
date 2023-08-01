//Import views
import * as home from "/home/views/home.js";
import * as err404 from "/home/views/404.js";
//routes
const routes = [
  {
    path: "/",
    view: home,
  },
];

function findRoute(dom) {
    let route = false;
  routes.forEach((e, i) => {
    if (location.pathname == e.path) {
        route = true;
      document.title = e.view.doc.title;
      dom.innerHTML = e.view.doc.html;
      const style = document.createElement("style")
      style.innerHTML = e.view.doc.css;
      document.head.appendChild(style)
    }
  });
  if(!route){
    document.title = err404.doc.title;
    dom.innerHTML = err404.doc.html;
    const style = document.createElement("style")
    style.innerHTML = err404.doc.css;
    document.head.appendChild(style)
  }
}
