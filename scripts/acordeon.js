var elementOld = null;
var openClass

function toggleAccordion(element) {
  content = element.querySelector(".accordion__tab__content");
  check = element.querySelector(".icon_check")

  if (elementOld != null) {
    elementOld.classList.remove(openClass);
    contentOld = elementOld.querySelector(".accordion__tab__content");
    contentOld.style.maxHeight = "0px";
    check.style.transform = "rotate(-180deg)"
  }

  if (elementOld !== element) {
    element.classList.add(openClass);
    content.style.maxHeight = content.scrollHeight + "px";
    check.style.transform = "rotate(0)"
    elementOld = element;
  } else {
    elementOld = null;
    check.style.transform = "rotate(-180deg)"
  }
}